const express = require("express");
const router = express.Router();
const {
  login,
  signUp,
  updateUser,
  getAllUsers,
  deleteUser,
} = require("../controllers/user");
const {
  verifyToken,
  verifyTokenAndAdmin,
} = require("../middleware/verifyToken");

router.post("/login", login);
router.post("/signup", signUp);
router.patch("/update", verifyToken, updateUser);
router.get("/", getAllUsers);
router.delete("/:id", verifyTokenAndAdmin, deleteUser);

module.exports = router;
