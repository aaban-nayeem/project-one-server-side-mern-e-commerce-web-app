import express from "express";
import {
  createProducts,
  getAllProducts,
} from "../controllers/products.controller.js";

const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/product/new").get(createProducts);

export { router };
