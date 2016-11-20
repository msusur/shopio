var mongodb = require('mongodb-promises'),
    dbHost = process.env.MONGODB_HOST || "localhost",
    dbPort = process.env.MONGODB_PORT || "27017",
    dbName = process.env.MONGODB_DBNAME || "shopio",
    dbUsername = process.env.MONGODB_USERNAME || "",
    dbPassword = process.env.MONGODB_PASSWORD || "",
    database = function () {
        if(dbUsername.length > 0 && dbPassword.length > 0){
            dbHost = dbUsername + ':' + dbPassword + '@' + dbHost;
        }
        this.db = mongodb.db(dbHost + ':' + dbPort, dbName);
        console.log("Connected to database server: %s", dbHost, ':', dbPort, dbName);
    };

database.prototype.shoppingLists = function () {
    return this.db.collection('shoppingList');
};

database.prototype.users = function () {
    return this.db.collection('users');
};

module.exports = database; 