import Issue from "../models/issueModel.js";
import Book from "../models/bookModel.js";
import User from "../models/userModel.js";

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

export { issueBook };
