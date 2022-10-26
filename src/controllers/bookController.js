import ApiError from '../errors/ApiError.js'
import Book from '../models/bookModel.js'
import tryCatch from '../utils/tryCatch.js'

const listBooks = tryCatch(async (req, res) => {
  const books = await Book.find()
  if (books) {
    res.json(books)
    return
  }
  throw ApiError.internal("Books couldn't be found")
})

const addBook = tryCatch(async (req, res) => {
  const data = { ...req.body }
  const book = await Book.create(data)
  return res.send(book)
})

export { listBooks, addBook }
