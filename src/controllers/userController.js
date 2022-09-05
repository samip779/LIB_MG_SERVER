const User = require("../models/userModel");

const register = async (req, res) => {
  const { firstname, lastname, email, password, admin } = req.body;
  const user = new User({ firstname, lastname, email, password, admin });
  try {
    await user.save();
    res.send(`Hello ${firstname} Welcome to our house`);
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = {
  register,
};
