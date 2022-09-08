import User from "../models/userModel.js";

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
    res.status(400);
    throw new Error("Please provide email and password");
  }

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      admin: user.admin,
      token: null,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
};

export { register, listUsers, authUser };
