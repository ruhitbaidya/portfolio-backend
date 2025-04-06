import express from "express";
import cors from "cors";
import { rootRouter } from "./router/routes.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();

// CORS configuration
const corsOptions = {
  origin: process.env.ALLOWED_ORIGINS?.split(",") || "*",
  credentials: true,
  optionsSuccessStatus: 200,
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Email transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER || "ruhitbaidya01@gmail.com",
    pass: process.env.emailpasswor,
  },
});

// Verify transporter connection
transporter.verify((error) => {
  if (error) {
    console.error("❌ Email transporter error:", error);
  } else {
    console.log("✅ Email transporter is ready");
  }
});

// Routes
app.use("/", rootRouter);

app.get("/", (req, res) => {
  res.json({
    status: 200,
    message: "Hello World! this project is running",
    environment: process.env.NODE_ENV || "development",
  });
});

app.post("/sendMessage", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required",
      });
    }

    const mailOptions = {
      from: `"${name}" <${
        process.env.EMAIL_USER || "ruhitbaidya01@gmail.com"
      }>`,
      to: process.env.EMAIL_RECEIVER || "ruhitbaidya01@gmail.com",
      replyTo: email,
      subject: "New Website Contact Request",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #153643;">New Contact Request</h2>
          <p><strong>From:</strong> ${name} (${email})</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: "Message sent successfully",
      messageId: info.messageId,
    });
  } catch (err) {
    console.error("Email send error:", err);
    res.status(500).json({
      success: false,
      message: "Failed to send message",
      error: process.env.NODE_ENV === "development" ? err.message : undefined,
    });
  }
});

export default app;
