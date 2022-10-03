require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/connect");
const mongoose = require("mongoose");

const cors = require("cors");
const corsOptions = require("./config/corsOptions");

const userRoute = require("./routes/userRoutes");
const productRoute = require("./routes/productRoutes");

connectDB(process.env.MONGO_URI);

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/v1/", userRoute);
app.use("/api/v1/products", productRoute);

const PORT = process.env.PORT || 5000;

mongoose.connection.once("open", () => {
  console.log("connected to MongoDB");
  app.listen(PORT, () => console.log(`server running on port ${PORT}...`));
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});
