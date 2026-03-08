const productService = require("../services/product.service");

const getProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 20;
    const search = req.query.search || "";

    const result = await productService.getProducts({
      page,
      limit,
      search
    });

    res.json({
      success: true,
      data: result.products,
      total: result.total
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductDetail = async (req, res) => {
  try {
    const product = await productService.getProductById(req.params.id);

    res.json({
      success: true,
      data: product
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getProductDetail
};