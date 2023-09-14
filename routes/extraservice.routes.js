const router = require("express").Router();
 

const ExtraService = require("../models/ExtraService.model");

router.post("/ExtraService", (req, res, next) => {
    const { name, type, price, description, imgURL, rating } = req.body;
   
    ExtraService.create({ name, type, price, description, imgURL, rating })
      .then(response => res.json(response))
      .catch(err => res.json(err));
  });
   
  module.exports = router;