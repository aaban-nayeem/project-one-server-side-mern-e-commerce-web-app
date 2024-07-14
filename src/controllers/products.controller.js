import { Products } from "../models/products.models.js";

const createProducts = async (req, res, next) => {
  const products = await Products.create(req.body);
  res.status(201).json({
    success: true,
    products,
  });
};

const getAllProducts = (req, res) => {
  res.status(200).json({ message: "All products" });
};

export { getAllProducts, createProducts };
