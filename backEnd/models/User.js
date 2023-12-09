const mongoose = require("mongoose");
const Product = require('./Book');
const userSchema =  mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "First name is required"],
    },
    lastname: {
      type: String,
      required: false,
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
    cart: {
      items: [{
        productId: {
          type: mongoose.Types.ObjectId,
          ref: 'Book',
          required: true
        },
        qty: {
          type: Number,
          required: true
        }
      }],
      totalPrice: Number
  }
  },
  {
    timestamps: true,
  }
);
userSchema.methods.addToCart = async function(productId) {
  const product = await Product.findById(productId);
  if (product) {
      const cart = this.cart;
      const isExisting = cart.items.findIndex(objInItems => new String(objInItems.productId).trim() === new String(product._id).trim());
      if (isExisting >= 0) {
          cart.items[isExisting].qty += 1;
      } else {
          cart.items.push({ productId: product._id, qty: 1 });
      }
      if (!cart.totalPrice) {
          cart.totalPrice = 0;
      }
      cart.totalPrice += product.price;
      return this.save();
  }

};


userSchema.methods.removeFromCart = function(productId) {
  const cart = this.cart;
  const isExisting = cart.items.findIndex(objInItems => new String(objInItems.productId).trim() === new String(productId).trim());
  if (isExisting >= 0) {
      cart.items.splice(isExisting, 1);
      return this.save();
  }
}

module.exports = mongoose.model("User", userSchema);  //  any one import this Schema can use this model