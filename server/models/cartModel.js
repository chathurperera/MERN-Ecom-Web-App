const mongoose = require("mongoose");

//Cart Item Schema
const CartItemSchema = mongoose.Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    default: 1,
  },
  totalPrice: {
    type: Number,
  },
});

module.exports = mongoose.model("CartItem", CartItemSchema);

const CartSchema = mongoose.Schema(
  {
    products: [CartItemSchema],
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);
