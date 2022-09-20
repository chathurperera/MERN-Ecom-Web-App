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
  images: {
    type: Array,
  },
  rating: {
    type: Number,
  },
  price: {
    type: Number,
    required: true,
  },
  date:{
    type:Date,
    default:Date.now
  },
  countInStock: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = mongoose.model("Product", productSchema);
