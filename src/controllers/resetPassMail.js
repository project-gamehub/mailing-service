import { customError } from "../errors/errorUtils/index.js"
import sendEmail from "../utils/sendEmail.js";

const resetPassMail = async (req, res) => {

    // emailOptions format = {from, to, subject, text, html};
    const to = req?.body?.email;
    const otp = req?.body?.otp;

    if (!to || !otp) {
        throw new customError(400, "Email and OTP");
    }

    const subject = "Reset OTP - GameHub"
    const text = `OTP to reset GameHub's password is ${otp}. This will expire in 60 minutes.`

    const emailOptions = {
        to, subject, text
    }

    sendEmail(emailOptions);

    return res.status(200).json({
        message: "Mail sent Sucessfully",
        success: true
    });
}

export default resetPassMail;