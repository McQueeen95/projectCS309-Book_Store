const express = require('express');
const router = express.Router();
const userController = require("../controllers/user-Controler");
const middle = require("../middleware/middle")


router.get('/login',userController.loginUserControllerFn); // user login by this API: (http://localhost:8000/users/login)

router.post('/register',middle.single('file'),userController.createUserControllerFn); // user register by this API: (http://localhost:8000/users/register)

module.exports = router;