const express = require("express");
const router = express.Router();
const {
  login,
  signUp,
  updateUser,
  getAllUsers,
} = require("../controllers/user");
const { verifyToken } = require("../middleware/verifyToken");

router.post("/login", login);
router.post("/signup", signUp);
router.patch("/update", verifyToken, updateUser);
router.get("/", getAllUsers);

module.exports = router;
