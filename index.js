const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const nodemailer = require("nodemailer");
app.use(
  cors({
    origin:  "https://ruhitbaidya.vercel.app",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ruhitbaidya01@gmail.com",
    pass: process.env.emailpasswor,
  },
});

app.post("/sendMessage", async (req, res) => {
  const datas = req.body;
  const info = await transporter.sendMail({
    from: `${datas.name} <ruhitbaidya01@gmail.com>`, // sender address
    to: "ruhitbaidya01@gmail.com", // list of receivers
    subject: "WebSite Request", // Subject line
    text: "Hello world?", // plain text body
    html: `
           <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; line-height: 1.6;">
    <div style="max-width: 600px; margin: 20px auto; padding: 20px; background-color: #ffffff; border: 1px solid #cccccc; border-radius: 8px;">
        <div style="background-color: #70bbd9; padding: 20px; text-align: center; color: #ffffff; border-top-left-radius: 8px; border-top-right-radius: 8px;">
            <h1 style="margin: 0; font-size: 28px;">${datas.name}</h1>
        </div>
        <div style="padding: 20px;">
            <h2 style="color: #153643; font-size: 24px;">${datas.email}</h2>
            <p style="color: #153643; font-size: 16px; margin-bottom: 20px;">${datas.message}</p>
        </div>
    </div>
</div>
        `, // html body
  });

  //   console.log("Message sent: %s", info.messageId);
  if (info.messageId) {
    res.send({ success: true, message: "Message Send Successfully" });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`start server port on ${process.env.PORT}`);
});
