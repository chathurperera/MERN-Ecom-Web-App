require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/connect");
const mongoose = require("mongoose");

const cors = require("cors");
const corsOptions = require("./config/corsOptions");

const userRoutes = require("./routes/userRoutes");
const productRoute = require("./routes/productRoutes");
const cartRoutes = require('./routes/cartRoutes');
const authRoutes = require('./routes/authRoutes');
const orderRoutes = require('./routes/orderRoutes');

connectDB(process.env.MONGO_URI);

app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use("/api/v1/", authRoutes);
app.use("/api/v1/", userRoutes);
app.use("/api/v1/order", orderRoutes);
app.use("/api/v1/products", productRoute);
app.use("/api/v1/cart", cartRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connection.once("open", () => {
  console.log("connected to MongoDB");
  app.listen(PORT, () => console.log(`server running on port ${PORT}...`));
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});
