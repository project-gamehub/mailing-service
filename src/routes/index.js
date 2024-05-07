import express from "express";
import { asyncErrorHandler } from "../errors/errorUtils/index.js";
import sendMail from "../controllers/sendMail.js";
import errorMiddleware from "../errors/errorMiddlewares/errorMiddleware.js"

const router = express.Router();

router.get("/ping", (req, res) => {
    res.send({ pong: "Hello World!" });
});

router.post("/send-mail", asyncErrorHandler(sendMail));


router.use(errorMiddleware);

export default router;
