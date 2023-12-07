const express = require('express');
const router = express.Router();
const userController = require("./userControler");


router.route('/user/login').post(userController.loginUserControllerFn);
router.route('/user/create').post(userController.createUserControllerFn);


module.exports = router;