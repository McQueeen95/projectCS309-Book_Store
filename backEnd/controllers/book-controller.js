const Book = require("../models/Book");



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
const getBookById = async (request, response) => {
  try{
    const book = await Book.findById(request.params.id);
    if(!book)
      return response.status(404).json({ message: 'Book not found' });
    response.status(200).json(book);
  }catch(error){
    response.status(500).send("Book not found");
  }
}
const getBookByTitle = async (request, response) => {
  try{
    const book = await Book.find({ title: request.params.title });
    if(!book)
      return response.status(404).json({ message: 'Book not found' });
    response.status(200).json(book);
  }catch(error){
    response.status(500).send("Book not found");
  }
}
const getBookByCategory = async (request, response) => {
  try{
    const book = await Book.find({ category: request.params.category });
    if(!book)
      return response.status(404).json({ message: 'Book not found' });
    response.status(200).json(book);
  }catch(error){
    response.status(500).send("Book not found");
  }
}
const search = async (request, response) => {
  try {
    const keyword = request.params.keyword;
    const books = await Book.find({ $or: [{ title: { $regex: keyword, $options: 'i' } }, { author: { $regex: keyword, $options: 'i' } }] });
    response.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ message: error.message });
  }
}
const addBook = async (request, response) => {
  try{
    const newBook = await Book.create(request.body); // this line create new book and save it in database and return it as response
    response.status(200).json(newBook); // this line return new book as response to client side with status code 200 
  }catch(error){
    console.log(error.message);;
    response.status(500).json({ message: error.message });
  }
}// add new book
const updateBook = async (request,response) => {
  try{
    const book = await Book.findByIdAndUpdate(request.params.id, request.body);
    if(!book)
      return response.status(404).json({ message: 'Book not found' });
    const updatedBook = await Book.findById(request.params.id);
    response.status(200).json(updatedBook);
  }catch(error){
    response.status(500).send("Book not found");
  }
} // update book by id
const deleteBook = async (request,response) => {
  try{
    const book = await Book.findByIdAndDelete(request.params.id);
    if(!book)
      return response.status(404).json({ message: 'Book not found' });
    response.status(200).json(book);
  }catch(error){
    response.status(500).send("Book not found");
  }
}
const addReview = async (request,response) => {
  try {
    const { user, comment, rating } = request.body;

    const book = await Book.findById(request.params.id);
    if (!book) {
      return response.status(404).json({ message: 'Book not found' });
    }

    book.comments = book.comments || [];
    book.comments.push({ user, comment });

    let totalRating = book.rating * (book.comments.length - 1) + rating;
    let newRating = totalRating / book.comments.length;
    book.rating = newRating;

    await book.save()
    const updatedBook = await Book.findById(request.params.id);
    response.status(200).json({message: 'Review added successfully', comments: updatedBook.comments });
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: error });
  }
} 

module.exports = { getAllBooks , getBookById , getBookByTitle , getBookByCategory , search , addBook , updateBook , deleteBook , addReview };