const router = require("express").Router();
const Product = require("../models/product");

// ADD PRODUCT (GET – demo purpose)
router.get("/add", async (req, res) => {
  try {
    const product = await Product.create({
      name: "Sofa Set",
      price: 25000,
      description: "Modern 3-seater sofa",
      image: "sofa.jpg"
    });
    res.json(product);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// GET ALL PRODUCTS
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
