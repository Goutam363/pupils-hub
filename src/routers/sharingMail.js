const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NODEMAILER_USERNAME,
        pass: process.env.NODEMAILER_PASS
    }
});

const sharingsendMail = (name, email) => {

    var mailOptions = {
        from: 'Pupils\' Hub <pupilshub363@gmail.com>',
        to: `${email}`,
        subject: `NOTICE FOR ADVANCED PAYMENT`,
        html: `<div>
        <h2>Welcome To Pupils\' Hub</h2>
        </div>
        <div>
        <h2>Sharing Rooms</h2>
        <h4>Hello ${name},</h4>
        <p>
        Your application is under consideration by Pupils' Hub admin. Please pay the advance payment for the final allocation of hostel. 
        As per your application for Shared Room Rs. 5000 needs to be payed as rent for 2 months in advance. The rent needs to be paid within 48 hours failing which will cause the application to be rejected.
        </p>
        </div>
        <br>
        
        <p>For any further queries, you can contact us via:<br>
        Email: pupilshub363@gmail.com<br>
        Phone: 9876543210<br>
        Whatsapp: 9876543210
        </p>`
    }
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log('Email sent: ' + info.response)
        }
    })
}

module.exports = sharingsendMail;