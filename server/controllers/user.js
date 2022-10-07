const jwt = require("jsonwebtoken");
const bycrypt = require("bcryptjs");
const User = require("../models/userModel");
const SECRET = process.env.JWT_SECRET;

const login = async (req, res) => {
  const { email, password } = req.body;
  const existingUser = await User.findOne({ email }).lean();

  if (!existingUser) {
    res.status(401).json({ status: "error", error: "User doesn't exists!" });
  }
  if (await bycrypt.compare(password, existingUser.password)) {
    const token = jwt.sign(
      {
        id: existingUser._id,
        isAdmin: existingUser.isAdmin,
      },
      SECRET,
      { expiresIn: "3d" }
    );
    return res.status(200).json({ status: "success", data: token });
  } else {
    return res
      .status(400)
      .json({ status: "error", error: "Invalid credentials!" });
  }
};

const signUp = async (req, res) => {
  const {
    email,
    password: plainTextPassword,
    firstName,
    lastName,
    isAdmin,
  } = req.body;

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

  //Check for duplicates
  const duplicate = await User.findOne({ email }).lean().exec();

  if (duplicate) {
    return res.status(409).json({ status: "error", error: "Duplicate email" });
  }

  const password = await bycrypt.hash(plainTextPassword, 10);

  try {
    const response = await User.create({
      email,
      password,
      firstName,
      lastName,
      isAdmin,
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

const updateUser = async (req, res) => {
  try {
    const { firstName, lastName, email, id } = req.body;
    if (!id || !email || !firstName || !lastName) {
      return res.status(400).json({ message: "provide the id" });
    }
    const user = await User.findById(id).exec();

    //Preventing from using an email address that already exists
    const duplicate = await User.find({ email }).lean().exec();

    if (duplicate && duplicate.email.toString() !== id) {
      return res.status(409).json({ message: "Duplicate email address" });
    }

    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;

    const updatedUser = user.save();
    res.status(200).json({ message: `${updatedUser.firstName} updated` });
  } catch (error) {}
};

module.exports = { updateUser, login, signUp };
