import express from "express";

import { router } from "./routes";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Hello World" });
});

app.use(router);

app.listen(3333, () => {
    console.log("Server is running on port 3000");
});
