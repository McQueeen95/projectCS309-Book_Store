const express  = require("express");
const router = express.Router();
const Book = require("../models/book");
const booksController = require("../controllers/books-controller");

router.get('/',booksController.getAllBooks ) // show all books

module.exports = router