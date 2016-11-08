var fs = require("fs"),
  path = require("path"),
  bodyParser = require("body-parser"),
  database = require("./services/mongoDbLayer");

var Bootstrapper = function (controllerPath) {
  if (typeof (controllerPath) !== 'string') {
    controllerPath = 'controllers';
  }
  this.controllerPath = controllerPath;
};

Bootstrapper.prototype.testDatabase = function () {
  var db = new database();
  return this;
};

Bootstrapper.prototype.loadControllers = function (app) {
  var that = this;
  app.use(bodyParser.json());
  var pathToControllers = path.resolve(__dirname, this.controllerPath);
  fs.readdirSync(pathToControllers).forEach(function (file) {
    var controllerName = file.substr(0, file.length - 3);
    if (file.substr(-3) === '.js') {
      var routePath = that.controllerPath;
      var route = require('./' + routePath + '/' + file);
      var endpoint = '/api/' + controllerName;
      app.use(endpoint, route);
      console.log('Controller loaded at "%s"', endpoint);
    }
  });
  return this;
};

module.exports = function () {
  return new Bootstrapper();
};
