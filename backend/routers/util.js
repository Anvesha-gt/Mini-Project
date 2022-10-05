var nodemailer = require("nodemailer");
const express = require("express");
const router = express.Router();

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  port: 465, // true for 465, false for other ports
  host: "smtp.gmail.com",
  auth: {
    user: "lettersnews37@gmail.com",
    pass: "fxcjdvmpmayljzfz",
  },
  secure: true,
});

router.post('/sendmail', (req, res) => {
  const formdata = req.body;
  console.log(formdata);
  transporter.sendMail(formdata, function (err, info) {
    if (err) {
      console.log(err)
      res.status(500).json(err);
    }
    else{
      console.log(info)
      res.status(200).json({'status' : 'success'})
    }
  });
})

module.exports = router;