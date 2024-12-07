import transporter from "./transporter.js";

// emailOptions format = {from, to, subject, text, html};
async function sendEmail(emailOptions) {
    try {
        await transporter.sendMail(emailOptions);
        console.log("OTP sent to: ", emailOptions?.to);

    } catch (error) {
        console.error("Error sending email:", error);
    }
}

export default sendEmail;
