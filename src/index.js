import express from "express";
import morgan from "morgan";
import cors from "cors";
import apiRouter from "./api/router.js";
// Vars
const port = process.env.PORT || 4000;

// Initialize Server
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(apiRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
