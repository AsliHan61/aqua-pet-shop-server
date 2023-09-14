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

  router.get('/product/:productId', (req, res, next) => {
    const { productId } = req.params;
   
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
    Product.findById(productId)
      .populate('product')
      .then(project => res.status(200).json(project))
      .catch(error => res.json(error));
  });

  router.put('/products/:productId', (req, res, next) => {
    const { productId } = req.params;
   
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
   
    Project.findByIdAndUpdate(productId, req.body, { new: true })
      .then((updatedProduct) => res.json(updatedProduct))
      .catch(error => res.json(error));
  });

  router.delete('/products/:productId', (req, res, next) => {
    const { productId } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
   
    Project.findByIdAndRemove(productId)
      .then(() => res.json({ message: `Productwith ${productId} is removed successfully.` }))
      .catch(error => res.json(error));
  });
   
  
  module.exports = router;