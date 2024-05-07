import nodemailer from "nodemailer";
import {
    MAILER_CLIENT_ID,
    MAILER_CLIENT_SECRET,
    MAILER_GMAIL_ADDRESS,
    MAILER_REFRESH_TOKEN
} from "../config/index.js";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: MAILER_GMAIL_ADDRESS,
        clientId: MAILER_CLIENT_ID,
        clientSecret: MAILER_CLIENT_SECRET,
        refreshToken: MAILER_REFRESH_TOKEN
    }
});

export default transporter;
