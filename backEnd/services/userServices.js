const userModel = require('../models/User');
const bcrypt  = require('bcrypt');

module.exports.createUserDBService = (userDetails) => {
   return new Promise(function(resolve, reject) {
      userModel.findOne({ email: userDetails.email })
         .then(existingUser => {
            if (existingUser) {
               // Email already exists in the database
               reject({ status: false, msg: "Email already exists" });
            } else {
               // Create a new user with the provided details
               var userModelData = new userModel();
               userModelData.firstname = userDetails.firstname;
               userModelData.lastname = userDetails.lastname;
               userModelData.email = userDetails.email;
               userModelData.image = userDetails.image;
               userModelData.password = bcrypt.hashSync(userDetails.password, 10);
               userModelData.save()
                  .then(result => {
                     resolve({ status: true, msg: "User created successfully" });
                  })
                  .catch(error => {
                     reject({ status: false, msg: "Error saving user" });
                  });
            }
         })
         .catch(error => {
            reject({ status: false, msg: "Database error" });
         });
   });
}
module.exports.loginuserDBService = (userDetails) => {
   return new Promise(function(resolve, reject) {
      userModel.findOne({ email: userDetails.email })
         .then(result => {
            if (result) {
               // Compare the hashed password with the plain text password using bcrypt
               bcrypt.compare(userDetails.password, result.password)
                  .then((isMatch) => {
                     if (isMatch) {
                        resolve({ status: true, msg: "user Validated Successfully" });
                     } else {
                        reject({ status: false, msg: "user Validation failed" });
                     }
                  })
                  .catch((error) => {
                     reject({ status: false, msg: "Error comparing passwords" });
                  });
            } else {
               reject({ status: false, msg: "Invalid user Details" });
            }
         })
         .catch(error => {
            reject({ status: false, msg: "Invalid Data" });
         });
   });
}