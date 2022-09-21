const Product = require("../models/productModel");

const createProduct = async (req, res ) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json({ status: "success", data: savedProduct });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: "error", error: "Something went wrong" });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find({}).sort({ date: -1 });
    res.status(200).json({ status: "success", data: allProducts });
  } catch (error) {
    res.status(400).json({ status: "error", error: "Something went wrong" });
  }
};

module.exports = { getAllProducts, createProduct };
