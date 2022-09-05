const router = require("express").Router();
const User = require("../models/userModel");
const { register } = require("../controllers/userController");

router.post("/register", register);

module.exports = router;
