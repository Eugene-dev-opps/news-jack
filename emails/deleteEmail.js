[200~const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: 'your-email-host',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'your-email-username',
    pass: 'your-email-password',
  },
});

// setup email data with unicode symbols
let mailOptions = {
  from: '"Your Name" <your-email-address>',
  to: 'recipient-email-address',
  subject: 'Email to be deleted',
  text: 'This email will be deleted',
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);

    // Delete the email after sending it
    transporter.close();
  }
});

