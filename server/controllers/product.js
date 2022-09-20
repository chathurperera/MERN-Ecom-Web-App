const Product = require("../models/productModel");

const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.save(req.body);
    res.send(201).json({ status: "success", data: newProduct });
  } catch (error) {
    res.send(400).json({ status: "error", error: "Something went wrong" });
  }
};


module.exports = createProduct