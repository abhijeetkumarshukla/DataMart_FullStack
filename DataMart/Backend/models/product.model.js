const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    category: String,
    description: String,
    stock: Number
  },
  { timestamps: true }
);

productSchema.index({ name: "text" }); // Index improves search performance.

const productModel= mongoose.model("Product", productSchema);
module.exports = productModel;