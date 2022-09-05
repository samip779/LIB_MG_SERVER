const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    author: {
      type: String,
    },
    description: {
      type: String,
      default: ".........Not Available.........",
    },
    isbn: {
      type: string,
      required: true,
      unique: true,
    },
    copies: {
      type: Number,
      min: 1,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
