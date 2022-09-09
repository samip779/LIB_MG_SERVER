import ApiError from "../errors/ApiError.js";
import Book from "../models/bookModel.js";

const listBooks = async (req, res) => {
  const books = await Book.find();
  if (books) {
    res.json(books);
    return;
  }
  throw ApiError.internal("Books couldn't be found");
};

const addBook = async (req, res) => {
  try {
    const data = { ...req.body };
    const book = Book.create(data);
    if (book) {
      res.send(book);
    } else {
      res.status(400);
      throw new Error("Please enter valid credentials");
    }
  } catch (error) {
    next(error);
  }
};

export { listBooks, addBook };
