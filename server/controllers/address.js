const Address = require("../models/addressModel");

const createAddress = async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) {
      return res.status(400).json({ message: "please provide the ID" });
    }
    const newAddress = new Address(req.body);
    const savedAddress = await newAddress.save();
    res.status(201).json({ message: "Address created" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const getMyAddress = async (req, res) => {
  const { id } = req.params;
  const allAddress = await Address.find({ userId: id }).exec();

  if (!allAddress) {
    return res.status(200).json({ message: "No address found" });
  }

  res.status(200).json({ allAddress });
};
module.exports = { createAddress, getMyAddress };
