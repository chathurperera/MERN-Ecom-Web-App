const express = require("express");
const app = express();
require('dotenv').config();
const connectDB = require("./db/connect");

app.use(express.json());

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
