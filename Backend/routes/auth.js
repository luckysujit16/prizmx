const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { check, validationResult } = require('express-validator');
const nodemailer = require("nodemailer");
const pool = require('../db/connection');
const auth = require('../middleware/auth');
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const sendVerificationEmail = async (email, verificationCode) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Email Verification",
        text: `Your verification code is: ${verificationCode}`,
    };
    try {
        await transporter.sendMail(mailOptions);
        return true;
    } catch (err) {
        return false;
    }
};

// @route    POST api/auth/signup
// @desc     Register user
// @access   Public
router.post(
    '/signup',
    [
        check('name', 'Name is required').notEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),
        check('referred_by', 'Referral is required').notEmpty(),
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
            const [userRefRows] = await pool.query('SELECT * FROM pzmx_users WHERE referred_by = ?', [referred_by]);
            if (userRefRows.length === 0) {
                return res.status(400).json({ errors: [{ msg: 'Referral does not exists' }] });
            }

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const timestamp = Date.now().toString(36);
            const randomString = Math.random().toString(36).substring(2, 7);
            const referralID = `PZMX_${timestamp}-${randomString}`;
            const otp = Math.floor(100000 + Math.random() * 900000);

            await pool.query(
                'INSERT INTO pzmx_users (name, email, password, referral_id, referred_by, otp) VALUES (?, ?, ?, ?, ?, ?)',
                [name, email, hashedPassword, referralID, referred_by, otp]
            );
            sendVerificationEmail(email, otp);
            res.json({ status: "OK" });
        } catch (err) {
            console.error(err.message);
            return res.status(500).json({ errors: [{ msg: err.message }] });
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
            if(!user.is_active){
                return res.status(400).json({ errors: [{ msg: 'Your account is deactivated please contact support!' }] });
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
        check('otp', 'Please enter a valid Otp').isNumeric()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { otp } = req.body;

        try {
            const [userRow] = await pool.query('SELECT * FROM pzmx_users WHERE otp = ?', [otp]);
            if (userRow.length === 0) {
                return res.status(400).json({ errors: [{ msg: 'Invalid Otp' }] });
            }

            const user = userRow[0];

            await pool.query('UPDATE pzmx_users SET otp = null, is_verified = 1 WHERE otp = ?', [otp]);

            const payload = {
                user: {
                    user_id: user.id,
                    email: user.email
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
            return res.status(500).json({ errors: [{ msg: err.message }] });
        }
    }
);


module.exports = router;
