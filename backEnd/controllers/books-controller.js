const Book = require("../models/book");



const getAllBooks = async (request, response) => {
  try{
    const books = await Book.find();
    if(books.length === 0)
      return response.status(404).json({ message: 'Sorry, no available books' });
    response.status(200).json(books);
  }catch(error){
    response.status(500).json({ message: error.message });
  }
}
  



  exports.getAllBooks = getAllBooks;