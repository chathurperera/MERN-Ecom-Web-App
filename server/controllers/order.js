const Order = require("../models/orderModel");

const createOrder = async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save();

    res.status(201).json({ message: "Order created", savedOrder });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const getUserOrders = async (req, res) => {
  try {
    const { id } = req.params;
    const orders = await Order.find({ userId: id }).lean().exec();
    console.log(orders);
    res.status(200).json({ status: "success", orders });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
module.exports = {
  createOrder,
  getUserOrders,
};
