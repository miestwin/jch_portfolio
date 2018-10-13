const nodemailer = require('nodemailer');
const express = require('express');
const router = express.Router();

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    sercure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

/**
 * GET contact page
 */
router.get('/', function (req, res, next) {
    res.render('contact',  { contact: true });
});

/**
 * Send email
 */
router.post('/', function (req, res, next) {
    const mailOptions = {
        from: `"${req.body.name}"<${req.body.email}>`,
        to: process.env.EMAIL_USER, // 'jakub.chelstowski12@wp.pl'
        subject: 'Wiadomość z portfolio',
        text: req.body.message
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.render('contact',  { contact: true, error: true });
        } else {
            res.render('contact',  { contact: true, success: true });
        }
    });
});

module.exports = router;