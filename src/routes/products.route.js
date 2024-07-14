import express from "express";
import { getAllProducts } from "../controllers/products.controller.js";

const router = express.Router();

router.route("/products").get(getAllProducts);

export { router };
