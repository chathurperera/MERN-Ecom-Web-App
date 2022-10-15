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

const getAllOrders = async (req, res) => {
  try {
    const allOrders = await Order.find({}).lean().exec();
    res.status(200).json({ message: "success", data: allOrders });
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
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
  getAllOrders,
  createOrder,
  getUserOrders,
};
