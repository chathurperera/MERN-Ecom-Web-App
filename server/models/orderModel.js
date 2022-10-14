const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrderSchema = new mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    cartId: {
      type: Schema.Types.ObjectId,
      ref: "Cart",
    },
    total: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
