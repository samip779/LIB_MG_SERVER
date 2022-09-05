const router = require("express").Router();
const User = require("../models/userModel");

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });
  try {
    await user.save();
    res.send("User registered");
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = router;