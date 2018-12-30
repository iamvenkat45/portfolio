const express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next)=> {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Origin, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  next();
});

app.post('/api/sendEmail', (req, res, next)=> {
  const formData = req.body;
  console.log(formData);
  res.status(201).send({
    messsage: 'Mail sent successfully'
  });
});

app.use("/api/socialLinks", (req, res, next) => {
  console.log("Hello from express");
  const socialLinks = [
    {
      id: 100,
      name: "LinkedIn",
      path: "https://www.linkedin.com/in/venkatsandeep-b-8a4178a6/"
    },
    {
      id: 101,
      name: "Twitter",
      path: "https://twitter.com/iamvenkat45"
    }
  ];
  res.status(200).json({
    socialLinks: socialLinks
  });
});

module.exports = app;
