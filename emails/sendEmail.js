const nodemailer = require('nodemailer');

//send email
// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'motieugene@gmail.com', // replace with your email
        pass: 'kingwendu1234' // replace with your password
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: 'motieugene@gmail.com', // sender address
    to: 'motieugene0@gmail.com', // list of receivers
    subject: 'Hello from Node.js!', // Subject line
    text: 'Hello world!', // plain text body
    html: '<b>Hello world!</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
});

