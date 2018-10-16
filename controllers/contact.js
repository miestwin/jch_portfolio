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
    const output = `
        <p>Masz nową prośbę o kontakt</p>
        <h3>Szczegóły kontaktu</h3>
        <ul>
            <li>Imię i nazwisko:${req.body.name}</li>
            <li>Email:${req.body.email}</li>
        </ul>
        <h3>Wiadomość</h3>
        <p>${req.body.message}</p>
    `;

    const mailOptions = {
        from: `"Powiadomienie portfolio" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: 'Prośba o kontakt z portfolio',
        html: output
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.render('contact',  { contact: true, error: true });
        } else {
            console.log('Message sent: %s', info.messageId);
            res.render('contact',  { contact: true, success: true });
        }
    });
});

module.exports = router;