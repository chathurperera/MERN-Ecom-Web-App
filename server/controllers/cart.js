const Cart = require("../models/cartModel");

const createCart = async (req, res) => {
  try {
    const newCart = new Cart(req.body);
    const savedCart = await newCart.save();
    res.status(200).json({ status: "success", savedCart });
  } catch (error) {
    res.status(400).json({ Message: "Something went wrong" });
  }
};

module.exports = {
  createCart,
};
