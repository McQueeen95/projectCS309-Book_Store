var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

    firstname: {
        type: String,
        required: [true, "First name is required"]
    },
    lastname: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    image: {
        type: String,
        required: false
    }
    

});

module.exports = mongoose.model('user', userSchema);