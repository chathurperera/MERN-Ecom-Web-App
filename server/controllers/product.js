const Product = require("../models/productModel");

const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.save(req.body);
    res.send(201).json({ status: "success", data: newProduct });
  } catch (error) {
    res.send(400).json({ status: "error", error: "Something went wrong" });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find({}).sort({ date: -1 });
    res.status(200).json({ status: "success", data: allProducts });
  } catch (error) {
    res.send(400).json({ status: "error", error: "Something went wrong" });
  }
};

module.exports = { getAllProducts, createProduct };
