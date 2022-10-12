const mongoose = require("mongoose");
const { Schema } = mongoose;

//Cart Item Schema
const CartItemSchema = mongoose.Schema({
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    default: 1,
  },
  name: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  color: {
    type: String,
  },
  price: {
    type: Number,
  },
});

module.exports = mongoose.model("CartItem", CartItemSchema);

const CartSchema = mongoose.Schema(
  {
    products: [CartItemSchema],
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);
