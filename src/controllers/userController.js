import ApiError from "../errors/ApiError.js";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// Register function
const register = async (req, res) => {
  const data = { ...req.body };
  const { email } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const user = await User.create(data);
  if (user) {
    return res.status(201).json(user);
  }
  res.status(400);
  throw new Error("Invalid user data");
};

// List Users
const listUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// @desc      Auth user and get token
// @route     POST /api/users/login
// @access    Public
const authUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw ApiError.badRequest("Please provid email and password");
  }

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      admin: user.admin,
      token: generateToken(user._id),
    });
  } else {
    throw ApiError.badRequest("Invalid email or password");
  }
};

// @desc      Ger user profile
// @route     GET /api/users/profile
// @access    Private
const getUserProfile = async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.json({
      _id: user._id,
      firstname: user.firstname,
      email: user.email,
      admin: user.admin,
    });
  } else {
    throw ApiError.internal("couldn't get user from the database");
  }
};

export { register, listUsers, authUser, getUserProfile };
