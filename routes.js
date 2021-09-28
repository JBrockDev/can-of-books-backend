const express = require("express");
const app = express();
require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);

const Book = require('./models/book');

getAllBooks = async (request, response) => {
  try {
    const books = await Book.find({});
    response.status(200).send(books);
  } catch {
    response.status(500).send("Book data unavailable at this time GETALL /books");
  }
};

module.exports = { getAllBooks };
