const Product = require("../models/productModel");
const crypto = require("crypto");
const AWS = require("aws-sdk");

const BUCKET_NAME = process.env.BUCKET_NAME;
const BUCKET_REGION = process.env.BUCKET_REGION;
const ACCESS_KEY = process.env.ACCESS_KEY;
const SECRET_ACCESS_KEY = process.env.SECRET_ACCESS_KEY;

const {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} = require("@aws-sdk/client-s3");

// const s3 = new S3Client({
//   credentials: {
//     accessKeyId: ACCESS_KEY,
//     secretAccessKey: SECRET_ACCESS_KEY,
//   },
//   region: BUCKET_REGION,
// });

const s3 = new AWS.S3({
  accessKeyId: ACCESS_KEY, 
  secretAccessKey: SECRET_ACCESS_KEY
});

const createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json({ status: "success", data: savedProduct });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: "error", error: "Something went wrong" });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const { category, sort, minPrice, maxPrice, rating } = req.query;

    let queryObject = {};

    if (category) {
      const categories = category.split(",");
      queryObject.category = { $in: categories };
    }

    if (minPrice && maxPrice) {
      queryObject.price = { $gte: Number(minPrice), $lte: Number(maxPrice) };
    }
    //Filtering the result with given queries
    let result = Product.find(queryObject);

    //total results count
    const totalResultsCount = await Product.countDocuments(queryObject);
    console.log("totalResultsCount", totalResultsCount);

    /* checks if the users wants to sort the results
      and sorting the results  */
    if ((sort && sort === "-1") || sort === "1") {
      // const sortList = sort.split(",").join(" ");
      result = result.sort({ price: sort });
    } else {
      result = result.sort({ createdAt: 1 });
    }

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    result = result.skip(skip).limit(limit);

    const allProducts = await result;

    res.status(200).json({
      status: "success",
      data: allProducts,
      productsCount: totalResultsCount,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: "error", error: "Something went wrong" });
  }
};

const searchProducts = async (req, res) => {
  try {
    const { name } = req.query;
    let queryObject = {};
    if (name) {
      queryObject.name = { $regex: name, $options: "i" };
    }
    const products = await Product.find(queryObject).sort({ price: 1 });
    res.status(200).json({ status: "success", data: products });
  } catch (error) {
    res.status(500).json({ status: "error", error: "Something went wrong" });
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const productID = req.params.id;
    const product = await Product.findById(productID);
    res.status(200).json({ status: "success", data: product });
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedProduct = await Product.findOneAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedProduct) {
      res
        .status(400)
        .json({ status: "error", error: "Product doesn't exists!" });
    }

    res.status(200).json({ status: "success", data: updatedProduct });
  } catch (error) {
    res.status(500).json({ status: "error", error: "Something went wrong" });
  }
};

const deleteProduct = async (req, res) => {
  const { id: productID } = req.params;
  try {
    const product = await Product.findOneAndDelete({ _id: productID });
    if (!product) {
      return res
        .status(404)
        .json({ status: "error", error: `No Product with id ${productID}` });
    }
    res.status(200).json({ status: "success", message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ status: "error", error: "Something went wrong" });
  }
};

const uploadImage = async (req, res) => {
  try {
    console.log("req.body", req.body);
    console.log("req.file", req.file);
    req.file.buffer;

    const randomImageName = (bytes = 32) =>
      crypto.randomBytes(bytes).toString("hex");

    const params = {
      Bucket: BUCKET_NAME,
      Key: `${req.file.originalname}-${Date.now()}`,
      Body: req.file.buffer,
      ContentType: req.file.mimetype,
    };

     s3.upload(params, (err, data) => {
      if (err) {
        console.log("Error occurred while trying to upload to S3 bucket", err);
        return res.status(200).json({ message: "upload failed" });
      }
      return res.status(200).json({ message: "success" , imageURL:data.Location });
    });

  } catch (error) {
    console.log(error);
    return res.send(400).json({ status: "error", error: error });
  }
};

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  getSingleProduct,
  deleteProduct,
  searchProducts,
  uploadImage,
};
