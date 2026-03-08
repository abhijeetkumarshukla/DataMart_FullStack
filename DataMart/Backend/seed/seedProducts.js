const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");
require("dotenv").config();

const Product = require("../models/product.model");

const MONGO_URI = process.env.MONGO_URI;

const categories = [
  "Electronics",
  "Clothing",
  "Books",
  "Furniture",
  "Sports",
  "Beauty"
];

const generateProducts = (count) => {
  const products = [];

  for (let i = 0; i < count; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: Number(faker.commerce.price()),
      category: categories[Math.floor(Math.random() * categories.length)],
      description: faker.commerce.productDescription(),
      stock: faker.number.int({ min: 0, max: 1000 })
    });
  }

  return products;
};

const seedProducts = async () => {
  try {
    await mongoose.connect(MONGO_URI);

    console.log("MongoDB Connected");

    await Product.deleteMany();

    console.log("Old products removed");

    const products = generateProducts(10000);

    await Product.insertMany(products);

    console.log("10,000 products inserted successfully");

    process.exit();

  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedProducts();