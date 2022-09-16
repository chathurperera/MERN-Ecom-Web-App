const jwt = require("jsonwebtoken");
const bycrypt = require("bcryptjs");
const User = require("../models/userModel");

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = User.findOne(email).lean();
};

const signUp = async (req, res) => {
  const { email, password: plainTextPassword, firstName, lastName } = req.body;

  if (!email || typeof email !== "string") {
    return res.status(400).json({ status: "error", error: "Invalid email" });
  }
  if (!plainTextPassword || typeof plainTextPassword !== "string") {
    return res.status(400).json({ status: "error", error: "Invalid Password" });
  }
  if (plainTextPassword.length < 8) {
    return res.status(400).json({
      status: "error",
      error: "Password must contain at least 8 characters",
    });
  }

  const password = await bycrypt.hash(plainTextPassword, 10);

  try {
    const response = await User.create({
      email,
      password,
      firstName,
      lastName,
    });
    res.status(201).json({ status: "success", message: "User created" });
  } catch (error) {
    if (error.code === 11000) {
      return res
        .status(500)
        .json({ status: "error", error: "User already in use" });
    }
    res.status(500).json({ status: "error", error: "Something went wrong" });
  }
};

module.exports = { login, signUp };
