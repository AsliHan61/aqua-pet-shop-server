const router = require("express").Router();
const express = express.Router();

const User = require("../models/User.model");
const { isAuthenticated } = require("../middlewares/jwt.middleware");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.post("/upload", fileUploader.single("image"), (req, res) =>{
  if (!req.file) {
    next(new Error("No file uploaded!"));
    return;
  }
  console.log(req.file)

  res.json({ image: req.file.path });
})

router.get("/users", isAuthenticated, (req, res) => {
  console.log('payload', req.payload)
  res.status(200).json(req.payload)

})


router.put("/users", (req, res) =>{
  const {_id, image } =req.body;

  User.findbyIdAndUpdate(_id, {image}, {new: true})
  .then(updatedUser => {
    const {_id, username, image } = updatedUser
    res.json({ updatedUser: { _id, username, image } })
  })
  .catch(err => console.error(err))
})

module.exports = router;
