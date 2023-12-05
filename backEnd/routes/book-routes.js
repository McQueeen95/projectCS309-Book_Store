const express  = require("express");
const router = express.Router();
const booksController = require("../controllers/book-controller");

router.get('/',booksController.getAllBooks ) // show all books by this API: (http://localhost:8000/books)
router.get('/id/:id',booksController.getBookById ) // show one book by its id by this API: (http://localhost:8000/books/id/:id)
router.get('/title/:title',booksController.getBookByTitle ) // show all books that have the same title by this API: (http://localhost:8000/books/title/:title)
router.get('/category/:category',booksController.getBookByCategory ) // show all books that have the same category by this API: (http://localhost:8000/books/category/:category) ((categories are: Scientific books, Islamic books, Histoical books, Stories))
router.get('/search/:keyword',booksController.search ) // show all books that have the same keyword by this API: (http://localhost:8000/books/search/:keyword)


router.post('/',booksController.addBook) // add new Book by this API: (http://localhost:8000/addbook)

router.put('/:id',booksController.updateBook) // update book by its id by this API: (http://localhost:8000/updatebook/:id)

router.delete('/:id',booksController.deleteBook) // delete book by its id by this API: (http://localhost:8000/deletebook/:id)


module.exports = router;