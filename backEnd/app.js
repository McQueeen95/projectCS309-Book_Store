const { express, mongoose, app } = require("./server");
const cors = require("cors");
const userRoutes = require("./routes/user-routes");
const shopRoutes = require('./routes/shop-routes');
const bookRoutes = require("./routes/book-routes");
const  path = require("path");
const Book = require("./models/Book")


app.use(cors());
app.use(express.json()); // this allow us to use json to send and receive data
app.use(express.urlencoded({ extended: true })); // this allow us to use url to send and receive data
app.use(express.static('uploads/bookImages'));
app.use(express.static('uploads/userImages'));

// Middlewares
// app.post('/upload', upload.single('file'), (req, res) => {
//   Book.create({image: req.file.filename})
//   .then(result => res.json(result))
//   .catch(err => res.json(err))
// })

app.get('/getImage', (req, res) => {
  Book.findOne({image: req.query.image})
  .then(result => {
    res.sendFile(path.join(__dirname, 'uploads/bookImages', result.image))
  })
  .catch(err => {
    res.json(err)
  })
})

app.use('/books', bookRoutes); // routes for books (list, search, get by id, get by title, get by category)

app.use('/addbook', bookRoutes); // add new book 

app.use('/updatebook', bookRoutes ); // update book by its id

app.use('/deletebook', bookRoutes);// delete book by its id 

app.use('/users', userRoutes); // routes for users (register, login)

app.use(shopRoutes);