import Book from "../models/bookModel.js";

const listBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    next(err);
  }
};

const addBook = async (req, res, next) => {
  try {
    const data = { ...req.body };
    const book = new Book(data);
    await book.save();
    res.send(book);
  } catch (error) {
    next(error);
  }
};

export { listBooks, addBook };
