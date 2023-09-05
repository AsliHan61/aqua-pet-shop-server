const router = require("express").Router();

const { isAuthenticated } = require("../middlewares/jwt.middleware");
 

const Product = require("../models/Product.model");

router.post("/products", isAuthenticated, (req, res, next) => {
    const { name, type, price, stock, description, imgURL, rating } = req.body;
    const payload = req.payload._id
   
    Product.create({ name, type, price, stock, description, imgURL, rating, adminId:req.payload._id })
      .then(response => res.json(response))
      .catch(err => res.json(err));
  });
   
  router.get("/products", (req, res, next) => {
    Product.find({})
    .then(allProducts => res.json(allProducts))
    .catch(err => res.json(err));
  })
  
  module.exports = router;