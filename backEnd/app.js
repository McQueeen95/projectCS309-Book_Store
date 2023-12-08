const { express, mongoose, app } = require("./server");
const cors = require("cors");
const bookRoutes = require("./routes/book-routes.js");
const userRoutes = require("./user/routes");


app.use(cors());
app.use(express.json()); // this allow us to use json to send and receive data
app.use(express.urlencoded({ extended: true })); // this allow us to use url to send and receive data

// Middlewares
app.use('/books', bookRoutes); // all get routes 

app.use('/addbook', bookRoutes); // add new book 

app.use('/updatebook', bookRoutes ); // update book by its id

app.use('/deletebook', bookRoutes);// delete book by its id 


app.use(express.json());
app.use(userRoutes);
