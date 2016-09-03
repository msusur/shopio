var express = require("express"),
    bootstrapper = require("./bootstrapper")();


var app = new express();

app.use("/", express.static("html"));

bootstrapper.loadControllers(app);


app.set('port', (process.env.PORT || 8080));

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});