const Address = require("../models/addressModel");

const createAddress = async (req, res) => {
  try {
    const newAddress = new Address(req.body);
    const savedAddress = await newAddress.save();   
    res.status(201).json({ message: "Address created" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
