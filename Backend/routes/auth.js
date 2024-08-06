const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { check, validationResult } = require('express-validator');
const nodemailer = require("nodemailer");
const pool = require('../db/connection');
const auth = require('../middleware/auth');
const crypto = require('crypto');

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const sendVerificationEmail = async (email, subject, textMessage, htmlMessage='') => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: subject,
        text: textMessage,
        html: htmlMessage,
    };
    try {
        await transporter.sendMail(mailOptions);
        return true;
    } catch (err) {
        return false;
    }
};

// @route    GET api/auth
// @desc     Get User
// @access   Private
router.get('/', auth, async (req, res) => {
    try {
        const [userRows] = await pool.query('SELECT name, email, referral_id, created_on FROM pzmx_users WHERE id = ?', [req.user.user_id]);
        if (userRows.length === 0) {
            return res.status(400).json({ errors: [{ msg: 'User not found' }] });
        }
        res.json(userRows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route    POST api/auth/signup
// @desc     Register user
// @access   Public
router.post(
    '/signup',
    [
        check('name', 'Name is required').notEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),
        check('referred_by', 'Referral is required').notEmpty()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, password, referred_by } = req.body;

        try {
            const [userRows] = await pool.query('SELECT * FROM pzmx_users WHERE email = ?', [email]);
            if (userRows.length > 0) {
                return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
            }

            const [referrerRows] = await pool.query('SELECT * FROM pzmx_users WHERE referral_id = ?', [referred_by]);
            if (referrerRows.length === 0) {
                return res.status(400).json({ errors: [{ msg: 'Referral does not exist' }] });
            }

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const timestamp = Date.now().toString(36);
            const randomString = Math.random().toString(36).substring(2, 7);
            const referralID = `PZMX_${timestamp}-${randomString}`;
            const token = crypto.randomBytes(32).toString('hex');
            

            await pool.query(
                'INSERT INTO pzmx_users (name, email, password, referral_id, referred_by, email_verification_token) VALUES (?, ?, ?, ?, ?, ?)',
                [name, email, hashedPassword, referralID, referred_by, token]
            );

            const message = `Your verification link is: <a href="http://localhost:5000?verification_token=${token}">Click Here To verify</a>`;
            const subject = 'Email Verification';

            const emailSent = await sendVerificationEmail(email, subject, '', message);
            if (!emailSent) {
                return res.status(500).json({ errors: [{ msg: 'Failed to send verification email' }] });
            }

            res.json({ status: 'OK' });
        } catch (err) {
            console.error(err.message);
            return res.status(500).json({ errors: [{ msg: 'Server error' }] });
        }
    }
);

// @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public
router.post(
    '/',
    [
        check('email', 'Please enter a valid email').isEmail(),
        check('password', 'Password is required').notEmpty()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        try {
            // Query to find the user by email
            const [userRows] = await pool.query('SELECT * FROM pzmx_users WHERE email = ?', [email]);
            if (userRows.length === 0) {
                return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
            }
            const user = userRows[0];

            // Compare the password with the hashed password in the database
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ errors: [{ msg: 'Invalid Password' }] });
            }

            // Check if the account is active
            if (!user.is_active) {
                return res.status(400).json({ errors: [{ msg: 'Your account is deactivated, please contact support!' }] });
            }

            // Check if the email is verified
            if (!user.is_verified) {
                const token = crypto.randomBytes(32).toString('hex');
                const message = `Your verification link is: <a href="http://localhost:5000?verification_token=${token}">Click Here To verify</a>`;
                const subject = 'Email Verification';

                const emailSent = await sendVerificationEmail(email, subject, '', message);
                if (!emailSent) {
                    return res.status(500).json({ errors: [{ msg: 'Failed to send verification email' }] });
                }

                // Save OTP to the database for later verification (you might need a new column for this in your users table)
                await pool.query('UPDATE pzmx_users SET email_verification_token = ? WHERE email = ?', [token, email]);

                return res.status(400).json({ errors: [{ msg: 'Please verify your email address!' }] });
            }

            // Create the JWT payload
            const payload = {
                user: {
                    user_id: user.id,
                    email: email
                }
            };

            // Sign the JWT token
            jwt.sign(
                payload,
                process.env.JWT_SECRET,
                { expiresIn: '2 days' },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                }
            );
        } catch (err) {
            console.error('Server Error:', err.message);
            return res.status(500).json({ errors: [{ msg: 'Server Error' }] });
        }
    }
);

// @route    POST api/auth/email-verification
// @desc     Verify User Email Address
// @access   Public
router.post(
    '/email-verification',
    [
        check('verification_token', 'Verification token is required').not().isEmpty()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { verification_token } = req.body;

        try {
            const [userRows] = await pool.query('SELECT * FROM pzmx_users WHERE email_verification_token = ?', [verification_token]);
            if (userRows.length === 0) {
                return res.status(400).json({ errors: [{ msg: 'Invalid Verification Link' }] });
            }

            const user = userRows[0];

            await pool.query('UPDATE pzmx_users SET email_verification_token = NULL, is_verified = 1 WHERE id = ?', [user.id]);

            return res.json({ result: "OK", message: "Email verified successfully" });
        } catch (err) {
            console.error(err.message);
            return res.status(500).json({ errors: [{ msg: 'Server Error' }] });
        }
    }
);


// @route    POST api/auth/forgot-password-send-email
// @desc     Forgot password send token email
// @access   Public
router.post(
    '/forgot-password-send-email',
    [
        check('email', 'Please enter a valid email').isEmail()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email } = req.body;

        try {
            const [userRow] = await pool.query('SELECT * FROM pzmx_users WHERE email = ?', [email]);

            if (userRow.length === 0) {
                return res.status(400).json({ errors: [{ msg: 'Email not found' }] });
            }

            const token = crypto.randomBytes(32).toString('hex');
            const resetLink = `https://prizmxchange.com/reset-password?token=${token}`;
            const textMessage = `You requested a password reset. Click the link to reset your password: ${resetLink}`;
            const htmlMessage = `
                <p>You requested a password reset. Click the link below to reset your password:</p>
                <a href="${resetLink}">Reset Password</a>
            `;
            const subject = 'Forgot Password';

            const emailSent = await sendVerificationEmail(email, subject, textMessage, htmlMessage);

            if (!emailSent) {
                return res.status(500).json({ errors: [{ msg: 'Failed to send email' }] });
            }

            await pool.query('UPDATE pzmx_users SET verification_token = ? WHERE email = ?', [token, email]);

            return res.status(200).json({ msg: 'Password reset email sent' });
        } catch (err) {
            return res.status(500).json({ errors: [{ msg: err.message }] });
        }
    }
);

// @route    POST api/auth/reset-password
// @desc     Verify token and reset password
// @access   Public
router.post(
    '/reset-password',
    [
        check('token', 'Token is required').notEmpty(),
        check('password', 'Password must be at least 6 characters long').isLength({ min: 6 })
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { token, password } = req.body;
        try {
            const [userRow] = await pool.query('SELECT * FROM pzmx_users WHERE verification_token = ?', [token]);

            if (userRow.length === 0) {
                return res.status(400).json({ errors: [{ msg: 'Invalid link' }] });
            }
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            await pool.query('UPDATE pzmx_users SET password = ?, verification_token = NULL WHERE verification_token = ?', [hashedPassword, token]);

            return res.status(200).json({ msg: 'Password has been reset successfully' });
        } catch (err) {
            return res.status(500).json({ errors: [{ msg: err.message }] });
        }
    }
);
module.exports = router;
