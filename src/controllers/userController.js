const User = require("../models/userModel");

const register = async (req, res) => {
  const data = { ...req.body };
  const user = new User(data);
  try {
    await user.save();
    res.send(`Hello ${data.firstname} Welcome to our house`);
  } catch (error) {
    res.send(error.message);
  }
};

const listUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

const listUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
};

module.exports = {
  register,
  listUsers,
  listUser,
};
