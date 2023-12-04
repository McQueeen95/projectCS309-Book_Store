const mongoose = require("mongoose");
const bookSchema = mongoose.Schema(
  {
    _id:{
      type: String,
      required: [true, "ID is required"],
    },
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    description: {
      type: String,
      required: false
    },
    author: {
      type: String,
      required: [true, "Author is required"]
    },
    price: {
      type: Number, 
      required: [true, "Price is required"]
    },
    image: {
      type: String,
      required: false
    },
    reviews: {
      type: Array,
      required: false
    },
    quantity: {
      type: Number,
      required: false
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Book", bookSchema);  // any one import this Schema can use this model