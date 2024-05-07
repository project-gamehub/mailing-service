import express from "express";
import { PORT } from "./config/index.js";
import router from "./routes/index.js";
import cors from "cors";

const app = express();

const initializeServer = () => {
    // TODO Configure this later
    app.use(cors());

    // TODO Add Limit on this
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    app.use("/", router);
};

const server = app.listen(PORT, async () => {
    initializeServer();
    console.log("Listening on port: ", PORT);
});

process.on("unhandledRejection", (err) => {
    console.error(`Unhandled rejection ${err.name} occurred`);
    console.error(err);
    server.close(() => {
        process.exit(1);
    });
});
