const express = require('express');
const router = express.Router();
const speakeasy = require('speakeasy');
const { check, validationResult } = require('express-validator');
const qrcode = require('qrcode');

const auth = require('../middleware/auth');
const pool = require('../db/connection');


router.post('/generate-secret', auth,
    async (req, res) => {
        try {
            const secret = speakeasy.generateSecret();
            await pool.query('UPDATE pzmx_users SET gauth_secret = ? WHERE id = ?', [secret.base32, req.user.user_id]);
            const otpauth_url = secret.otpauth_url;

            // Generate a QR code from the otpauth URL
            const qrCodeDataUrl = await qrcode.toDataURL(otpauth_url);
            res.json({
                secret: secret.base32,
                otpauth_url: qrCodeDataUrl
            });
            // res.json({auth:secret});
        } catch (error) {
            console.log(error);
            return res.status(500).json({ errors: [{ msg: 'Server Error' }] });
        }
    }
);

router.post('/validate-token',
    [
        check('token', 'Invalid auth code').isNumeric()
    ], async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { token, secret } = req.body;

        try {
            const valid = speakeasy.totp.verify({
                secret: secret,
                encoding: 'base32',
                token: token,
                window: 1
            });

            if (!valid) {
                return res.status(400).json({ errors: [{ msg: 'Invalid auth code' }] });
            }

            const [userRow] = await pool.query('SELECT * FROM pzmx_users WHERE gauth_secret = ?', [secret]);

            if (userRow.length === 0) {
                return res.status(400).json({ errors: [{ msg: 'Invalid auth' }] });
            }

            await pool.query('UPDATE pzmx_users SET is_gauth = ? WHERE id = ?', [1, userRow[0].id]);

            return res.status(200).send('Token is valid');
        } catch (error) {
            console.error(error.message); // Log the error for debugging purposes
            return res.status(500).json({ errors: [{ msg: 'Server Error' }] });
        }
    }
);

module.exports = router;