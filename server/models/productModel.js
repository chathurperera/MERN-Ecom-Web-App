const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  size:{
    type:Array
  },
  colors:{
    type:Array
  },
  imageUrl: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female", "unisex"],
  },
  category: {
    type: String,
    required: true,
    enum: ["men", "woman", "kids"],
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
  quantity: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
