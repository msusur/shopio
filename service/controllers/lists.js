var express = require("express"),
    router = express.Router(),
    securityHandler = require('../services/securityService'),
    Database = require('../services/mongoDbLayer');

router.all('/*', securityHandler);

router.get('/', function (req, res) {
    var database = new Database();
    var lists = database.shoppingLists();
    lists.find()
        .then(function(result){
            if (result){
                res.send(result);
                res.end();
            }
        })
        .catch(function (err){
            res.send({ result: false });
            res.end();
        });
});

router.get('/:id', function (req, res){

});

module.exports = router;