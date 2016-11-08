var express = require("express"),
    Database = require("../services/mongoDbLayer");

var router = express.Router();
router.post('/login', function (req, res) {
    var userModel = req.body;
    var userDatabase = new Database();
    userDatabase.findOne({ userName: userModel.userName, password: userModel.password })
        .then(function (result) {
            if (result) {
                res.render({ result: true });
            }
        })
        .catch(function (err) {
            console.log('Error %s', JSON.stringify(err));
            res.render({ result: false });
        });
});

router.post('/register', function (req, res) {
    var userModel = req.body;
    var userDatabase = new Database();
    var users = userDatabase.users();
    users.insert({ userName: userModel.userName, password: userModel.password })
        .then(function (result) {
            if (result) {
                res.render({ result: true });
            }
        })
        .catch(function (err) {
            console.log('Error %s', JSON.stringify(err));
            res.render({ result: false });
        });
});

module.exports = router;
