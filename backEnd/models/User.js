const mongoose = require("mongoose");
const userSchema =  mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "First name is required"],
    },
    lastname: {
      type: String,
      required: [true, "Last name is required"],
    },
    email: { 
      type: String, 
      unique: true, 
      required: [true, "Email is required"] 
    },
    password: { 
      type: String, 
      required: [true, "Password is required"] 
    },
    phoneNumber: { 
      type: String, 
      required: false 
    },
    image: { 
      type: String, 
      required: false 
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);  //  any one import this Schema can use this model