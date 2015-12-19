iris.modules = {};

var moduleTemplate = (function () {

  var hooks = {},
    socketListeners = {},
    path,
    configPath;

  return {

    set path(value) {

      if (!path) {

        path = value;

      } else {

        console.log("path already set");

      }

    },
    globals: {},
    get path() {

      return path;

    },
    registerSocketListener: function (name, callback) {

      if (!socketListeners[name]) {

        socketListeners[name] = callback;

        if (!iris.socketListeners[name]) {

          iris.socketListeners[name] = [];

        }

        iris.socketListeners[name].push(callback);

      } else {

        console.log("This socket listener has already been defined in this module");

      }

    },
    registerHook: function (hookname, rank, callback) {

      if (typeof hookname === "string" && typeof rank === "number" && typeof callback === "function") {

        if (!hooks[hookname]) {

          hooks[hookname] = {

            rank: rank,
            event: callback

          }

        } else {

          console.log("Hook " + hookname + " already defined in this module");

        }

      } else {

        console.log("Not a valid hook");
        return false;

      }

    },
    get hooks() {
      return hooks;
    },
    get socketListeners() {
      return socketListeners;
    },

  }

})

function _getCallerFile() {
  try {
    var err = new Error();
    var callerfile;
    var currentfile;

    Error.prepareStackTrace = function (err, stack) {
      return stack;
    };

    currentfile = err.stack.shift().getFileName();

    while (err.stack.length) {
      callerfile = err.stack.shift().getFileName();

      if (currentfile !== callerfile) return callerfile;
    }
  } catch (err) {}
  return undefined;
}

var path = require('path');
var express = require('express');

iris.registerModule = function (name, directory) {

  if (iris.modules[name]) {

    console.log("Module already exists");
    return false;

  } else {

    iris.modules[name] = new moduleTemplate;
    iris.modules[name].path = path.parse(_getCallerFile()).dir;

    if (directory) {

      //Create config directory

      var fs = require('fs');

      var mkdirSync = function (path) {
        try {
          fs.mkdirSync(path);
        } catch (e) {
          if (e.code != 'EEXIST') throw e;
        }
      }

      mkdirSync(iris.configPath + "/" + name);

      iris.modules[name].configPath = iris.configPath + "/" + name;

    }

    iris.app.use('/modules/' + name, express.static(iris.modules[name].path + "/static"));

    Object.seal(iris.modules[name]);

  }
  
  return iris.modules[name];

};

iris.include = function (defaultLocation, customLocation) {

  var customLocation = customLocation;

  //  Check file exists

  try {
    return require(customLocation);
  } catch (e) {
    return require(defaultLocation);
  }

};