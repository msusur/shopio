var express = require("express");
var home = require("./controllers/home");


var app = new express();

app.use("/", express.static("html"));
app.use("/home", home);

app.listen(8080, function(){
    console.log("started!!");
});