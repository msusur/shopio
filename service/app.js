var express = require("express"),
    bootstrapper = require("./bootstrapper")();

var app = new express();
app.set('port', (process.env.PORT || 5000));

app.use("/", express.static("dist"));

bootstrapper.loadControllers(app);

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});