const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;
dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

const ProductRouter = require("./routes/product.routes");

app.use("/v1/products", ProductRouter);

 

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});