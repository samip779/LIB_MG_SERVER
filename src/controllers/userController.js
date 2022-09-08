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

// @desc      Auth user and get token
// @route     POST /api/users/login
// @access    Public
const authUser = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    let error = new Error("Please provide email and password");
    next(error);
    return;
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
    let error = new Error("Invalid email or password");
    next(error);
  }
};

export { register, listUsers, authUser };
