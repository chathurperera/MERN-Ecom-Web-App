const express = require("express");
const router = express.Router();
const {
  updateUser,
  getAllUsers,
  deleteUser,
  getMe
} = require("../controllers/user");
const {
  verifyToken,
  verifyTokenAndAdmin,
} = require("../middleware/verifyToken");


router.patch("/update", verifyToken, updateUser);
router.get("/", verifyTokenAndAdmin , getAllUsers);
router.get("/me", verifyToken , getMe);
router.delete("/:id", verifyTokenAndAdmin, deleteUser);

module.exports = router;
