import User from "../models/userModel.js";

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

const listUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404);
    next(new Error("User doesnot exit"));
  }
};

export { register, listUsers, listUser };
