var express = require("express"),
    Database = require("../services/mongoDbLayer"),
    router = express.Router();

var createToken = function (username, password) {
    // TODO: Create a token on database.
    return username + ':' + password;
};

router.post('/login', function (req, res) {
    var userModel = req.body;
    var userDatabase = new Database();
    var users = userDatabase.users();
    var token = createToken(userModel.Username, userModel.Password);
    users.findOne({ userName: userModel.Username, password: userModel.Password })
        .then(function (result) {
            if (result) {
                res.send({ Result: true, Token: token });
                res.end();
            }
        })
        .catch(function (err) {
            console.log('Error %s', JSON.stringify(err));
            res.send({ result: false });
            res.end();
        });
});

router.post('/register', function (req, res) {
    var userModel = req.body;
    var userDatabase = new Database();
    var users = userDatabase.users();
    var token = createToken(userModel.Username, userModel.Password);
    users.insert({ userName: userModel.Username, password: userModel.Password })
        .then(function (result) {
            if (result) {
                res.send({ result: true, token: token });
                res.end();
            }
        })
        .catch(function (err) {
            console.log('Error %s', JSON.stringify(err));
            res.send({ result: false });
            res.end();
        });
});

module.exports = router;