const Issue = require("../models/issueModel");
const Book = require("../models/bookModel");
const User = require("../models/userModel");

const issueBook = async (req, res) => {
  const data = { ...req.body };
  const issue = new Issue(data);
  try {
    await issue.save();

    const user = await User.findById(data.user);
    const book = await Book.findById(data.book);
    res.send(`${user.email} has borrowed ${book.name}`);
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = {
  issueBook,
};
