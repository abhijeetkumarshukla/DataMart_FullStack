const express = require("express");

const ProductRouter = express.Router();

const {
  getProducts,
  getProductDetail
} = require("../controllers/product.controller");

ProductRouter.get("/", getProducts);

ProductRouter.get("/:id", getProductDetail);

module.exports = ProductRouter;