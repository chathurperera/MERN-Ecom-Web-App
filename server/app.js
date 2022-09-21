const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./db/connect");
const cors = require("cors");
const userRoute = require("./routes/userRoutes");
const productRoute = require("./routes/productRoutes");


app.use(cors());
app.use(express.json());
app.use("/api/v1/", userRoute);
app.use("/api/v1/products", productRoute);

const PORT = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`server is listening on port ${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
