var express = require("express"),
    bootstrapper = require("./bootstrapper")();


var app = new express();

app.use("/", express.static("html"));

bootstrapper.loadControllers(app);

app.listen(8080, function(){
    console.log("started!!");
});