const router = require("express").Router();
const User = require("../models/userModel");
const {
  register,
  listUsers,
  listUser,
} = require("../controllers/userController");

router.get("/", listUsers);
router.get("/:id", listUser);
router.post("/register", register);

module.exports = router;
