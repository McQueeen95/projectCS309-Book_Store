const { express, mongoose, app } = require("./server");
const cors = require("cors");
const router = require("./routes/book-routes.js");


app.use(cors());
app.use(express.json()); // this allow us to use json to send and receive data
app.use(express.urlencoded({ extended: true })); // this allow us to use url to send and receive data

// Middlewares
app.use('/books', router); // all get routes 

app.use('/addbook', router); // add new book 

app.use('/updatebook', router ); // update book by its id

app.use('/deletebook', router);// delete book by its id 
