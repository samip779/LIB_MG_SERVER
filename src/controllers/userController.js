import User from "../models/userModel.js";

// Register function

const register = async (req, res, next) => {
  const data = { ...req.body };
  const { email } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    next(new Error("User already exists"));
    return;
  }
  const user = await User.create(data);
  if (user) {
    return res.status(201).json(user);
  }
  res.status(400);
  next(new Error("Invalid user data"));
};

// List Users

const listUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// List single user

const listUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (user) {
    return res.json(user);
  }
  res.status(404);
  next(new Error("User doesnot exit"));
};

export { register, listUsers, listUser };
