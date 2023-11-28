const { express, mongoose, app } = require("./server");
const Book = require("./models/book");


app.use(express.json()); // this allow us to use json to send and receive data
app.use(express.urlencoded({ extended: true })); // this allow us to use url to send and receive data

// Middlewares

app.get('/showbooks', async(request, response) => {
  try{
    const books = await Book.find();
    response.status(200).json(books);
  }catch(error){
    console.log(error.message);
    response.status(500).json({ message: error.message });
  }
}) // show all books

app.get('/showbook/:id', async(request, response) => {
  try{
    const book = await Book.findById(request.params.id);
    if(!book)
      return response.status(404).json({ message: 'Book not found' });
    response.status(200).json(book);
  }catch(error){
    console.log(error.message);
    response.status(500).json({ message: error.message });
  }
}) // show one book by its id 

app.post('/addbook', async(request, response) => {
try{
    const newBook = await Book.create(request.body); // this line create new book and save it in database and return it as response
    response.status(200).json(newBook); // this line return new book as response to client side with status code 200 
  }catch(error){
    console.log(error.message);;
    response.status(500).json({ message: error.message });
  }
}) // add new book

app.put('/updatebook/:id', async(request, response) => {
  try{
    const book = await Book.findByIdAndUpdate(request.params.id, request.body);
    if(!book)
      return response.status(404).json({ message: 'Book not found' });
    const updatedBook = await Book.findById(request.params.id);
    response.status(200).json({ message: 'Book updated successfully' });
    response.status(200).json(updatedBook);
  }catch(error){
    console.log(error.message);
    response.status(500).json({ message: error.message });
  }
}) // update book by its id

app.delete('/deletebook/:id', async(request, response) => {
  try{
    const book = await Book.findByIdAndDelete(request.params.id);
    if(!book)
      return response.status(404).json({ message: 'Book not found' });
    response.status(200).json(book);
  }catch(error){
    console.log(error.message);
    response.status(500).json({ message: error.message });
  }
})
