const Cart = require("../models/cartModel");

const createCart = async (req, res) => {
  try {
    res.status(200).json({ message: "success" });
  } catch (error) {
    res.status(400).json({ Message: "Something went wrong" });
  }
};

module.exports = {
  createCart,
};
