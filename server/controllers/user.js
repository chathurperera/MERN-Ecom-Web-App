const jwt = require("jsonwebtoken");
const bycrypt = require("bcryptjs");
const User = require("../models/userModel");

const login = async (req, res) => {
  const { email, password } = req.body;
};

const signUp = async (req, res) => {
  const { email, password } = req.body;
};

module.exports = { login, signUp };
