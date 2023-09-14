const router = require("express").Router();
 

const Order = require("../models/Order.model");

router.post("/Order", (req, res, next) => {
    const { _id, userId, purchase, date, description, paymentInfo } = req.body;
   
    Order.create({ _id, userId, purchase, date, description, paymentInfo })
      .then(response => res.json(response))
      .catch(err => res.json(err));
  });
   
  module.exports = router;