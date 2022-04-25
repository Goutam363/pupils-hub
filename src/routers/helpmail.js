const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NODEMAILER_USERNAME,
        pass: process.env.NODEMAILER_PASS
    }
});

const hSendMail = (name, email, subject, message) => {
    const mailOptions = {
        from: `${name} <${email}>`,
        to: 'pupilshub363@gmail.com',
        subject: `${subject}`,
        html: `<h4>${message}</h4><br><br><p> THANK YOU,</p><p>${name} < ${email} > </p>`

    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log('Email sent: ' + info.response)
        }
    })
}

module.exports = hSendMail;
