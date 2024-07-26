const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { check, validationResult } = require('express-validator');
const nodemailer = require("nodemailer");
const pool = require('../../db/connection');
const auth = require('../../middleware/auth');
const KycController = require('./controllers/KycController');

const sumsubKycToken = process.env.SUMSUB_KYC_TOKEN;
const sumsubKycSecretKey = process.env.SUMSUB_KYC_SECRET_KEY;

const kycController = new KycController(pool, sumsubKycToken, sumsubKycSecretKey);

router.get('/',auth, (req, res) => kycController.index(req, res));



module.exports = router;
