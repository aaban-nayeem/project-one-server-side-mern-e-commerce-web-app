import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(morgan("combined"));

// ROUTER Import
import { router } from "./routes/products.route.js";

// route

app.use("/api/v1", router);

export { app };
