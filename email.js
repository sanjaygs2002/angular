const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

// Configure the email transport using the default SMTP transport and a GMail account.
// For other email providers, update the host, port, and auth details.
const transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 587, // SMTP port
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'sanjudddd400@gmail.com',
    pass: 'mhyk twkc iisc tupi'
  }

});

app.post('/send', (req, res) => {
  const { name, email, message } = req.body;
  const mailOptions = {
    from: email,
    to: 'sanjudddd400@gmail.com', // replace with your email
    subject: 'Contact Form Message',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Message sent: ' + info.response);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
