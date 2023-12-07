var userService = require('../services/userServices');

var createUserControllerFn = async (req, res) => {
    try {
        console.log(req.body);
        const status = await userService.createUserDBService(req.body);
        console.log(status.status);
        if (status.status) {
            res.send({ "status": true, "message": status.msg });
        } else {
            res.send({ "status": false, "message": status.msg });
        }
    }
    catch (err) {
        console.log(err);
        res.send({ "status": false, "message": err.msg });
    }
}

var loginUserControllerFn = async (req, res) => {
    try {
        const result = await userService.loginuserDBService(req.body);
        if (result.status) {
            res.send({ "status": true, "message": result.msg });
        } else {
            res.send({ "status": false, "message": result.msg });
        }

    } catch (error) {
        console.log(error);
        res.send({ "status": false, "message": error.msg });
    }
}

module.exports = { createUserControllerFn, loginUserControllerFn };