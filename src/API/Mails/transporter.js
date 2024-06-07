import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";
import "dotenv/config";

export const transporter = nodemailer.createTransport(
  smtpTransport({
    host: "busisness122.web-hosting.com",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  })
);
