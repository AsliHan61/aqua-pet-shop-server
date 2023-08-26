const router = require("express").Router();
 

const Product = require("./models/Product.model");

router.post("/products", (req, res, next) => {
    const { name, type, pice, stock, description, imgURL, rating } = req.body;
   
    Product.create({ name, type, pice, stock, description, imgURL, rating })
      .then(response => res.json(response))
      .catch(err => res.json(err));
  });
   
  module.exports = router;