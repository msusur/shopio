var mongodb = require('mongodb-promises'),
    dbConnection = process.env.MONGODB_URI || "mongodb://localhost/shopio",
    database = function () {
        this.db = mongodb.db(dbConnection);
        console.log("Connected to database server: %s", dbConnection);
    };

database.prototype.shoppingLists = function () {
    return this.db.collection('shoppingList');
};

database.prototype.users = function () {
    return this.db.collection('users');
};

module.exports = database; 