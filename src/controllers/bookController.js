import Book from "../models/bookModel.js";

const listBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    throw error;
  }
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
