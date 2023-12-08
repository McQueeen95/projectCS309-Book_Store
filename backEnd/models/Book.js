const mongoose = require("mongoose");
const bookSchema = mongoose.Schema(
  {
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
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    },
    comments: [
        {
          user: String,
          commnet: String
        }
      ],
    quantity: {
      type: Number,
      required: false
    },
    category: {
      type: String,
      enum: ['Scientific books','Islamic books','Histoical books','Stories'],
      required: [true, "Category is required"]
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Book", bookSchema);  // any one import this Schema can use this model