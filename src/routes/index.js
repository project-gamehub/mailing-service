import express from "express";
import { asyncErrorHandler } from "../errors/errorUtils/index.js";
import sendMail from "../controllers/sendMail.js";

const router = express.Router();

router.get("/ping", (req, res) => {
    res.send({ pong: "Hello World!" });
});

router.post("/send-mail", asyncErrorHandler(sendMail));

export default router;
