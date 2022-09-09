import ApiError from "../errors/ApiError.js";
import Book from "../models/bookModel.js";
import tryCatch from "../utils/tryCatch.js";

const listBooks = tryCatch(async (req, res) => {
  const books = await Book.find();
  if (books) {
    res.json(books);
    return;
  }
  throw ApiError.internal("Books couldn't be found");
});

const addBook = tryCatch(async (req, res) => {
  const data = { ...req.body };
  const book = Book.create(data);
  if (book) {
    return res.send(book);
  }
  throw ApiError("Please enter valid credentials");
});

export { listBooks, addBook };
