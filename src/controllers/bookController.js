const Book = require("../models/bookModel");

const listBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

const addBook = async (req, res) => {
  const data = { ...req.body };
  const book = new Book(data);
  try {
    await book.save();

    res.send("Your book is added");
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = {
  listBooks,
  addBook,
};
