var fs = require("fs"),
  path = require("path");

var Bootstrapper = function (controllerPath) {
  if (typeof (controllerPath) !== 'string') {
    controllerPath = 'controllers';
  }
  this.controllerPath = controllerPath;
};

Bootstrapper.prototype.loadControllers = function (app) {
  var that = this;
  var pathToControllers = path.resolve(__dirname, this.controllerPath);

  fs.readdirSync(pathToControllers).forEach(function (file) {
    var controllerName = file.substr(0, file.length - 3);
    if (file.substr(-3) === '.js') {
      var routePath = that.controllerPath;
      var route = require('./' + routePath + '/' + file);
      app.use('/' + controllerName, route);
      console.log('Controller loaded at /' + controllerName + '/');
    }
  });
};

module.exports = function () {
  return new Bootstrapper();
};