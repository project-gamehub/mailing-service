import { customError } from "../errors/errorUtils/index.js"
import sendEmail from "../utils/sendEmail.js";

const sendMail = async (req, res) => {

    // emailOptions format = {from, to, subject, text, html};
    const to = req?.body?.email;
    const subject = req?.body?.subject;
    const text = req?.body?.text;
    const html = req?.body?.html;

    if (!to || !subject) {
        throw new customError(400, "Email and Subject is required")
    }

    const emailOptions = {
        to, subject, text, html
    }

    sendEmail(emailOptions);

    return res.status(200).json({
        message: "Mail sent Sucessfully",
        success: true
    });
}

export default sendMail