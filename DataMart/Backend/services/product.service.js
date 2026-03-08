const Product = require("../models/product.model");

const getProducts = async ({ page, limit, search }) => {
  const query = search
    ? { $text: { $search: search } }
    : {};

  const products = await Product.find(query)
    .skip((page - 1) * limit)
    .limit(limit)
    .select("name price category");

  const total = await Product.countDocuments(query);

  return { products, total };
};

const getProductById = async (id) => {
  return await Product.findById(id);
};

module.exports = {
  getProducts,
  getProductById
};