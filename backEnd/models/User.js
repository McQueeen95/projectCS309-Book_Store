const mongoose = require("mongoose");
const userSchema =  mongoose.Schema(
  {
    fullName: { 
      type: String, 
      required: [true, "Full Name is required"] 
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