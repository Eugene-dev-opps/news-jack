 const admin = require("firebase-admin");
 admin.initializeApp();
 const nodemailer = require('nodemailer');

  const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    service: '"smtp.mailtrap.io"',
    auth: {
        uuser: "71b312d8f1a983", // generated by Mailtrap
        pass: "e7a8f2287183dd" // generated by Mailtrap
    }
});

exports.emailSender = functions.https.onRequest((req, res) => {
    const mailOptions = {
        from: 'from@example.com', //Adding sender's email
        to: req.query.dest, //Getting recipient's email by query string
        subject: 'Email Sent via Firebase', //Email subject
        html: '<b>Sending emails with Firebase is easy!</b>' //Email content in HTML
    };

    return transporter.sendMail(mailOptions, (err, info) => {
        if(err){
            return res.send(err.toString());
        }
        return res.send('Email sent successfully');
    });
});
