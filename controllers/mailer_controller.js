const nodemailer = require("nodemailer")

// POST REQUEST
exports.standardMail = (req, res) => {
  console.log(req.body)
  const estimate = req.body


  const transporter = nodemailer.createTransport({
    service: 'yahoo',
    auth: {
      user: 'trizmocalifornia@yahoo.com',
      pass: "Elijah123!"
    }

  });

  const mailOptions = {
    from: 'trizmocalifornia@yahoo.com',
    to: 'tristan.e.perera@gmail.com',
    subject: 'Pool Logic - Estimate',
    text: "Client Name: " + estimate.clientName
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}