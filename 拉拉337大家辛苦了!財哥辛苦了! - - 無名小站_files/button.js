window["spb"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);
module.exports.default = module.exports;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return $Class; });
/*
 Class
 -----

 A class pattern, adding sugar on top of javascript prototypes

 ### Basic Usage

 let MyClass = Class.extend({
 foo: 'bar';
 });

 myInstance = new MyClass({
 hello: 'world'
 });

 console.log(myInstance.foo, myInstance.hello)

 In this example, `foo` becomes a property on `MyClass`'s prototype,
 and `hello` becomes a property on `myInstance`.

 ### Default Object Methods

 - `init()`: Called after the object is first instantiated, with all properties available

 - `get(<path>, <default>)`: Get an object an arbitrary number of levels deep, or return a default

 e.g. `myInstance.get('foo.bar.baz', 'some_default');`

 Default return value is undefined

 - `set(<path>, <value>)`: Set an object an arbitrary number of levels deep

 e.g. `myInstance.set('foo.bar.baz', 'some_value');`

 Error is thrown if no object is found to set the value on

 - `setProperties(<object>)`: Set all the properties from an object onto your object

 e.g. `myInstance.setProperties({foo: 'bar', hello: 'world'})`

 Can not be used with nested properties

 - `forEach(<callback>)`: Loop through the object and call callback(<key>, <value>) for each key/val pair

 */
// Object Create
// -------------
//
// Shim for Object.create, if it is not supported by our browser
//
// let myPrototype = {foo: 'bar'}
// let myObject = create(myPrototype)
// Create an empty anonymous constructor with no side effects, for re-use later
var EmptyConstructor = function EmptyConstructor() {};

var create = Object.create || function create(obj) {
  // Set a temporary prototype
  EmptyConstructor.prototype = obj; // Create an object using our temporary constructor/prototype

  var instance = new EmptyConstructor(); // Reset the prototype for next time

  EmptyConstructor.prototype = null; // Return our new object, created without side effects

  return instance;
};

function _extend(obj, source) {
  if (!source) {
    return obj;
  }

  for (var key in source) {
    if (source.hasOwnProperty(key)) {
      obj[key] = source[key];
    }
  }

  return obj;
} // Is Object
// ---------
//
// Check of a let is an object or not
//
// isobject({}) -> true
// isobject('foo') -> false


function isobject(obj) {
  return obj && typeof obj === 'object' && obj instanceof Object;
} // Transpose properties
// -------------------------------------------------------------------
//
// Transpose properties from a list of objects onto a recipient object
//
// let recipient = {};
// transpose(recipient, [{a: 1, b: 2}, {c: 3}])
// recipient -> {a: 1, b: 2, c:3}


function transpose(recipient, args) {
  // Loop through all args
  for (var i = 0; i < args.length; i++) {
    var ob = args[i]; // Ignore anything that is not an object

    if (!isobject(ob)) {
      continue;
    } // Loop through all keys in our object


    for (var key in ob) {
      // Ignore any prototypal properties
      if (!ob.hasOwnProperty(key)) {
        continue;
      }

      var item = ob[key]; // Give the function a name

      if (item instanceof Function) {
        item.__name__ = key;
      }

      recipient[key] = item;
    }
  }
} // Construct a Class
// -----------------
//
// This is the primary constructor for all $Class objects


function construct() {
  // eslint-disable-line no-unused-vars
  // Call any custom constructor;
  if (this.construct) {
    var ob = this.construct.apply(this, arguments); // If we get a new object back, return that to the user

    if (isobject(ob)) {
      return ob;
    }
  } // Load any provided properties directly onto the object


  transpose(this, arguments); // Initialize the object

  if (this.init) {
    this.init();
  }
} // Reopen an object
// ----------------
//
// Add properties to the constructor's prototype
//
//     let Animal = $Class.extend();
//
//     Animal.reopen({
//       type: 'animal',
//     });
//
//     let cat = new Animal;
//     console.log(cat.type);


function reopen() {
  // Add some more properies to our prototype
  transpose(this.prototype, arguments);
  return this;
} // Reopen a class
// --------------
//
// Add properties to the constructor. These will propogate through future extends
//
//     let Animal = $Class.extend();
//
//     Animal.reopenClass({
//       fromCache: function(id) {
//         return cache[id] || new this({id: id});
//       }
//     }
//
//     let cat = Animal.fromCache('cat_54');


function reopenClass() {
  // Add some more properies to our class
  transpose(this, arguments); // Add to __classmethods__

  transpose(this.__classmethods__, arguments);
  return this;
}

function isChild(Cls) {
  return Cls && Cls.prototype instanceof this;
} // Generate a new class
// --------------------
//
// Generate a new constructor, with the specified name, and attach all static and prototypal methods


var id = 0;

function extend(name) {
  var Cls, className, args, argsLength, startIndex; // Accept an optional class name

  if (typeof name === 'string') {
    // Guard against javascript injection
    if (!name.match(/^[\w$][\w\d]*$/)) {
      throw new Error('Class name can not include special characters: ' + name);
    } // Use the provided name and slice out the first argument


    className = name;
    argsLength = arguments.length && arguments.length - 1;
    startIndex = 1;
  } else {
    // Otherwise default to the parent name, or 'Object' if generating our first class
    className = this.name || 'Object';
    argsLength = arguments.length;
    startIndex = 0;
  }

  args = new Array(argsLength);

  for (var i = startIndex; i < arguments.length; i++) {
    args[i - startIndex] = arguments[i];
  } // Dynamically create our constructor with a custom name


  eval('Cls = function ' + className + '() { return construct.apply(this, arguments) }'); // eslint-disable-line no-eval
  // Store the class name for future reference

  Cls.__name__ = className; // Set up a classmethods object. These will be inherited through subsequent extend() calls

  Cls.__classmethods__ = {
    extend: extend,
    reopen: reopen,
    reopenClass: reopenClass,
    isChild: isChild
  };
  id += 1;
  Cls.id = id; // If we're being called on an existing class, e.g. Class.extend(), we should inherit from that class

  if (this && this !== window) {
    // Inherit everything from superclass prototype
    Cls.prototype = create(this.prototype); // Re-set the constructor, which is overwritten by create

    Cls.prototype.constructor = Cls; // Add a reference to the superclass prototype for super method calls

    Cls.prototype._super = this.prototype; // Inherit any class methods from the superclass

    _extend(Cls.__classmethods__, this.__classmethods__);
  } // Add the class methods to our existing class


  _extend(Cls, Cls.__classmethods__); // Load any provided properties onto the constructor's prototype


  transpose(Cls.prototype, args); // Temporary: allow access from console/debugger

  if (className.indexOf('$') === 0) {
    window[className] = Cls;
  } else {
    window['$' + className] = Cls;
  }

  return Cls;
} // Multi-layer get
// ---------------
//
// Recursively gets a deep path from an object, returning a default value if any level is not found
//
// let obj = {bar: {baz: 1}}
// get(obj, 'bar.baz', 'default') -> 1
// get(obj, 'aaa.bbb', 'default') -> default


function _get(item, path, def) {
  if (!path) {
    return def;
  }

  path = path.split('.'); // Loop through each section of our key path

  for (var i = 0; i < path.length; i++) {
    // If we have an object, we can get the key
    if (isobject(item)) {
      item = item[path[i]]; // Otherwise, we should return the default (undefined if not provided)
    } else {
      return def;
    }
  } // If our final result is undefined, we should return the default


  return item === undefined ? def : item;
} // Multi-layer set
// ---------------
//
// Recursively sets a deep path from an object
//
// let obj = {bar: {baz: 1}}
// set(obj, 'bar.baz', 2)
// obj.bar.baz -> 1


function _set(item, path, value) {
  path = path.split('.'); // Loop through each section of our key path except the last

  for (var i = 0; i < path.length - 1; i++) {
    // Get the next item down
    item = item[path[i]]; // If we have an object, we're good

    if (isobject(item)) {
      continue; // Otherwise, there's nothing to set our key on
    } else {
      throw new Error(path[i - 1] + '.' + path[i] + ' is not an object');
    }
  } // Do the set on the retrieved object with our value


  item[path[path.length - 1]] = value;
} // Loop through object
// -------------------
//
// Loop an object and apply a function for each key/value
//
// let ob = {a: 1, b: 2, c: 3}
// each(ob, console.log) -> a 1  b 2  c 3


function each(ob, callback) {
  for (var key in ob) {
    if (ob.hasOwnProperty(key)) {
      callback.call(ob, key, ob[key]);
    }
  }
} // Gey keys of object
// ------------------
//
// Shim for Object.keys if it does not already exist
//
// let ob = {a: 1, b: 2, c: 3}
// keys(ob) -> ['a', 'b', 'c']


function _keys(ob) {
  if (Object.keys) {
    return Object.keys(ob);
  }

  var result = [];

  for (var key in ob) {
    if (ob.hasOwnProperty(key)) {
      result.push(key);
    }
  }

  return result;
} // Create a base class that can be inherited from
// ----------------------------------------------
//
// This is the public interface to the Class module.
// All classes with extend from Class and be provided with a set of base convenience methods.


var $Class = extend('Class', {
  init: function init() {// Empty init class, so calls to _super can be safely made
  },
  get: function get(path, def) {
    return _get(this, path, def);
  },
  set: function set(path, value) {
    _set(this, path, value);
  },
  setProperties: function setProperties() {
    transpose(this, arguments);
  },
  forEach: function forEach(callback) {
    each(this, callback);
  },
  keys: function keys() {
    return _keys(this);
  }
});
$Class.get = _get;
$Class.set = _set;
$Class.keys = _keys;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

try {
  var props = window.paypal.Checkout.props;
  props.style = props.style || {
    type: 'object',
    required: false
  };
  props.fundingSource = props.fundingSource || {
    type: 'string',
    required: false
  };
} catch (err) {// pass
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory();else {}
})(this, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId])
          /******/
          return installedModules[moduleId].exports;
        /******/
        // Create a new module (and put it into the cache)

        /******/

        var module = installedModules[moduleId] = {
          /******/
          exports: {},

          /******/
          id: moduleId,

          /******/
          loaded: false
          /******/

        };
        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        // Flag the module as loaded

        /******/

        module.loaded = true;
        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/
      // __webpack_public_path__

      /******/

      __webpack_require__.p = "";
      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(0);
      /******/
    }(
    /************************************************************************/

    /******/
    [
    /* 0 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _interface = __webpack_require__(1);

      Object.keys(_interface).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _interface[key];
          }
        });
      });

      var INTERFACE = _interopRequireWildcard(_interface);

      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};

          if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
          }

          newObj['default'] = obj;
          return newObj;
        }
      }

      exports['default'] = INTERFACE;
      /***/
    },
    /* 1 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _logger = __webpack_require__(2);

      Object.keys(_logger).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _logger[key];
          }
        });
      });

      var _init = __webpack_require__(7);

      Object.keys(_init).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _init[key];
          }
        });
      });

      var _transitions = __webpack_require__(9);

      Object.keys(_transitions).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _transitions[key];
          }
        });
      });

      var _builders = __webpack_require__(5);

      Object.keys(_builders).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _builders[key];
          }
        });
      });

      var _config = __webpack_require__(6);

      Object.keys(_config).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _config[key];
          }
        });
      });
      /***/
    },
    /* 2 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.flush = exports.tracking = exports.buffer = undefined;

      var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };

      exports.print = print;
      exports.immediateFlush = immediateFlush;
      exports.log = log;
      exports.prefix = prefix;
      exports.debug = debug;
      exports.info = info;
      exports.warn = warn;
      exports.error = error;
      exports.track = track;

      var _util = __webpack_require__(3);

      var _builders = __webpack_require__(5);

      var _config = __webpack_require__(6);

      var buffer = exports.buffer = [];
      var tracking = exports.tracking = {};

      if (Function.prototype.bind && window.console && _typeof(console.log) === 'object') {
        ['log', 'info', 'warn', 'error'].forEach(function (method) {
          console[method] = this.bind(console[method], console);
        }, Function.prototype.call);
      }

      var loaded = false;
      setTimeout(function () {
        loaded = true;
      }, 1);

      function print(level, event, payload) {
        if (!loaded) {
          return setTimeout(function () {
            return print(level, event, payload);
          }, 1);
        }

        if (!window.console || !window.console.log) {
          return;
        }

        var logLevel = window.LOG_LEVEL || _config.config.logLevel;

        if (_config.logLevels.indexOf(level) > _config.logLevels.indexOf(logLevel)) {
          return;
        }

        payload = payload || {};
        var args = [event];

        if ((0, _util.isIE)()) {
          payload = JSON.stringify(payload);
        }

        args.push(payload);

        if (payload.error || payload.warning) {
          args.push('\n\n', payload.error || payload.warning);
        }

        try {
          if (window.console[level] && window.console[level].apply) {
            window.console[level].apply(window.console, args);
          } else if (window.console.log && window.console.log.apply) {
            window.console.log.apply(window.console, args);
          }
        } catch (err) {// pass
        }
      }

      function immediateFlush() {
        var async = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        if (!_config.config.uri) {
          return;
        }

        var hasBuffer = buffer.length;
        var hasTracking = Object.keys(tracking).length;

        if (!hasBuffer && !hasTracking) {
          return;
        }

        if (hasTracking) {
          print('info', 'tracking', tracking);
        }

        var meta = {};

        for (var _iterator = _builders.metaBuilders, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
          var _ref;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
          }

          var builder = _ref;

          try {
            (0, _util.extend)(meta, builder(), false);
          } catch (err) {
            console.error('Error in custom meta builder:', err.stack || err.toString());
          }
        }

        for (var _iterator2 = _builders.trackingBuilders, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
          var _ref2;

          if (_isArray2) {
            if (_i2 >= _iterator2.length) break;
            _ref2 = _iterator2[_i2++];
          } else {
            _i2 = _iterator2.next();
            if (_i2.done) break;
            _ref2 = _i2.value;
          }

          var _builder = _ref2;

          try {
            (0, _util.extend)(tracking, _builder(), false);
          } catch (err) {
            console.error('Error in custom tracking builder:', err.stack || err.toString());
          }
        }

        var headers = {};

        for (var _iterator3 = _builders.headerBuilders, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
          var _ref3;

          if (_isArray3) {
            if (_i3 >= _iterator3.length) break;
            _ref3 = _iterator3[_i3++];
          } else {
            _i3 = _iterator3.next();
            if (_i3.done) break;
            _ref3 = _i3.value;
          }

          var _builder2 = _ref3;

          try {
            (0, _util.extend)(headers, _builder2(), false);
          } catch (err) {
            console.error('Error in custom header builder:', err.stack || err.toString());
          }
        }

        var events = buffer;
        var req = (0, _util.ajax)('post', _config.config.uri, headers, {
          events: events,
          meta: meta,
          tracking: tracking
        }, async);
        exports.buffer = buffer = [];
        exports.tracking = tracking = {};
        return req;
      }

      var _flush = (0, _util.promiseDebounce)(immediateFlush, _config.config.debounceInterval);

      exports.flush = _flush;

      function enqueue(level, event, payload) {
        buffer.push({
          level: level,
          event: event,
          payload: payload
        });

        if (_config.config.autoLog.indexOf(level) > -1) {
          _flush();
        }
      }

      function log(level, event, payload) {
        if (_config.config.prefix) {
          event = _config.config.prefix + '_' + event;
        }

        payload = payload || {};

        if (typeof payload === 'string') {
          payload = {
            message: payload
          };
        } else if (payload instanceof Error) {
          payload = {
            error: payload.stack || payload.toString()
          };
        }

        payload.timestamp = Date.now();

        for (var _iterator4 = _builders.payloadBuilders, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
          var _ref4;

          if (_isArray4) {
            if (_i4 >= _iterator4.length) break;
            _ref4 = _iterator4[_i4++];
          } else {
            _i4 = _iterator4.next();
            if (_i4.done) break;
            _ref4 = _i4.value;
          }

          var builder = _ref4;

          try {
            (0, _util.extend)(payload, builder(), false);
          } catch (err) {
            console.error('Error in custom payload builder:', err.stack || err.toString());
          }
        }

        if (!_config.config.silent) {
          print(level, event, payload);
        }

        if (buffer.length === _config.config.sizeLimit) {
          enqueue('info', 'logger_max_buffer_length');
        } else if (buffer.length < _config.config.sizeLimit) {
          enqueue(level, event, payload);
        }
      }

      function prefix(name) {
        return {
          debug: function debug(event, payload) {
            return log('debug', name + '_' + event, payload);
          },
          info: function info(event, payload) {
            return log('info', name + '_' + event, payload);
          },
          warn: function warn(event, payload) {
            return log('warn', name + '_' + event, payload);
          },
          error: function error(event, payload) {
            return log('error', name + '_' + event, payload);
          },
          flush: function flush() {
            return _flush();
          }
        };
      }

      function debug(event, payload) {
        return log('debug', event, payload);
      }

      function info(event, payload) {
        return log('info', event, payload);
      }

      function warn(event, payload) {
        return log('warn', event, payload);
      }

      function error(event, payload) {
        return log('error', event, payload);
      }

      function track(payload) {
        (0, _util.extend)(tracking, payload || {}, false);
      }
      /***/

    },
    /* 3 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.windowReady = undefined;
      exports.extend = extend;
      exports.isSameProtocol = isSameProtocol;
      exports.isSameDomain = isSameDomain;
      exports.ajax = ajax;
      exports.promiseDebounce = promiseDebounce;
      exports.safeInterval = safeInterval;
      exports.uniqueID = uniqueID;
      exports.isIE = isIE;

      var _promise = __webpack_require__(4);

      function extend(dest, src) {
        var over = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        dest = dest || {};
        src = src || {};

        for (var i in src) {
          if (src.hasOwnProperty(i)) {
            if (over || !dest.hasOwnProperty(i)) {
              dest[i] = src[i];
            }
          }
        }

        return dest;
      }

      function isSameProtocol(url) {
        return window.location.protocol === url.split('/')[0];
      }

      function isSameDomain(url) {
        var match = url.match(/https?:\/\/[^/]+/);

        if (!match) {
          return true;
        }

        return match[0] === window.location.protocol + '//' + window.location.host;
      }

      function ajax(method, url) {
        var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        var async = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
        return new _promise.SyncPromise(function (resolve) {
          var XRequest = window.XMLHttpRequest || window.ActiveXObject;

          if (window.XDomainRequest && !isSameDomain(url)) {
            if (!isSameProtocol(url)) {
              return resolve();
            }

            XRequest = window.XDomainRequest;
          }

          var req = new XRequest('MSXML2.XMLHTTP.3.0');
          req.open(method.toUpperCase(), url, async);
          req.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
          req.setRequestHeader('Content-type', 'application/json');

          for (var headerName in headers) {
            if (headers.hasOwnProperty(headerName)) {
              req.setRequestHeader(headerName, headers[headerName]);
            }
          }

          req.onreadystatechange = function () {
            if (req.readyState > 3) {
              resolve();
            }
          };

          req.send(JSON.stringify(data).replace(/&/g, '%26'));
        });
      }

      function promiseDebounce(method, interval) {
        var debounce = {};
        return function () {
          var args = arguments;

          if (debounce.timeout) {
            clearTimeout(debounce.timeout);
            delete debounce.timeout;
          }

          debounce.timeout = setTimeout(function () {
            var resolver = debounce.resolver;
            var rejector = debounce.rejector;
            delete debounce.promise;
            delete debounce.resolver;
            delete debounce.rejector;
            delete debounce.timeout;
            return _promise.SyncPromise.resolve().then(function () {
              return method.apply(null, args);
            }).then(resolver, rejector);
          }, interval);
          debounce.promise = debounce.promise || new _promise.SyncPromise(function (resolver, rejector) {
            debounce.resolver = resolver;
            debounce.rejector = rejector;
          });
          return debounce.promise;
        };
      }

      var windowReady = exports.windowReady = new _promise.SyncPromise(function (resolve) {
        if (document.readyState === 'complete') {
          resolve();
        }

        window.addEventListener('load', resolve);
      });

      function safeInterval(method, time) {
        var timeout = void 0;

        function loop() {
          timeout = setTimeout(function () {
            method();
            loop();
          }, time);
        }

        loop();
        return {
          cancel: function cancel() {
            clearTimeout(timeout);
          }
        };
      }

      function uniqueID() {
        var chars = '0123456789abcdef';
        return 'xxxxxxxxxx'.replace(/./g, function () {
          return chars.charAt(Math.floor(Math.random() * chars.length));
        });
      }

      function isIE() {
        return Boolean(window.document.documentMode);
      }
      /***/

    },
    /* 4 */

    /***/
    function (module, exports) {
      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.patchPromise = patchPromise;

      function trycatch(method, successHandler, errorHandler) {
        var isCalled = false;
        var isSuccess = false;
        var isError = false;
        var err = void 0,
            res = void 0;

        function flush() {
          if (isCalled) {
            if (isError) {
              return errorHandler(err);
            } else if (isSuccess) {
              return successHandler(res);
            }
          }
        }

        try {
          method(function (result) {
            res = result;
            isSuccess = true;
            flush();
          }, function (error) {
            err = error;
            isError = true;
            flush();
          });
        } catch (error) {
          return errorHandler(error);
        }

        isCalled = true;
        flush();
      }

      var possiblyUnhandledPromiseHandlers = [];
      var possiblyUnhandledPromises = [];
      var possiblyUnhandledPromiseTimeout = void 0;

      function addPossiblyUnhandledPromise(promise) {
        possiblyUnhandledPromises.push(promise);
        possiblyUnhandledPromiseTimeout = possiblyUnhandledPromiseTimeout || setTimeout(flushPossiblyUnhandledPromises, 1);
      }

      function flushPossiblyUnhandledPromises() {
        possiblyUnhandledPromiseTimeout = null;
        var promises = possiblyUnhandledPromises;
        possiblyUnhandledPromises = [];

        var _loop = function _loop(i) {
          var promise = promises[i];

          if (promise.silentReject) {
            return 'continue';
          }

          promise.handlers.push({
            onError: function onError(err) {
              if (promise.silentReject) {
                return;
              }

              dispatchError(err);
            }
          });
          promise.dispatch();
        };

        for (var i = 0; i < promises.length; i++) {
          var _ret = _loop(i);

          if (_ret === 'continue') continue;
        }
      }

      var dispatchedErrors = [];

      function dispatchError(err) {
        if (dispatchedErrors.indexOf(err) !== -1) {
          return;
        }

        dispatchedErrors.push(err);
        setTimeout(function () {
          throw err;
        }, 1);

        for (var j = 0; j < possiblyUnhandledPromiseHandlers.length; j++) {
          possiblyUnhandledPromiseHandlers[j](err);
        }
      }

      var toString = {}.toString;

      function isPromise(item) {
        try {
          if (!item) {
            return false;
          }

          if (window.Window && item instanceof window.Window) {
            return false;
          }

          if (window.constructor && item instanceof window.constructor) {
            return false;
          }

          if (toString) {
            var name = toString.call(item);

            if (name === '[object Window]' || name === '[object global]' || name === '[object DOMWindow]') {
              return false;
            }
          }

          if (item && item.then instanceof Function) {
            return true;
          }
        } catch (err) {
          return false;
        }

        return false;
      }

      var SyncPromise = exports.SyncPromise = function SyncPromise(handler) {
        this.resolved = false;
        this.rejected = false;
        this.silentReject = false;
        this.handlers = [];
        addPossiblyUnhandledPromise(this);

        if (!handler) {
          return;
        }

        var self = this;
        trycatch(handler, function (res) {
          return self.resolve(res);
        }, function (err) {
          return self.reject(err);
        });
      };

      SyncPromise.resolve = function SyncPromiseResolve(value) {
        if (isPromise(value)) {
          return value;
        }

        return new SyncPromise().resolve(value);
      };

      SyncPromise.reject = function SyncPromiseResolve(error) {
        return new SyncPromise().reject(error);
      };

      SyncPromise.prototype.resolve = function (result) {
        if (this.resolved || this.rejected) {
          return this;
        }

        if (isPromise(result)) {
          throw new Error('Can not resolve promise with another promise');
        }

        this.resolved = true;
        this.value = result;
        this.dispatch();
        return this;
      };

      SyncPromise.prototype.reject = function (error) {
        if (this.resolved || this.rejected) {
          return this;
        }

        if (isPromise(error)) {
          throw new Error('Can not reject promise with another promise');
        }

        this.rejected = true;
        this.value = error;
        this.dispatch();
        return this;
      };

      SyncPromise.prototype.asyncReject = function (error) {
        this.silentReject = true;
        this.reject(error);
      };

      SyncPromise.prototype.dispatch = function () {
        var _this = this;

        if (!this.resolved && !this.rejected) {
          return;
        }

        var _loop2 = function _loop2() {
          var handler = _this.handlers.shift();

          var result = void 0,
              error = void 0;

          try {
            if (_this.resolved) {
              result = handler.onSuccess ? handler.onSuccess(_this.value) : _this.value;
            } else if (_this.rejected) {
              if (handler.onError) {
                result = handler.onError(_this.value);
              } else {
                error = _this.value;
              }
            }
          } catch (err) {
            error = err;
          }

          if (result === _this) {
            throw new Error('Can not return a promise from the the then handler of the same promise');
          }

          if (!handler.promise) {
            return 'continue';
          }

          if (error) {
            handler.promise.reject(error);
          } else if (isPromise(result)) {
            result.then(function (res) {
              handler.promise.resolve(res);
            }, function (err) {
              handler.promise.reject(err);
            });
          } else {
            handler.promise.resolve(result);
          }
        };

        while (this.handlers.length) {
          var _ret2 = _loop2();

          if (_ret2 === 'continue') continue;
        }
      };

      SyncPromise.prototype.then = function (onSuccess, onError) {
        if (onSuccess && typeof onSuccess !== 'function' && !onSuccess.call) {
          throw new Error('Promise.then expected a function for success handler');
        }

        if (onError && typeof onError !== 'function' && !onError.call) {
          throw new Error('Promise.then expected a function for error handler');
        }

        var promise = new SyncPromise(null, this);
        this.handlers.push({
          promise: promise,
          onSuccess: onSuccess,
          onError: onError
        });
        this.silentReject = true;
        this.dispatch();
        return promise;
      };

      SyncPromise.prototype['catch'] = function (onError) {
        return this.then(null, onError);
      };

      SyncPromise.prototype['finally'] = function (handler) {
        return this.then(function (result) {
          return SyncPromise['try'](handler).then(function () {
            return result;
          });
        }, function (err) {
          return SyncPromise['try'](handler).then(function () {
            throw err;
          });
        });
      };

      SyncPromise.all = function (promises) {
        var promise = new SyncPromise();
        var count = promises.length;
        var results = [];

        var _loop3 = function _loop3(i) {
          var prom = isPromise(promises[i]) ? promises[i] : SyncPromise.resolve(promises[i]);
          prom.then(function (result) {
            results[i] = result;
            count -= 1;

            if (count === 0) {
              promise.resolve(results);
            }
          }, function (err) {
            promise.reject(err);
          });
        };

        for (var i = 0; i < promises.length; i++) {
          _loop3(i);
        }

        if (!count) {
          promise.resolve(results);
        }

        return promise;
      };

      SyncPromise.onPossiblyUnhandledException = function syncPromiseOnPossiblyUnhandledException(handler) {
        possiblyUnhandledPromiseHandlers.push(handler);
      };

      SyncPromise['try'] = function syncPromiseTry(method) {
        return SyncPromise.resolve().then(method);
      };

      SyncPromise.delay = function syncPromiseDelay(delay) {
        return new SyncPromise(function (resolve) {
          setTimeout(resolve, delay);
        });
      };

      SyncPromise.hash = function (obj) {
        var results = {};
        var promises = [];

        var _loop4 = function _loop4(key) {
          if (obj.hasOwnProperty(key)) {
            promises.push(SyncPromise.resolve(obj[key]).then(function (result) {
              results[key] = result;
            }));
          }
        };

        for (var key in obj) {
          _loop4(key);
        }

        return SyncPromise.all(promises).then(function () {
          return results;
        });
      };

      SyncPromise.promisifyCall = function () {
        var args = Array.prototype.slice.call(arguments);
        var method = args.shift();

        if (typeof method !== 'function') {
          throw new Error('Expected promisifyCall to be called with a function');
        }

        return new SyncPromise(function (resolve, reject) {
          args.push(function (err, result) {
            return err ? reject(err) : resolve(result);
          });
          return method.apply(null, args);
        });
      };

      function patchPromise() {
        window.Promise = SyncPromise;
      }
      /***/

    },
    /* 5 */

    /***/
    function (module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.addPayloadBuilder = addPayloadBuilder;
      exports.addMetaBuilder = addMetaBuilder;
      exports.addTrackingBuilder = addTrackingBuilder;
      exports.addHeaderBuilder = addHeaderBuilder;
      var payloadBuilders = exports.payloadBuilders = [];
      var metaBuilders = exports.metaBuilders = [];
      var trackingBuilders = exports.trackingBuilders = [];
      var headerBuilders = exports.headerBuilders = [];

      function addPayloadBuilder(builder) {
        payloadBuilders.push(builder);
      }

      function addMetaBuilder(builder) {
        metaBuilders.push(builder);
      }

      function addTrackingBuilder(builder) {
        trackingBuilders.push(builder);
      }

      function addHeaderBuilder(builder) {
        headerBuilders.push(builder);
      }
      /***/

    },
    /* 6 */

    /***/
    function (module, exports) {
      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var config = exports.config = {
        uri: '',
        prefix: '',
        initial_state_name: 'init',
        flushInterval: 10 * 60 * 1000,
        debounceInterval: 10,
        sizeLimit: 300,
        // Supress `console.log`s when `true`
        // Recommended for production usage
        silent: false,
        heartbeat: true,
        heartbeatConsoleLog: true,
        heartbeatInterval: 5000,
        heartbeatTooBusy: false,
        heartbeatTooBusyThreshold: 10000,
        logLevel: 'debug',
        autoLog: ['warn', 'error'],
        logUnload: true,
        logUnloadSync: false,
        logPerformance: true
      };
      var logLevels = exports.logLevels = ['error', 'warn', 'info', 'debug'];
      /***/
    },
    /* 7 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.init = init;

      var _config = __webpack_require__(6);

      var _util = __webpack_require__(3);

      var _performance = __webpack_require__(8);

      var _logger = __webpack_require__(2);

      var initiated = false;

      function init(conf) {
        (0, _util.extend)(_config.config, conf || {});

        if (initiated) {
          return;
        }

        initiated = true;

        if (_config.config.logPerformance) {
          (0, _performance.initPerformance)();
        }

        if (_config.config.heartbeat) {
          (0, _performance.initHeartBeat)();
        }

        if (_config.config.logUnload) {
          var async = !_config.config.logUnloadSync;
          window.addEventListener('beforeunload', function () {
            (0, _logger.info)('window_beforeunload');
            (0, _logger.immediateFlush)(async);
          });
          window.addEventListener('unload', function () {
            (0, _logger.info)('window_unload');
            (0, _logger.immediateFlush)(async);
          });
        }

        if (_config.config.flushInterval) {
          setInterval(_logger.flush, _config.config.flushInterval);
        }

        if (window.beaverLogQueue) {
          window.beaverLogQueue.forEach(function (payload) {
            (0, _logger.log)(payload.level, payload.event, payload);
          });
          delete window.beaverLogQueue;
        }
      }
      /***/

    },
    /* 8 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.reqTimer = exports.clientTimer = undefined;
      exports.now = now;
      exports.reqStartElapsed = reqStartElapsed;
      exports.initHeartBeat = initHeartBeat;
      exports.initPerformance = initPerformance;

      var _config = __webpack_require__(6);

      var _logger = __webpack_require__(2);

      var _builders = __webpack_require__(5);

      var _util = __webpack_require__(3);

      var enablePerformance = window && window.performance && performance.now && performance.timing && performance.timing.connectEnd && performance.timing.navigationStart && Math.abs(performance.now() - Date.now()) > 1000 && performance.now() - (performance.timing.connectEnd - performance.timing.navigationStart) > 0;

      function now() {
        if (enablePerformance) {
          return performance.now();
        } else {
          return Date.now();
        }
      }

      function timer(startTime) {
        startTime = startTime !== undefined ? startTime : now();
        return {
          startTime: startTime,
          elapsed: function elapsed() {
            return parseInt(now() - startTime, 10);
          },
          reset: function reset() {
            startTime = now();
          }
        };
      }

      function reqStartElapsed() {
        if (enablePerformance) {
          var timing = window.performance.timing;
          return parseInt(timing.connectEnd - timing.navigationStart, 10);
        }
      }

      var clientTimer = exports.clientTimer = timer();
      var reqTimer = exports.reqTimer = timer(reqStartElapsed());

      function initHeartBeat() {
        var heartBeatTimer = timer();
        var heartbeatCount = 0;
        (0, _util.safeInterval)(function () {
          if (_config.config.heartbeatMaxThreshold && heartbeatCount > _config.config.heartbeatMaxThreshold) {
            return;
          }

          heartbeatCount += 1;
          var elapsed = heartBeatTimer.elapsed();
          var lag = elapsed - _config.config.heartbeatInterval;
          var heartbeatPayload = {
            count: heartbeatCount,
            elapsed: elapsed
          };

          if (_config.config.heartbeatTooBusy) {
            heartbeatPayload.lag = lag;

            if (lag >= _config.config.heartbeatTooBusyThreshold) {
              (0, _logger.info)('toobusy', heartbeatPayload, {
                noConsole: !_config.config.heartbeatConsoleLog
              });
            }
          }

          (0, _logger.info)('heartbeat', heartbeatPayload, {
            noConsole: !_config.config.heartbeatConsoleLog
          });
        }, _config.config.heartbeatInterval);
      }

      function initPerformance() {
        if (!enablePerformance) {
          return (0, _logger.info)('no_performance_data');
        }

        (0, _builders.addPayloadBuilder)(function () {
          var payload = {};
          payload.client_elapsed = clientTimer.elapsed();

          if (enablePerformance) {
            payload.req_elapsed = reqTimer.elapsed();
          }

          return payload;
        });

        _util.windowReady.then(function () {
          var keys = ['connectEnd', 'connectStart', 'domComplete', 'domContentLoadedEventEnd', 'domContentLoadedEventStart', 'domInteractive', 'domLoading', 'domainLookupEnd', 'domainLookupStart', 'fetchStart', 'loadEventEnd', 'loadEventStart', 'navigationStart', 'redirectEnd', 'redirectStart', 'requestStart', 'responseEnd', 'responseStart', 'secureConnectionStart', 'unloadEventEnd', 'unloadEventStart'];
          var timing = {};
          keys.forEach(function (key) {
            timing[key] = parseInt(window.performance.timing[key], 10) || 0;
          });
          var offset = timing.connectEnd - timing.navigationStart;

          if (timing.connectEnd) {
            Object.keys(timing).forEach(function (name) {
              var time = timing[name];

              if (time) {
                (0, _logger.info)('timing_' + name, {
                  client_elapsed: parseInt(time - timing.connectEnd - (clientTimer.startTime - offset), 10),
                  req_elapsed: parseInt(time - timing.connectEnd, 10)
                });
              }
            });
          }

          (0, _logger.info)('timing', timing);
          (0, _logger.info)('memory', window.performance.memory);
          (0, _logger.info)('navigation', window.performance.navigation);

          if (window.performance.getEntries) {
            window.performance.getEntries().forEach(function (resource) {
              if (['link', 'script', 'img', 'css'].indexOf(resource.initiatorType) > -1) {
                (0, _logger.info)(resource.initiatorType, resource);
              }
            });
          }
        });
      }
      /***/

    },
    /* 9 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.startTransition = startTransition;
      exports.endTransition = endTransition;
      exports.transition = transition;

      var _performance = __webpack_require__(8);

      var _logger = __webpack_require__(2);

      var _builders = __webpack_require__(5);

      var _util = __webpack_require__(3);

      var _config = __webpack_require__(6);

      var windowID = (0, _util.uniqueID)();
      var pageID = (0, _util.uniqueID)();
      var currentState = _config.config.initial_state_name;
      var startTime = void 0;

      function startTransition() {
        startTime = (0, _performance.now)();
      }

      function endTransition(toState) {
        startTime = startTime || (0, _performance.reqStartElapsed)();
        var currentTime = (0, _performance.now)();
        var elapsedTime = void 0;

        if (startTime !== undefined) {
          elapsedTime = parseInt(currentTime - startTime, 0);
        }

        var transitionName = 'transition_' + currentState + '_to_' + toState;
        (0, _logger.info)(transitionName, {
          duration: elapsedTime
        });
        (0, _logger.track)({
          transition: transitionName,
          transition_time: elapsedTime
        });
        (0, _logger.immediateFlush)();
        startTime = currentTime;
        currentState = toState;
        pageID = (0, _util.uniqueID)();
      }

      function transition(toState) {
        startTransition();
        endTransition(toState);
      }

      (0, _builders.addPayloadBuilder)(function () {
        return {
          windowID: windowID,
          pageID: pageID
        };
      });
      (0, _builders.addMetaBuilder)(function () {
        return {
          state: 'ui_' + currentState
        };
      });
      /***/
    }
    /******/
    ])
  );
});

;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

(function (self) {
  'use strict';

  if (self.fetch) {
    return;
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && function () {
      try {
        new Blob();
        return true;
      } catch (e) {
        return false;
      }
    }(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  if (support.arrayBuffer) {
    var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];

    var isDataView = function isDataView(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj);
    };

    var isArrayBufferView = ArrayBuffer.isView || function (obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
    };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }

    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name');
    }

    return name.toLowerCase();
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }

    return value;
  } // Build a destructive iterator for the value list


  function iteratorFor(items) {
    var iterator = {
      next: function next() {
        var value = items.shift();
        return {
          done: value === undefined,
          value: value
        };
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function () {
        return iterator;
      };
    }

    return iterator;
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function (value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function (header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function (name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function (name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ',' + value : value;
  };

  Headers.prototype['delete'] = function (name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function (name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null;
  };

  Headers.prototype.has = function (name) {
    return this.map.hasOwnProperty(normalizeName(name));
  };

  Headers.prototype.set = function (name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function (callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function () {
    var items = [];
    this.forEach(function (value, name) {
      items.push(name);
    });
    return iteratorFor(items);
  };

  Headers.prototype.values = function () {
    var items = [];
    this.forEach(function (value) {
      items.push(value);
    });
    return iteratorFor(items);
  };

  Headers.prototype.entries = function () {
    var items = [];
    this.forEach(function (value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items);
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'));
    }

    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function (resolve, reject) {
      reader.onload = function () {
        resolve(reader.result);
      };

      reader.onerror = function () {
        reject(reader.error);
      };
    });
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise;
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise;
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }

    return chars.join('');
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0);
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer;
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function (body) {
      this._bodyInit = body;

      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer); // IE 10-11 can't handle a DataView body.

        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        throw new Error('unsupported BodyInit type');
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function () {
        var rejected = consumed(this);

        if (rejected) {
          return rejected;
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob);
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]));
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob');
        } else {
          return Promise.resolve(new Blob([this._bodyText]));
        }
      };

      this.arrayBuffer = function () {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
        } else {
          return this.blob().then(readBlobAsArrayBuffer);
        }
      };
    }

    this.text = function () {
      var rejected = consumed(this);

      if (rejected) {
        return rejected;
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob);
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text');
      } else {
        return Promise.resolve(this._bodyText);
      }
    };

    if (support.formData) {
      this.formData = function () {
        return this.text().then(decode);
      };
    }

    this.json = function () {
      return this.text().then(JSON.parse);
    };

    return this;
  } // HTTP methods whose capitalization should be normalized


  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method;
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read');
      }

      this.url = input.url;
      this.credentials = input.credentials;

      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }

      this.method = input.method;
      this.mode = input.mode;

      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'omit';

    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }

    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests');
    }

    this._initBody(body);
  }

  Request.prototype.clone = function () {
    return new Request(this, {
      body: this._bodyInit
    });
  };

  function decode(body) {
    var form = new FormData();
    body.trim().split('&').forEach(function (bytes) {
      if (bytes) {
        var split = bytes.split('=');
        var name = split.shift().replace(/\+/g, ' ');
        var value = split.join('=').replace(/\+/g, ' ');
        form.append(decodeURIComponent(name), decodeURIComponent(value));
      }
    });
    return form;
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers(); // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2

    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
    preProcessedHeaders.split(/\r?\n/).forEach(function (line) {
      var parts = line.split(':');
      var key = parts.shift().trim();

      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers;
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = options.status === undefined ? 200 : options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';

    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function () {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    });
  };

  Response.error = function () {
    var response = new Response(null, {
      status: 0,
      statusText: ''
    });
    response.type = 'error';
    return response;
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function (url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code');
    }

    return new Response(null, {
      status: status,
      headers: {
        location: url
      }
    });
  };

  self.Headers = Headers;
  self.Request = Request;
  self.Response = Response;

  self.fetch = function (input, init) {
    return new Promise(function (resolve, reject) {
      var request = new Request(input, init);
      var xhr = new XMLHttpRequest();

      xhr.onload = function () {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function () {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function () {
        reject(new TypeError('Network request failed'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function (value, name) {
        xhr.setRequestHeader(name, value);
      });
      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    });
  };

  self.fetch.polyfill = true;
})(typeof self !== 'undefined' ? self : this);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./public/js/button/hacks.js
var hacks = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/@paypal/sdk-constants/src/locale.js
/* eslint max-lines: 0 */
var COUNTRY = {
  AD: 'AD',
  AE: 'AE',
  AG: 'AG',
  AI: 'AI',
  AL: 'AL',
  AM: 'AM',
  AN: 'AN',
  AO: 'AO',
  AR: 'AR',
  AT: 'AT',
  AU: 'AU',
  AW: 'AW',
  AZ: 'AZ',
  BA: 'BA',
  BB: 'BB',
  BE: 'BE',
  BF: 'BF',
  BG: 'BG',
  BH: 'BH',
  BI: 'BI',
  BJ: 'BJ',
  BM: 'BM',
  BN: 'BN',
  BO: 'BO',
  BR: 'BR',
  BS: 'BS',
  BT: 'BT',
  BW: 'BW',
  BY: 'BY',
  BZ: 'BZ',
  CA: 'CA',
  CD: 'CD',
  CG: 'CG',
  CH: 'CH',
  CI: 'CI',
  CK: 'CK',
  CL: 'CL',
  CM: 'CM',
  CN: 'CN',
  CO: 'CO',
  CR: 'CR',
  CV: 'CV',
  CY: 'CY',
  CZ: 'CZ',
  DE: 'DE',
  DJ: 'DJ',
  DK: 'DK',
  DM: 'DM',
  DO: 'DO',
  DZ: 'DZ',
  EC: 'EC',
  EE: 'EE',
  EG: 'EG',
  ER: 'ER',
  ES: 'ES',
  ET: 'ET',
  FI: 'FI',
  FJ: 'FJ',
  FK: 'FK',
  FM: 'FM',
  FO: 'FO',
  FR: 'FR',
  GA: 'GA',
  GB: 'GB',
  GD: 'GD',
  GE: 'GE',
  GF: 'GF',
  GI: 'GI',
  GL: 'GL',
  GM: 'GM',
  GN: 'GN',
  GP: 'GP',
  GR: 'GR',
  GT: 'GT',
  GW: 'GW',
  GY: 'GY',
  HK: 'HK',
  HN: 'HN',
  HR: 'HR',
  HU: 'HU',
  ID: 'ID',
  IE: 'IE',
  IL: 'IL',
  IN: 'IN',
  IS: 'IS',
  IT: 'IT',
  JM: 'JM',
  JO: 'JO',
  JP: 'JP',
  KE: 'KE',
  KG: 'KG',
  KH: 'KH',
  KI: 'KI',
  KM: 'KM',
  KN: 'KN',
  KR: 'KR',
  KW: 'KW',
  KY: 'KY',
  KZ: 'KZ',
  LA: 'LA',
  LC: 'LC',
  LI: 'LI',
  LK: 'LK',
  LS: 'LS',
  LT: 'LT',
  LU: 'LU',
  LV: 'LV',
  MA: 'MA',
  MC: 'MC',
  MD: 'MD',
  ME: 'ME',
  MG: 'MG',
  MH: 'MH',
  MK: 'MK',
  ML: 'ML',
  MN: 'MN',
  MQ: 'MQ',
  MR: 'MR',
  MS: 'MS',
  MT: 'MT',
  MU: 'MU',
  MV: 'MV',
  MW: 'MW',
  MX: 'MX',
  MY: 'MY',
  MZ: 'MZ',
  NA: 'NA',
  NC: 'NC',
  NE: 'NE',
  NF: 'NF',
  NG: 'NG',
  NI: 'NI',
  NL: 'NL',
  NO: 'NO',
  NP: 'NP',
  NR: 'NR',
  NU: 'NU',
  NZ: 'NZ',
  OM: 'OM',
  PA: 'PA',
  PE: 'PE',
  PF: 'PF',
  PG: 'PG',
  PH: 'PH',
  PL: 'PL',
  PM: 'PM',
  PN: 'PN',
  PT: 'PT',
  PW: 'PW',
  PY: 'PY',
  QA: 'QA',
  RE: 'RE',
  RO: 'RO',
  RS: 'RS',
  RU: 'RU',
  RW: 'RW',
  SA: 'SA',
  SB: 'SB',
  SC: 'SC',
  SE: 'SE',
  SG: 'SG',
  SH: 'SH',
  SI: 'SI',
  SJ: 'SJ',
  SK: 'SK',
  SL: 'SL',
  SM: 'SM',
  SN: 'SN',
  SO: 'SO',
  SR: 'SR',
  ST: 'ST',
  SV: 'SV',
  SZ: 'SZ',
  TC: 'TC',
  TD: 'TD',
  TG: 'TG',
  TH: 'TH',
  TJ: 'TJ',
  TM: 'TM',
  TN: 'TN',
  TO: 'TO',
  TR: 'TR',
  TT: 'TT',
  TV: 'TV',
  TW: 'TW',
  TZ: 'TZ',
  UA: 'UA',
  UG: 'UG',
  US: 'US',
  UY: 'UY',
  VA: 'VA',
  VC: 'VC',
  VE: 'VE',
  VG: 'VG',
  VN: 'VN',
  VU: 'VU',
  WF: 'WF',
  WS: 'WS',
  YE: 'YE',
  YT: 'YT',
  ZA: 'ZA',
  ZM: 'ZM',
  ZW: 'ZW'
};
var LANG = {
  AR: 'ar',
  CS: 'cs',
  DA: 'da',
  DE: 'de',
  EL: 'el',
  EN: 'en',
  ES: 'es',
  FI: 'fi',
  FR: 'fr',
  HE: 'he',
  HU: 'hu',
  ID: 'id',
  IT: 'it',
  JA: 'ja',
  KO: 'ko',
  NL: 'nl',
  NO: 'no',
  PL: 'pl',
  PT: 'pt',
  RU: 'ru',
  SK: 'sk',
  SV: 'sv',
  TH: 'th',
  TR: 'tr',
  ZH: 'zh'
};
var COUNTRY_LANGS = {
  AD: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  AE: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH, LANG.AR],
  AG: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  AI: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  AL: [LANG.EN],
  AM: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  AN: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  AO: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  AR: [LANG.ES, LANG.EN],
  AT: [LANG.DE, LANG.EN],
  AU: [LANG.EN],
  AW: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  AZ: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  BA: [LANG.EN],
  BB: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  BE: [LANG.EN, LANG.NL, LANG.FR],
  BF: [LANG.FR, LANG.EN, LANG.ES, LANG.ZH],
  BG: [LANG.EN],
  BH: [LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  BI: [LANG.FR, LANG.EN, LANG.ES, LANG.ZH],
  BJ: [LANG.FR, LANG.EN, LANG.ES, LANG.ZH],
  BM: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  BN: [LANG.EN],
  BO: [LANG.ES, LANG.EN, LANG.FR, LANG.ZH],
  BR: [LANG.PT, LANG.EN],
  BS: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  BT: [LANG.EN],
  BW: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  BY: [LANG.EN],
  BZ: [LANG.EN, LANG.ES, LANG.FR, LANG.ZH],
  CA: [LANG.EN, LANG.FR],
  CD: [LANG.FR, LANG.EN, LANG.ES, LANG.ZH],
  CG: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  CH: [LANG.DE, LANG.FR, LANG.EN],
  CI: [LANG.FR, LANG.EN],
  CK: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  CL: [LANG.ES, LANG.EN, LANG.FR, LANG.ZH],
  CM: [LANG.FR, LANG.EN],
  CN: [LANG.ZH],
  CO: [LANG.ES, LANG.EN, LANG.FR, LANG.ZH],
  CR: [LANG.ES, LANG.EN, LANG.FR, LANG.ZH],
  CV: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  CY: [LANG.EN],
  CZ: [LANG.CS, LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  DE: [LANG.DE, LANG.EN],
  DJ: [LANG.FR, LANG.EN, LANG.ES, LANG.ZH],
  DK: [LANG.DA, LANG.EN],
  DM: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  DO: [LANG.ES, LANG.EN, LANG.FR, LANG.ZH],
  DZ: [LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  EC: [LANG.ES, LANG.EN, LANG.FR, LANG.ZH],
  EE: [LANG.EN, LANG.RU, LANG.FR, LANG.ES, LANG.ZH],
  EG: [LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  ER: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  ES: [LANG.ES, LANG.EN],
  ET: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  FI: [LANG.FI, LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  FJ: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  FK: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  FM: [LANG.EN],
  FO: [LANG.DA, LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  FR: [LANG.FR, LANG.EN],
  GA: [LANG.FR, LANG.EN, LANG.ES, LANG.ZH],
  GB: [LANG.EN],
  GD: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  GE: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  GF: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  GI: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  GL: [LANG.DA, LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  GM: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  GN: [LANG.FR, LANG.EN, LANG.ES, LANG.ZH],
  GP: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  GR: [LANG.EL, LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  GT: [LANG.ES, LANG.EN, LANG.FR, LANG.ZH],
  GW: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  GY: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  HK: [LANG.EN, LANG.ZH],
  HN: [LANG.ES, LANG.EN, LANG.FR, LANG.ZH],
  HR: [LANG.EN],
  HU: [LANG.HU, LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  ID: [LANG.ID, LANG.EN],
  IE: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  IL: [LANG.HE, LANG.EN],
  IN: [LANG.EN],
  IS: [LANG.EN],
  IT: [LANG.IT, LANG.EN],
  JM: [LANG.EN, LANG.ES, LANG.FR, LANG.ZH],
  JO: [LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  JP: [LANG.JA, LANG.EN],
  KE: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  KG: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  KH: [LANG.EN],
  KI: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  KM: [LANG.FR, LANG.EN, LANG.ES, LANG.ZH],
  KN: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  KR: [LANG.KO, LANG.EN],
  KW: [LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  KY: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  KZ: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  LA: [LANG.EN],
  LC: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  LI: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  LK: [LANG.EN],
  LS: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  LT: [LANG.EN, LANG.RU, LANG.FR, LANG.ES, LANG.ZH],
  LU: [LANG.EN, LANG.DE, LANG.FR, LANG.ES, LANG.ZH],
  LV: [LANG.EN, LANG.RU, LANG.FR, LANG.ES, LANG.ZH],
  MA: [LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  MC: [LANG.FR, LANG.EN],
  MD: [LANG.EN],
  ME: [LANG.EN],
  MG: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  MH: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  MK: [LANG.EN],
  ML: [LANG.FR, LANG.EN, LANG.ES, LANG.ZH],
  MN: [LANG.EN],
  MQ: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  MR: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  MS: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  MT: [LANG.EN],
  MU: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  MV: [LANG.EN],
  MW: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  MX: [LANG.ES, LANG.EN],
  MY: [LANG.EN],
  MZ: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  NA: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  NC: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  NE: [LANG.FR, LANG.EN, LANG.ES, LANG.ZH],
  NF: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  NG: [LANG.EN],
  NI: [LANG.ES, LANG.EN, LANG.FR, LANG.ZH],
  NL: [LANG.NL, LANG.EN],
  NO: [LANG.NO, LANG.EN],
  NP: [LANG.EN],
  NR: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  NU: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  NZ: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  OM: [LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  PA: [LANG.ES, LANG.EN, LANG.FR, LANG.ZH],
  PE: [LANG.ES, LANG.EN, LANG.FR, LANG.ZH],
  PF: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  PG: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  PH: [LANG.EN],
  PL: [LANG.PL, LANG.EN],
  PM: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  PN: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  PT: [LANG.PT, LANG.EN],
  PW: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  PY: [LANG.ES, LANG.EN],
  QA: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH, LANG.AR],
  RE: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  RO: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  RS: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  RU: [LANG.RU, LANG.EN],
  RW: [LANG.FR, LANG.EN, LANG.ES, LANG.ZH],
  SA: [LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  SB: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  SC: [LANG.FR, LANG.EN, LANG.ES, LANG.ZH],
  SE: [LANG.SV, LANG.EN],
  SG: [LANG.EN],
  SH: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  SI: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  SJ: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  SK: [LANG.SK, LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  SL: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  SM: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  SN: [LANG.FR, LANG.EN, LANG.ES, LANG.ZH],
  SO: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  SR: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  ST: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  SV: [LANG.ES, LANG.EN, LANG.FR, LANG.ZH],
  SZ: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  TC: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  TD: [LANG.FR, LANG.EN, LANG.ES, LANG.ZH],
  TG: [LANG.FR, LANG.EN, LANG.ES, LANG.ZH],
  TH: [LANG.TH, LANG.EN],
  TJ: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  TM: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  TN: [LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  TO: [LANG.EN],
  TR: [LANG.TR, LANG.EN],
  TT: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  TV: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  TW: [LANG.ZH, LANG.EN],
  TZ: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  UA: [LANG.EN, LANG.RU, LANG.FR, LANG.ES, LANG.ZH],
  UG: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  US: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  UY: [LANG.ES, LANG.EN, LANG.FR, LANG.ZH],
  VA: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  VC: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  VE: [LANG.ES, LANG.EN, LANG.FR, LANG.ZH],
  VG: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  VN: [LANG.EN],
  VU: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  WF: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  WS: [LANG.EN],
  YE: [LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  YT: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  ZA: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  ZM: [LANG.EN, LANG.FR, LANG.ES, LANG.ZH],
  ZW: [LANG.EN]
};
// CONCATENATED MODULE: ./node_modules/@paypal/sdk-constants/src/params.js
var SDK_PATH = '/sdk/js';
var SDK_SETTINGS = {
  NAMESPACE: 'data-namespace',
  CLIENT_TOKEN: 'data-client-token',
  PARTNER_ATTRIBUTION_ID: 'data-partner-attribution-id',
  STAGE_HOST: 'data-stage-host',
  API_STAGE_HOST: 'data-api-stage-host',
  CSP_NONCE: 'data-csp-nonce',
  ENABLE_3DS: 'data-enable-3ds',
  SDK_INTEGRATION_SOURCE: 'data-sdk-integration-source'
};
var SDK_QUERY_KEYS = {
  COMPONENTS: 'components',
  ENV: 'env',
  DEBUG: 'debug',
  CACHEBUST: 'cachebust',
  CLIENT_ID: 'client-id',
  MERCHANT_ID: 'merchant-id',
  MERCHANT_EMAIL_HASH: 'merchant-email-hash',
  LOCALE: 'locale',
  CURRENCY: 'currency',
  INTENT: 'intent',
  COMMIT: 'commit',
  VAULT: 'vault',
  BUYER_COUNTRY: 'buyer-country',
  DISABLE_FUNDING: 'disable-funding',
  DISABLE_CARD: 'disable-card',
  LOCALE_COUNTRY: 'locale-country',
  LOCALE_LANG: 'locale-lang',
  FRAMEWORK: 'framework',
  INTEGRATION_DATE: 'integration-date',
  ORDER_CURRENCY: 'order-currency',
  ORDER_INTENT: 'order-intent',
  ORDER_COMMIT: 'order-commit',
  ORDER_VAULT: 'order-vault',
  STAGE_HOST: 'stage-host'
};
var COMPONENTS = {
  BUTTONS: 'buttons',
  HOSTED_FIELDS: 'hosted-fields'
};
var FRAMEWORK = {
  ANGULARJS: 'angularjs',
  ANGULAR: 'angular',
  REACT: 'react',
  VUE: 'vue'
};
var DEBUG = {
  TRUE: true,
  FALSE: false
};
var QUERY_BOOL = {
  TRUE: 'true',
  FALSE: 'false'
};
var UNKNOWN = 'unknown';
var PROTOCOL = {
  HTTP: 'http',
  HTTPS: 'https'
};
// CONCATENATED MODULE: ./node_modules/@paypal/sdk-constants/src/env.js
var ENV = {
  LOCAL: 'local',
  STAGE: 'stage',
  SANDBOX: 'sandbox',
  PRODUCTION: 'production',
  TEST: 'test'
};
// CONCATENATED MODULE: ./node_modules/@paypal/sdk-constants/src/fpti.js
var FPTI_KEY = {
  FEED: 'feed_name',
  STATE: 'state_name',
  TRANSITION: 'transition_name',
  BUTTON_TYPE: 'button_type',
  SESSION_UID: 'page_session_id',
  BUTTON_SESSION_UID: 'button_session_id',
  TOKEN: 'token',
  CONTEXT_ID: 'context_id',
  CONTEXT_TYPE: 'context_type',
  REFERER: 'referer_url',
  MERCHANT_DOMAIN: 'merchant_domain',
  PAY_ID: 'pay_id',
  SELLER_ID: 'seller_id',
  CLIENT_ID: 'client_id',
  DATA_SOURCE: 'serverside_data_source',
  BUTTON_SOURCE: 'button_source',
  ERROR_CODE: 'ext_error_code',
  ERROR_DESC: 'ext_error_desc',
  PAGE_LOAD_TIME: 'page_load_time',
  EXPERIMENT_NAME: 'pxp_exp_id',
  TREATMENT_NAME: 'pxp_trtmnt_id',
  TRANSITION_TIME: 'transition_time',
  FUNDING_LIST: 'eligible_payment_methods',
  FUNDING_COUNT: 'eligible_payment_count',
  CHOSEN_FUNDING: 'selected_payment_method',
  BUTTON_LAYOUT: 'button_layout',
  VERSION: 'checkoutjs_version',
  LOCALE: 'locale',
  BUYER_COUNTRY: 'buyer_cntry',
  INTEGRATION_IDENTIFIER: 'integration_identifier',
  PARTNER_ATTRIBUTION_ID: 'bn_code',
  SDK_NAME: 'sdk_name',
  SDK_VERSION: 'sdk_version',
  USER_AGENT: 'user_agent',
  USER_ACTION: 'user_action',
  CONTEXT_CORRID: 'context_correlation_id',
  SDK_CACHE: 'sdk_cache',
  SDK_LOAD_TIME: 'sdk_load_time',
  IS_VAULT: 'is_vault',
  DISABLE_FUNDING: 'disable_funding',
  DISABLE_CARD: 'disable_card',
  RESPONSE_DURATION: 'response_duration',
  SDK_INTEGRATION_SOURCE: 'sdk_integration_source',
  PAYMENT_FLOW: 'payment_flow',
  BUTTON_VERSION: 'button_version'
};
var FPTI_USER_ACTION = {
  COMMIT: 'commit',
  CONTINUE: 'continue'
};
var FPTI_DATA_SOURCE = {
  PAYMENTS_SDK: 'checkout'
};
var FPTI_FEED = {
  PAYMENTS_SDK: 'payments_sdk'
};
var FPTI_SDK_NAME = {
  PAYMENTS_SDK: 'payments_sdk'
};
// CONCATENATED MODULE: ./node_modules/@paypal/sdk-constants/src/order.js
var INTENT = {
  CAPTURE: 'capture',
  AUTHORIZE: 'authorize',
  ORDER: 'order'
};
var COMMIT = {
  TRUE: true,
  FALSE: false
};
var VAULT = {
  TRUE: true,
  FALSE: false
};
var CURRENCY = {
  AUD: 'AUD',
  BRL: 'BRL',
  CAD: 'CAD',
  CZK: 'CZK',
  DKK: 'DKK',
  EUR: 'EUR',
  HKD: 'HKD',
  HUF: 'HUF',
  INR: 'INR',
  ILS: 'ILS',
  JPY: 'JPY',
  MUR: 'MUR',
  MYR: 'MYR',
  MXN: 'MXN',
  TWD: 'TWD',
  NZD: 'NZD',
  NOK: 'NOK',
  PHP: 'PHP',
  PLN: 'PLN',
  GBP: 'GBP',
  RUB: 'RUB',
  SGD: 'SGD',
  SEK: 'SEK',
  CHF: 'CHF',
  THB: 'THB',
  USD: 'USD'
};
// CONCATENATED MODULE: ./node_modules/@paypal/sdk-constants/src/platform.js
var PLATFORM = {
  DESKTOP: 'desktop',
  MOBILE: 'mobile'
};
// CONCATENATED MODULE: ./node_modules/@paypal/sdk-constants/src/funding.js
var FUNDING = {
  PAYPAL: 'paypal',
  VENMO: 'venmo',
  ITAU: 'itau',
  CREDIT: 'credit',
  CARD: 'card',
  IDEAL: 'ideal',
  SEPA: 'sepa',
  BANCONTACT: 'bancontact',
  GIROPAY: 'giropay',
  SOFORT: 'sofort',
  EPS: 'eps',
  MYBANK: 'mybank',
  P24: 'p24',
  VERKKOPANKKI: 'verkkopankki',
  PAYU: 'payu',
  BLIK: 'blik',
  TRUSTLY: 'trustly',
  ZIMPLER: 'zimpler',
  MAXIMA: 'maxima',
  OXXO: 'oxxo',
  BOLETO: 'boleto',
  WECHATPAY: 'wechatpay'
};
var CARD = {
  VISA: 'visa',
  MASTERCARD: 'mastercard',
  AMEX: 'amex',
  DISCOVER: 'discover',
  HIPER: 'hiper',
  ELO: 'elo',
  JCB: 'jcb',
  CUP: 'cup'
};
// CONCATENATED MODULE: ./node_modules/@paypal/sdk-constants/src/defaults.js



var DEFAULT_COUNTRY = COUNTRY.US;
var DEFAULT_CURRENCY = CURRENCY.USD;
var DEFAULT_INTENT = INTENT.CAPTURE;
var DEFAULT_COMMIT = COMMIT.TRUE;
var DEFAULT_SALE_COMMIT = COMMIT.TRUE;
var DEFAULT_NONSALE_COMMIT = COMMIT.TRUE;
var DEFAULT_VAULT = VAULT.FALSE;
var DEFAULT_COMPONENTS = COMPONENTS.BUTTONS;
var DEFAULT_DEBUG = DEBUG.FALSE;
// CONCATENATED MODULE: ./node_modules/@paypal/sdk-constants/src/index.js








// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
// CONCATENATED MODULE: ./button/util/get.js
// eslint-disable-next-line flowtype/no-weak-types
var isObjectOrArray = function isObjectOrArray(value) {
  return value && typeof value === 'object' && value instanceof Object;
}; // Multi-layer get
// ---------------
//
// Recursively gets a deep path from an object, returning a default value if any level is not found
//
// let obj = {bar: {baz: 1}}
// get(obj, 'bar.baz', 'default') -> 1
// get(obj, 'aaa.bbb', 'default') -> default
// eslint-disable-next-line flowtype/no-weak-types

var get_get = function get(item, path, def) {
  if (!path) {
    return def;
  }

  var splitPath = path.split('.'); // Loop through each section of our key path

  for (var i = 0; i < splitPath.length; i++) {
    // If we have an object, we can get the key
    if (isObjectOrArray(item)) {
      item = item[splitPath[i]]; // Otherwise, we should return the default (undefined if not provided)
    } else {
      return def;
    }
  } // If our final result is undefined, we should return the default


  return item === undefined ? def : item;
};
// CONCATENATED MODULE: ./public/js/inlineGuest/state.js


/* eslint max-lines: off */

var DEFAULT_HEIGHT = 300;
var state_state = {
  contentHeight: DEFAULT_HEIGHT,
  isZomboRendered: false,
  currentCardType: undefined,
  isExpanded: false,
  zipCode: undefined
};
var state_isSubmitting = function isSubmitting() {
  if (window.xprops.zomboStore && window.xprops.zomboStore.getState) {
    var store = window.xprops.zomboStore.getState();
    return get_get(store, 'app.isLoading', false);
  }

  return false;
};
var state_getState = function getState() {
  return state_state || {};
};
var state_setState = function setState(newState) {
  state_state = _extends({}, state_state, {}, newState);
};
// CONCATENATED MODULE: ./public/js/button/util.js
// eslint-disable-next-line flowtype/no-weak-types
function memoize(method) {
  var called = false;
  var result; // eslint-disable-next-line no-unused-vars, flowtype/no-weak-types

  function memoizeWrapper() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (called) {
      return result;
    }

    called = true;
    result = method.apply(this, arguments);
    return result;
  }

  memoizeWrapper.reset = function () {
    called = false;
  };

  return memoizeWrapper;
}
function querySelectorAll(selector, doc) {
  if (doc === void 0) {
    doc = window.document;
  }

  return Array.prototype.slice.call(doc.querySelectorAll(selector));
} // eslint-disable-next-line no-unused-vars, flowtype/no-weak-types

function noop() {// pass
}
function urlWillRedirectPage(url) {
  if (url.indexOf('#') === -1) {
    return true;
  }

  if (url.indexOf('#') === 0) {
    return false;
  }

  if (url.split('#')[0] === window.location.href.split('#')[0]) {
    return false;
  }

  return true;
}
function util_redirect(win, url) {
  if (win === void 0) {
    win = window;
  }

  return new window.paypal.Promise(function (resolve) {
    setTimeout(function () {
      win.location = url;

      if (!urlWillRedirectPage(url)) {
        resolve();
      }
    }, 1);
  });
}
function sendBeacon(url) {
  var img = document.createElement('img');
  img.src = url;
  img.style.visibility = 'hidden';
  img.style.position = 'absolute';

  if (document.body) {
    document.body.appendChild(img);
  }
}
// CONCATENATED MODULE: ./public/js/inlineGuest/constants.js
var BUTTON_MARGINS = {
  large: 14,
  medium: 11,
  small: 5,
  responsive: 11,
  default: 11
};
var BUTTON_HEIGHTS = {
  large: 45,
  medium: 35,
  small: 25,
  responsive: 35,
  default: 35
};
var POWERED_BY_PAYPAL_HEIGHT = 20;
var PADDING = 35;
var ACTIONS = {
  ZIP_CODE_CHANGED: 'ZIP_CODE_CHANGED',
  DISPLAY_GO_TO_XOON: 'DISPLAY_GO_TO_XOON',
  OPEN_BILLING_ADDRESS: '@BILLING_PAGE/OPEN',
  SUBMIT_BILLING_ADDRESS: '@BILLING_PAGE/SUBMIT',
  SET_CONTENT_HEIGHT: 'SET_CONTENT_HEIGHT',
  CARD_TYPE_CHANGED: 'CARD_TYPE_CHANGED',
  CARD_FORM_COLLAPSE: 'CARD_FORM_COLLAPSE',
  CARD_FORM_EXPAND: 'CARD_FORM_EXPAND',
  CARD_FORM_CLEAR: 'CARD_FORM_CLEAR',
  BUTTONS_RESET: 'BUTTONS_RESET',
  CARD_FORM_RESPONDED_SUCCESS: 'CARD_FORM_RESPONDED_SUCCESS',
  CREDIT_FORM_RESET: '@@redux-form/RESET'
};
var clearFormAction = {
  type: '@@redux-form/RESET',
  meta: {
    form: 'card_fields'
  }
};
// CONCATENATED MODULE: ./public/js/inlineGuest/utils/getButtonHeight.js



var getButtonHeight_getButtonHeight = function getButtonHeight() {
  var buttons = querySelectorAll('.paypal-button-number-0');

  if (!buttons || buttons.length === 0) {
    return BUTTON_HEIGHTS.default + BUTTON_MARGINS.default;
  }

  var button = buttons[0];
  var style = button.currentStyle || window.getComputedStyle(button);
  var marginBottom = Number(get_get(style, 'marginBottom', '0').replace('px', ''));
  var buttonHeight = button.clientHeight;
  var buttonMargin = marginBottom;
  return buttonHeight + buttonMargin;
};
// CONCATENATED MODULE: ./public/js/inlineGuest/utils/index.js


function addClass(element, className) {
  if (!element) {
    return;
  }

  var classes = element.className.split(' ');
  var i = classes.indexOf(className);

  if (i < 0 && typeof className === 'string') {
    classes.push(className);
  }

  element.className = classes.join(' ');
}
function removeClass(element, className) {
  if (!element) {
    return;
  }

  var classes = element.className.split(' ');
  var i = classes.indexOf(className);

  if (i >= 0) {
    classes.splice(i, 1);
  }

  element.className = classes.join(' ');
}
var cardButtons = querySelectorAll('.paypal-button-card') || [];
var CARD_CLASSES = cardButtons.reduce(function (acc, el) {
  if (el) {
    var cardType = el.getAttribute('data-card');

    if (cardType) {
      acc[cardType.toUpperCase()] = cardType;
    }
  }

  return acc;
}, {});
var getCardClass = function getCardClass(type) {
  return ".paypal-button-card-" + type;
};
var utils_getCardElementFromCardType = function getCardElementFromCardType(type) {
  var cardClass = getCardClass(type);
  var cardElements = querySelectorAll(cardClass);

  if (cardElements && cardElements[0]) {
    var imgEl = cardElements[0];
    return imgEl;
  }

  return null;
};
var enableCard = function enableCard(cardEl) {
  if (cardEl && cardEl.style) {
    cardEl.style.opacity = '1';
  }
};
var disableCard = function disableCard(cardEl) {
  if (cardEl && cardEl.style) {
    cardEl.style.opacity = '0.1';
  }
};
var enableAllCardTypes = function enableAllCardTypes() {
  Object.keys(CARD_CLASSES).map(function (k) {
    return CARD_CLASSES[k];
  }).forEach(function (type) {
    var cardEl = utils_getCardElementFromCardType(type);
    enableCard(cardEl);
  });
};
var disableAllCardTypes = function disableAllCardTypes() {
  Object.keys(CARD_CLASSES).map(function (k) {
    return CARD_CLASSES[k];
  }).forEach(function (type) {
    var cardEl = utils_getCardElementFromCardType(type);
    disableCard(cardEl);
  });
};
// CONCATENATED MODULE: ./public/js/inlineGuest/billing.js


function renderBillingPage(props) {
  if (props === void 0) {
    props = {};
  }

  return window.paypal.BillingPage.renderTo(window.top, _extends({
    locale: window.xprops.locale,
    commit: window.xprops.commit,
    on: function on(action) {
      if (window.xprops.on) {
        window.xprops.on(action);
      }
    },
    onError: window.xchild.error
  }, props), 'body').then(noop);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/squid-core/node_modules/beaver-logger/index.js
var beaver_logger = __webpack_require__(0);
var beaver_logger_default = /*#__PURE__*/__webpack_require__.n(beaver_logger);

// CONCATENATED MODULE: ./node_modules/squid-core/dist/config.js
var $meta = window.meta || {};
var $cookies = window.cookies || {};
var $config = window.config || {};
// CONCATENATED MODULE: ./node_modules/squid-core/dist/integration.js

var $DEFAULT = 'DEFAULT';
var $CONTEXT = {
  // Full page checkout
  FULLPAGE: 'FULLPAGE',
  // Checkout in popup
  POPUP: 'POPUP',
  // Checkout in lightbox (iframe)
  LIGHTBOX: 'LIGHTBOX',
  // Web view
  WEBVIEW: 'WEBVIEW',
  // Native checkout
  NATIVE_CHECKOUT: 'NATIVE_CHECKOUT'
};
var $integration = {
  flow: $DEFAULT,
  init: function init(flow, config) {
    this.config = config || {};

    if (flow) {
      this.setFlow(flow);
    }

    this.setContext(this.getContext());
  },
  getContext: function getContext() {
    if (this.isIFrame()) {
      return $CONTEXT.LIGHTBOX;
    } else if (this.isPopup()) {
      return $CONTEXT.POPUP;
    } else {
      return $CONTEXT.FULLPAGE;
    }
  },
  isPopup: function isPopup() {
    return Boolean(window.opener);
  },
  isIFrame: function isIFrame() {
    return window.top !== window.self;
  },
  setContext: function setContext(context) {
    beaver_logger_default.a.info("integration_context_" + context);
    this.context = context;
  },
  setFlow: function setFlow(flow) {
    beaver_logger_default.a.info("integration_flow_" + flow);
    this.flow = flow;
  },
  is: function is(context, flow) {
    return this.isContext(context) && this.isFlow(flow);
  },
  isContext: function isContext(context) {
    return this.context === context;
  },
  isFlow: function isFlow(flow) {
    return this.flow === flow;
  },
  getConfig: function getConfig(key) {
    this.context = this.getContext();

    if (!this.config) {
      return;
    }

    if (this.config.hasOwnProperty(this.context) && this.config[this.context].hasOwnProperty(this.flow) && this.config[this.context][this.flow].hasOwnProperty(key)) {
      return this.config[this.context][this.flow][key];
    }

    if (this.config.hasOwnProperty(this.context) && this.config[this.context].hasOwnProperty(key)) {
      return this.config[this.context][key];
    }

    if (this.config.hasOwnProperty($DEFAULT) && this.config[$DEFAULT].hasOwnProperty(this.flow) && this.config[$DEFAULT][this.flow].hasOwnProperty(key)) {
      return this.config[$DEFAULT][this.flow][key];
    }

    if (this.config.hasOwnProperty($DEFAULT) && this.config[$DEFAULT].hasOwnProperty(key)) {
      return this.config[$DEFAULT][key];
    }
  },
  error: function error(message) {
    return new Error("Integration error: " + this.context + " / " + this.flow + " :: " + message);
  }
};
// CONCATENATED MODULE: ./node_modules/squid-core/dist/util.js




var redirected = false;
var paramCache = {};
var $util = {
  forEach: function forEach(collection, method) {
    if (collection instanceof Array) {
      for (var i = 0; i < collection.length; i++) {
        method(collection[i], i);
      }
    } else if (collection instanceof Object) {
      for (var key in collection) {
        if (collection.hasOwnProperty(key)) {
          method(collection[key], key);
        }
      }
    }
  },
  idleTimeout: function idleTimeout(time) {
    setTimeout(function () {
      beaver_logger_default.a.info('page_idle');
      $util.reload();
    }, time);
  },
  reload: function reload() {
    beaver_logger_default.a.info('reload');
    window.location.reload();
  },
  redirect: function redirect(url, options) {
    if (url.indexOf('javascript:') !== -1) {
      // eslint-disable-line
      beaver_logger_default.a.error('unsafe_redirect_url', {
        url: url
      });
      throw new Error('Unsafe redirect url: ' + url);
    }

    beaver_logger_default.a.info('redirect', {
      url: url
    });
    $event.on('$stateChangeStart', function (event) {
      beaver_logger_default.a.info('state_change_after_redirect');
      event.preventDefault();
    });

    function redir() {
      if (redirected) {
        return;
      }

      beaver_logger_default.a.info('redirect', {
        url: url
      });

      window.onunload = window.onbeforeunload = function () {};

      if ($integration.getConfig('REDIRECT_TOP') !== false) {
        window.top.location = url;
      } else {
        window.location = url;
      }

      redirected = true;
    }

    $event.emit('loading');
    beaver_logger_default.a.flush().then(redir);
    setTimeout(redir, 500);
    beaver_logger_default.a.done();
  },
  cookiesEnabled: function cookiesEnabled() {
    var cookiesEnabled;
    document.cookie = '_cookiecheck=1';
    cookiesEnabled = Boolean(document.cookie.indexOf('_cookiecheck') > -1);
    document.cookie = '_cookiecheck=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = '_cookiecheck; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    return cookiesEnabled;
  },
  params: function params(string) {
    if (typeof string !== 'string') {
      string = this.queryString().slice(1);
    }

    var params = {};

    if (!string) {
      return params;
    }

    if (paramCache[string]) {
      return paramCache[string];
    }

    $util.forEach(string.split('&'), function (pair) {
      pair = pair.split('=');

      if (pair[0] && pair[1]) {
        params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
      }
    });
    paramCache[string] = params;
    return params;
  },
  queryString: function queryString() {
    if (window.location.search) {
      return window.location.search;
    } else {
      var string = window.location.href;
      var idx = string.indexOf('&');
      var rIdx = string.lastIndexOf('#');

      if (idx) {
        return '?' + string.substring(idx, rIdx >= 0 ? rIdx : string.length);
      }
    }

    return '';
  },
  queryStringSplice: function queryStringSplice(qs, insert, remove) {
    if (qs.indexOf('?') === 0) {
      qs = qs.slice(1);
    }

    var params = $util.extend(this.params(qs), insert);
    $util.forEach(remove, function (key) {
      delete params[key];
    });
    return '?' + this.paramToQueryString(params);
  },
  extend: function extend(obj, source) {
    if (!source) {
      return obj;
    }

    for (var key in source) {
      if (source.hasOwnProperty(key)) {
        obj[key] = source[key];
      }
    }

    return obj;
  },
  paramToQueryString: function paramToQueryString(params) {
    return this.filter(this.map(Object.keys(params).sort(), function (key) {
      if (!params[key]) {
        return;
      }

      return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
    })).join('&');
  },
  extendUrl: function extendUrl(url, query) {
    url += url.indexOf('?') === -1 ? '?' : '&';
    return url + $util.paramToQueryString(query);
  },
  param: function $param(name) {
    return this.params()[name];
  },
  hashParam: function hashParam(name) {
    return this.params(window.location.hash.slice(1))[name];
  },
  base64Decode: function base64Decode(encodedString) {
    return encodedString && window.atob(encodedString); // eslint-disable-line block-scoped-var,no-undef
  },

  /*
   * decodeAndParse :
   * 1 - Base64Decode
   * 2 - URI Decode
   * 3 - Split string into a nvp object
   * return obj
   */
  decodeAndParse: function decodeAndParse(encodedString) {
    if (encodedString) {
      return this.params(decodeURIComponent(this.base64Decode(encodedString)));
    }
  },
  assert: function $assert(value, message, payload) {
    if (!value) {
      throw new Error(message, payload || {});
    }
  },
  map: function $map(array, method) {
    array = array || [];
    var results;

    if (array instanceof Array) {
      results = [];
      $util.forEach(array, function () {
        results.push(method.apply(this, arguments));
      });
      return results;
    } else if (array instanceof Object) {
      results = {};
      $util.forEach(array, function (val, key) {
        results[key] = method.apply(this, arguments);
      });
      return results;
    } else {
      throw new Error('$util.map expects array or object');
    }
  },
  filter: function $filter(array, method) {
    method = method || Boolean;
    var results = [];
    $util.forEach(array, function (item) {
      if (method.apply(this, arguments)) {
        results.push(item);
      }
    });
    return results;
  },
  find: function $find(array, method) {
    if (!array) {
      return;
    }

    for (var i = 0; i < array.length; i++) {
      if (method(array[i])) {
        return array[i];
      }
    }
  },
  findIndex: function $find(array, method) {
    if (!array) {
      return;
    }

    for (var i = 0; i < array.length; i++) {
      if (method(array[i])) {
        return i;
      }
    }
  },
  range: function range(start, end) {
    if (!end) {
      end = start;
      start = 0;
    }

    var result = [];

    for (var i = start; i < end; i++) {
      result.push(i);
    }

    return result;
  },
  pad: function $pad(string, n, char) {
    n = n || 0;
    char = char || '0';
    var padding = Array(n + 1).join(char.toString());
    return (padding + string).slice(-n);
  },
  some: function $some(array, method) {
    var result;
    $util.forEach(array, function (item, key) {
      if (!result) {
        result = method(item, key);
      }
    });
    return result;
  },
  every: function $every(array, method) {
    method = method || Boolean;
    var result = true;
    $util.forEach(array, function (item) {
      if (!method(item)) {
        result = false;
      }
    });
    return result;
  },
  reduce: function $reduce(array, method, intial) {
    $util.forEach(array, function (item) {
      intial = method(intial, item);
    });
    return intial;
  },
  isPopup: function isPopup() {
    return $integration.isPopup();
  },
  isIFrame: function isIFrame() {
    return $integration.isIFrame();
  },
  buildURL: function buildURL(url, params) {
    /*
     * Do NOT add a check for anchor cause this function is also used for building XO success / cancel urls.
     * These urls are defined by the merchants and can also contain urls like "abc.com#merchantanchor" and merchants
     * expect (!) the following outcome: abc.com#merchantanchor?paypalparam=2
     */
    this.assert(url, 'buildURL :: expected url');
    var paramKeys = Object.keys(params || {});

    if (JSON.stringify(params) === '{}') {
      return url;
    }

    if (!paramKeys.length) {
      return url;
    }

    if (url.indexOf('?') === -1) {
      url += '?';
    } else {
      url += '&';
    }

    url += this.paramToQueryString(params);
    return url;
  },
  paypalURL: function paypalURL(url, params) {
    url = 'https://' + ($meta.stage ? $meta.stage : window.location.host) + url;
    return this.buildURL(url, params);
  },
  override: function override(obj, methodName, handler) {
    var existing = obj[methodName];

    obj[methodName] = function () {
      if (existing) {
        try {
          existing.apply(obj, arguments);
        } catch (err) {
          beaver_logger_default.a.error(methodName + 'event_error', {
            error: err.toString
          });
        }
      }

      return handler.apply(obj, arguments);
    };
  },
  result: function result(method) {
    return method();
  },
  memoize: function memoize(method) {
    var result;
    var called = false;

    function memoized() {
      if (!called) {
        result = method.apply(this, arguments);
      }

      called = true;
      return result;
    }

    memoized.flush = function () {
      called = false;
    };

    return memoized;
  },
  now: function now() {
    return window.enablePerformance ? parseInt(window.performance.now(), 10) : Date.now();
  },
  bindObject: function bindObject(obj, self) {
    return $util.map(obj, function (method) {
      return method.bind(self);
    });
  },
  hashStr: function hashStr(str) {
    var hash = 0,
        i,
        chr,
        len;

    if (str.length === 0) {
      return hash;
    }

    for (i = 0, len = str.length; i < len; i++) {
      chr = str.charCodeAt(i);
      hash = (hash << 5) - hash + chr; // eslint-disable-line no-bitwise, no-extra-parens
      // Convert to 32bit integer

      hash |= 0; // eslint-disable-line no-bitwise
    }

    return Math.abs(hash);
  },
  hash: function hash() {
    return this.hashStr(Math.random());
  },
  popup: function popup(name, url, options, callback) {
    callback = $util.once(callback);
    var win = window.open(url, name, $util.map(Object.keys(options), function (key) {
      return key + "=" + options[key];
    }).join(', '));
    var interval;

    function checkWindowClosed() {
      if (win.closed) {
        clearInterval(interval);
        callback();
      }
    }

    interval = setInterval(checkWindowClosed, 50);
    setTimeout(checkWindowClosed);

    try {
      var close = win.close;

      win.close = function () {
        close.apply(this, arguments);
        checkWindowClosed();
      };
    } catch (err) {// pass
    }

    return win;
  },
  unique: function unique(collection) {
    return collection.filter(function (value, index, self) {
      return self.indexOf(value) === index;
    });
  },
  monkeyPatch: function monkeyPatch(mod, prop, method) {
    var original = mod[prop];

    mod[prop] = function () {
      var _arguments = arguments,
          _this = this;

      return method.call(this, arguments, function (self, args) {
        if (original) {
          return original.apply(self || _this, args || _arguments);
        }
      });
    };
  },
  once: function once(method) {
    var called = false;
    return function () {
      if (!called) {
        called = true;
        return method.apply(this, arguments);
      }
    };
  },
  camelToDasherize: function camelToDasherize(string) {
    return string.replace(/([A-Z])/g, function (g) {
      return '-' + g.toLowerCase();
    });
  },
  camelToCapsUnderscore: function camelToCapsUnderscore(string) {
    return string.replace(/([a-z][A-Z])/g, function (g) {
      return g[0] + '_' + g[1];
    }).toUpperCase();
  },
  dasherizeToCamel: function dasherizeToCamel(string) {
    return string.replace(/-([a-z])/g, function (g) {
      return g[1].toUpperCase();
    });
  },
  parentWindow: function parentWindow() {
    if (window.opener) {
      return window.opener;
    } else if (window.parent !== window) {
      return window.parent;
    }
  },
  noop: function noop() {}
};
var $unresolved = {
  then: $util.noop,
  'catch': $util.noop
};
function $getRedirectUrl(product, params) {
  var url = '';
  var urlParams = $util.params();

  if ($config.deploy.isLocal() || $config.deploy.isStage()) {
    url = $config.urls.dispatch && $config.urls.dispatch[product] || '';
  }

  url += $config.urls.fallbackUrl[product];
  $util.extend(urlParams, params || {}); // cmd is a reserved slingshot param

  if (urlParams.cmd) {
    delete urlParams.cmd;
  }

  return $util.buildURL(url, urlParams);
}
function $dispatch(product, params, stateChange) {
  $util.assert(product, 'expected product');
  beaver_logger_default.a.log('info', 'dispatch', {
    product: product
  });
  $event.emit('loading');
  var url = '';
  url = $getRedirectUrl(product, params); // fire an event for xo-tracking to listen to and do fpti logging

  if (stateChange) {
    $event.emit('page_loaded', stateChange.fromState, stateChange.toState);
  }

  return $util.redirect(url);
}
function $experiment(name, sample, id, loggerPayload) {
  var throttle = $util.hashStr(name + '_' + id) % 100;
  var group;

  if ($util.param(name) === 'true') {
    group = 'test_forced';
  } else if ($util.param(name) === 'false') {
    group = 'control_forced';
  } else if (throttle < sample) {
    group = 'test';
  } else if (sample >= 50 || sample <= throttle && throttle < sample * 2) {
    // eslint-disable-line no-extra-parens
    group = 'control';
  } else {
    group = 'throttle';
  }

  beaver_logger_default.a.info('fpti_pxp_check', {
    from: 'PXP_CHECK',
    to: 'process_pxp_check',
    pxp_exp_id: name,
    pxp_trtmnt_id: group
  });
  beaver_logger_default.a.info(name + '_' + group, loggerPayload || {});

  if (group === 'test' || group === 'test_forced') {
    return true;
  } else if (group === 'control') {
    return false;
  }
}
// CONCATENATED MODULE: ./node_modules/squid-core/dist/promise.js


if (window.Promise) {
  window.Promise.prototype['finally'] = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (err) {
      return promise.resolve(callback()).then(function () {
        throw err;
      });
    });
  };
}

var promise_Promise = window.Promise;
function $promise(obj) {
  return promise_Promise.resolve(obj);
}
$util.extend($promise, {
  use: function use(CustomPromise) {
    promise_Promise = CustomPromise;
  },
  resolver: function resolver(method) {
    return new promise_Promise(method);
  },
  resolve: function resolve(value) {
    return promise_Promise.resolve(value);
  },
  reject: function reject(value) {
    return promise_Promise.reject(value);
  },
  run: function run(method) {
    return promise_Promise.resolve().then(method);
  },
  call: function call(method) {
    return promise_Promise.resolve().then(method);
  },
  sequential: function sequential(methods) {
    var prom = promise_Promise.resolve();
    $util.forEach(methods, function (method) {
      prom = prom.then(method);
    });
    return prom;
  },
  sleep: function sleep(time) {
    return new promise_Promise(function (resolve) {
      setTimeout(resolve, time);
    });
  },
  map: function map(items, method) {
    var promises;

    if (items instanceof Array) {
      promises = [];
    } else if (items instanceof Object) {
      promises = {};
    } else {
      return promise_Promise.resolve();
    }

    return this.all($util.map(items, function (item, key) {
      promises[key] = promise_Promise.resolve(item).then(function (result) {
        return method(result, key, promises);
      });
      return promises[key];
    }));
  },
  all: function all(items) {
    if (items instanceof Array) {
      return promise_Promise.all(items);
    } else if (items instanceof Object) {
      return this.hash(items);
    }

    return promise_Promise.resolve([]);
  },
  hash: function hash(obj) {
    var results = {};
    return promise_Promise.all($util.map(obj, function (item, key) {
      return promise_Promise.resolve(item).then(function (result) {
        results[key] = result;
      });
    })).then(function () {
      return results;
    });
  },
  extend: function extend(obj, hash) {
    return this.hash(hash || {}).then(function (data) {
      $util.extend(obj, data);
    });
  },
  attempt: function attempt(attempts, method) {
    attempts -= 1;
    return promise_Promise.resolve().then(function () {
      return method(attempts);
    })['catch'](function (err) {
      if (attempts) {
        return $promise.attempt(attempts, method);
      }

      return promise_Promise.reject(err);
    });
  },
  debounce: function debounce(method, time) {
    var timeout;
    var resolvers = {};
    return function () {
      var self = this;
      var args = arguments;
      var key = JSON.stringify(args);
      resolvers[key] = resolvers[key] || [];
      return new promise_Promise(function (resolve) {
        resolvers[key].push(resolve);
        clearTimeout(timeout);
        timeout = setTimeout(function () {
          var result = method.apply(self, args);
          $util.forEach(resolvers[key], function (resolver) {
            resolver(result);
          });
          delete resolvers[key];
        }, time);
      });
    };
  },
  every: function every(collection, handler) {
    return this.map(collection, function (item) {
      return handler(item);
    }).then(function (results) {
      return $util.every(results);
    });
  },
  providing: function providing(condition, handler) {
    return promise_Promise.resolve(condition).then(function (result) {
      if (result) {
        return handler(result);
      }
    });
  },
  until: function until(condition, pollTime, timeout, alwaysResolve) {
    return new promise_Promise(function (resolve, reject) {
      if (condition()) {
        return resolve();
      }

      var interval = setInterval(function () {
        if (condition()) {
          clearInterval(interval);
          return resolve();
        }
      }, pollTime);

      if (timeout) {
        setTimeout(function () {
          clearInterval(interval);
          return alwaysResolve ? resolve() : reject();
        }, timeout);
      }
    });
  },
  first: function first(handlers) {
    var prom = $promise.resolve();
    var result;
    $util.forEach(handlers, function (handler) {
      prom = prom.then(function () {
        return result || handler();
      }).then(function (handlerResult) {
        result = handlerResult;
        return result;
      });
    });
    return prom;
  }
});
// CONCATENATED MODULE: ./node_modules/squid-core/dist/event.js

var event_handlers = {};
var customEventEmitter;
var $event = {
  use: function use(eventEmitter) {
    customEventEmitter = eventEmitter;

    for (var _i2 = 0, _Object$keys2 = Object.keys(event_handlers); _i2 < _Object$keys2.length; _i2++) {
      var eventName = _Object$keys2[_i2];

      if (event_handlers[eventName]) {
        for (var _i4 = 0, _handlers$eventName2 = event_handlers[eventName]; _i4 < _handlers$eventName2.length; _i4++) {
          var handler = _handlers$eventName2[_i4];
          customEventEmitter.on(eventName, handler);
        }
      }
    }
  },
  on: function on(eventName, method) {
    if (customEventEmitter) {
      return customEventEmitter.on(eventName, method);
    }

    event_handlers[eventName] = event_handlers[eventName] || [];
    event_handlers[eventName].push(method);
    var cancelled = false;

    function cancel() {
      if (!cancelled) {
        event_handlers[eventName].splice(event_handlers[eventName].indexOf(method), 1);
        cancelled = true;
      }
    }

    cancel.cancel = cancel;
    return cancel;
  },
  once: function once(eventName, method) {
    if (customEventEmitter) {
      return customEventEmitter.once(eventName, method);
    }

    var listener = $event.on(eventName, function () {
      listener.cancel();
      return method.apply(this, arguments);
    });
    return listener;
  },
  emit: function emit(eventName) {
    if (customEventEmitter) {
      var _customEventEmitter;

      return (_customEventEmitter = customEventEmitter).emit.apply(_customEventEmitter, arguments);
    }

    var event = {
      preventDefault: function preventDefault() {
        event.defaultPrevented = true;
      }
    };

    if (event_handlers[eventName]) {
      for (var _i6 = 0, _Array$prototype$slic2 = Array.prototype.slice.apply(event_handlers[eventName]); _i6 < _Array$prototype$slic2.length; _i6++) {
        var handler = _Array$prototype$slic2[_i6];
        handler.apply.apply(handler, [this, event].concat(Array.prototype.slice.call(arguments)));
      }
    }

    return event;
  },
  broadcast: function broadcast(eventName) {
    if (customEventEmitter) {
      var _customEventEmitter2;

      return (_customEventEmitter2 = customEventEmitter).broadcast.apply(_customEventEmitter2, arguments);
    }

    return $event.emit.apply($event, arguments);
  },
  refCount: function refCount($scope, start, stop) {
    return $promise.resolver(function (resolve) {
      var count = 0;

      function res() {
        if (!count) {
          if (cancelStartListener && cancelStopListener) {
            cancelStartListener();
            cancelStopListener();
          }

          return resolve();
        }
      }

      var cancelStartListener = $scope.$on(start, function (event, data) {
        count += 1;
      });
      var cancelStopListener = $scope.$on(stop, function (event, data) {
        setTimeout(function () {
          count -= 1;
          res();
        }, 50);
      });
      setTimeout(res, 50);
    });
  },
  compose: function compose(start, end, startAll, endAll) {
    var count = 0;
    $event.on(start, function () {
      if (!count) {
        setTimeout(function () {
          $event.emit(startAll);
        });
      }

      count += 1;
    });
    $event.on(end, function () {
      setTimeout(function () {
        count -= 1;

        if (!count) {
          $event.emit(endAll);
        }
      }, 50);
    });
    return {
      getCount: function getCount() {
        return count;
      },
      isActive: function isActive() {
        return Boolean(count);
      },
      reset: function reset() {
        count = 0;
      }
    };
  }
};
// EXTERNAL MODULE: ./node_modules/squid-core/dist/class.js
var dist_class = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/squid-core/dist/error.js



$util.monkeyPatch(window, 'onerror', function (_ref, original) {
  var message = _ref[0],
      file = _ref[1],
      line = _ref[2],
      col = _ref[3],
      err = _ref[4];
  original();
  $event.emit('$windowError', {
    message: message && (message.stack || message).toString(),
    file: file && file.toString(),
    line: line && line.toString(),
    col: col && col.toString(),
    stack: err && (err.stack || err).toString()
  });
});
var $Error = dist_class["a" /* $Class */].extend.call(Error, '$Error', {
  construct: function construct(err, properties) {
    if (err instanceof Error) {
      err = err.message;
    }

    if (properties) {
      $util.extend(this, properties);
    }

    this.payload = properties;
    this.message = err;
  }
});
var $Contingency = $Error.extend('$Contingency', {
  handle: function handle(handlers) {
    var handler = handlers[this.message] || handlers['DEFAULT'];

    if (handler) {
      var result = handler.call(this, this.message, this);

      if (typeof result !== 'undefined') {
        return result;
      }

      return true;
    }
  }
});
var $Forbidden = $Error.extend('$Forbidden');
var $ApiError = $Error.extend('$ApiError');
var $BatchShortCircuit = $Error.extend('$BatchShortCircuit');
var $FallbackError = $Error.extend('$FallbackError', {
  init: function init() {
    this.reason = this.reason || '';
    this.product = this.product || '';
    this.entryPoint = this.entryPoint || '';
  }
});
// CONCATENATED MODULE: ./node_modules/squid-core/dist/loader.js

var _firstLoad = false;
var loader = $event.compose('loading', 'loaded', 'startLoad', 'allLoaded');
var $loader = {
  isLoading: function isLoading() {
    return Boolean(loader.getCount());
  },
  firstLoad: function firstLoad() {
    return _firstLoad;
  },
  reset: function reset() {
    loader.reset();
  }
};
$event.on('allLoaded', function () {
  _firstLoad = true;
});
// CONCATENATED MODULE: ./node_modules/squid-core/dist/api.js









var standardHeaders = {};

function request(config) {
  return $promise.resolver(function (resolve, reject) {
    config.method = config.method || 'get';

    if (config.method === 'get') {
      delete config.body;
      delete config.json;
    }

    if (config.method === 'post') {
      delete config.query;
    }

    if (config.query) {
      config.url = $util.extendUrl(config.url, config.query);
    }

    var headers = config.headers || {};

    if (config.json) {
      headers['Content-Type'] = headers['Content-Type'] || 'application/json';
    } else if (config.body) {
      headers['Content-Type'] = headers['Content-Type'] || 'application/x-www-form-urlencoded; charset=utf-8';
    }

    headers.Accept = headers.Accept || 'application/json';
    var xhr = new window.XMLHttpRequest();
    xhr.addEventListener('load', function () {
      var status = this.status;

      if (!status) {
        return reject(new Error('Request did not return a response'));
      }

      var json = JSON.parse(this.responseText);
      var responseHeaders = {};
      this.getAllResponseHeaders().split('\n').forEach(function (line) {
        var i = line.indexOf(':');
        responseHeaders[line.slice(0, i).trim()] = line.slice(i + 1).trim();
      });
      return resolve({
        status: status,
        headers: responseHeaders,
        json: json
      });
    }, false);
    xhr.addEventListener('error', function (evt) {
      reject(new Error("Request to " + config.method.toLowerCase() + " " + config.url + " failed: " + evt.toString()));
    }, false);
    xhr.open(config.method, config.url, true);

    if (headers) {
      for (var key in headers) {
        xhr.setRequestHeader(key, headers[key]);
      }
    }

    if (config.json && !config.body) {
      config.body = JSON.stringify(config.json);
    }

    if (config.body && typeof config.body === 'object') {
      config.body = Object.keys(config.body).map(function (key) {
        return encodeURIComponent(key) + "=" + encodeURIComponent(config.body[key]);
      }).join('&');
    }

    xhr.send(config.body);
  });
}
/*
 API
 ---
 This layer is responsible for handling api requests. It has a number of responsibilities:
 - Caching responses
 - Transparently returning data that has been preloaded into the initial page response
 - Instrumentation
 - Batching multiple api calls into a single http request
 - Handling multiple types of responses and dispatching to the correct handlers
 - Emitting loading events for all http calls
 */


$meta.headers = $meta.headers || {};
$meta.headers['x-cookies'] = typeof $meta.headers['x-cookies'] !== 'object' ? JSON.parse($meta.headers['x-cookies'] || '{}') : $meta.headers['x-cookies']; // Are we in 'cookies disabled' mode? (Do we need to keep a local store of cookies)

function cookiesEnabled() {
  return $util.cookiesEnabled() && window.location.hostname.indexOf('.paypal.com') > -1;
} // Cache for api responses, when cache: true


var api_cache = {}; // Window load promise

var windowLoad = $util.memoize(function () {
  return $promise.resolver(function (resolve) {
    if (document.readyState === 'complete') {
      resolve();
    } else {
      window.addEventListener('load', resolve);
    }
  });
}); // Buffer for batch requests made within the same frame

var batchQueue = {}; // Backwards compat

window.pre = window.pre || {}; // Transient cache resolvers

var transientCache = {};
Object.keys(window.pre).forEach(function (key) {
  var _window$pre$key = window.pre[key],
      method = _window$pre$key.method,
      uri = _window$pre$key.uri,
      res = _window$pre$key.res;
  var preKey = method + ":" + uri;
  transientCache[preKey] = res;
}); // Transient cache resolvers

var transientCacheResolvers = {}; // Metabuilder

var metaBuilder; // Add to transientCache

window.preload = function (method, url, data, name) {
  if (name) {
    window.pre[name] = {
      method: method,
      uri: url,
      res: data
    };
  }

  var key = method + ":" + url;
  var resolvers = transientCacheResolvers[key] || [];
  transientCache[key] = data;

  while (resolvers.length) {
    resolvers.pop().call();
  }
}; // Preload complete


var preloadComplete = false;

window.preloadComplete = function () {
  preloadComplete = true;
  Object.keys(transientCacheResolvers).forEach(function (key) {
    var resolvers = transientCacheResolvers[key] || [];

    while (resolvers.length) {
      resolvers.pop().call();
    }
  });
};

beaver_logger_default.a.info(cookiesEnabled() ? 'cookies_enabled' : 'cookies_disabled');
var $Api = dist_class["a" /* $Class */].extend('$Api', {
  // Cache any GET responses indefinitely
  cache: false,
  // Http timeout for all requests
  timeout: 45000,
  // Default number of attempts on aborted requests and 500 server errors
  getAttempts: 3,
  postAttempts: 1,
  // POST on a resource with an action name myapi.action('foo') -> POST /my/api/foo
  action: function action(_action, options) {
    options.action = _action;
    return this.post(options);
  },
  // GET on a resource myapi.retrieve() -> GET /my/api
  retrieve: function retrieve(options) {
    if (options === void 0) {
      options = {};
    }

    options.method = 'get';
    return this.call(options);
  },
  // POST on a resource myapi.retrieve() -> POST /my/api
  post: function post(options) {
    options.method = 'post';
    return this.call(options);
  },
  // Generic handler for calling an api and dispatching requests to the right place
  call: function call(options) {
    var self = this; // Set up request options and params. `options` is an object which should contain everything
    // the request needs to run and handle the response

    options.api = this;
    options.uri = this.getURI(options.model, options.action);
    options.params = options.params || {};
    options.cache = options.cache || self.cache && options.method === 'get';
    options.name = this.buildAPIName(options);
    options.meta = this.buildMeta();
    options.transientError = options.transientError || false;
    options.cacheKey = $util.buildURL(options.uri, options.params);
    beaver_logger_default.a.info(options.name + '_call', {
      name: options.name,
      method: options.method,
      uri: options.uri
    });

    if (!options.silent) {
      $event.emit('loading');
    } // Decide where to get the response


    return $promise.first([// If caching is enabled and we have the data in local cache, use the cache
    function () {
      if (options.cache && api_cache[options.cacheKey]) {
        return api_cache[options.cacheKey];
      }
    }, // Otherwise if we have transient cache data for this api, we can use that
    function () {
      return $promise.providing(self.hasTransientCacheData(options), function () {
        // The reason we use self.attemptRequest here is so any errors in the cached response
        // can trigger the retry code path, as if it were a regular request
        return self.attemptRequest(options);
      });
    }, // If we're in batch mode, queue up a batch request
    function () {
      if (options.batch) {
        return self.batchRequest(options);
      }
    }, // Otherwise attempt a regular http request (at this point an http call is guaranteed)
    function () {
      return self.attemptRequest(options);
    }]).finally(function () {
      if (!options.silent) {
        $event.emit('loaded');
      }
    }).then(function (res) {
      // Cache the response if we need to
      if (options.cache) {
        api_cache[options.cacheKey] = res;
      } // Handle the response


      return self.handleResponse(res.data, options);
    }, function (err) {
      // $BatchShortCircuit will be thrown if:
      //
      // 1. batch api call B depends on api call A, but-
      // 2. api call A fails
      //
      // In which case we end up in a situation where had it been a regular chain of events,
      // api B would never have been called in the first place.
      //
      // One possibility here is to return $unresolved, which prevents the promise from ever
      // resolving, but this has the potential to cause a lot of difficulty debugging and strange
      // corner cases.
      //
      // Instead we opt to simply reject the promise, and not call any of the response handlers
      if (err instanceof $BatchShortCircuit) {
        return $promise.reject(err);
      } // Otherwise, handle the error normally


      return self.handleErrorResponse(err, options);
    });
  },
  // Set up a batch request for processing in the next frame
  batchRequest: function batchRequest(options) {
    // Batch Requests are an optimization layer on top of regular api calls. The purpose of this
    // layer is to combine multiple atomic api calls into a single http request, without forcing
    // developers to create large orchestration layers on the client/server with cross-cutting concerns.
    //
    // This layer will queue up multiple requests made in the same frame whenever batch-mode is enabled,
    // attach them all to an http call to /api/batch/:name, then on the response it will dispatch each
    // individual api call to the correct handler.
    //
    // The way this is implemented is to place each response in the transient api cache, then to yield
    // control to the regular api request handler, which will handle instrumentation and retries
    // For quick dev-time feedback...
    $util.assert(options.batch.name, 'Must define a "name" for batch request: ' + options.batch);
    $util.assert(options.batch.id, 'Must define a "id" for batch request: ' + options.batch);
    var name = options.batch.name;
    var id = options.batch.id; // Add the batch request options to the batchQueue for processing on the next frame

    var batch = batchQueue[name] = batchQueue[name] || {};
    batch[id] = options; // Fire off a batch request. This will be debounced: calls in the same frame will be combined to one

    return this.buildBatchRequest(name).then(function (results) {
      // We get back a mapping of id->response, so we now extract the response for our api
      // call. If we have no response, we can assume the call was never made, and short circuit.
      return results[id].then(function (result) {
        return result || $promise.reject(new $BatchShortCircuit());
      });
    });
  },
  // Process all of the accumulated batch api requests
  buildBatchRequest: $promise.debounce(function (name) {
    var self = this;
    var batch = batchQueue[name];
    var batchIds = dist_class["a" /* $Class */].keys(batch);
    var batchData = {};
    var headers = {};
    delete batchQueue[name]; // If we have just a single request, we can short-circuit and just hit that api

    if (batchIds.length === 1) {
      var batchId = batchIds[0];
      var opts = batch[batchId];
      var results = {};
      results[batchId] = opts.api.attemptRequest(opts);
      return results;
    } // Build the request to send to the server side. This is an mapping of id->request, each containing
    // the method, uri, data, and dependencies for each api.
    //
    // Specifying a dependency for an api essentially means the back-end will only
    // call api-B if api-A returns ack=success. Otherwise there will be no response for api B.


    $util.forEach(batch, function (options, id) {
      batchData[id] = {
        method: options.method,
        uri: options.api.getURI(options.model, options.action, true),
        data: options.data,
        params: options.params,
        dependencies: options.batch.dependencies
      };
      $util.extend(headers, options.headers);
    }); // Unfortunate circular dependency... $Api depends on another api.
    //
    // $batchApi is subject to all of the same rules regarding retries, so if for some reason the server
    // does not respond the first time, our batch request can still get through.

    return $batchApi.action(name, {
      data: batchData,
      headers: headers
    }).then(function (res) {
      // The final response will be a mapping of id->response-promise.
      //
      // However, we do not treat this data as our final response. Instead, we simply use it to
      // prime our transient cache, then proceed to jump to our regular request handler. This will
      // take care of retries and instrumentation as if this were a regular request.
      //
      // Note that a retry for $batchApi is different to a retry for an individual api. If
      // an *individual* api call fails, we do not want to re-do the entire batch call; instead we
      // can just retry the individual api call.
      return self.handleBatchResponse(batch, res.data);
    });
  }),
  // Process the responses for all of the batch requests we sent to the server
  handleBatchResponse: function handleBatchResponse(batch, data) {
    var self = this;
    var promises = {}; // Loop over each individual api response contained in the batch response, and process the result

    $util.forEach(batch, function (options, id) {
      // Store each response promise so we can check and wait for api dependencies
      promises[id] = $promise.run(function () {
        // Check if all of the dependencies are present for our individual api call. To do this
        // we must wait until the dependent api call is entirely complete, including any retries.
        var depsPresent = $promise.every(options.batch.dependencies || [], function (depName) {
          if (!batch[depName]) {
            beaver_logger_default.a.info('missing_batch_dependency', {
              dependency: depName,
              available: Object.keys(batch).join('|')
            });
          }

          return !batch[depName] || promises[depName].then(function (dependency) {
            return dependency && dependency.data && dependency.data.ack === 'success';
          });
        }); // If our dependencies are present, we can continue, otherwise we are not interested in
        // the result of the individual api call - if its dependency is not present, it will not be.

        return $promise.providing(depsPresent, function () {
          // If there is data returned for the individual call, add it to the transient cache
          return $promise.providing(data[id], function (result) {
            self.addTransientCacheData(options.method, options.api.getURI(options.model, options.action), result);
          }).then(function () {
            // Regardless of whether or not there is data, we can now attempt the request.
            // This will either get the data from the transient cache, or make an http call,
            // and handle any retries that need to be made.
            return options.api.attemptRequest(options);
          });
        });
      });
    });
    return promises;
  },
  // Handle the request and any retries, using either the transient cache or http calls
  attemptRequest: function attemptRequest(options) {
    var self = this;
    var attempts = options.method === 'get' ? this.getAttempts : this.postAttempts; // We allow a certain number of attempts/retries for each api call

    return $promise.attempt(attempts, function (remaining) {
      // Query the transient cache
      return self.getTransientCacheResponse(options).then(function (res) {
        // If we can get a response from the transient cache, then use it
        if (res) {
          return res;
        } // Otherwise resort to making an http call


        return self.getHttpResponse(options);
      })['catch'](function (res) {
        // If our request was aborted without even a status code, force a single retry
        if ((!res || !res.status) && attempts === 1) {
          beaver_logger_default.a.warn('api_retry_aborted', {
            method: options.method,
            uri: options.uri
          });
          return self.getHttpResponse(options);
        }

        return $promise.reject(res);
      })['catch'](function (res) {
        // If our request was 401 denied (probably due to a CSRF error), force a single retry
        if (res.status === 401) {
          beaver_logger_default.a.warn('api_retry_401', {
            method: options.method,
            uri: options.uri
          });
          return self.getHttpResponse(options);
        }

        return $promise.reject(res);
      })['catch'](function (res) {
        // Set the correct response and ack for 401
        if (res.status === 401) {
          return {
            data: {
              ack: 'permission_denied'
            }
          };
        } // If we have any remaining retries, log and reject


        if (remaining) {
          beaver_logger_default.a.warn('api_retry', {
            method: options.method,
            uri: options.uri
          });
          return $promise.reject(res);
        } // Otherwise reject the request with the appropriate error
        // We got ack=error in the response


        if (res && res.data && res.data.ack === 'error') {
          return $promise.reject(new $ApiError('api_error', {
            // eslint-disable-line no-reserved-keys
            name: options.name,
            method: options.method,
            uri: options.uri,
            stack: res.data.stack,
            transient: options.transientError
          }));
        } // We got a response error status
        else if (res && res.status) {
            return $promise.reject(new $ApiError('response_status_' + res.status, {
              // eslint-disable-line no-reserved-keys
              uri: options.uri,
              transient: options.transientError
            }));
          } else if (res && res.error) {
            return $promise.reject(new $ApiError('request_' + res.error, {
              // eslint-disable-line no-reserved-keys
              uri: options.uri,
              transient: options.transientError
            }));
          } // The request was aborted
          else {
              return $promise.reject(new $ApiError('request_aborted', {
                // eslint-disable-line no-reserved-keys
                uri: options.uri,
                transient: options.transientError
              }));
            }
      });
    });
  },
  // Get an api response via http
  getHttpResponse: function getHttpResponse(options) {
    var self = this;
    var startTime = $util.now();
    var httpRequest = this.http(options);
    return httpRequest['finally'](function () {
      // Calculate the end-to-end duration of the request from the client's perspective
      options.duration = $util.now() - startTime;
    }).catch(function (res) {
      // Turn 400s with an ack into a 'success' so it makes it to the standard handlers
      if (res && res.status && res.status.toString() === '400' && res.data && res.data.ack) {
        return res;
      }

      return $promise.reject(res);
    }).then(function (res) {
      self.saveResponseState(res);
      var loggerPayload = {
        name: options.name,
        method: options.method,
        uri: options.uri,
        server: res.data.server,
        time: options.duration,
        duration: options.duration
      }; // In certain browsers we can match up this api call to the performance data from the browser

      if (window.performance && window.performance.getEntries) {
        $util.forEach(window.performance.getEntries(), function (resource) {
          if (resource.name && resource.name.indexOf(options.uri) > -1) {
            $util.extend(loggerPayload, resource);
          }
        });
      }

      beaver_logger_default.a.info('api_response', loggerPayload);

      if (res && res.status) {
        beaver_logger_default.a.info('http_response_' + res.status);
      }

      return res;
    }, function (res) {
      self.saveResponseState(res);

      if (res && res.status) {
        beaver_logger_default.a.info('http_response_' + res.status);
      }

      return $promise.reject(res);
    });
  },
  setTransientCache: function setTransientCache(data) {
    throw new Error('NotImplemented');
  },
  // Get an individual api response from the transient cache, as an object
  getTransientCacheData: function getTransientCacheData(options, pop) {
    if (!$config.enablePreload) {
      return $promise.resolve();
    }

    var preMethod = options.method.toLowerCase();
    var preUri = $util.buildURL(options.uri, options.params);
    var key = preMethod + ":" + preUri;
    return $promise.resolver(function (resolve) {
      function res() {
        var data = transientCache[key];

        if (pop) {
          delete transientCache[key];
        }

        resolve(data);
      }

      transientCacheResolvers[key] = transientCacheResolvers[key] || [];
      transientCacheResolvers[key].push(res);

      if (transientCache[key] || document.readyState === 'complete' || preloadComplete) {
        return res();
      }

      windowLoad().then(res);
    });
  },
  // Check if the transient cache has the data for a particular api
  hasTransientCacheData: function hasTransientCacheData(options) {
    return this.getTransientCacheData(options, false).then(function (data) {
      return Boolean(data);
    });
  },
  // Add data to the transient cache
  addTransientCacheData: function addTransientCacheData(method, uri, data) {
    window.preload(method, uri, data);
  },
  // Get an individual api response from transient cache, as a res promise with the correct status code
  getTransientCacheResponse: function getTransientCacheResponse(options) {
    return this.getTransientCacheData(options, true).then(function (data) {
      // Preload data does not come with a response code, so massage it into a response promise
      if (data) {
        if (data.ack === 'error') {
          return $promise.reject({
            status: 500,
            data: data
          });
        } else if (data.ack === 'permission_denied') {
          return $promise.reject({
            status: 401,
            data: data
          });
        } else if (data.ack === 'contingency' || data.ack === 'validation_error') {
          return {
            status: 400,
            data: data
          };
        } else {
          return {
            status: 200,
            data: data
          };
        }
      } // Log a cache miss if we are currently in the first-page load
      else if (options.method === 'get' && !$loader.firstLoad() && !options.silent) {
          beaver_logger_default.a.info('preload_cache_miss', {
            uri: options.uri
          });
        }
    });
  },
  getHeaders: function getHeaders(options) {
    if (!$meta.headers['x-csrf-jwt'] && !$meta.csrfJwt) {
      beaver_logger_default.a.warn('missing_csrf_jwt');
    }

    var headers = {
      'X-Requested-With': 'XMLHttpRequest',
      'x-csrf-jwt': $meta.headers['x-csrf-jwt'] || $meta.csrfJwt
    };

    if (!cookiesEnabled()) {
      headers['x-cookies'] = JSON.stringify($meta.headers['x-cookies']);
    }

    $util.extend(headers, standardHeaders);

    if (options.headers) {
      $util.extend(headers, options.headers);
    }

    return headers;
  },
  http: function http(options) {
    return this.httpNative(options);
  },

  /*
   // Raw http call
   httpAngular: function(options) {
   let request = {
   method: options.method,
   url: options.uri,
   data: {
   data: options.data,
   meta: options.meta
   },
   headers: this.getHeaders(options),
   params: options.params,
   requestType: 'json',
   responseType: 'json',
   timeout: this.timeout
   };
   if (options.method === 'get' && options.meta && Object.keys(options.meta).length) {
   request.params.meta = JSON.stringify(options.meta);
   }
   return $http(request);
   },
   */
  httpJQuery: function httpJQuery(options) {
    var settings = {
      method: options.method,
      data: options.method === 'get' ? options.params : JSON.stringify({
        data: options.data,
        meta: options.meta || {}
      }),
      headers: this.getHeaders(options),
      timeout: this.timeout
    };

    if (options.method === 'post') {
      settings.headers['Content-Type'] = 'application/json;charset=UTF-8';
    } else if (options.method === 'get') {
      settings.data.meta = JSON.stringify(options.meta);
    }

    return $promise.resolver(function (resolve, reject) {
      function getRes(res, data) {
        return {
          status: res.status,
          data: data,
          headers: function headers(name) {
            return res.getResponseHeader(name);
          }
        };
      }

      settings.success = function (data, status, res) {
        return resolve(getRes(res, data));
      };

      settings.error = function (res) {
        if (res && res.status) {
          if (res.status >= 400) {
            return reject(getRes(res, res.responseJSON));
          } else {
            return resolve(getRes(res, res.responseJSON));
          }
        }

        return reject({
          status: 0,
          headers: $util.noop,
          error: res && res.statusText
        });
      };

      jQuery.ajax(options.uri, settings);
    });
  },
  httpNative: function httpNative(options) {
    options.params = options.params || {};
    return request({
      method: options.method,
      url: options.uri,
      query: _extends({}, options.params, {
        meta: JSON.stringify(options.meta)
      }),
      json: {
        data: options.data,
        meta: options.meta || {}
      },
      headers: this.getHeaders(options),
      timeout: this.timeout
    }).then(function (res) {
      var response = {
        status: res.status,
        data: res.json,
        headers: function headers(name) {
          return res.headers[name];
        }
      };
      return response;
    }).catch(function (err) {
      return {
        status: 0,
        headers: $util.noop,
        error: err.message
      };
    }).then(function (res) {
      if (res.status >= 400) {
        throw res;
      }

      return res;
    });
  },
  // Save cookies and jwt-csrf token from the response
  saveResponseState: function saveResponseState(res) {
    if (res.headers('x-csrf-jwt')) {
      $meta.headers['x-csrf-jwt'] = res.headers('x-csrf-jwt');
      $meta.csrfJwt = res.headers('x-csrf-jwt');
      $meta.headers['x-csrf-jwt-hash'] = res.headers('x-csrf-jwt-hash');
    }

    if (res.headers('X-cookies')) {
      $meta.headers['x-cookies-hash'] = res.headers('x-cookies-hash'); // Extend local cookie jar of encrypted-cookie-name->encrypted-cookie-value with any new cookies

      $util.extend($meta.headers['x-cookies'], JSON.parse(res.headers('X-cookies') || '{}'));
    }
  },
  // Dispatch the response to the correct handlers
  handleResponse: function handleResponse(res, options) {
    var loggerName = 'ui_' + options.name;
    var loggerPayload = {
      name: options.name,
      method: options.method,
      uri: options.uri,
      time: options.duration,
      duration: options.duration
    }; // Here we dispatch the response to the correct handler based on the ack.
    //
    // ack=success     -> options.success()
    // ack=error       -> options.error()
    // ack=validation  -> options.validation()
    // ack=contingency -> options.contingencies[contingency]()
    //
    // Why do this rather than just rejecting the promise with a custom error?
    //
    // a) Angular promises have no `.catchType()`, so this saves us a lot of `instanceof` checks
    // b) Angular promises have no `.done()`, so callers can not assert that they have handled
    //    every error they want to. This is exacerbated by the fact that there is no single thread
    //    of execution on the front-end a la node, so we can't just call `.done()` at the very end :(
    //
    // This way, if somebody passes a handler, it will be called. Otherwise, an error will be thrown
    // and the global error handler will be invoked. The api responses are also given as promises.

    var resultModel = options.resultModel || options.model;
    /* jshint maxcomplexity: 17 */

    return $promise.call(function () {
      // If we are given a `resultModel`, we always extend it with `res.data`, no matter the ack
      if (res.data && resultModel) {
        if (resultModel.populate) {
          resultModel.populate(res.data);
        } else {
          $util.extend(resultModel, res.data);
        }
      }

      if (res && res.ack === 'success' && resultModel && resultModel.fetchChildren) {
        return $promise.resolve(resultModel.fetchChildren()).then(function (children) {
          return $util.extend(resultModel, children);
        });
      }
    }).then(function () {
      // Handle each ack type, throw errors accordingly
      if (res.ack === 'success') {
        beaver_logger_default.a.info(loggerName + '_success', loggerPayload);

        if (options.success) {
          if (options.success instanceof Function) {
            return options.success(res.data);
          }

          return options.success;
        }

        return res;
      }

      if (options.failSilently) {
        return;
      }

      if (res.ack === 'contingency') {
        beaver_logger_default.a.info(loggerName + '_contingency', $util.extend(loggerPayload, {
          contingency: res.contingency
        }));

        if (!res.contingency) {
          throw new $ApiError('expected_contingency_name', {
            api: options.name
          });
        }

        var contingency = new $Contingency(res.contingency, {
          // eslint-disable-line no-reserved-keys
          transient: options.transientError
        });

        if (resultModel) {
          resultModel.errorData = res.errorData || {};
        }

        var handler = options.contingencies && (options.contingencies[contingency.message] || options.contingencies['DEFAULT']);
        $util.extend(contingency, res.errorData);

        if (handler) {
          if (handler instanceof Function) {
            return handler(contingency.message, contingency);
          }

          return handler;
        }

        throw contingency;
      } else if (res.ack === 'validation') {
        beaver_logger_default.a.info(loggerName + '_validation', $util.extend(loggerPayload, {
          validation: res.validation
        }));

        if (options.validation) {
          return options.validation(res.validation);
        }

        throw new $ApiError('validation', {
          // eslint-disable-line no-reserved-keys
          transient: options.transientError
        });
      } else if (res.ack === 'permission_denied') {
        beaver_logger_default.a.info(loggerName + '_denied', loggerPayload);
        throw new $Forbidden(options.uri + ': forbidden', {
          // eslint-disable-line no-reserved-keys
          transient: options.transientError
        });
      } else {
        beaver_logger_default.a.info(loggerName + '_noack', loggerPayload);
        throw new $ApiError('noack', {
          // eslint-disable-line no-reserved-keys
          transient: options.transientError
        });
      }
    });
  },
  // Handle http error responses (ack=error or unhandled errors)
  handleErrorResponse: function handleErrorResponse(err, options) {
    return $promise.run(function () {
      // If the caller provides an error handler, let them handle it
      if (options.error) {
        return options.error(err);
      } // Otherwise we throw the error. Please not that this is NOT just rejecting the promise,
      // this will always end up in the global error handler due to how angular promises work.


      throw err;
    });
  },
  // Build the uri for the api call
  getURI: function getURI(model, action, relative) {
    var self = this; // build the uri as a seriest of segments

    var uri = [];
    uri.push(this.uri.replace(/\/:[\w\.]+\?/g, function (key) {
      // Add any *optional* dynamic keys from the model (/foo/:bar? -> /foo/{{model.bar}})
      key = key.slice(2);
      key = key.substring(0, key.length - 1);
      var component = model.get ? model.get(key) : model[key];

      if (!component) {
        return '';
      }

      return '/' + component;
    }).replace(/:[\w\.]+/g, function (key) {
      // Add any dynamic keys from the model (/foo/:bar -> /foo/{{model.bar}})
      key = key.slice(1);
      var component = model.get ? model.get(key) : model[key];

      if (!component) {
        throw new Error('Property "' + key + '" not found in model for: ' + self.uri);
      }

      return component;
    })); // Add the action, if provided (`foo.action('bar', {...})` -> /api/foo/bar

    if (action) {
      uri.push(action);
    } // Add the extension (e.g. for doing a GET on a .json resource)


    if (this.ext) {
      uri[uri.length - 1] += '.' + this.ext;
    } // Join the uri segments and strip any extra slashes


    uri = '/' + uri.join('/').replace(/\/{2,}/g, '/').replace(/^\//, ''); // Add on the base uri, e.g. /webapps/hermes

    if (!relative) {
      uri = (this.baseURI || $config.urls.baseUrl) + uri;
    }

    return uri;
  },
  // Attach meta data provided by the parent app
  buildMeta: function buildMeta() {
    if (metaBuilder) {
      return metaBuilder();
    }
  },
  // Build the name of the api for logging. /api/foo/bar -> api_foo_bar
  buildAPIName: function buildAPIName(options) {
    var self = this;
    var apiName = self.uri.replace(/^\/+/, ''). // Remove leading '/'
    replace(/\//g, '_'). // Replace remaining '/' with '_'
    replace(/\?(.*)/, ''). // Remove everything after '?'
    replace(/[^a-zA-Z0-9_]/g, '');
    apiName = options.action ? apiName + '_' + options.action : apiName;
    apiName = apiName.charAt(0) === '_' ? apiName.slice(1) : apiName;
    return apiName;
  }
});
$Api.reopenClass({
  clearCache: function clearCache() {
    api_cache = {};
  }
});

$Api.registerMetaBuilder = function (builder) {
  metaBuilder = builder;
};

$Api.addHeader = function (name, value) {
  standardHeaders[name] = value;
};

var $batchApi = new $Api({
  uri: '/api/batch',
  postAttempts: 3
});
// CONCATENATED MODULE: ./public/js/button/config.js
var API_URI = {
  GRAPHQL: '/graphql'
};
var UPDATE_CLIENT_CONFIGURATION = Boolean(window.xprops && window.xprops.updateClientConfiguration);
// CONCATENATED MODULE: ./public/js/button/constants.js
var ACCESS_TOKEN_HEADER = 'x-paypal-internal-euat';
var REQUESTED_BY_HEADER = 'x-requested-by';
var KEY_CODES = {
  ENTER: 13
};
var INTEGRATION_ARTIFACT = {
  JS_V4: 'JS_V4'
};
var USER_EXPERIENCE_FLOW = {
  INCONTEXT: 'INCONTEXT',
  INLINE: 'INLINE'
};
var PRODUCT_FLOW = {
  SMART_PAYMENT_BUTTONS: 'SMART_PAYMENT_BUTTONS'
};
var PAYMENT_FLOW = {
  CHECKOUT: 'checkout',
  NATIVE: 'native',
  CARD_FIELDS: 'card_fields'
};
// CONCATENATED MODULE: ./public/js/button/api.js





$Api.addHeader(REQUESTED_BY_HEADER, 'smart-payment-buttons');
var $authApi = new $Api({
  uri: '/api/auth'
});
var $checkoutAppDataApi = new $Api({
  uri: '/api/checkout/:id/appData'
});
var $checkoutCartApi = new $Api({
  uri: '/api/checkout/:id/cart'
});
var $checkoutSessionApi = new $Api({
  uri: '/api/checkout/:id/session'
});
var $paymentApi = new $Api({
  uri: '/api/payment/:id'
});
var $orderApi = new $Api({
  uri: '/api/order/:id'
});
var $localeApi = new $Api({
  uri: '/api/locale'
});
var $buttonFundingApi = new $Api({
  uri: '/api/button/funding'
});
function getLocale() {
  return $localeApi.retrieve({
    params: {
      ipCountry: $meta.ipcountry,
      localeTestUrlParam: $util.param('locale.test'),
      countryParam: $util.param('country.x'),
      localeParam: $util.param('locale.x')
    }
  }).then(function (res) {
    return res.data;
  });
}
function getAuth() {
  return $authApi.retrieve().then(function (res) {
    return res.data;
  });
}
function getButtonFunding() {
  return getLocale().then(
  /* eslint-disable complexity */
  function (locale) {
    return $buttonFundingApi.retrieve({
      params: {
        country: locale.country,
        lang: locale.lang,
        domain: window && window.xprops && window.xprops.domain,
        buttonSessionID: window && window.xprops && window.xprops.buttonSessionID,
        remembered: window && window.xprops && window.xprops.funding && window.xprops.funding.remembered && window.xprops.funding.remembered.join(),
        allowed: window && window.xprops && window.xprops.funding && window.xprops.funding.allowed && window.xprops.funding.allowed.join(),
        disallowed: window && window.xprops && window.xprops.funding && window.xprops.funding.disallowed && window.xprops.funding.disallowed.join(),
        buttonLabel: window && window.xprops && window.xprops.style && window.xprops.style.label,
        installmentperiod: window && window.xprops && window.xprops.style && window.xprops.style.installmentperiod
      }
    }).then(function (res) {
      return res.data;
    });
  });
  /* eslint-enable complexity */
}
function getPayment(paymentID) {
  return $paymentApi.retrieve({
    model: {
      id: paymentID
    }
  }).then(function (res) {
    if (res.ack !== 'success') {
      throw new Error('Get payment failed');
    }

    return res.data;
  });
}
function patchPayment(paymentID, patch) {
  return $paymentApi.action('patch', {
    model: {
      id: paymentID
    },
    data: {
      patch: patch
    }
  }).then(function (res) {
    if (res.ack !== 'success') {
      throw new Error('Patch payment failed');
    }

    return res.data;
  });
}
function executePayment(paymentID, payerID) {
  return $paymentApi.action('execute', {
    model: {
      id: paymentID
    },
    data: {
      payer_id: payerID
    }
  }).then(function (res) {
    if (res.ack !== 'success') {
      throw new Error('Execute payment failed');
    }

    return res.data;
  });
}
function getOrder(orderID) {
  return $orderApi.retrieve({
    model: {
      id: orderID
    }
  }).then(function (res) {
    if (res.ack !== 'success') {
      throw new Error('Get order failed');
    }

    return res.data;
  });
}
function captureOrder(orderID) {
  return $orderApi.action('capture', {
    model: {
      id: orderID
    }
  }).then(function (res) {
    if (res.ack !== 'success') {
      throw new Error('Capture order failed');
    }

    return res.data;
  });
}
function authorizeOrder(orderID) {
  return $orderApi.action('authorize', {
    model: {
      id: orderID
    }
  }).then(function (res) {
    if (res.ack !== 'success') {
      throw new Error('Authorize order failed');
    }

    return res.data;
  });
}
function patchOrder(orderID, patch) {
  return $orderApi.action('patch', {
    model: {
      id: orderID
    },
    data: {
      patch: patch
    }
  }).then(function (res) {
    if (res.ack !== 'success') {
      throw new Error('Patch order failed');
    }

    return res.data;
  });
}
function mapToToken(id) {
  return $paymentApi.action('ectoken', {
    model: {
      id: id
    }
  }).then(function (res) {
    if (res.ack !== 'success') {
      throw new Error('Map payment failed');
    }

    return res.data.token;
  });
}
function getCheckoutAppData(token) {
  return $checkoutAppDataApi.retrieve({
    model: {
      id: token
    }
  }).then(function (res) {
    if (res.ack !== 'success') {
      throw new Error('Get payment failed');
    }

    return res.data;
  });
}
function getCheckoutCart(token) {
  return $checkoutCartApi.retrieve({
    model: {
      id: token
    }
  }).then(function (res) {
    if (res.ack !== 'success') {
      throw new Error('Get payment failed');
    }

    return res.data;
  });
}
function callGraphQL(query, variables) {
  return window.paypal.request({
    url: API_URI.GRAPHQL,
    method: 'POST',
    json: {
      query: query,
      variables: variables
    }
  }).then(function (body) {
    var errors = (body.errors || []).filter(function (error) {
      return error.message !== 'ACCOUNT_CANNOT_BE_FETCHED';
    });

    if (errors.length) {
      var message = errors[0].message || JSON.stringify(errors[0]);
      throw new Error(message);
    }

    return body;
  });
}
var normalizeMap = {};
function normalizeECToken(id) {
  normalizeMap[id] = normalizeMap[id] || window.paypal.Promise.try(function () {
    if (id.indexOf('PAY-') === 0 || id.indexOf('PAYID-') === 0 || id.indexOf('BA-') === 0) {
      return mapToToken(id);
    }

    return id;
  });
  return normalizeMap[id];
}
function updateClientConfig(_ref) {
  var paymentToken = _ref.paymentToken,
      fundingSource = _ref.fundingSource,
      integrationArtifact = _ref.integrationArtifact,
      userExperienceFlow = _ref.userExperienceFlow,
      productFlow = _ref.productFlow;
  return normalizeECToken(paymentToken).then(function (normalizedToken) {
    return callGraphQL("\n            mutation UpdateClientConfig(\n                $paymentToken : String!,\n                $fundingSource : ButtonFundingSourceType!,\n                $integrationArtifact : IntegrationArtifactType!,\n                $userExperienceFlow : UserExperienceFlowType!,\n                $productFlow : ProductFlowType!\n            ) {\n                updateClientConfig(\n                    token: $paymentToken,\n                    fundingSource: $fundingSource,\n                    integrationArtifact: $integrationArtifact,\n                    userExperienceFlow: $userExperienceFlow,\n                    productFlow: $productFlow\n                )\n            }\n        ", {
      paymentToken: normalizedToken,
      fundingSource: fundingSource,
      integrationArtifact: integrationArtifact,
      userExperienceFlow: userExperienceFlow,
      productFlow: productFlow
    });
  });
}
// CONCATENATED MODULE: ./public/js/button/user.js




function isLoggedIn() {
  return getAuth().then(function (auth) {
    if (auth.guest) {
      return false;
    }

    if (auth.logged_in || auth.remembered || auth.refresh_token) {
      return true;
    }

    return false;
  });
}
function isCookied() {
  return Boolean($cookies.login_email);
}
function isRemembered() {
  return window.paypal.Promise.resolve().then(function () {
    if (isCookied()) {
      return true;
    }

    return isLoggedIn();
  });
}
var lastAccessToken;
function persistAccessToken(accessToken) {
  return window.paypal.Promise.try(function () {
    if (accessToken !== lastAccessToken) {
      lastAccessToken = accessToken;
      $Api.addHeader(ACCESS_TOKEN_HEADER, accessToken);
      return getAuth();
    }
  });
}
function getPersistedAccessToken() {
  return lastAccessToken;
}
// CONCATENATED MODULE: ./node_modules/zalgo-promise/src/utils.js
function utils_isPromise(item) {
  try {
    if (!item) {
      return false;
    }

    if (typeof Promise !== 'undefined' && item instanceof Promise) {
      return true;
    }

    if (typeof window !== 'undefined' && typeof window.Window === 'function' && item instanceof window.Window) {
      return false;
    }

    if (typeof window !== 'undefined' && typeof window.constructor === 'function' && item instanceof window.constructor) {
      return false;
    }

    var _toString = {}.toString;

    if (_toString) {
      var name = _toString.call(item);

      if (name === '[object Window]' || name === '[object global]' || name === '[object DOMWindow]') {
        return false;
      }
    }

    if (typeof item.then === 'function') {
      return true;
    }
  } catch (err) {
    return false;
  }

  return false;
}
// CONCATENATED MODULE: ./node_modules/zalgo-promise/src/exceptions.js
var dispatchedErrors = [];
var possiblyUnhandledPromiseHandlers = [];
function dispatchPossiblyUnhandledError(err, promise) {
  if (dispatchedErrors.indexOf(err) !== -1) {
    return;
  }

  dispatchedErrors.push(err);
  setTimeout(function () {
    if (false) {}

    throw err;
  }, 1);

  for (var j = 0; j < possiblyUnhandledPromiseHandlers.length; j++) {
    // $FlowFixMe
    possiblyUnhandledPromiseHandlers[j](err, promise);
  }
}
function exceptions_onPossiblyUnhandledException(handler) {
  possiblyUnhandledPromiseHandlers.push(handler);
  return {
    cancel: function cancel() {
      possiblyUnhandledPromiseHandlers.splice(possiblyUnhandledPromiseHandlers.indexOf(handler), 1);
    }
  };
}
// CONCATENATED MODULE: ./node_modules/zalgo-promise/src/flush.js
var activeCount = 0;
var flushPromise;

function flushActive() {
  if (!activeCount && flushPromise) {
    var promise = flushPromise;
    flushPromise = null;
    promise.resolve();
  }
}

function startActive() {
  activeCount += 1;
}
function endActive() {
  activeCount -= 1;
  flushActive();
}
function awaitActive(Zalgo) {
  // eslint-disable-line no-undef
  var promise = flushPromise = flushPromise || new Zalgo();
  flushActive();
  return promise;
}
// CONCATENATED MODULE: ./node_modules/zalgo-promise/src/promise.js



var promise_ZalgoPromise =
/*#__PURE__*/
function () {
  function ZalgoPromise(handler) {
    var _this = this;

    this.resolved = void 0;
    this.rejected = void 0;
    this.errorHandled = void 0;
    this.value = void 0;
    this.error = void 0;
    this.handlers = void 0;
    this.dispatching = void 0;
    this.stack = void 0;
    this.resolved = false;
    this.rejected = false;
    this.errorHandled = false;
    this.handlers = [];

    if (handler) {
      var _result;

      var _error;

      var resolved = false;
      var rejected = false;
      var isAsync = false;
      startActive();

      try {
        handler(function (res) {
          if (isAsync) {
            _this.resolve(res);
          } else {
            resolved = true;
            _result = res;
          }
        }, function (err) {
          if (isAsync) {
            _this.reject(err);
          } else {
            rejected = true;
            _error = err;
          }
        });
      } catch (err) {
        endActive();
        this.reject(err);
        return;
      }

      endActive();
      isAsync = true;

      if (resolved) {
        // $FlowFixMe
        this.resolve(_result);
      } else if (rejected) {
        this.reject(_error);
      }
    }

    if (false) {}
  }

  var _proto = ZalgoPromise.prototype;

  _proto.resolve = function resolve(result) {
    if (this.resolved || this.rejected) {
      return this;
    }

    if (utils_isPromise(result)) {
      throw new Error('Can not resolve promise with another promise');
    }

    this.resolved = true;
    this.value = result;
    this.dispatch();
    return this;
  };

  _proto.reject = function reject(error) {
    var _this2 = this;

    if (this.resolved || this.rejected) {
      return this;
    }

    if (utils_isPromise(error)) {
      throw new Error('Can not reject promise with another promise');
    }

    if (!error) {
      // $FlowFixMe
      var _err = error && typeof error.toString === 'function' ? error.toString() : Object.prototype.toString.call(error);

      error = new Error("Expected reject to be called with Error, got " + _err);
    }

    this.rejected = true;
    this.error = error;

    if (!this.errorHandled) {
      setTimeout(function () {
        if (!_this2.errorHandled) {
          dispatchPossiblyUnhandledError(error, _this2);
        }
      }, 1);
    }

    this.dispatch();
    return this;
  };

  _proto.asyncReject = function asyncReject(error) {
    this.errorHandled = true;
    this.reject(error);
    return this;
  };

  _proto.dispatch = function dispatch() {
    var dispatching = this.dispatching,
        resolved = this.resolved,
        rejected = this.rejected,
        handlers = this.handlers;

    if (dispatching) {
      return;
    }

    if (!resolved && !rejected) {
      return;
    }

    this.dispatching = true;
    startActive();

    var chain = function chain(firstPromise, secondPromise) {
      return firstPromise.then(function (res) {
        secondPromise.resolve(res);
      }, function (err) {
        secondPromise.reject(err);
      });
    };

    for (var i = 0; i < handlers.length; i++) {
      var _handlers$i = handlers[i],
          onSuccess = _handlers$i.onSuccess,
          onError = _handlers$i.onError,
          promise = _handlers$i.promise;

      var _result2 = void 0;

      if (resolved) {
        try {
          _result2 = onSuccess ? onSuccess(this.value) : this.value;
        } catch (err) {
          promise.reject(err);
          continue;
        }
      } else if (rejected) {
        if (!onError) {
          promise.reject(this.error);
          continue;
        }

        try {
          _result2 = onError(this.error);
        } catch (err) {
          promise.reject(err);
          continue;
        }
      }

      if (_result2 instanceof ZalgoPromise && (_result2.resolved || _result2.rejected)) {
        if (_result2.resolved) {
          promise.resolve(_result2.value);
        } else {
          promise.reject(_result2.error);
        }

        _result2.errorHandled = true;
      } else if (utils_isPromise(_result2)) {
        if (_result2 instanceof ZalgoPromise && (_result2.resolved || _result2.rejected)) {
          if (_result2.resolved) {
            promise.resolve(_result2.value);
          } else {
            promise.reject(_result2.error);
          }
        } else {
          // $FlowFixMe
          chain(_result2, promise);
        }
      } else {
        promise.resolve(_result2);
      }
    }

    handlers.length = 0;
    this.dispatching = false;
    endActive();
  };

  _proto.then = function then(onSuccess, onError) {
    if (onSuccess && typeof onSuccess !== 'function' && !onSuccess.call) {
      throw new Error('Promise.then expected a function for success handler');
    }

    if (onError && typeof onError !== 'function' && !onError.call) {
      throw new Error('Promise.then expected a function for error handler');
    }

    var promise = new ZalgoPromise();
    this.handlers.push({
      promise: promise,
      onSuccess: onSuccess,
      onError: onError
    });
    this.errorHandled = true;
    this.dispatch();
    return promise;
  };

  _proto.catch = function _catch(onError) {
    return this.then(undefined, onError);
  };

  _proto.finally = function _finally(onFinally) {
    if (onFinally && typeof onFinally !== 'function' && !onFinally.call) {
      throw new Error('Promise.finally expected a function');
    }

    return this.then(function (result) {
      return ZalgoPromise.try(onFinally).then(function () {
        return result;
      });
    }, function (err) {
      return ZalgoPromise.try(onFinally).then(function () {
        throw err;
      });
    });
  };

  _proto.timeout = function timeout(time, err) {
    var _this3 = this;

    if (this.resolved || this.rejected) {
      return this;
    }

    var timeout = setTimeout(function () {
      if (_this3.resolved || _this3.rejected) {
        return;
      }

      _this3.reject(err || new Error("Promise timed out after " + time + "ms"));
    }, time);
    return this.then(function (result) {
      clearTimeout(timeout);
      return result;
    });
  } // $FlowFixMe
  ;

  _proto.toPromise = function toPromise() {
    // $FlowFixMe
    if (typeof Promise === 'undefined') {
      throw new TypeError("Could not find Promise");
    } // $FlowFixMe


    return Promise.resolve(this); // eslint-disable-line compat/compat
  };

  ZalgoPromise.resolve = function resolve(value) {
    if (value instanceof ZalgoPromise) {
      return value;
    }

    if (utils_isPromise(value)) {
      // $FlowFixMe
      return new ZalgoPromise(function (resolve, reject) {
        return value.then(resolve, reject);
      });
    }

    return new ZalgoPromise().resolve(value);
  };

  ZalgoPromise.reject = function reject(error) {
    return new ZalgoPromise().reject(error);
  };

  ZalgoPromise.asyncReject = function asyncReject(error) {
    return new ZalgoPromise().asyncReject(error);
  };

  ZalgoPromise.all = function all(promises) {
    // eslint-disable-line no-undef
    var promise = new ZalgoPromise();
    var count = promises.length;
    var results = [];

    if (!count) {
      promise.resolve(results);
      return promise;
    }

    var chain = function chain(i, firstPromise, secondPromise) {
      return firstPromise.then(function (res) {
        results[i] = res;
        count -= 1;

        if (count === 0) {
          promise.resolve(results);
        }
      }, function (err) {
        secondPromise.reject(err);
      });
    };

    for (var i = 0; i < promises.length; i++) {
      var prom = promises[i];

      if (prom instanceof ZalgoPromise) {
        if (prom.resolved) {
          results[i] = prom.value;
          count -= 1;
          continue;
        }
      } else if (!utils_isPromise(prom)) {
        results[i] = prom;
        count -= 1;
        continue;
      }

      chain(i, ZalgoPromise.resolve(prom), promise);
    }

    if (count === 0) {
      promise.resolve(results);
    }

    return promise;
  };

  ZalgoPromise.hash = function hash(promises) {
    // eslint-disable-line no-undef
    var result = {};
    return ZalgoPromise.all(Object.keys(promises).map(function (key) {
      return ZalgoPromise.resolve(promises[key]).then(function (value) {
        result[key] = value;
      });
    })).then(function () {
      return result;
    });
  };

  ZalgoPromise.map = function map(items, method) {
    // $FlowFixMe
    return ZalgoPromise.all(items.map(method));
  };

  ZalgoPromise.onPossiblyUnhandledException = function onPossiblyUnhandledException(handler) {
    return exceptions_onPossiblyUnhandledException(handler);
  };

  ZalgoPromise.try = function _try(method, context, args) {
    if (method && typeof method !== 'function' && !method.call) {
      throw new Error('Promise.try expected a function');
    }

    var result;
    startActive();

    try {
      // $FlowFixMe
      result = method.apply(context, args || []);
    } catch (err) {
      endActive();
      return ZalgoPromise.reject(err);
    }

    endActive();
    return ZalgoPromise.resolve(result);
  };

  ZalgoPromise.delay = function delay(_delay) {
    return new ZalgoPromise(function (resolve) {
      setTimeout(resolve, _delay);
    });
  };

  ZalgoPromise.isPromise = function isPromise(value) {
    if (value && value instanceof ZalgoPromise) {
      return true;
    }

    return utils_isPromise(value);
  };

  ZalgoPromise.flush = function flush() {
    return awaitActive(ZalgoPromise);
  };

  return ZalgoPromise;
}();
// CONCATENATED MODULE: ./node_modules/zalgo-promise/src/index.js

// CONCATENATED MODULE: ./node_modules/belter/src/device.js
function getUserAgent() {
  return window.navigator.mockUserAgent || window.navigator.userAgent;
}
function isDevice(userAgent) {
  if (userAgent === void 0) {
    userAgent = getUserAgent();
  }

  if (userAgent.match(/Android|webOS|iPhone|iPad|iPod|bada|Symbian|Palm|CriOS|BlackBerry|IEMobile|WindowsMobile|Opera Mini/i)) {
    return true;
  }

  return false;
}
function isWebView() {
  var userAgent = getUserAgent();
  return /(iPhone|iPod|iPad|Macintosh).*AppleWebKit(?!.*Safari)/i.test(userAgent) || /\bwv\b/.test(userAgent) || /Android.*Version\/(\d)\.(\d)/i.test(userAgent);
}
function isStandAlone() {
  return window.navigator.standalone === true || window.matchMedia('(display-mode: standalone)').matches;
}
function isFacebookWebView(ua) {
  if (ua === void 0) {
    ua = getUserAgent();
  }

  return ua.indexOf('FBAN') !== -1 || ua.indexOf('FBAV') !== -1;
}
function isFirefoxIOS(ua) {
  if (ua === void 0) {
    ua = getUserAgent();
  }

  return /FxiOS/i.test(ua);
}
function isEdgeIOS(ua) {
  if (ua === void 0) {
    ua = getUserAgent();
  }

  return /EdgiOS/i.test(ua);
}
function isOperaMini(ua) {
  if (ua === void 0) {
    ua = getUserAgent();
  }

  return ua.indexOf('Opera Mini') > -1;
}
function isAndroid(ua) {
  if (ua === void 0) {
    ua = getUserAgent();
  }

  return /Android/.test(ua);
}
function isIos(ua) {
  if (ua === void 0) {
    ua = getUserAgent();
  }

  return /iPhone|iPod|iPad/.test(ua);
}
function isGoogleSearchApp(ua) {
  if (ua === void 0) {
    ua = getUserAgent();
  }

  return /\bGSA\b/.test(ua);
}
function isQQBrowser(ua) {
  if (ua === void 0) {
    ua = getUserAgent();
  }

  return /QQBrowser/.test(ua);
}
function isIosWebview(ua) {
  if (ua === void 0) {
    ua = getUserAgent();
  }

  if (isIos(ua)) {
    if (isGoogleSearchApp(ua)) {
      return true;
    }

    return /.+AppleWebKit(?!.*Safari)/.test(ua);
  }

  return false;
}
function isAndroidWebview(ua) {
  if (ua === void 0) {
    ua = getUserAgent();
  }

  if (isAndroid(ua)) {
    return /Version\/[\d.]+/.test(ua) && !isOperaMini(ua);
  }

  return false;
}
function device_isIE() {
  if (window.document.documentMode) {
    return true;
  }

  return Boolean(window.navigator && window.navigator.userAgent && /Edge|MSIE|rv:11/i.test(window.navigator.userAgent));
}
function isIECompHeader() {
  var mHttp = window.document.querySelector('meta[http-equiv="X-UA-Compatible"]');
  var mContent = window.document.querySelector('meta[content="IE=edge"]');

  if (mHttp && mContent) {
    return true;
  }

  return false;
}
function isElectron() {
  if (typeof process !== 'undefined' && process.versions && process.versions.electron) {
    return true;
  }

  return false;
}
function isIEIntranet() {
  // This status check only works for older versions of IE with document.documentMode set
  if (window.document.documentMode) {
    try {
      var status = window.status;
      window.status = 'testIntranetMode';

      if (window.status === 'testIntranetMode') {
        window.status = status;
        return true;
      }

      return false;
    } catch (err) {
      return false;
    }
  }

  return false;
}
function isMacOsCna() {
  var userAgent = getUserAgent();
  return /Macintosh.*AppleWebKit(?!.*Safari)/i.test(userAgent);
}
function supportsPopups(ua) {
  if (ua === void 0) {
    ua = getUserAgent();
  }

  return !(isIosWebview(ua) || isAndroidWebview(ua) || isOperaMini(ua) || isFirefoxIOS(ua) || isEdgeIOS(ua) || isFacebookWebView(ua) || isQQBrowser(ua) || isElectron() || isMacOsCna() || isStandAlone());
}
function isChrome(ua) {
  if (ua === void 0) {
    ua = getUserAgent();
  }

  return /Chrome|Chromium|CriOS/.test(ua);
}
function isSafari(ua) {
  if (ua === void 0) {
    ua = getUserAgent();
  }

  return /Safari/.test(ua) && !isChrome(ua);
}
// CONCATENATED MODULE: ./node_modules/cross-domain-utils/src/util.js
function isRegex(item) {
  return Object.prototype.toString.call(item) === '[object RegExp]';
} // eslint-disable-next-line no-unused-vars

function util_noop() {// pass
}
// CONCATENATED MODULE: ./node_modules/cross-domain-utils/src/constants.js
var constants_PROTOCOL = {
  MOCK: 'mock:',
  FILE: 'file:',
  ABOUT: 'about:'
};
var WILDCARD = '*';
var WINDOW_TYPE = {
  IFRAME: 'iframe',
  POPUP: 'popup'
};
// CONCATENATED MODULE: ./node_modules/cross-domain-utils/src/utils.js
/* eslint max-lines: 0 */


var IE_WIN_ACCESS_ERROR = 'Call was rejected by callee.\r\n';
function isFileProtocol(win) {
  if (win === void 0) {
    win = window;
  }

  return win.location.protocol === constants_PROTOCOL.FILE;
}
function isAboutProtocol(win) {
  if (win === void 0) {
    win = window;
  }

  return win.location.protocol === constants_PROTOCOL.ABOUT;
}
function getParent(win) {
  if (win === void 0) {
    win = window;
  }

  if (!win) {
    return;
  }

  try {
    if (win.parent && win.parent !== win) {
      return win.parent;
    }
  } catch (err) {// pass
  }
}
function getOpener(win) {
  if (win === void 0) {
    win = window;
  }

  if (!win) {
    return;
  } // Make sure we're not actually an iframe which has had window.open() called on us


  if (getParent(win)) {
    return;
  }

  try {
    return win.opener;
  } catch (err) {// pass
  }
}
function canReadFromWindow(win) {
  try {
    // $FlowFixMe
    util_noop(win && win.location && win.location.href);
    return true;
  } catch (err) {// pass
  }

  return false;
}
function getActualDomain(win) {
  if (win === void 0) {
    win = window;
  }

  var location = win.location;

  if (!location) {
    throw new Error("Can not read window location");
  }

  var protocol = location.protocol;

  if (!protocol) {
    throw new Error("Can not read window protocol");
  }

  if (protocol === constants_PROTOCOL.FILE) {
    return constants_PROTOCOL.FILE + "//";
  }

  if (protocol === constants_PROTOCOL.ABOUT) {
    var parent = getParent(win);

    if (parent && canReadFromWindow(parent)) {
      // $FlowFixMe
      return getActualDomain(parent);
    }

    return constants_PROTOCOL.ABOUT + "//";
  }

  var host = location.host;

  if (!host) {
    throw new Error("Can not read window host");
  }

  return protocol + "//" + host;
}
function getDomain(win) {
  if (win === void 0) {
    win = window;
  }

  var domain = getActualDomain(win);

  if (domain && win.mockDomain && win.mockDomain.indexOf(constants_PROTOCOL.MOCK) === 0) {
    return win.mockDomain;
  }

  return domain;
}
function isBlankDomain(win) {
  try {
    // $FlowFixMe
    if (!win.location.href) {
      return true;
    }

    if (win.location.href === 'about:blank') {
      return true;
    }
  } catch (err) {// pass
  }

  return false;
}
function isActuallySameDomain(win) {
  try {
    if (win === window) {
      return true;
    }
  } catch (err) {// pass
  }

  try {
    var desc = Object.getOwnPropertyDescriptor(win, 'location');

    if (desc && desc.enumerable === false) {
      return false;
    }
  } catch (err) {// pass
  }

  try {
    // $FlowFixMe
    if (isAboutProtocol(win) && canReadFromWindow(win)) {
      return true;
    }
  } catch (err) {// pass
  }

  try {
    // $FlowFixMe
    if (getActualDomain(win) === getActualDomain(window)) {
      return true;
    }
  } catch (err) {// pass
  }

  return false;
}
function isSameDomain(win) {
  if (!isActuallySameDomain(win)) {
    return false;
  }

  try {
    if (win === window) {
      return true;
    } // $FlowFixMe


    if (isAboutProtocol(win) && canReadFromWindow(win)) {
      return true;
    } // $FlowFixMe


    if (getDomain(window) === getDomain(win)) {
      return true;
    }
  } catch (err) {// pass
  }

  return false;
}
function assertSameDomain(win) {
  if (!isSameDomain(win)) {
    throw new Error("Expected window to be same domain");
  } // $FlowFixMe


  return win;
}
function getParents(win) {
  var result = [];

  try {
    while (win.parent !== win) {
      result.push(win.parent);
      win = win.parent;
    }
  } catch (err) {// pass
  }

  return result;
}
function isAncestorParent(parent, child) {
  if (!parent || !child) {
    return false;
  }

  var childParent = getParent(child);

  if (childParent) {
    return childParent === parent;
  }

  if (getParents(child).indexOf(parent) !== -1) {
    return true;
  }

  return false;
}
function getFrames(win) {
  var result = [];
  var frames;

  try {
    frames = win.frames;
  } catch (err) {
    frames = win;
  }

  var len;

  try {
    len = frames.length;
  } catch (err) {// pass
  }

  if (len === 0) {
    return result;
  }

  if (len) {
    for (var i = 0; i < len; i++) {
      var frame = void 0;

      try {
        frame = frames[i];
      } catch (err) {
        continue;
      }

      result.push(frame);
    }

    return result;
  }

  for (var _i = 0; _i < 100; _i++) {
    var _frame = void 0;

    try {
      _frame = frames[_i];
    } catch (err) {
      return result;
    }

    if (!_frame) {
      return result;
    }

    result.push(_frame);
  }

  return result;
}
function getAllChildFrames(win) {
  var result = [];

  for (var _i3 = 0, _getFrames2 = getFrames(win); _i3 < _getFrames2.length; _i3++) {
    var frame = _getFrames2[_i3];
    result.push(frame);

    for (var _i5 = 0, _getAllChildFrames2 = getAllChildFrames(frame); _i5 < _getAllChildFrames2.length; _i5++) {
      var childFrame = _getAllChildFrames2[_i5];
      result.push(childFrame);
    }
  }

  return result;
}
function getTop(win) {
  if (win === void 0) {
    win = window;
  }

  try {
    if (win.top) {
      return win.top;
    }
  } catch (err) {// pass
  }

  if (getParent(win) === win) {
    return win;
  }

  try {
    if (isAncestorParent(window, win) && window.top) {
      return window.top;
    }
  } catch (err) {// pass
  }

  try {
    if (isAncestorParent(win, window) && window.top) {
      return window.top;
    }
  } catch (err) {// pass
  }

  for (var _i7 = 0, _getAllChildFrames4 = getAllChildFrames(win); _i7 < _getAllChildFrames4.length; _i7++) {
    var frame = _getAllChildFrames4[_i7];

    try {
      if (frame.top) {
        return frame.top;
      }
    } catch (err) {// pass
    }

    if (getParent(frame) === frame) {
      return frame;
    }
  }
}
function getNextOpener(win) {
  if (win === void 0) {
    win = window;
  }

  return getOpener(getTop(win) || win);
}
function getUltimateTop(win) {
  if (win === void 0) {
    win = window;
  }

  var opener = getNextOpener(win);

  if (opener) {
    return getUltimateTop(opener);
  }

  return top;
}
function getAllFramesInWindow(win) {
  var top = getTop(win);

  if (!top) {
    throw new Error("Can not determine top window");
  }

  return [].concat(getAllChildFrames(top), [top]);
}
function getAllWindows(win) {
  if (win === void 0) {
    win = window;
  }

  var frames = getAllFramesInWindow(win);
  var opener = getNextOpener(win);

  if (opener) {
    return [].concat(getAllWindows(opener), frames);
  } else {
    return frames;
  }
}
function isTop(win) {
  return win === getTop(win);
}
function isFrameWindowClosed(frame) {
  if (!frame.contentWindow) {
    return true;
  }

  if (!frame.parentNode) {
    return true;
  }

  var doc = frame.ownerDocument;

  if (doc && doc.documentElement && !doc.documentElement.contains(frame)) {
    return true;
  }

  return false;
}

function safeIndexOf(collection, item) {
  for (var i = 0; i < collection.length; i++) {
    try {
      if (collection[i] === item) {
        return i;
      }
    } catch (err) {// pass
    }
  }

  return -1;
}

var iframeWindows = [];
var iframeFrames = [];
function isWindowClosed(win, allowMock) {
  if (allowMock === void 0) {
    allowMock = true;
  }

  try {
    if (win === window) {
      return false;
    }
  } catch (err) {
    return true;
  }

  try {
    if (!win) {
      return true;
    }
  } catch (err) {
    return true;
  }

  try {
    if (win.closed) {
      return true;
    }
  } catch (err) {
    // I love you so much IE
    if (err && err.message === IE_WIN_ACCESS_ERROR) {
      return false;
    }

    return true;
  }

  if (allowMock && isSameDomain(win)) {
    try {
      // $FlowFixMe
      if (win.mockclosed) {
        return true;
      }
    } catch (err) {// pass
    }
  } // Mobile safari


  try {
    if (!win.parent || !win.top) {
      return true;
    }
  } catch (err) {} // pass
  // Yes, this actually happens in IE. win === win errors out when the window
  // is from an iframe, and the iframe was removed from the page.


  try {
    util_noop(win === win); // eslint-disable-line no-self-compare
  } catch (err) {
    return true;
  } // IE orphaned frame


  var iframeIndex = safeIndexOf(iframeWindows, win);

  if (iframeIndex !== -1) {
    var frame = iframeFrames[iframeIndex];

    if (frame && isFrameWindowClosed(frame)) {
      return true;
    }
  }

  return false;
}

function cleanIframes() {
  for (var i = 0; i < iframeWindows.length; i++) {
    var closed = false;

    try {
      closed = iframeWindows[i].closed;
    } catch (err) {// pass
    }

    if (closed) {
      iframeFrames.splice(i, 1);
      iframeWindows.splice(i, 1);
    }
  }
}

function linkFrameWindow(frame) {
  cleanIframes();

  if (frame && frame.contentWindow) {
    try {
      iframeWindows.push(frame.contentWindow);
      iframeFrames.push(frame);
    } catch (err) {// pass
    }
  }
}
function utils_getUserAgent(win) {
  win = win || window;
  return win.navigator.mockUserAgent || win.navigator.userAgent;
}
function getFrameByName(win, name) {
  var winFrames = getFrames(win);

  for (var _i9 = 0; _i9 < winFrames.length; _i9++) {
    var childFrame = winFrames[_i9];

    try {
      // $FlowFixMe
      if (isSameDomain(childFrame) && childFrame.name === name && winFrames.indexOf(childFrame) !== -1) {
        return childFrame;
      }
    } catch (err) {// pass
    }
  }

  try {
    // $FlowFixMe
    if (winFrames.indexOf(win.frames[name]) !== -1) {
      // $FlowFixMe
      return win.frames[name];
    }
  } catch (err) {// pass
  }

  try {
    if (winFrames.indexOf(win[name]) !== -1) {
      return win[name];
    }
  } catch (err) {// pass
  }
}
function findChildFrameByName(win, name) {
  var frame = getFrameByName(win, name);

  if (frame) {
    return frame;
  }

  for (var _i11 = 0, _getFrames4 = getFrames(win); _i11 < _getFrames4.length; _i11++) {
    var childFrame = _getFrames4[_i11];
    var namedFrame = findChildFrameByName(childFrame, name);

    if (namedFrame) {
      return namedFrame;
    }
  }
}
function findFrameByName(win, name) {
  var frame;
  frame = getFrameByName(win, name);

  if (frame) {
    return frame;
  }

  var top = getTop(win) || win;
  return findChildFrameByName(top, name);
}
function isParent(win, frame) {
  var frameParent = getParent(frame);

  if (frameParent) {
    return frameParent === win;
  }

  for (var _i13 = 0, _getFrames6 = getFrames(win); _i13 < _getFrames6.length; _i13++) {
    var childFrame = _getFrames6[_i13];

    if (childFrame === frame) {
      return true;
    }
  }

  return false;
}
function isOpener(parent, child) {
  return parent === getOpener(child);
}
function getAncestor(win) {
  if (win === void 0) {
    win = window;
  }

  win = win || window;
  var opener = getOpener(win);

  if (opener) {
    return opener;
  }

  var parent = getParent(win);

  if (parent) {
    return parent;
  }
}
function getAncestors(win) {
  var results = [];
  var ancestor = win;

  while (ancestor) {
    ancestor = getAncestor(ancestor);

    if (ancestor) {
      results.push(ancestor);
    }
  }

  return results;
}
function isAncestor(parent, child) {
  var actualParent = getAncestor(child);

  if (actualParent) {
    if (actualParent === parent) {
      return true;
    }

    return false;
  }

  if (child === parent) {
    return false;
  }

  if (getTop(child) === child) {
    return false;
  }

  for (var _i15 = 0, _getFrames8 = getFrames(parent); _i15 < _getFrames8.length; _i15++) {
    var frame = _getFrames8[_i15];

    if (frame === child) {
      return true;
    }
  }

  return false;
}
function utils_isPopup(win) {
  if (win === void 0) {
    win = window;
  }

  return Boolean(getOpener(win));
}
function isIframe(win) {
  if (win === void 0) {
    win = window;
  }

  return Boolean(getParent(win));
}
function isFullpage(win) {
  if (win === void 0) {
    win = window;
  }

  return Boolean(!isIframe(win) && !utils_isPopup(win));
}

function anyMatch(collection1, collection2) {
  for (var _i17 = 0; _i17 < collection1.length; _i17++) {
    var item1 = collection1[_i17];

    for (var _i19 = 0; _i19 < collection2.length; _i19++) {
      var item2 = collection2[_i19];

      if (item1 === item2) {
        return true;
      }
    }
  }

  return false;
}

function getDistanceFromTop(win) {
  if (win === void 0) {
    win = window;
  }

  var distance = 0;
  var parent = win;

  while (parent) {
    parent = getParent(parent);

    if (parent) {
      distance += 1;
    }
  }

  return distance;
}
function getNthParent(win, n) {
  if (n === void 0) {
    n = 1;
  }

  var parent = win;

  for (var i = 0; i < n; i++) {
    if (!parent) {
      return;
    }

    parent = getParent(parent);
  }

  return parent;
}
function getNthParentFromTop(win, n) {
  if (n === void 0) {
    n = 1;
  }

  return getNthParent(win, getDistanceFromTop(win) - n);
}
function isSameTopWindow(win1, win2) {
  var top1 = getTop(win1) || win1;
  var top2 = getTop(win2) || win2;

  try {
    if (top1 && top2) {
      if (top1 === top2) {
        return true;
      }

      return false;
    }
  } catch (err) {// pass
  }

  var allFrames1 = getAllFramesInWindow(win1);
  var allFrames2 = getAllFramesInWindow(win2);

  if (anyMatch(allFrames1, allFrames2)) {
    return true;
  }

  var opener1 = getOpener(top1);
  var opener2 = getOpener(top2);

  if (opener1 && anyMatch(getAllFramesInWindow(opener1), allFrames2)) {
    return false;
  }

  if (opener2 && anyMatch(getAllFramesInWindow(opener2), allFrames1)) {
    return false;
  }

  return false;
}
function matchDomain(pattern, origin) {
  if (typeof pattern === 'string') {
    if (typeof origin === 'string') {
      return pattern === WILDCARD || origin === pattern;
    }

    if (isRegex(origin)) {
      return false;
    }

    if (Array.isArray(origin)) {
      return false;
    }
  }

  if (isRegex(pattern)) {
    if (isRegex(origin)) {
      return pattern.toString() === origin.toString();
    }

    if (Array.isArray(origin)) {
      return false;
    } // $FlowFixMe


    return Boolean(origin.match(pattern));
  }

  if (Array.isArray(pattern)) {
    if (Array.isArray(origin)) {
      return JSON.stringify(pattern) === JSON.stringify(origin);
    }

    if (isRegex(origin)) {
      return false;
    }

    return pattern.some(function (subpattern) {
      return matchDomain(subpattern, origin);
    });
  }

  return false;
}
function stringifyDomainPattern(pattern) {
  if (Array.isArray(pattern)) {
    return "(" + pattern.join(' | ') + ")";
  } else if (isRegex(pattern)) {
    return "RegExp(" + pattern.toString();
  } else {
    return pattern.toString();
  }
}
function getDomainFromUrl(url) {
  var domain;

  if (url.match(/^(https?|mock|file):\/\//)) {
    domain = url;
  } else {
    return getDomain();
  }

  domain = domain.split('/').slice(0, 3).join('/');
  return domain;
}
function onCloseWindow(win, callback, delay, maxtime) {
  if (delay === void 0) {
    delay = 1000;
  }

  if (maxtime === void 0) {
    maxtime = Infinity;
  }

  var timeout;

  var check = function check() {
    if (isWindowClosed(win)) {
      if (timeout) {
        clearTimeout(timeout);
      }

      return callback();
    }

    if (maxtime <= 0) {
      clearTimeout(timeout);
    } else {
      maxtime -= delay;
      timeout = setTimeout(check, delay);
    }
  };

  check();
  return {
    cancel: function cancel() {
      if (timeout) {
        clearTimeout(timeout);
      }
    }
  };
} // eslint-disable-next-line complexity

function isWindow(obj) {
  try {
    if (obj === window) {
      return true;
    }
  } catch (err) {
    if (err && err.message === IE_WIN_ACCESS_ERROR) {
      return true;
    }
  }

  try {
    if (Object.prototype.toString.call(obj) === '[object Window]') {
      return true;
    }
  } catch (err) {
    if (err && err.message === IE_WIN_ACCESS_ERROR) {
      return true;
    }
  }

  try {
    if (window.Window && obj instanceof window.Window) {
      return true;
    }
  } catch (err) {
    if (err && err.message === IE_WIN_ACCESS_ERROR) {
      return true;
    }
  }

  try {
    if (obj && obj.self === obj) {
      return true;
    }
  } catch (err) {
    if (err && err.message === IE_WIN_ACCESS_ERROR) {
      return true;
    }
  }

  try {
    if (obj && obj.parent === obj) {
      return true;
    }
  } catch (err) {
    if (err && err.message === IE_WIN_ACCESS_ERROR) {
      return true;
    }
  }

  try {
    if (obj && obj.top === obj) {
      return true;
    }
  } catch (err) {
    if (err && err.message === IE_WIN_ACCESS_ERROR) {
      return true;
    }
  }

  try {
    if (util_noop(obj === obj) === '__unlikely_value__') {
      // eslint-disable-line no-self-compare
      return false;
    }
  } catch (err) {
    return true;
  }

  try {
    if (obj && obj.__cross_domain_utils_window_check__ === '__unlikely_value__') {
      return false;
    }
  } catch (err) {
    return true;
  }

  return false;
}
function isBrowser() {
  return typeof window !== 'undefined' && typeof window.location !== 'undefined';
}
function isCurrentDomain(domain) {
  if (!isBrowser()) {
    return false;
  }

  return getDomain() === domain;
}
function isMockDomain(domain) {
  return domain.indexOf(constants_PROTOCOL.MOCK) === 0;
}
function normalizeMockUrl(url) {
  if (!isMockDomain(getDomainFromUrl(url))) {
    return url;
  }

  if (true) {
    throw new Error("Mock urls not supported out of test mode");
  }

  return url.replace(/^mock:\/\/[^/]+/, getActualDomain(window));
}
function closeWindow(win) {
  try {
    win.close();
  } catch (err) {// pass
  }
}
function getFrameForWindow(win) {
  if (isSameDomain(win)) {
    return assertSameDomain(win).frameElement;
  }

  for (var _i21 = 0, _document$querySelect2 = document.querySelectorAll('iframe'); _i21 < _document$querySelect2.length; _i21++) {
    var frame = _document$querySelect2[_i21];

    if (frame && frame.contentWindow && frame.contentWindow === win) {
      return frame;
    }
  }
}
// CONCATENATED MODULE: ./node_modules/cross-domain-utils/src/types.js
// export something to force webpack to see this as an ES module
var TYPES = true;
// CONCATENATED MODULE: ./node_modules/cross-domain-utils/src/index.js



// CONCATENATED MODULE: ./node_modules/cross-domain-safe-weakmap/src/native.js
function hasNativeWeakMap() {
  if (typeof WeakMap === 'undefined') {
    return false;
  }

  if (typeof Object.freeze === 'undefined') {
    return false;
  }

  try {
    var testWeakMap = new WeakMap();
    var testKey = {};
    var testValue = '__testvalue__';
    Object.freeze(testKey);
    testWeakMap.set(testKey, testValue);

    if (testWeakMap.get(testKey) === testValue) {
      return true;
    }

    return false;
  } catch (err) {
    return false;
  }
}
// CONCATENATED MODULE: ./node_modules/cross-domain-safe-weakmap/src/util.js
function util_safeIndexOf(collection, item) {
  for (var i = 0; i < collection.length; i++) {
    try {
      if (collection[i] === item) {
        return i;
      }
    } catch (err) {// pass
    }
  }

  return -1;
} // eslint-disable-next-line no-unused-vars

function src_util_noop() {// pass
}
// CONCATENATED MODULE: ./node_modules/cross-domain-safe-weakmap/src/weakmap.js



var weakmap_CrossDomainSafeWeakMap =
/*#__PURE__*/
function () {
  function CrossDomainSafeWeakMap() {
    this.name = void 0;
    this.weakmap = void 0;
    this.keys = void 0;
    this.values = void 0;
    // eslint-disable-next-line no-bitwise
    this.name = "__weakmap_" + (Math.random() * 1e9 >>> 0) + "__";

    if (hasNativeWeakMap()) {
      try {
        this.weakmap = new WeakMap();
      } catch (err) {// pass
      }
    }

    this.keys = [];
    this.values = [];
  }

  var _proto = CrossDomainSafeWeakMap.prototype;

  _proto._cleanupClosedWindows = function _cleanupClosedWindows() {
    var weakmap = this.weakmap;
    var keys = this.keys;

    for (var i = 0; i < keys.length; i++) {
      var value = keys[i];

      if (isWindow(value) && isWindowClosed(value)) {
        if (weakmap) {
          try {
            weakmap.delete(value);
          } catch (err) {// pass
          }
        }

        keys.splice(i, 1);
        this.values.splice(i, 1);
        i -= 1;
      }
    }
  };

  _proto.isSafeToReadWrite = function isSafeToReadWrite(key) {
    if (isWindow(key)) {
      return false;
    }

    try {
      src_util_noop(key && key.self);
      src_util_noop(key && key[this.name]);
    } catch (err) {
      return false;
    }

    return true;
  };

  _proto.set = function set(key, value) {
    if (!key) {
      throw new Error("WeakMap expected key");
    }

    var weakmap = this.weakmap;

    if (weakmap) {
      try {
        weakmap.set(key, value);
      } catch (err) {
        delete this.weakmap;
      }
    }

    if (this.isSafeToReadWrite(key)) {
      try {
        var name = this.name;
        var entry = key[name];

        if (entry && entry[0] === key) {
          entry[1] = value;
        } else {
          Object.defineProperty(key, name, {
            value: [key, value],
            writable: true
          });
        }

        return;
      } catch (err) {// pass
      }
    }

    this._cleanupClosedWindows();

    var keys = this.keys;
    var values = this.values;
    var index = util_safeIndexOf(keys, key);

    if (index === -1) {
      keys.push(key);
      values.push(value);
    } else {
      values[index] = value;
    }
  };

  _proto.get = function get(key) {
    if (!key) {
      throw new Error("WeakMap expected key");
    }

    var weakmap = this.weakmap;

    if (weakmap) {
      try {
        if (weakmap.has(key)) {
          return weakmap.get(key);
        }
      } catch (err) {
        delete this.weakmap;
      }
    }

    if (this.isSafeToReadWrite(key)) {
      try {
        var entry = key[this.name];

        if (entry && entry[0] === key) {
          return entry[1];
        }

        return;
      } catch (err) {// pass
      }
    }

    this._cleanupClosedWindows();

    var keys = this.keys;
    var index = util_safeIndexOf(keys, key);

    if (index === -1) {
      return;
    }

    return this.values[index];
  };

  _proto.delete = function _delete(key) {
    if (!key) {
      throw new Error("WeakMap expected key");
    }

    var weakmap = this.weakmap;

    if (weakmap) {
      try {
        weakmap.delete(key);
      } catch (err) {
        delete this.weakmap;
      }
    }

    if (this.isSafeToReadWrite(key)) {
      try {
        var entry = key[this.name];

        if (entry && entry[0] === key) {
          entry[0] = entry[1] = undefined;
        }
      } catch (err) {// pass
      }
    }

    this._cleanupClosedWindows();

    var keys = this.keys;
    var index = util_safeIndexOf(keys, key);

    if (index !== -1) {
      keys.splice(index, 1);
      this.values.splice(index, 1);
    }
  };

  _proto.has = function has(key) {
    if (!key) {
      throw new Error("WeakMap expected key");
    }

    var weakmap = this.weakmap;

    if (weakmap) {
      try {
        if (weakmap.has(key)) {
          return true;
        }
      } catch (err) {
        delete this.weakmap;
      }
    }

    if (this.isSafeToReadWrite(key)) {
      try {
        var entry = key[this.name];

        if (entry && entry[0] === key) {
          return true;
        }

        return false;
      } catch (err) {// pass
      }
    }

    this._cleanupClosedWindows();

    var index = util_safeIndexOf(this.keys, key);
    return index !== -1;
  };

  _proto.getOrSet = function getOrSet(key, getter) {
    if (this.has(key)) {
      // $FlowFixMe
      return this.get(key);
    }

    var value = getter();
    this.set(key, value);
    return value;
  };

  return CrossDomainSafeWeakMap;
}();
// CONCATENATED MODULE: ./node_modules/cross-domain-safe-weakmap/src/index.js

// CONCATENATED MODULE: ./node_modules/belter/src/util.js
/* eslint max-lines: 0 */


function getFunctionName(fn) {
  return fn.name || fn.__name__ || fn.displayName || 'anonymous';
}
function setFunctionName(fn, name) {
  try {
    delete fn.name;
    fn.name = name;
  } catch (err) {// pass
  }

  fn.__name__ = fn.displayName = name;
  return fn;
}
function base64encode(str) {
  if (typeof btoa === 'function') {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (m, p1) {
      return String.fromCharCode(parseInt(p1, 16));
    }));
  }

  if (typeof Buffer !== 'undefined') {
    return Buffer.from(str, 'utf8').toString('base64');
  }

  throw new Error("Can not find window.btoa or Buffer");
}
function base64decode(str) {
  if (typeof atob === 'function') {
    return decodeURIComponent(Array.prototype.map.call(atob(str), function (c) {
      // eslint-disable-next-line prefer-template
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  }

  if (typeof Buffer !== 'undefined') {
    return Buffer.from(str, 'base64').toString('utf8');
  }

  throw new Error("Can not find window.atob or Buffer");
}
function uniqueID() {
  var chars = '0123456789abcdef';
  var randomID = 'xxxxxxxxxx'.replace(/./g, function () {
    return chars.charAt(Math.floor(Math.random() * chars.length));
  });
  var timeID = base64encode(new Date().toISOString().slice(11, 19).replace('T', '.')).replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return randomID + "_" + timeID;
}
function getGlobal() {
  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof global !== 'undefined') {
    return global;
  }

  throw new Error("No global found");
}
var objectIDs;
function getObjectID(obj) {
  objectIDs = objectIDs || new weakmap_CrossDomainSafeWeakMap();

  if (obj === null || obj === undefined || typeof obj !== 'object' && typeof obj !== 'function') {
    throw new Error("Invalid object");
  }

  var uid = objectIDs.get(obj);

  if (!uid) {
    uid = typeof obj + ":" + uniqueID();
    objectIDs.set(obj, uid);
  }

  return uid;
}

function serializeArgs(args) {
  try {
    return JSON.stringify(Array.prototype.slice.call(args), function (subkey, val) {
      if (typeof val === 'function') {
        return "memoize[" + getObjectID(val) + "]";
      }

      return val;
    });
  } catch (err) {
    throw new Error("Arguments not serializable -- can not be used to memoize");
  }
}

function util_memoize(method, options) {
  var _this = this;

  if (options === void 0) {
    options = {};
  }

  var cacheMap = new weakmap_CrossDomainSafeWeakMap(); // $FlowFixMe

  var memoizedFunction = function memoizedFunction() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var cache = cacheMap.getOrSet(options.thisNamespace ? this : method, function () {
      return {};
    });
    var key = serializeArgs(args);
    var cacheTime = options.time;

    if (cache[key] && cacheTime && Date.now() - cache[key].time < cacheTime) {
      delete cache[key];
    }

    if (cache[key]) {
      return cache[key].value;
    }

    var time = Date.now();
    var value = method.apply(this, arguments);
    cache[key] = {
      time: time,
      value: value
    };
    return cache[key].value;
  };

  memoizedFunction.reset = function () {
    cacheMap.delete(options.thisNamespace ? _this : method);
  };

  return setFunctionName(memoizedFunction, getFunctionName(method) + "::memoized");
}
function promiseIdentity(item) {
  // $FlowFixMe
  return promise_ZalgoPromise.resolve(item);
} // eslint-disable-next-line flowtype/no-weak-types

function memoizePromise(method) {
  var cache = {}; // eslint-disable-next-line flowtype/no-weak-types

  function memoizedPromiseFunction() {
    var _arguments = arguments,
        _this2 = this;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var key = serializeArgs(args);

    if (cache.hasOwnProperty(key)) {
      return cache[key];
    }

    cache[key] = promise_ZalgoPromise.try(function () {
      return method.apply(_this2, _arguments);
    }).finally(function () {
      delete cache[key];
    });
    return cache[key];
  }

  memoizedPromiseFunction.reset = function () {
    cache = {};
  };

  return setFunctionName(memoizedPromiseFunction, getFunctionName(method) + "::promiseMemoized");
} // eslint-disable-next-line flowtype/no-weak-types

function promisify(method, options) {
  if (options === void 0) {
    options = {};
  }

  function promisifiedFunction() {
    return promise_ZalgoPromise.try(method, this, arguments);
  }

  if (options.name) {
    promisifiedFunction.displayName = options.name + ":promisified";
  }

  return setFunctionName(promisifiedFunction, getFunctionName(method) + "::promisified");
} // eslint-disable-next-line flowtype/no-weak-types

function inlineMemoize(method, logic, args) {
  if (args === void 0) {
    args = [];
  }

  // $FlowFixMe
  var cache = method.__inline_memoize_cache__ = method.__inline_memoize_cache__ || {};
  var key = serializeArgs(args);

  if (cache.hasOwnProperty(key)) {
    return cache[key];
  }

  var result = cache[key] = logic.apply(void 0, args);
  return result;
} // eslint-disable-next-line no-unused-vars

function belter_src_util_noop() {// pass
}
function once(method) {
  var called = false;

  var onceFunction = function onceFunction() {
    if (!called) {
      called = true;
      return method.apply(this, arguments);
    }
  };

  return setFunctionName(onceFunction, getFunctionName(method) + "::once");
}
function hashStr(str) {
  var hash = 0;

  for (var i = 0; i < str.length; i++) {
    hash += str[i].charCodeAt(0) * Math.pow(i % 10 + 1, 5);
  }

  return Math.floor(Math.pow(Math.sqrt(hash), 5));
}
function strHashStr(str) {
  var hash = '';

  for (var i = 0; i < str.length; i++) {
    var total = str[i].charCodeAt(0) * i;

    if (str[i + 1]) {
      total += str[i + 1].charCodeAt(0) * (i - 1);
    }

    hash += String.fromCharCode(97 + Math.abs(total) % 26);
  }

  return hash;
}
function match(str, pattern) {
  var regmatch = str.match(pattern);

  if (regmatch) {
    return regmatch[1];
  }
}
function awaitKey(obj, key) {
  return new promise_ZalgoPromise(function (resolve) {
    var value = obj[key];

    if (value) {
      return resolve(value);
    }

    delete obj[key];
    Object.defineProperty(obj, key, {
      configurable: true,
      set: function set(item) {
        value = item;

        if (value) {
          resolve(value);
        }
      },
      get: function get() {
        return value;
      }
    });
  });
}
function stringifyError(err, level) {
  if (level === void 0) {
    level = 1;
  }

  if (level >= 3) {
    return 'stringifyError stack overflow';
  }

  try {
    if (!err) {
      return "<unknown error: " + Object.prototype.toString.call(err) + ">";
    }

    if (typeof err === 'string') {
      return err;
    }

    if (err instanceof Error) {
      var stack = err && err.stack;
      var message = err && err.message;

      if (stack && message) {
        if (stack.indexOf(message) !== -1) {
          return stack;
        } else {
          return message + "\n" + stack;
        }
      } else if (stack) {
        return stack;
      } else if (message) {
        return message;
      }
    }

    if (err && err.toString && typeof err.toString === 'function') {
      // $FlowFixMe
      return err.toString();
    }

    return Object.prototype.toString.call(err);
  } catch (newErr) {
    // eslint-disable-line unicorn/catch-error-name
    return "Error while stringifying error: " + stringifyError(newErr, level + 1);
  }
}
function stringifyErrorMessage(err) {
  var defaultMessage = "<unknown error: " + Object.prototype.toString.call(err) + ">";

  if (!err) {
    return defaultMessage;
  }

  if (err instanceof Error) {
    return err.message || defaultMessage;
  }

  if (typeof err.message === 'string') {
    return err.message || defaultMessage;
  }

  return defaultMessage;
}
function stringify(item) {
  if (typeof item === 'string') {
    return item;
  }

  if (item && item.toString && typeof item.toString === 'function') {
    // $FlowFixMe
    return item.toString();
  }

  return Object.prototype.toString.call(item);
}
function domainMatches(hostname, domain) {
  hostname = hostname.split('://')[1];
  var index = hostname.indexOf(domain);
  return index !== -1 && hostname.slice(index) === domain;
}
function patchMethod(obj, name, handler) {
  var original = obj[name];

  obj[name] = function patchedMethod() {
    var _arguments2 = arguments,
        _this3 = this;

    return handler({
      context: this,
      args: Array.prototype.slice.call(arguments),
      original: original,
      callOriginal: function callOriginal() {
        return original.apply(_this3, _arguments2);
      }
    });
  };
}
function util_extend(obj, source) {
  if (!source) {
    return obj;
  }

  if (Object.assign) {
    return Object.assign(obj, source);
  }

  for (var key in source) {
    if (source.hasOwnProperty(key)) {
      obj[key] = source[key];
    }
  }

  return obj;
}
function util_values(obj) {
  var result = [];

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push(obj[key]);
    }
  }

  return result;
}
function perc(pixels, percentage) {
  return Math.round(pixels * percentage / 100);
}
function min() {
  return Math.min.apply(Math, arguments);
}
function max() {
  return Math.max.apply(Math, arguments);
}
function regexMap(str, regexp, handler) {
  var results = []; // $FlowFixMe

  str.replace(regexp, function regexMapMatcher(item) {
    results.push(handler ? handler.apply(null, arguments) : item);
  }); // $FlowFixMe

  return results;
}
function svgToBase64(svg) {
  return "data:image/svg+xml;base64," + base64encode(svg);
}
function objFilter(obj, filter) {
  if (filter === void 0) {
    filter = Boolean;
  }

  var result = {};

  for (var key in obj) {
    if (!obj.hasOwnProperty(key) || !filter(obj[key], key)) {
      continue;
    }

    result[key] = obj[key];
  }

  return result;
}
function identity(item) {
  return item;
}
function regexTokenize(text, regexp) {
  var result = [];
  text.replace(regexp, function (token) {
    result.push(token);
    return '';
  });
  return result;
}
function promiseDebounce(method, delay) {
  if (delay === void 0) {
    delay = 50;
  }

  var promise;
  var timeout;

  var promiseDebounced = function promiseDebounced() {
    if (timeout) {
      clearTimeout(timeout);
    }

    var localPromise = promise = promise || new promise_ZalgoPromise();
    timeout = setTimeout(function () {
      promise = null;
      timeout = null;
      promise_ZalgoPromise.try(method).then(function (result) {
        localPromise.resolve(result);
      }, function (err) {
        localPromise.reject(err);
      });
    }, delay);
    return localPromise;
  };

  return setFunctionName(promiseDebounced, getFunctionName(method) + "::promiseDebounced");
}
function safeInterval(method, time) {
  var timeout;

  function loop() {
    timeout = setTimeout(function () {
      method();
      loop();
    }, time);
  }

  loop();
  return {
    cancel: function cancel() {
      clearTimeout(timeout);
    }
  };
}
function isInteger(str) {
  return Boolean(str.match(/^[0-9]+$/));
}
function isFloat(str) {
  return Boolean(str.match(/^[0-9]+\.[0-9]+$/));
}
function serializePrimitive(value) {
  return value.toString();
}
function deserializePrimitive(value) {
  if (value === 'true') {
    return true;
  } else if (value === 'false') {
    return false;
  } else if (isInteger(value)) {
    return parseInt(value, 10);
  } else if (isFloat(value)) {
    return parseFloat(value);
  } else {
    return value;
  }
}
function dotify(obj, prefix, newobj) {
  if (prefix === void 0) {
    prefix = '';
  }

  if (newobj === void 0) {
    newobj = {};
  }

  prefix = prefix ? prefix + "." : prefix;

  for (var key in obj) {
    if (!obj.hasOwnProperty(key) || obj[key] === undefined || obj[key] === null || typeof obj[key] === 'function') {
      continue;
    } else if (obj[key] && Array.isArray(obj[key]) && obj[key].length && obj[key].every(function (val) {
      return typeof val !== 'object';
    })) {
      newobj["" + prefix + key + "[]"] = obj[key].join(',');
    } else if (obj[key] && typeof obj[key] === 'object') {
      newobj = dotify(obj[key], "" + prefix + key, newobj);
    } else {
      newobj["" + prefix + key] = serializePrimitive(obj[key]);
    }
  }

  return newobj;
}
function undotify(obj) {
  var result = {};

  for (var key in obj) {
    if (!obj.hasOwnProperty(key) || typeof obj[key] !== 'string') {
      continue;
    }

    var value = obj[key];

    if (key.match(/^.+\[\]$/)) {
      key = key.slice(0, key.length - 2);
      value = value.split(',').map(deserializePrimitive);
    } else {
      value = deserializePrimitive(value);
    }

    var keyResult = result;
    var parts = key.split('.');

    for (var i = 0; i < parts.length; i++) {
      var part = parts[i];
      var isLast = i + 1 === parts.length;
      var isIndex = !isLast && isInteger(parts[i + 1]);

      if (part === 'constructor' || part === 'prototype' || part === '__proto__') {
        throw new Error("Disallowed key: " + part);
      }

      if (isLast) {
        // $FlowFixMe
        keyResult[part] = value;
      } else {
        // $FlowFixMe
        keyResult = keyResult[part] = keyResult[part] || (isIndex ? [] : {});
      }
    }
  }

  return result;
}
function eventEmitter() {
  var triggered = {};
  var handlers = {};
  return {
    on: function on(eventName, handler) {
      var handlerList = handlers[eventName] = handlers[eventName] || [];
      handlerList.push(handler);
      var cancelled = false;
      return {
        cancel: function cancel() {
          if (!cancelled) {
            cancelled = true;
            handlerList.splice(handlerList.indexOf(handler), 1);
          }
        }
      };
    },
    once: function once(eventName, handler) {
      var listener = this.on(eventName, function () {
        listener.cancel();
        handler();
      });
      return listener;
    },
    trigger: function trigger(eventName) {
      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      var handlerList = handlers[eventName];
      var promises = [];

      if (handlerList) {
        var _loop = function _loop(_i2) {
          var handler = handlerList[_i2];
          promises.push(promise_ZalgoPromise.try(function () {
            return handler.apply(void 0, args);
          }));
        };

        for (var _i2 = 0; _i2 < handlerList.length; _i2++) {
          _loop(_i2);
        }
      }

      return promise_ZalgoPromise.all(promises).then(belter_src_util_noop);
    },
    triggerOnce: function triggerOnce(eventName) {
      if (triggered[eventName]) {
        return promise_ZalgoPromise.resolve();
      }

      triggered[eventName] = true;

      for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
      }

      return this.trigger.apply(this, [eventName].concat(args));
    },
    reset: function reset() {
      handlers = {};
    }
  };
}
function camelToDasherize(string) {
  return string.replace(/([A-Z])/g, function (g) {
    return "-" + g.toLowerCase();
  });
}
function dasherizeToCamel(string) {
  return string.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
}
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
function util_get(item, path, def) {
  if (!path) {
    return def;
  }

  var pathParts = path.split('.'); // Loop through each section of our key path

  for (var i = 0; i < pathParts.length; i++) {
    // If we have an object, we can get the key
    if (typeof item === 'object' && item !== null) {
      item = item[pathParts[i]]; // Otherwise, we should return the default (undefined if not provided)
    } else {
      return def;
    }
  } // If our final result is undefined, we should return the default


  return item === undefined ? def : item;
}
function safeTimeout(method, time) {
  var interval = safeInterval(function () {
    time -= 100;

    if (time <= 0) {
      interval.cancel();
      method();
    }
  }, 100);
}
function defineLazyProp(obj, key, getter) {
  if (Array.isArray(obj)) {
    if (typeof key !== 'number') {
      throw new TypeError("Array key must be number");
    }
  } else if (typeof obj === 'object' && obj !== null) {
    if (typeof key !== 'string') {
      throw new TypeError("Object key must be string");
    }
  }

  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: true,
    get: function get() {
      // $FlowFixMe
      delete obj[key];
      var value = getter(); // $FlowFixMe

      obj[key] = value;
      return value;
    },
    set: function set(value) {
      // $FlowFixMe
      delete obj[key]; // $FlowFixMe

      obj[key] = value;
    }
  });
}
function arrayFrom(item) {
  // eslint-disable-line no-undef
  return Array.prototype.slice.call(item);
}
function isObject(item) {
  return typeof item === 'object' && item !== null;
}
function isObjectObject(obj) {
  return isObject(obj) && Object.prototype.toString.call(obj) === '[object Object]';
}
function isPlainObject(obj) {
  if (!isObjectObject(obj)) {
    return false;
  } // $FlowFixMe


  var constructor = obj.constructor;

  if (typeof constructor !== 'function') {
    return false;
  }

  var prototype = constructor.prototype;

  if (!isObjectObject(prototype)) {
    return false;
  }

  if (!prototype.hasOwnProperty('isPrototypeOf')) {
    return false;
  }

  return true;
}
function replaceObject(item, replacer, fullKey) {
  if (fullKey === void 0) {
    fullKey = '';
  }

  if (Array.isArray(item)) {
    var length = item.length;
    var result = [];

    var _loop2 = function _loop2(i) {
      defineLazyProp(result, i, function () {
        var itemKey = fullKey ? fullKey + "." + i : "" + i;
        var el = item[i];
        var child = replacer(el, i, itemKey);

        if (isPlainObject(child) || Array.isArray(child)) {
          // $FlowFixMe
          child = replaceObject(child, replacer, itemKey);
        }

        return child;
      });
    };

    for (var i = 0; i < length; i++) {
      _loop2(i);
    } // $FlowFixMe


    return result;
  } else if (isPlainObject(item)) {
    var _result = {};

    var _loop3 = function _loop3(key) {
      if (!item.hasOwnProperty(key)) {
        return "continue";
      }

      defineLazyProp(_result, key, function () {
        var itemKey = fullKey ? fullKey + "." + key : "" + key; // $FlowFixMe

        var el = item[key];
        var child = replacer(el, key, itemKey);

        if (isPlainObject(child) || Array.isArray(child)) {
          // $FlowFixMe
          child = replaceObject(child, replacer, itemKey);
        }

        return child;
      });
    };

    for (var key in item) {
      var _ret = _loop3(key);

      if (_ret === "continue") continue;
    } // $FlowFixMe


    return _result;
  } else {
    throw new Error("Pass an object or array");
  }
}
function copyProp(source, target, name, def) {
  if (source.hasOwnProperty(name)) {
    var descriptor = Object.getOwnPropertyDescriptor(source, name); // $FlowFixMe

    Object.defineProperty(target, name, descriptor);
  } else {
    target[name] = def;
  }
}
function regex(pattern, string, start) {
  if (start === void 0) {
    start = 0;
  }

  if (typeof pattern === 'string') {
    // eslint-disable-next-line security/detect-non-literal-regexp
    pattern = new RegExp(pattern);
  }

  var result = string.slice(start).match(pattern);

  if (!result) {
    return;
  } // $FlowFixMe


  var index = result.index;
  var regmatch = result[0];
  return {
    text: regmatch,
    groups: result.slice(1),
    start: start + index,
    end: start + index + regmatch.length,
    length: regmatch.length,
    replace: function replace(text) {
      if (!regmatch) {
        return '';
      }

      return "" + regmatch.slice(0, start + index) + text + regmatch.slice(index + regmatch.length);
    }
  };
}
function regexAll(pattern, string) {
  var matches = [];
  var start = 0; // eslint-disable-next-line no-constant-condition

  while (true) {
    var regmatch = regex(pattern, string, start);

    if (!regmatch) {
      break;
    }

    matches.push(regmatch);
    start = match.end;
  }

  return matches;
}
function isDefined(value) {
  return value !== null && value !== undefined;
}
function cycle(method) {
  return promise_ZalgoPromise.try(method).then(function () {
    return cycle(method);
  });
}
function util_debounce(method, time) {
  if (time === void 0) {
    time = 100;
  }

  var timeout;

  var debounceWrapper = function debounceWrapper() {
    var _arguments3 = arguments,
        _this4 = this;

    clearTimeout(timeout);
    timeout = setTimeout(function () {
      return method.apply(_this4, _arguments3);
    }, time);
  };

  return setFunctionName(debounceWrapper, getFunctionName(method) + "::debounced");
}
function util_isRegex(item) {
  return Object.prototype.toString.call(item) === '[object RegExp]';
}
// eslint-disable-next-line flowtype/no-weak-types
var util_weakMapMemoize = function weakMapMemoize(method) {
  var weakmap = new weakmap_CrossDomainSafeWeakMap(); // eslint-disable-next-line flowtype/no-weak-types

  return function weakmapMemoized(arg) {
    var _this5 = this;

    return weakmap.getOrSet(arg, function () {
      return method.call(_this5, arg);
    });
  };
};
// eslint-disable-next-line flowtype/no-weak-types
var util_weakMapMemoizePromise = function weakMapMemoizePromise(method) {
  var weakmap = new weakmap_CrossDomainSafeWeakMap(); // eslint-disable-next-line flowtype/no-weak-types

  return function weakmapMemoizedPromise(arg) {
    var _this6 = this;

    return weakmap.getOrSet(arg, function () {
      return method.call(_this6, arg).finally(function () {
        weakmap.delete(arg);
      });
    });
  };
};
function getOrSet(obj, key, getter) {
  if (obj.hasOwnProperty(key)) {
    return obj[key];
  }

  var val = getter();
  obj[key] = val;
  return val;
}
function cleanup(obj) {
  var tasks = [];
  var cleaned = false;
  return {
    set: function set(name, item) {
      if (!cleaned) {
        obj[name] = item;
        this.register(function () {
          delete obj[name];
        });
      }

      return item;
    },
    register: function register(method) {
      if (cleaned) {
        method();
      } else {
        tasks.push(once(method));
      }
    },
    all: function all() {
      var results = [];
      cleaned = true;

      while (tasks.length) {
        var task = tasks.pop();
        results.push(task());
      }

      return promise_ZalgoPromise.all(results).then(belter_src_util_noop);
    }
  };
}
function tryCatch(fn) {
  var result;
  var error;

  try {
    result = fn();
  } catch (err) {
    error = err;
  } // $FlowFixMe


  return {
    result: result,
    error: error
  };
}
function removeFromArray(arr, item) {
  var index = arr.indexOf(item);

  if (index !== -1) {
    arr.splice(index, 1);
  }
}
function assertExists(name, thing) {
  if (thing === null || typeof thing === 'undefined') {
    throw new Error("Expected " + name + " to be present");
  }

  return thing;
}
function unique(arr) {
  var result = {};

  for (var _i4 = 0; _i4 < arr.length; _i4++) {
    var item = arr[_i4];
    // eslint-disable-next-line const-immutable/no-mutation
    result[item] = true;
  }

  return Object.keys(result);
}
// CONCATENATED MODULE: ./node_modules/belter/src/constants.js
var constants_KEY_CODES = {
  ENTER: 13
};
// CONCATENATED MODULE: ./node_modules/belter/src/dom.js


/* eslint max-lines: off */






function isDocumentReady() {
  return Boolean(document.body) && document.readyState === 'complete';
}
function urlEncode(str) {
  return str.replace(/\?/g, '%3F').replace(/&/g, '%26').replace(/#/g, '%23').replace(/\+/g, '%2B');
}
function waitForWindowReady() {
  return inlineMemoize(waitForWindowReady, function () {
    return new promise_ZalgoPromise(function (resolve) {
      if (isDocumentReady()) {
        resolve();
      }

      window.addEventListener('load', function () {
        return resolve();
      });
    });
  });
}
function waitForDocumentReady() {
  return inlineMemoize(waitForDocumentReady, function () {
    return new promise_ZalgoPromise(function (resolve) {
      if (isDocumentReady()) {
        return resolve();
      }

      var interval = setInterval(function () {
        if (isDocumentReady()) {
          clearInterval(interval);
          return resolve();
        }
      }, 10);
    });
  });
}
function waitForDocumentBody() {
  return waitForDocumentReady().then(function () {
    if (document.body) {
      return document.body;
    }

    throw new Error('Document ready but document.body not present');
  });
}
function parseQuery(queryString) {
  return inlineMemoize(parseQuery, function () {
    var params = {};

    if (!queryString) {
      return params;
    }

    if (queryString.indexOf('=') === -1) {
      return params;
    }

    for (var _i2 = 0, _queryString$split2 = queryString.split('&'); _i2 < _queryString$split2.length; _i2++) {
      var pair = _queryString$split2[_i2];
      pair = pair.split('=');

      if (pair[0] && pair[1]) {
        params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
      }
    }

    return params;
  }, [queryString]);
}
function getQueryParam(name) {
  return parseQuery(window.location.search.slice(1))[name];
}
function dom_urlWillRedirectPage(url) {
  if (url.indexOf('#') === -1) {
    return true;
  }

  if (url.indexOf('#') === 0) {
    return false;
  }

  if (url.split('#')[0] === window.location.href.split('#')[0]) {
    return false;
  }

  return true;
}
function formatQuery(obj) {
  if (obj === void 0) {
    obj = {};
  }

  return Object.keys(obj).filter(function (key) {
    return typeof obj[key] === 'string';
  }).map(function (key) {
    return urlEncode(key) + "=" + urlEncode(obj[key]);
  }).join('&');
}
function extendQuery(originalQuery, props) {
  if (props === void 0) {
    props = {};
  }

  if (!props || !Object.keys(props).length) {
    return originalQuery;
  }

  return formatQuery(_extends({}, parseQuery(originalQuery), {}, props));
}
function extendUrl(url, options) {
  if (options === void 0) {
    options = {};
  }

  var query = options.query || {};
  var hash = options.hash || {};
  var originalUrl;
  var originalQuery;
  var originalHash;

  var _url$split = url.split('#');

  originalUrl = _url$split[0];
  originalHash = _url$split[1];

  var _originalUrl$split = originalUrl.split('?');

  originalUrl = _originalUrl$split[0];
  originalQuery = _originalUrl$split[1];
  var queryString = extendQuery(originalQuery, query);
  var hashString = extendQuery(originalHash, hash);

  if (queryString) {
    originalUrl = originalUrl + "?" + queryString;
  }

  if (hashString) {
    originalUrl = originalUrl + "#" + hashString;
  }

  return originalUrl;
}
function dom_redirect(url, win) {
  if (win === void 0) {
    win = window;
  }

  return new promise_ZalgoPromise(function (resolve) {
    win.location = url;

    if (!dom_urlWillRedirectPage(url)) {
      resolve();
    }
  });
}
function hasMetaViewPort() {
  var meta = document.querySelector('meta[name=viewport]');

  if (isDevice() && window.screen.width < 660 && !meta) {
    return false;
  }

  return true;
}
function isElementVisible(el) {
  return Boolean(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
}
function enablePerformance() {
  return inlineMemoize(enablePerformance, function () {
    /* eslint-disable compat/compat */
    return Boolean(window.performance && performance.now && performance.timing && performance.timing.connectEnd && performance.timing.navigationStart && Math.abs(performance.now() - Date.now()) > 1000 && performance.now() - (performance.timing.connectEnd - performance.timing.navigationStart) > 0);
    /* eslint-enable compat/compat */
  });
}
function getPageRenderTime() {
  return waitForDocumentReady().then(function () {
    if (!enablePerformance()) {
      return;
    }

    var timing = window.performance.timing;

    if (timing.connectEnd && timing.domInteractive) {
      return timing.domInteractive - timing.connectEnd;
    }
  });
}
function htmlEncode(html) {
  if (html === void 0) {
    html = '';
  }

  return html.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/\//g, '&#x2F;');
}
function dom_isBrowser() {
  return typeof window !== 'undefined';
}
function dom_querySelectorAll(selector, doc) {
  if (doc === void 0) {
    doc = window.document;
  }

  return Array.prototype.slice.call(doc.querySelectorAll(selector));
}
function dom_onClick(element, handler) {
  element.addEventListener('touchstart', belter_src_util_noop);
  element.addEventListener('click', handler);
  element.addEventListener('keypress', function (event) {
    // $FlowFixMe
    if (event.keyCode === constants_KEY_CODES.ENTER) {
      return handler(event);
    }
  });
}
function getScript(_ref) {
  var _ref$host = _ref.host,
      host = _ref$host === void 0 ? window.location.host : _ref$host,
      path = _ref.path;
  return inlineMemoize(getScript, function () {
    var url = "" + host + path;
    var scripts = Array.prototype.slice.call(document.getElementsByTagName('script'));

    for (var _i4 = 0; _i4 < scripts.length; _i4++) {
      var script = scripts[_i4];

      if (!script.src) {
        continue;
      }

      var src = script.src.replace(/^https?:\/\//, '').split('?')[0];

      if (src === url) {
        return script;
      }
    }
  }, [path]);
}
function isLocalStorageEnabled() {
  return inlineMemoize(isLocalStorageEnabled, function () {
    try {
      if (typeof window === 'undefined') {
        return false;
      }

      if (window.localStorage) {
        var value = Math.random().toString();
        window.localStorage.setItem('__test__localStorage__', value);
        var result = window.localStorage.getItem('__test__localStorage__');
        window.localStorage.removeItem('__test__localStorage__');

        if (value === result) {
          return true;
        }
      }
    } catch (err) {// pass
    }

    return false;
  });
}
function getBrowserLocales() {
  var nav = window.navigator;
  var locales = nav.languages ? Array.prototype.slice.apply(nav.languages) : [];

  if (nav.language) {
    locales.push(nav.language);
  }

  if (nav.userLanguage) {
    locales.push(nav.userLanguage);
  }

  return locales.map(function (locale) {
    if (locale && locale.match(/^[a-z]{2}[-_][A-Z]{2}$/)) {
      var _locale$split = locale.split(/[-_]/),
          lang = _locale$split[0],
          country = _locale$split[1];

      return {
        country: country,
        lang: lang
      };
    }

    if (locale && locale.match(/^[a-z]{2}$/)) {
      return {
        lang: locale
      };
    }

    return null;
  }).filter(Boolean);
}
function appendChild(container, child) {
  container.appendChild(child);
}
function isElement(element) {
  if (element instanceof window.Element) {
    return true;
  }

  if (element !== null && typeof element === 'object' && element.nodeType === 1 && typeof element.style === 'object' && typeof element.ownerDocument === 'object') {
    return true;
  }

  return false;
}
function getElementSafe(id, doc) {
  if (doc === void 0) {
    doc = document;
  }

  if (isElement(id)) {
    // $FlowFixMe
    return id;
  }

  if (typeof id === 'string') {
    return doc.querySelector(id);
  }
}
function getElement(id, doc) {
  if (doc === void 0) {
    doc = document;
  }

  var element = getElementSafe(id, doc);

  if (element) {
    return element;
  }

  throw new Error("Can not find element: " + stringify(id));
}
function elementReady(id) {
  return new promise_ZalgoPromise(function (resolve, reject) {
    var name = stringify(id);
    var el = getElementSafe(id);

    if (el) {
      return resolve(el);
    }

    if (isDocumentReady()) {
      return reject(new Error("Document is ready and element " + name + " does not exist"));
    }

    var interval = setInterval(function () {
      el = getElementSafe(id);

      if (el) {
        clearInterval(interval);
        return resolve(el);
      }

      if (isDocumentReady()) {
        clearInterval(interval);
        return reject(new Error("Document is ready and element " + name + " does not exist"));
      }
    }, 10);
  });
}
function PopupOpenError(message) {
  this.message = message;
}
PopupOpenError.prototype = Object.create(Error.prototype);
function popup(url, options) {
  // $FlowFixMe
  options = options || {};
  var _options = options,
      width = _options.width,
      height = _options.height;
  var top = 0;
  var left = 0;

  if (width) {
    if (window.outerWidth) {
      left = Math.round((window.outerWidth - width) / 2) + window.screenX;
    } else if (window.screen.width) {
      left = Math.round((window.screen.width - width) / 2);
    }
  }

  if (height) {
    if (window.outerHeight) {
      top = Math.round((window.outerHeight - height) / 2) + window.screenY;
    } else if (window.screen.height) {
      top = Math.round((window.screen.height - height) / 2);
    }
  }

  if (width && height) {
    options = _extends({
      top: top,
      left: left,
      width: width,
      height: height,
      status: 1,
      toolbar: 0,
      menubar: 0,
      resizable: 1,
      scrollbars: 1
    }, options);
  }

  var name = options.name || '';
  delete options.name; // eslint-disable-next-line array-callback-return

  var params = Object.keys(options).map(function (key) {
    // $FlowFixMe
    if (options[key] !== null && options[key] !== undefined) {
      return key + "=" + stringify(options[key]);
    }
  }).filter(Boolean).join(',');
  var win;

  try {
    win = window.open(url, name, params, true);
  } catch (err) {
    throw new PopupOpenError("Can not open popup window - " + (err.stack || err.message));
  }

  if (isWindowClosed(win)) {
    var err = new PopupOpenError("Can not open popup window - blocked");
    throw err;
  }

  window.addEventListener('unload', function () {
    return win.close();
  });
  return win;
}
function writeToWindow(win, html) {
  try {
    win.document.open();
    win.document.write(html);
    win.document.close();
  } catch (err) {
    try {
      win.location = "javascript: document.open(); document.write(" + JSON.stringify(html) + "); document.close();";
    } catch (err2) {// pass
    }
  }
}
function writeElementToWindow(win, el) {
  var tag = el.tagName.toLowerCase();

  if (tag !== 'html') {
    throw new Error("Expected element to be html, got " + tag);
  }

  var documentElement = win.document.documentElement;

  for (var _i6 = 0, _arrayFrom2 = arrayFrom(documentElement.children); _i6 < _arrayFrom2.length; _i6++) {
    var child = _arrayFrom2[_i6];
    documentElement.removeChild(child);
  }

  for (var _i8 = 0, _arrayFrom4 = arrayFrom(el.children); _i8 < _arrayFrom4.length; _i8++) {
    var _child = _arrayFrom4[_i8];
    documentElement.appendChild(_child);
  }
}
function setStyle(el, styleText, doc) {
  if (doc === void 0) {
    doc = window.document;
  }

  // $FlowFixMe
  if (el.styleSheet) {
    // $FlowFixMe
    el.styleSheet.cssText = styleText;
  } else {
    el.appendChild(doc.createTextNode(styleText));
  }
}
var awaitFrameLoadPromises;
function awaitFrameLoad(frame) {
  awaitFrameLoadPromises = awaitFrameLoadPromises || new weakmap_CrossDomainSafeWeakMap();

  if (awaitFrameLoadPromises.has(frame)) {
    var _promise = awaitFrameLoadPromises.get(frame);

    if (_promise) {
      return _promise;
    }
  }

  var promise = new promise_ZalgoPromise(function (resolve, reject) {
    frame.addEventListener('load', function () {
      linkFrameWindow(frame);
      resolve(frame);
    });
    frame.addEventListener('error', function (err) {
      if (frame.contentWindow) {
        resolve(frame);
      } else {
        reject(err);
      }
    });
  });
  awaitFrameLoadPromises.set(frame, promise);
  return promise;
}
function awaitFrameWindow(frame) {
  return awaitFrameLoad(frame).then(function (loadedFrame) {
    if (!loadedFrame.contentWindow) {
      throw new Error("Could not find window in iframe");
    }

    return loadedFrame.contentWindow;
  });
}
function createElement(tag, options, container) {
  if (tag === void 0) {
    tag = 'div';
  }

  if (options === void 0) {
    options = {};
  }

  tag = tag.toLowerCase();
  var element = document.createElement(tag);

  if (options.style) {
    util_extend(element.style, options.style);
  }

  if (options.class) {
    element.className = options.class.join(' ');
  }

  if (options.id) {
    element.setAttribute('id', options.id);
  }

  if (options.attributes) {
    for (var _i10 = 0, _Object$keys2 = Object.keys(options.attributes); _i10 < _Object$keys2.length; _i10++) {
      var key = _Object$keys2[_i10];
      element.setAttribute(key, options.attributes[key]);
    }
  }

  if (options.styleSheet) {
    setStyle(element, options.styleSheet);
  }

  if (container) {
    appendChild(container, element);
  }

  if (options.html) {
    if (tag === 'iframe') {
      // $FlowFixMe
      if (!container || !element.contentWindow) {
        throw new Error("Iframe html can not be written unless container provided and iframe in DOM");
      } // $FlowFixMe


      writeToWindow(element.contentWindow, options.html);
    } else {
      element.innerHTML = options.html;
    }
  }

  return element;
}
function iframe(options, container) {
  if (options === void 0) {
    options = {};
  }

  var attributes = options.attributes || {};
  var style = options.style || {};
  var frame = createElement('iframe', {
    attributes: _extends({
      allowTransparency: 'true'
    }, attributes),
    style: _extends({
      backgroundColor: 'transparent',
      border: 'none'
    }, style),
    html: options.html,
    class: options.class
  });
  var isIE = window.navigator.userAgent.match(/MSIE|Edge/i);

  if (!frame.hasAttribute('id')) {
    frame.setAttribute('id', uniqueID());
  } // $FlowFixMe


  awaitFrameLoad(frame);

  if (container) {
    var el = getElement(container);
    el.appendChild(frame);
  }

  if (options.url || isIE) {
    frame.setAttribute('src', options.url || 'about:blank');
  } // $FlowFixMe


  return frame;
}
function addEventListener(obj, event, handler) {
  obj.addEventListener(event, handler);
  return {
    cancel: function cancel() {
      obj.removeEventListener(event, handler);
    }
  };
}
function bindEvents(element, eventNames, handler) {
  handler = once(handler);

  for (var _i12 = 0; _i12 < eventNames.length; _i12++) {
    var eventName = eventNames[_i12];
    element.addEventListener(eventName, handler);
  }

  return {
    cancel: once(function () {
      for (var _i14 = 0; _i14 < eventNames.length; _i14++) {
        var _eventName = eventNames[_i14];
        element.removeEventListener(_eventName, handler);
      }
    })
  };
}
var VENDOR_PREFIXES = ['webkit', 'moz', 'ms', 'o'];
function setVendorCSS(element, name, value) {
  // $FlowFixMe
  element.style[name] = value;
  var capitalizedName = capitalizeFirstLetter(name);

  for (var _i16 = 0; _i16 < VENDOR_PREFIXES.length; _i16++) {
    var prefix = VENDOR_PREFIXES[_i16];
    // $FlowFixMe
    element.style["" + prefix + capitalizedName] = value;
  }
}
var ANIMATION_START_EVENTS = ['animationstart', 'webkitAnimationStart', 'oAnimationStart', 'MSAnimationStart'];
var ANIMATION_END_EVENTS = ['animationend', 'webkitAnimationEnd', 'oAnimationEnd', 'MSAnimationEnd'];
function animate(element, name, clean, timeout) {
  if (timeout === void 0) {
    timeout = 1000;
  }

  return new promise_ZalgoPromise(function (resolve, reject) {
    var el = getElement(element);

    if (!el) {
      return resolve();
    }

    var hasStarted = false;
    var startTimeout;
    var endTimeout;
    var startEvent;
    var endEvent;

    function cleanUp() {
      clearTimeout(startTimeout);
      clearTimeout(endTimeout);
      startEvent.cancel();
      endEvent.cancel();
    }

    startEvent = bindEvents(el, ANIMATION_START_EVENTS, function (event) {
      // $FlowFixMe
      if (event.target !== el || event.animationName !== name) {
        return;
      }

      clearTimeout(startTimeout);
      event.stopPropagation();
      startEvent.cancel();
      hasStarted = true;
      endTimeout = setTimeout(function () {
        cleanUp();
        resolve();
      }, timeout);
    });
    endEvent = bindEvents(el, ANIMATION_END_EVENTS, function (event) {
      // $FlowFixMe
      if (event.target !== el || event.animationName !== name) {
        return;
      }

      cleanUp(); // $FlowFixMe

      if (typeof event.animationName === 'string' && event.animationName !== name) {
        return reject("Expected animation name to be " + name + ", found " + event.animationName);
      }

      return resolve();
    });
    setVendorCSS(el, 'animationName', name);
    startTimeout = setTimeout(function () {
      if (!hasStarted) {
        cleanUp();
        return resolve();
      }
    }, 200);

    if (clean) {
      clean(cleanUp);
    }
  });
}
var STYLE = {
  DISPLAY: {
    NONE: 'none',
    BLOCK: 'block'
  },
  VISIBILITY: {
    VISIBLE: 'visible',
    HIDDEN: 'hidden'
  },
  IMPORTANT: 'important'
};
function makeElementVisible(element) {
  element.style.setProperty('visibility', '');
}
function makeElementInvisible(element) {
  element.style.setProperty('visibility', STYLE.VISIBILITY.HIDDEN, STYLE.IMPORTANT);
}
function showElement(element) {
  element.style.setProperty('display', '');
}
function hideElement(element) {
  element.style.setProperty('display', STYLE.DISPLAY.NONE, STYLE.IMPORTANT);
}
function destroyElement(element) {
  if (element && element.parentNode) {
    element.parentNode.removeChild(element);
  }
}
function showAndAnimate(element, name, clean) {
  var animation = animate(element, name, clean);
  showElement(element);
  return animation;
}
function animateAndHide(element, name, clean) {
  return animate(element, name, clean).then(function () {
    hideElement(element);
  });
}
function dom_addClass(element, name) {
  element.classList.add(name);
}
function dom_removeClass(element, name) {
  element.classList.remove(name);
}
function isElementClosed(el) {
  if (!el || !el.parentNode) {
    return true;
  }

  return false;
}
function watchElementForClose(element, handler) {
  handler = once(handler);
  var interval;

  if (isElementClosed(element)) {
    handler();
  } else {
    interval = safeInterval(function () {
      if (isElementClosed(element)) {
        interval.cancel();
        handler();
      }
    }, 50);
  }

  return {
    cancel: function cancel() {
      if (interval) {
        interval.cancel();
      }
    }
  };
}
function fixScripts(el, doc) {
  if (doc === void 0) {
    doc = window.document;
  }

  for (var _i18 = 0, _querySelectorAll2 = dom_querySelectorAll('script', el); _i18 < _querySelectorAll2.length; _i18++) {
    var script = _querySelectorAll2[_i18];
    var parentNode = script.parentNode;

    if (!parentNode) {
      continue;
    }

    var newScript = doc.createElement('script');
    newScript.text = script.textContent;
    parentNode.replaceChild(newScript, script);
  }
}
function onResize(el, handler, _temp) {
  var _ref2 = _temp === void 0 ? {} : _temp,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? true : _ref2$width,
      _ref2$height = _ref2.height,
      height = _ref2$height === void 0 ? true : _ref2$height,
      _ref2$interval = _ref2.interval,
      interval = _ref2$interval === void 0 ? 100 : _ref2$interval,
      _ref2$win = _ref2.win,
      win = _ref2$win === void 0 ? window : _ref2$win;

  var currentWidth = el.offsetWidth;
  var currentHeight = el.offsetHeight;
  handler({
    width: currentWidth,
    height: currentHeight
  });

  var check = function check() {
    var newWidth = el.offsetWidth;
    var newHeight = el.offsetHeight;

    if (width && newWidth !== currentWidth || height && newHeight !== currentHeight) {
      handler({
        width: newWidth,
        height: newHeight
      });
    }

    currentWidth = newWidth;
    currentHeight = newHeight;
  };

  var observer;
  var timeout;

  if (typeof win.ResizeObserver !== 'undefined') {
    observer = new win.ResizeObserver(check);
    observer.observe(el);
  } else if (typeof win.MutationObserver !== 'undefined') {
    observer = new win.MutationObserver(check);
    observer.observe(el, {
      attributes: true,
      childList: true,
      subtree: true,
      characterData: false
    });
    win.addEventListener('resize', check);
  } else {
    var loop = function loop() {
      check();
      timeout = setTimeout(loop, interval);
    };

    loop();
  }

  return {
    cancel: function cancel() {
      observer.disconnect();
      window.removeEventListener('resize', check);
      clearTimeout(timeout);
    }
  };
}
function getResourceLoadTime(url) {
  if (!enablePerformance()) {
    return;
  }

  if (!window.performance || typeof window.performance.getEntries !== 'function') {
    return;
  }

  var entries = window.performance.getEntries();

  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];

    if (entry && entry.name && entry.name.indexOf(url) === 0 && typeof entry.duration === 'number') {
      return Math.floor(entry.duration);
    }
  }
}
// CONCATENATED MODULE: ./node_modules/belter/src/storage.js


var DEFAULT_SESSION_STORAGE = 20 * 60 * 1000;
function getStorage(_ref) {
  var name = _ref.name,
      _ref$lifetime = _ref.lifetime,
      lifetime = _ref$lifetime === void 0 ? DEFAULT_SESSION_STORAGE : _ref$lifetime;
  return inlineMemoize(getStorage, function () {
    var STORAGE_KEY = "__" + name + "_storage__";
    var accessedStorage;

    function getState(handler) {
      var localStorageEnabled = isLocalStorageEnabled();
      var storage;

      if (accessedStorage) {
        storage = accessedStorage;
      }

      if (!storage && localStorageEnabled) {
        var rawStorage = window.localStorage.getItem(STORAGE_KEY);

        if (rawStorage) {
          storage = JSON.parse(rawStorage);
        }
      }

      if (!storage) {
        storage = getGlobal()[STORAGE_KEY];
      }

      if (!storage) {
        storage = {
          id: uniqueID()
        };
      }

      if (!storage.id) {
        storage.id = uniqueID();
      }

      accessedStorage = storage;
      var result = handler(storage);

      if (localStorageEnabled) {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(storage));
      } else {
        getGlobal()[STORAGE_KEY] = storage;
      }

      accessedStorage = null;
      return result;
    }

    function getID() {
      return getState(function (storage) {
        return storage.id;
      });
    }

    function getSession(handler) {
      return getState(function (storage) {
        var session = storage.__session__;
        var now = Date.now();

        if (session && now - session.created > lifetime) {
          session = null;
        }

        if (!session) {
          session = {
            guid: uniqueID(),
            created: now
          };
        }

        storage.__session__ = session;
        return handler(session);
      });
    }

    function getSessionState(handler) {
      return getSession(function (session) {
        session.state = session.state || {};
        return handler(session.state);
      });
    }

    function getSessionID() {
      return getSession(function (session) {
        return session.guid;
      });
    }

    return {
      getState: getState,
      getID: getID,
      getSessionState: getSessionState,
      getSessionID: getSessionID
    };
  }, [{
    name: name,
    lifetime: lifetime
  }]);
}
// CONCATENATED MODULE: ./node_modules/belter/src/experiment.js



function getBelterExperimentStorage() {
  return getStorage({
    name: 'belter_experiment'
  });
}

function isEventUnique(name) {
  return getBelterExperimentStorage().getSessionState(function (state) {
    state.loggedBeacons = state.loggedBeacons || [];

    if (state.loggedBeacons.indexOf(name) === -1) {
      state.loggedBeacons.push(name);
      return true;
    }

    return false;
  });
}

function getThrottlePercentile(name) {
  return getBelterExperimentStorage().getState(function (state) {
    state.throttlePercentiles = state.throttlePercentiles || {};
    state.throttlePercentiles[name] = state.throttlePercentiles[name] || Math.floor(Math.random() * 100);
    return state.throttlePercentiles[name];
  });
}

var THROTTLE_GROUP = {
  TEST: 'test',
  CONTROL: 'control',
  THROTTLE: 'throttle'
};
function experiment(_ref) {
  var name = _ref.name,
      _ref$sample = _ref.sample,
      sample = _ref$sample === void 0 ? 50 : _ref$sample,
      _ref$logTreatment = _ref.logTreatment,
      logTreatment = _ref$logTreatment === void 0 ? belter_src_util_noop : _ref$logTreatment,
      _ref$logCheckpoint = _ref.logCheckpoint,
      logCheckpoint = _ref$logCheckpoint === void 0 ? belter_src_util_noop : _ref$logCheckpoint;
  var throttle = getThrottlePercentile(name);
  var group;

  if (throttle < sample) {
    group = THROTTLE_GROUP.TEST;
  } else if (sample >= 50 || sample <= throttle && throttle < sample * 2) {
    group = THROTTLE_GROUP.CONTROL;
  } else {
    group = THROTTLE_GROUP.THROTTLE;
  }

  var treatment = name + "_" + group;
  var started = false;
  var forced = false;

  try {
    if (window.localStorage && window.localStorage.getItem(name)) {
      forced = true;
    }
  } catch (err) {// pass
  }

  return {
    isEnabled: function isEnabled() {
      return group === THROTTLE_GROUP.TEST || forced;
    },
    isDisabled: function isDisabled() {
      return group !== THROTTLE_GROUP.TEST && !forced;
    },
    getTreatment: function getTreatment() {
      return treatment;
    },
    log: function log(checkpoint, payload) {
      if (payload === void 0) {
        payload = {};
      }

      if (!started) {
        return this;
      }

      if (isEventUnique(name + "_" + treatment + "_" + JSON.stringify(payload))) {
        logTreatment({
          name: name,
          treatment: treatment,
          payload: payload
        });
      }

      if (isEventUnique(name + "_" + treatment + "_" + checkpoint + "_" + JSON.stringify(payload))) {
        logCheckpoint({
          name: name,
          treatment: treatment,
          checkpoint: checkpoint,
          payload: payload
        });
      }

      return this;
    },
    logStart: function logStart(payload) {
      if (payload === void 0) {
        payload = {};
      }

      started = true;
      return this.log("start", payload);
    },
    logComplete: function logComplete(payload) {
      if (payload === void 0) {
        payload = {};
      }

      return this.log("complete", payload);
    }
  };
}
// CONCATENATED MODULE: ./node_modules/belter/src/global.js

function getGlobalNameSpace(_ref) {
  var name = _ref.name,
      _ref$version = _ref.version,
      version = _ref$version === void 0 ? 'latest' : _ref$version;
  var global = getGlobal();
  var globalKey = "__" + name + "__" + version + "_global__";
  var namespace = global[globalKey] = global[globalKey] || {};
  return {
    get: function get(key, defValue) {
      // $FlowFixMe
      defValue = defValue || {};
      var item = namespace[key] = namespace[key] || defValue;
      return item;
    }
  };
}
// CONCATENATED MODULE: ./node_modules/belter/src/http.js

var HEADERS = {
  CONTENT_TYPE: 'content-type',
  ACCEPT: 'accept'
};
var http_headerBuilders = [];

function parseHeaders(rawHeaders) {
  if (rawHeaders === void 0) {
    rawHeaders = '';
  }

  var result = {};

  for (var _i2 = 0, _rawHeaders$trim$spli2 = rawHeaders.trim().split('\n'); _i2 < _rawHeaders$trim$spli2.length; _i2++) {
    var line = _rawHeaders$trim$spli2[_i2];

    var _line$split = line.split(':'),
        _key = _line$split[0],
        values = _line$split.slice(1);

    result[_key.toLowerCase()] = values.join(':').trim();
  }

  return result;
}

function http_request(_ref) {
  var url = _ref.url,
      _ref$method = _ref.method,
      method = _ref$method === void 0 ? 'get' : _ref$method,
      _ref$headers = _ref.headers,
      headers = _ref$headers === void 0 ? {} : _ref$headers,
      json = _ref.json,
      data = _ref.data,
      body = _ref.body,
      _ref$win = _ref.win,
      win = _ref$win === void 0 ? window : _ref$win,
      _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === void 0 ? 0 : _ref$timeout;
  return new promise_ZalgoPromise(function (resolve, reject) {
    if (json && data || json && body || data && json) {
      throw new Error("Only options.json or options.data or options.body should be passed");
    }

    var normalizedHeaders = {};

    for (var _i4 = 0, _Object$keys2 = Object.keys(headers); _i4 < _Object$keys2.length; _i4++) {
      var _key2 = _Object$keys2[_i4];
      normalizedHeaders[_key2.toLowerCase()] = headers[_key2];
    }

    if (json) {
      normalizedHeaders[HEADERS.CONTENT_TYPE] = normalizedHeaders[HEADERS.CONTENT_TYPE] || 'application/json';
    } else if (data || body) {
      normalizedHeaders[HEADERS.CONTENT_TYPE] = normalizedHeaders[HEADERS.CONTENT_TYPE] || 'application/x-www-form-urlencoded; charset=utf-8';
    }

    normalizedHeaders[HEADERS.ACCEPT] = normalizedHeaders[HEADERS.ACCEPT] || 'application/json';

    for (var _i6 = 0; _i6 < http_headerBuilders.length; _i6++) {
      var headerBuilder = http_headerBuilders[_i6];
      var builtHeaders = headerBuilder();

      for (var _i8 = 0, _Object$keys4 = Object.keys(builtHeaders); _i8 < _Object$keys4.length; _i8++) {
        var _key3 = _Object$keys4[_i8];
        normalizedHeaders[_key3.toLowerCase()] = builtHeaders[_key3];
      }
    }

    var xhr = new win.XMLHttpRequest();
    xhr.addEventListener('load', function xhrLoad() {
      var responseHeaders = parseHeaders(this.getAllResponseHeaders());

      if (!this.status) {
        return reject(new Error("Request to " + method.toLowerCase() + " " + url + " failed: no response status code."));
      }

      var contentType = responseHeaders['content-type'];
      var isJSON = contentType && (contentType.indexOf('application/json') === 0 || contentType.indexOf('text/json') === 0);
      var responseBody = this.responseText;

      try {
        responseBody = JSON.parse(responseBody);
      } catch (err) {
        if (isJSON) {
          return reject(new Error("Invalid json: " + this.responseText + "."));
        }
      }

      var res = {
        status: this.status,
        headers: responseHeaders,
        body: responseBody
      };
      return resolve(res);
    }, false);
    xhr.addEventListener('error', function (evt) {
      reject(new Error("Request to " + method.toLowerCase() + " " + url + " failed: " + evt.toString() + "."));
    }, false);
    xhr.open(method, url, true);

    for (var _key4 in normalizedHeaders) {
      if (normalizedHeaders.hasOwnProperty(_key4)) {
        xhr.setRequestHeader(_key4, normalizedHeaders[_key4]);
      }
    }

    if (json) {
      body = JSON.stringify(json);
    } else if (data) {
      body = Object.keys(data).map(function (key) {
        return encodeURIComponent(key) + "=" + (data ? encodeURIComponent(data[key]) : '');
      }).join('&');
    }

    xhr.timeout = timeout;

    xhr.ontimeout = function xhrTimeout() {
      reject(new Error("Request to " + method.toLowerCase() + " " + url + " has timed out"));
    };

    xhr.send(body);
  });
}
function http_addHeaderBuilder(method) {
  http_headerBuilders.push(method);
}
// CONCATENATED MODULE: ./node_modules/belter/src/types.js
// export something to force webpack to see this as an ES module
var types_TYPES = true;
// CONCATENATED MODULE: ./node_modules/belter/src/decorators.js

function memoized(target, name, descriptor) {
  descriptor.value = util_memoize(descriptor.value, {
    name: name,
    thisNamespace: true
  });
}
function decorators_promise(target, name, descriptor) {
  descriptor.value = promisify(descriptor.value, {
    name: name
  });
}
// CONCATENATED MODULE: ./node_modules/belter/src/css.js
function isPerc(str) {
  return typeof str === 'string' && /^[0-9]+%$/.test(str);
}
function isPx(str) {
  return typeof str === 'string' && /^[0-9]+px$/.test(str);
}
function toNum(val) {
  if (typeof val === 'number') {
    return val;
  }

  var match = val.match(/^([0-9]+)(px|%)$/);

  if (!match) {
    throw new Error("Could not match css value from " + val);
  }

  return parseInt(match[1], 10);
}
function toPx(val) {
  return toNum(val) + "px";
}
function toCSS(val) {
  if (typeof val === 'number') {
    return toPx(val);
  }

  return isPerc(val) ? val : toPx(val);
}
function percOf(num, perc) {
  return parseInt(num * toNum(perc) / 100, 10);
}
function normalizeDimension(dim, max) {
  if (typeof dim === 'number') {
    return dim;
  } else if (isPerc(dim)) {
    return percOf(max, dim);
  } else if (isPx(dim)) {
    return toNum(dim);
  } else {
    throw new Error("Can not normalize dimension: " + dim);
  }
}
// CONCATENATED MODULE: ./node_modules/belter/src/test.js


function wrapPromise(method, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === void 0 ? 5000 : _ref$timeout;

  var expected = [];
  var promises = [];
  var timer = setTimeout(function () {
    if (expected.length) {
      promises.push(promise_ZalgoPromise.asyncReject(new Error("Expected " + expected[0] + " to be called")));
    }
  }, timeout);

  var expect = function expect(name, fn) {
    if (fn === void 0) {
      fn = belter_src_util_noop;
    }

    expected.push(name); // $FlowFixMe

    return function expectWrapper() {
      var _this = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      removeFromArray(expected, name); // $FlowFixMe

      var _tryCatch = tryCatch(function () {
        var _fn;

        return (_fn = fn).call.apply(_fn, [_this].concat(args));
      }),
          result = _tryCatch.result,
          error = _tryCatch.error;

      if (error) {
        promises.push(promise_ZalgoPromise.asyncReject(error));
        throw error;
      }

      promises.push(promise_ZalgoPromise.resolve(result));
      return result;
    };
  };

  var avoid = function avoid(name, fn) {
    if (fn === void 0) {
      fn = belter_src_util_noop;
    }

    // $FlowFixMe
    return function avoidWrapper() {
      var _fn2;

      promises.push(promise_ZalgoPromise.asyncReject(new Error("Expected " + name + " to not be called"))); // $FlowFixMe

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return (_fn2 = fn).call.apply(_fn2, [this].concat(args));
    };
  };

  var expectError = function expectError(name, fn) {
    if (fn === void 0) {
      fn = belter_src_util_noop;
    }

    expected.push(name); // $FlowFixMe

    return function expectErrorWrapper() {
      var _this2 = this;

      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      removeFromArray(expected, name); // $FlowFixMe

      var _tryCatch2 = tryCatch(function () {
        var _fn3;

        return (_fn3 = fn).call.apply(_fn3, [_this2].concat(args));
      }),
          result = _tryCatch2.result,
          error = _tryCatch2.error;

      if (error) {
        throw error;
      }

      promises.push(promise_ZalgoPromise.resolve(result).then(function () {
        throw new Error("Expected " + name + " to throw an error");
      }, belter_src_util_noop));
      return result;
    };
  };

  promises.push(promise_ZalgoPromise.try(function () {
    return method({
      expect: expect,
      avoid: avoid,
      expectError: expectError,
      error: avoid
    });
  }));

  var drain = function drain() {
    return promise_ZalgoPromise.try(function () {
      if (promises.length) {
        return promises.pop();
      }
    }).then(function () {
      if (promises.length) {
        return drain();
      }

      if (expected.length) {
        return promise_ZalgoPromise.delay(10).then(drain);
      }
    });
  };

  return drain().then(function () {
    clearTimeout(timer);
  });
}
// CONCATENATED MODULE: ./node_modules/belter/src/index.js











// CONCATENATED MODULE: ./node_modules/@paypal/smart-payment-buttons/src/config.js
var _NATIVE_CHECKOUT_URI;


var LOGGER_URL = '/xoplatform/logger/api/logger';
var AUTH_API_URL = '/v1/oauth2/token';
var ORDERS_API_URL = '/v2/checkout/orders';
var PAYMENTS_API_URL = '/v1/payments/payment';
var CREATE_SUBSCRIPTIONS_API_URL = '/v1/billing/subscriptions';
var VALIDATE_PAYMENT_METHOD_API = 'validate-payment-method';
var BASE_SMART_API_URL = '/smart/api';
var SMART_API_URI = {
  AUTH: BASE_SMART_API_URL + "/auth",
  CHECKOUT: BASE_SMART_API_URL + "/checkout",
  ORDER: BASE_SMART_API_URL + "/order",
  PAYMENT: BASE_SMART_API_URL + "/payment",
  SUBSCRIPTION: BASE_SMART_API_URL + "/billagmt/subscriptions"
};
var GRAPHQL_URI = '/graphql';
var WEB_CHECKOUT_URI = '/checkoutnow';
var NATIVE_CHECKOUT_URI = (_NATIVE_CHECKOUT_URI = {}, _NATIVE_CHECKOUT_URI[FUNDING.PAYPAL] = '/smart/checkout/native', _NATIVE_CHECKOUT_URI[FUNDING.VENMO] = '/smart/checkout/venmo', _NATIVE_CHECKOUT_URI);
var NATIVE_DETECTION_URL = 'http://127.0.0.1:8765/hello';
var CLIENT_ID_PAYEE_NO_MATCH = ['Af3YaeRfoJGtncwLeiahT93xTYT0-wldEEaiGehhGspP333r6tADvHeVCwZPR022F4d0YQquv7Lik_PT', 'AbHo6hBEDmCHulDhRMkCVk7FDed5zE1-mNo7SQvo_yxeLvGylM5mGh5IOjx0AV9sTHhHDjD4A443Dybb', 'AcjM7hAZjUAqIgU0Lvzneb9-_rWs7qAEl6PoPVHtQV5PNmWBihQWsu_SglKO', 'Af_pMiA6ikCtlsNB8dJW1oG1ZI7FirXbRU43rDRfq_i_iQAPbYsojeI9Q2VzZvD1u2wKEPuaokZaNWyC', 'AQAZZuAP5V0b8Wzs1t3KJM3opK8ueK6Txnlm7pw6kMFHrcAdFogBw3pBmeNP-234aHAZ2BlHeijkU2Tt', 'Aef8KpflK3t-pTjstogUtqzAuk1IRGHpkdBTxyTWeARwqXyuRrX5Uj-Bs6KdMwK1g8ZhitjzfJ5jh6K7', 'ARcLSr40hevzVXTnnNpHochqg9lsyznO2UugwjyCpt4MPnAmxgyLGC2Ia7aufLH1jS8BhOIZBnXqhOfP', 'AYiXLQVgLszolhHbiYAm2HZERgDF5BOPXG7i4m9BNsTTSdmWhVu2Np4_GqDJLrl5VA50VDAlMMpCMArb', 'ARbpxmp0udlm2zBPu6bqW6PAMV-UfCTktgWFtJ0cy1rKQUUtIRffwg1A-i0wRyFg9BhbfZM3M6ci6czP', 'AeHvO7dLYAlLLnkZWxCTvHgSBMoFRn-bu1Wy9kjEXZVb8wYZPRpEykxDhLQ0WjgUPQz_MeF1e1FnH4mT', 'Abi2EEJv7o1v6GKAE1nNVgeNqBWLYXSiDoAKi-ADKU6uRPi_41GJEMr5rjZC8fuQxAC-MVEPYSfYsfzD', 'AW9fGl1zpjGSB474VARpj8j0hyEzrwNY7WgJCtwStaVVYkiyixnX4Z3KSe9A0jPLOcKj_2B9lHon1nAR', 'ARBlYB7bfFnpO5IgprEW0PqtBSZOn1Q0Jly-3r_IzMEU8sPq0fdNrk1D4JgHAitxDBxfuL6wDpDvTZgU', 'AZNQsMt_Ho-GClAUCvZVuKyz-n5rRhZyEBL2yTTetPV-lTqQE2_4quG6-ADlBMZoAgnG-yccas62Hqg2'];
var FIREBASE_SCRIPTS = {
  APP: 'https://www.paypalobjects.com/checkout/js/lib/firebase-app.js',
  AUTH: 'https://www.paypalobjects.com/checkout/js/lib/firebase-auth.js',
  DATABASE: 'https://www.paypalobjects.com/checkout/js/lib/firebase-database.js'
};
var ENABLE_PAYMENT_API = false;
// CONCATENATED MODULE: ./node_modules/@paypal/smart-payment-buttons/src/constants.js
var SMART_PAYMENT_BUTTONS = 'smart-payment-buttons';
var constants_HEADERS = {
  AUTHORIZATION: 'authorization',
  CONTENT_TYPE: 'content-type',
  ACCESS_TOKEN: 'x-paypal-internal-euat',
  CSRF_TOKEN: 'x-csrf-jwt',
  SOURCE: 'x-source',
  REQUESTED_BY: 'x-requested-by',
  PARTNER_ATTRIBUTION_ID: 'paypal-partner-attribution-id',
  CLIENT_METADATA_ID: 'paypal-client-metadata-id',
  PAYPAL_DEBUG_ID: 'paypal-debug-id'
};
var DATA_ATTRIBUTES = {
  FUNDING_SOURCE: 'data-funding-source',
  CARD: 'data-card',
  PAYMENT_METHOD_ID: 'data-payment-method-id',
  MENU: 'data-menu',
  NONCE: 'data-nonce'
};
var CLASS = {
  LOADING: 'paypal-button-loading',
  CLICKED: 'paypal-button-clicked'
};
var ORDER_API_ERROR = {
  INSTRUMENT_DECLINED: 'INSTRUMENT_DECLINED',
  PAYER_ACTION_REQUIRED: 'PAYER_ACTION_REQUIRED'
};
var CONTEXT = {
  IFRAME: 'iframe',
  POPUP: 'popup'
};
var TARGET_ELEMENT = {
  BODY: 'body'
};
var constants_INTEGRATION_ARTIFACT = {
  PAYPAL_JS_SDK: 'PAYPAL_JS_SDK'
};
var constants_USER_EXPERIENCE_FLOW = {
  INCONTEXT: 'INCONTEXT',
  INLINE: 'INLINE'
};
var DOM_EVENT = {
  MOUSEDOWN: 'mousedown',
  HOVER: 'hover'
};
var constants_PRODUCT_FLOW = {
  SMART_PAYMENT_BUTTONS: 'SMART_PAYMENT_BUTTONS'
};
var FPTI_CONTEXT_TYPE = {
  BUTTON_SESSION_ID: 'button_session_id',
  ORDER_ID: 'EC-Token',
  PAYMENT_ID: 'Pay-ID'
};
var FPTI_STATE = {
  BUTTON: 'smart_button'
};
var FPTI_TRANSITION = {
  BUTTON_LOAD: 'process_button_load',
  BUTTON_CLICK: 'process_button_click',
  CREATE_ORDER: 'process_create_order',
  RECEIVE_ORDER: 'process_receive_order',
  CREATE_PAYMENT: 'process_create_payment',
  CHECKOUT_SHIPPING_CHANGE: 'process_checkout_shipping_change',
  CHECKOUT_AUTHORIZE: 'process_checkout_authorize',
  CHECKOUT_CANCEL: 'process_checkout_cancel',
  NATIVE_DETECT_APP_SWITCH: 'native_detect_app_switch',
  NATIVE_DETECT_NO_APP_SWITCH: 'native_detect_no_app_switch',
  NATIVE_APP_SWITCH_ACK: 'native_app_switch_ack',
  NATIVE_ERROR: 'native_app_switch_ack'
};
var FPTI_BUTTON_TYPE = {
  IFRAME: 'iframe'
};
var FTPI_BUTTON_KEY = {
  BUTTON_LAYOUT: 'button_layout',
  BUTTON_COLOR: 'button_color',
  BUTTON_SIZE: 'button_size',
  BUTTON_SHAPE: 'button_shape',
  BUTTON_LABEL: 'button_label',
  BUTTON_WIDTH: 'button_width',
  BUTTON_TYPE: 'button_type',
  BUTTON_TAGLINE_ENABLED: 'button_tagline_enabled'
};
var USER_ACTION = {
  COMMIT: 'commit',
  CONTINUE: 'continue'
};
// CONCATENATED MODULE: ./node_modules/@paypal/smart-payment-buttons/src/lib/util.js



function unresolvedPromise() {
  return new promise_ZalgoPromise(belter_src_util_noop);
}
function promiseNoop() {
  // eslint-disable-line no-unused-vars
  return promise_ZalgoPromise.resolve();
}
function getBody() {
  var body = document.body;

  if (!body) {
    throw new Error("Document body not found");
  }

  return body;
}
function util_sendBeacon(url) {
  var img = document.createElement('img');
  img.src = url;
  img.style.visibility = 'hidden';
  img.style.position = 'absolute';

  if (document.body) {
    document.body.appendChild(img);
  }
}
function fixClickFocus(el) {
  el.addEventListener(DOM_EVENT.MOUSEDOWN, function () {
    el.classList.add(CLASS.CLICKED);
  });
  el.addEventListener(DOM_EVENT.HOVER, function (event) {
    if (el.classList.contains(CLASS.CLICKED)) {
      event.preventDefault();
      el.blur();
      el.classList.remove(CLASS.CLICKED);
    }
  });
}
function sleep(time) {
  return new promise_ZalgoPromise(function (resolve) {
    setTimeout(resolve, time);
  });
}
function redirectTop(url) {
  if (false) {} else {
    window.top.location = url;
  }
}
function loadScript(url) {
  return new promise_ZalgoPromise(function (resolve, reject) {
    var container = document.body || document.head;

    if (!container) {
      return reject(new Error("Can not find container for script: " + url));
    }

    var script = document.createElement('script');
    script.setAttribute('src', url);
    script.addEventListener('load', function () {
      return resolve(script);
    }); // $FlowFixMe

    script.addEventListener('error', function (err) {
      return reject(err);
    });
    container.appendChild(script);
  });
}
// CONCATENATED MODULE: ./node_modules/beaver-logger/src/constants.js
var LOG_LEVEL = {
  DEBUG: 'debug',
  INFO: 'info',
  WARN: 'warn',
  ERROR: 'error'
};
var src_constants_PROTOCOL = {
  FILE: 'file:'
};
// CONCATENATED MODULE: ./node_modules/beaver-logger/src/config.js

var AUTO_FLUSH_LEVEL = [LOG_LEVEL.WARN, LOG_LEVEL.ERROR];
var LOG_LEVEL_PRIORITY = [LOG_LEVEL.ERROR, LOG_LEVEL.WARN, LOG_LEVEL.INFO, LOG_LEVEL.DEBUG];
var FLUSH_INTERVAL = 60 * 1000;
var DEFAULT_LOG_LEVEL = LOG_LEVEL.WARN;
// CONCATENATED MODULE: ./node_modules/beaver-logger/src/logger.js






function httpTransport(_ref) {
  var url = _ref.url,
      method = _ref.method,
      headers = _ref.headers,
      json = _ref.json;
  return http_request({
    url: url,
    method: method,
    headers: headers,
    json: json
  }).then(belter_src_util_noop);
}

function extendIfDefined(target, source) {
  for (var key in source) {
    if (source.hasOwnProperty(key) && source[key] && !target[key]) {
      target[key] = source[key];
    }
  }
}

function Logger(_ref2) {
  var url = _ref2.url,
      prefix = _ref2.prefix,
      _ref2$logLevel = _ref2.logLevel,
      logLevel = _ref2$logLevel === void 0 ? DEFAULT_LOG_LEVEL : _ref2$logLevel,
      _ref2$transport = _ref2.transport,
      transport = _ref2$transport === void 0 ? httpTransport : _ref2$transport,
      _ref2$flushInterval = _ref2.flushInterval,
      flushInterval = _ref2$flushInterval === void 0 ? FLUSH_INTERVAL : _ref2$flushInterval;
  var events = [];
  var tracking = [];
  var payloadBuilders = [];
  var metaBuilders = [];
  var trackingBuilders = [];
  var headerBuilders = [];

  function print(level, event, payload) {
    if (!dom_isBrowser() || !window.console || !window.console.log) {
      return;
    }

    var consoleLogLevel = logLevel;

    if (window.LOG_LEVEL && LOG_LEVEL_PRIORITY.indexOf(window.LOG_LEVEL) !== -1) {
      consoleLogLevel = window.LOG_LEVEL;
    }

    if (LOG_LEVEL_PRIORITY.indexOf(level) > LOG_LEVEL_PRIORITY.indexOf(consoleLogLevel)) {
      return;
    }

    var args = [event];
    args.push(payload);

    if (payload.error || payload.warning) {
      args.push('\n\n', payload.error || payload.warning);
    }

    try {
      if (window.console[level] && window.console[level].apply) {
        window.console[level].apply(window.console, args);
      } else if (window.console.log && window.console.log.apply) {
        window.console.log.apply(window.console, args);
      }
    } catch (err) {// pass
    }
  }

  function immediateFlush() {
    return promise_ZalgoPromise.try(function () {
      if (!dom_isBrowser() || window.location.protocol === src_constants_PROTOCOL.FILE) {
        return;
      }

      if (!events.length && !tracking.length) {
        return;
      }

      var meta = {};

      for (var _i2 = 0; _i2 < metaBuilders.length; _i2++) {
        var builder = metaBuilders[_i2];
        extendIfDefined(meta, builder(meta));
      }

      var headers = {};

      for (var _i4 = 0; _i4 < headerBuilders.length; _i4++) {
        var _builder = headerBuilders[_i4];
        extendIfDefined(headers, _builder(headers));
      }

      var req = transport({
        method: 'POST',
        url: url,
        headers: headers,
        json: {
          events: events,
          meta: meta,
          tracking: tracking
        }
      });
      events = [];
      tracking = [];
      return req.then(belter_src_util_noop);
    });
  }

  var flush = promiseDebounce(immediateFlush);

  function enqueue(level, event, payload) {
    events.push({
      level: level,
      event: event,
      payload: payload
    });

    if (AUTO_FLUSH_LEVEL.indexOf(level) !== -1) {
      flush();
    }
  }

  function log(level, event, payload) {
    if (payload === void 0) {
      payload = {};
    }

    if (!dom_isBrowser()) {
      return logger; // eslint-disable-line no-use-before-define
    }

    if (prefix) {
      event = prefix + "_" + event;
    }

    var logPayload = _extends({}, objFilter(payload), {
      timestamp: Date.now().toString()
    });

    for (var _i6 = 0; _i6 < payloadBuilders.length; _i6++) {
      var builder = payloadBuilders[_i6];
      extendIfDefined(logPayload, builder(logPayload));
    }

    enqueue(level, event, logPayload);
    print(level, event, logPayload);
    return logger; // eslint-disable-line no-use-before-define
  }

  function addBuilder(builders, builder) {
    builders.push(builder);
    return logger; // eslint-disable-line no-use-before-define
  }

  function addPayloadBuilder(builder) {
    return addBuilder(payloadBuilders, builder);
  }

  function addMetaBuilder(builder) {
    return addBuilder(metaBuilders, builder);
  }

  function addTrackingBuilder(builder) {
    return addBuilder(trackingBuilders, builder);
  }

  function addHeaderBuilder(builder) {
    return addBuilder(headerBuilders, builder);
  }

  function debug(event, payload) {
    return log(LOG_LEVEL.DEBUG, event, payload);
  }

  function info(event, payload) {
    return log(LOG_LEVEL.INFO, event, payload);
  }

  function warn(event, payload) {
    return log(LOG_LEVEL.WARN, event, payload);
  }

  function error(event, payload) {
    return log(LOG_LEVEL.ERROR, event, payload);
  }

  function track(payload) {
    if (payload === void 0) {
      payload = {};
    }

    if (!dom_isBrowser()) {
      return logger; // eslint-disable-line no-use-before-define
    }

    var trackingPayload = objFilter(payload);

    for (var _i8 = 0; _i8 < trackingBuilders.length; _i8++) {
      var builder = trackingBuilders[_i8];
      extendIfDefined(trackingPayload, builder(trackingPayload));
    }

    print(LOG_LEVEL.DEBUG, 'track', trackingPayload);
    tracking.push(trackingPayload);
    return logger; // eslint-disable-line no-use-before-define
  }

  function setTransport(newTransport) {
    transport = newTransport;
    return logger; // eslint-disable-line no-use-before-define
  }

  if (dom_isBrowser()) {
    safeInterval(flush, flushInterval);
  }

  var logger = {
    debug: debug,
    info: info,
    warn: warn,
    error: error,
    track: track,
    flush: flush,
    immediateFlush: immediateFlush,
    addPayloadBuilder: addPayloadBuilder,
    addMetaBuilder: addMetaBuilder,
    addTrackingBuilder: addTrackingBuilder,
    addHeaderBuilder: addHeaderBuilder,
    setTransport: setTransport
  };
  return logger;
}
// CONCATENATED MODULE: ./node_modules/beaver-logger/src/index.js


// CONCATENATED MODULE: ./node_modules/@paypal/smart-payment-buttons/src/lib/logger.js






function getLogger() {
  return inlineMemoize(getLogger, function () {
    return Logger({
      url: LOGGER_URL
    });
  });
}
function setupLogger(_ref) {
  var env = _ref.env,
      sessionID = _ref.sessionID,
      buttonSessionID = _ref.buttonSessionID,
      clientID = _ref.clientID,
      partnerAttributionID = _ref.partnerAttributionID,
      commit = _ref.commit,
      correlationID = _ref.correlationID,
      locale = _ref.locale,
      merchantID = _ref.merchantID,
      merchantDomain = _ref.merchantDomain,
      version = _ref.version;
  var logger = getLogger();
  logger.addPayloadBuilder(function () {
    return {
      referer: window.location.host,
      uid: sessionID,
      env: env
    };
  });
  logger.addTrackingBuilder(function () {
    var _ref2;

    var lang = locale.lang,
        country = locale.country;
    return _ref2 = {}, _ref2[FPTI_KEY.STATE] = FPTI_STATE.BUTTON, _ref2[FPTI_KEY.CONTEXT_TYPE] = FPTI_CONTEXT_TYPE.BUTTON_SESSION_ID, _ref2[FPTI_KEY.CONTEXT_ID] = buttonSessionID, _ref2[FPTI_KEY.STATE] = FPTI_STATE.BUTTON, _ref2[FPTI_KEY.FEED] = FPTI_FEED.PAYMENTS_SDK, _ref2[FPTI_KEY.DATA_SOURCE] = FPTI_DATA_SOURCE.PAYMENTS_SDK, _ref2[FPTI_KEY.CLIENT_ID] = clientID, _ref2[FPTI_KEY.SELLER_ID] = merchantID[0], _ref2[FPTI_KEY.BUTTON_SESSION_UID] = buttonSessionID, _ref2[FPTI_KEY.SESSION_UID] = sessionID, _ref2[FPTI_KEY.REFERER] = window.location.host, _ref2[FPTI_KEY.MERCHANT_DOMAIN] = merchantDomain, _ref2[FPTI_KEY.LOCALE] = lang + "_" + country, _ref2[FPTI_KEY.INTEGRATION_IDENTIFIER] = clientID, _ref2[FPTI_KEY.PARTNER_ATTRIBUTION_ID] = partnerAttributionID, _ref2[FPTI_KEY.SDK_NAME] = FPTI_SDK_NAME.PAYMENTS_SDK, _ref2[FPTI_KEY.SDK_VERSION] = version, _ref2[FPTI_KEY.USER_AGENT] = window.navigator && window.navigator.userAgent, _ref2[FPTI_KEY.USER_ACTION] = commit ? FPTI_USER_ACTION.COMMIT : FPTI_USER_ACTION.CONTINUE, _ref2[FPTI_KEY.CONTEXT_CORRID] = correlationID, _ref2[FPTI_KEY.BUTTON_VERSION] = "2.1.80", _ref2;
  });
  promise_ZalgoPromise.onPossiblyUnhandledException(function (err) {
    var _logger$track;

    logger.track((_logger$track = {}, _logger$track[FPTI_KEY.ERROR_CODE] = 'payments_sdk_error', _logger$track[FPTI_KEY.ERROR_DESC] = stringifyErrorMessage(err), _logger$track));
    logger.error('unhandled_error', {
      err: stringifyError(err)
    }); // eslint-disable-next-line promise/no-promise-in-callback

    logger.flush().catch(belter_src_util_noop);
  });
}
// CONCATENATED MODULE: ./node_modules/@paypal/smart-payment-buttons/src/lib/index.js


// CONCATENATED MODULE: ./node_modules/@paypal/smart-payment-buttons/src/api/api.js





function callRestAPI(_ref) {
  var _extends2;

  var accessToken = _ref.accessToken,
      method = _ref.method,
      url = _ref.url,
      data = _ref.data,
      headers = _ref.headers;

  if (!accessToken) {
    throw new Error("No access token passed to " + url);
  }

  var requestHeaders = _extends((_extends2 = {}, _extends2[constants_HEADERS.AUTHORIZATION] = "Bearer " + accessToken, _extends2[constants_HEADERS.CONTENT_TYPE] = "application/json", _extends2), headers);

  return http_request({
    method: method,
    url: url,
    headers: requestHeaders,
    json: data
  }).then(function (_ref2) {
    var status = _ref2.status,
        body = _ref2.body,
        responseHeaders = _ref2.headers;

    if (status >= 300) {
      throw new Error(url + " returned status: " + status + " (Corr ID: " + responseHeaders[constants_HEADERS.PAYPAL_DEBUG_ID] + ")");
    }

    return body;
  });
}
function callSmartAPI(_ref3) {
  var _reqHeaders;

  var accessToken = _ref3.accessToken,
      url = _ref3.url,
      _ref3$method = _ref3.method,
      method = _ref3$method === void 0 ? 'get' : _ref3$method,
      json = _ref3.json;
  var reqHeaders = (_reqHeaders = {}, _reqHeaders[constants_HEADERS.REQUESTED_BY] = SMART_PAYMENT_BUTTONS, _reqHeaders);

  if (accessToken) {
    reqHeaders[constants_HEADERS.ACCESS_TOKEN] = accessToken;
  }

  return http_request({
    url: url,
    method: method,
    headers: reqHeaders,
    json: json
  }).then(function (_ref4) {
    var status = _ref4.status,
        body = _ref4.body,
        headers = _ref4.headers;

    if (body.ack === 'contingency') {
      var err = new Error(body.contingency); // $FlowFixMe

      err.data = body.data;
      throw err;
    }

    if (status > 400) {
      throw new Error("Api: " + url + " returned status code: " + status + " (Corr ID: " + headers[constants_HEADERS.PAYPAL_DEBUG_ID] + ")");
    }

    if (body.ack !== 'success') {
      throw new Error("Api: " + url + " returned ack: " + body.ack + " (Corr ID: " + headers[constants_HEADERS.PAYPAL_DEBUG_ID] + ")");
    }

    return body.data;
  });
}
function api_callGraphQL(_ref5) {
  var query = _ref5.query,
      _ref5$variables = _ref5.variables,
      variables = _ref5$variables === void 0 ? {} : _ref5$variables,
      _ref5$headers = _ref5.headers,
      headers = _ref5$headers === void 0 ? {} : _ref5$headers;
  return http_request({
    url: GRAPHQL_URI,
    method: 'POST',
    json: {
      query: query,
      variables: variables
    },
    headers: _extends({
      'x-app-name': SMART_PAYMENT_BUTTONS
    }, headers)
  }).then(function (_ref6) {
    var status = _ref6.status,
        body = _ref6.body;
    var errors = body.errors || [];

    if (errors.length) {
      var message = errors[0].message || JSON.stringify(errors[0]);
      throw new Error(message);
    }

    if (status !== 200) {
      throw new Error(GRAPHQL_URI + " returned status " + status);
    }

    return body.data;
  });
}
// CONCATENATED MODULE: ./node_modules/@paypal/smart-payment-buttons/src/api/auth.js






function createAccessToken(clientID) {
  return inlineMemoize(createAccessToken, function () {
    getLogger().info("rest_api_create_access_token");
    var basicAuth = base64encode(clientID + ":");
    return http_request({
      method: "post",
      url: AUTH_API_URL,
      headers: {
        Authorization: "Basic " + basicAuth
      },
      data: {
        grant_type: "client_credentials"
      }
    }).then(function (_ref) {
      var body = _ref.body;

      if (body && body.error === 'invalid_client') {
        throw new Error("Auth Api invalid client id: " + clientID + ":\n\n" + JSON.stringify(body, null, 4));
      }

      if (!body || !body.access_token) {
        throw new Error("Auth Api response error:\n\n" + JSON.stringify(body, null, 4));
      }

      return body.access_token;
    });
  }, [clientID]);
}
function getFirebaseSessionToken(sessionUID) {
  return api_callGraphQL({
    query: "\n            query GetFireBaseSessionToken($sessionUID: String!) {\n                firebase {\n                    auth(sessionUID: $sessionUID) {\n                        sessionToken\n                    }\n                }\n            }\n        ",
    variables: {
      sessionUID: sessionUID
    }
  }).then(function (res) {
    return res.firebase.auth.sessionToken;
  });
}
function upgradeFacilitatorAccessToken(facilitatorAccessToken, _ref2) {
  var _headers;

  var buyerAccessToken = _ref2.buyerAccessToken,
      orderID = _ref2.orderID;
  return api_callGraphQL({
    headers: (_headers = {}, _headers[constants_HEADERS.ACCESS_TOKEN] = buyerAccessToken, _headers),
    query: "\n            mutation UpgradeFacilitatorAccessToken(\n                $orderID: String!\n                $buyerAccessToken: String!\n                $facilitatorAccessToken: String!\n            ) {\n                upgradeLowScopeAccessToken(\n                    token: $orderID\n                    buyerAccessToken: $buyerAccessToken\n                    merchantLSAT: $facilitatorAccessToken\n                )\n            }\n        ",
    variables: {
      facilitatorAccessToken: facilitatorAccessToken,
      buyerAccessToken: buyerAccessToken,
      orderID: orderID
    }
  }).then(belter_src_util_noop);
}
// CONCATENATED MODULE: ./node_modules/@paypal/smart-payment-buttons/src/api/order.js






function createOrderID(order, _ref) {
  var _headers;

  var facilitatorAccessToken = _ref.facilitatorAccessToken,
      partnerAttributionID = _ref.partnerAttributionID;
  getLogger().info("rest_api_create_order_id");
  return callRestAPI({
    accessToken: facilitatorAccessToken,
    method: "post",
    url: "" + ORDERS_API_URL,
    data: order,
    headers: (_headers = {}, _headers[constants_HEADERS.PARTNER_ATTRIBUTION_ID] = partnerAttributionID || '', _headers)
  }).then(function (body) {
    var _getLogger$track;

    var orderID = body && body.id;

    if (!orderID) {
      throw new Error("Order Api response error:\n\n" + JSON.stringify(body, null, 4));
    }

    getLogger().track((_getLogger$track = {}, _getLogger$track[FPTI_KEY.TRANSITION] = FPTI_TRANSITION.CREATE_ORDER, _getLogger$track[FPTI_KEY.CONTEXT_TYPE] = FPTI_CONTEXT_TYPE.ORDER_ID, _getLogger$track[FPTI_KEY.TOKEN] = orderID, _getLogger$track[FPTI_KEY.CONTEXT_ID] = orderID, _getLogger$track));
    return orderID;
  });
}
function order_getOrder(orderID, _ref2) {
  var _headers2;

  var facilitatorAccessToken = _ref2.facilitatorAccessToken,
      buyerAccessToken = _ref2.buyerAccessToken,
      partnerAttributionID = _ref2.partnerAttributionID,
      _ref2$isNativeTransac = _ref2.isNativeTransaction,
      isNativeTransaction = _ref2$isNativeTransac === void 0 ? false : _ref2$isNativeTransac;
  return buyerAccessToken || !isNativeTransaction ? callSmartAPI({
    accessToken: buyerAccessToken,
    url: SMART_API_URI.ORDER + "/" + orderID
  }) : callRestAPI({
    accessToken: facilitatorAccessToken,
    url: ORDERS_API_URL + "/" + orderID,
    headers: (_headers2 = {}, _headers2[constants_HEADERS.PARTNER_ATTRIBUTION_ID] = partnerAttributionID || '', _headers2)
  });
}
function order_captureOrder(orderID, _ref3) {
  var _headers3;

  var facilitatorAccessToken = _ref3.facilitatorAccessToken,
      buyerAccessToken = _ref3.buyerAccessToken,
      partnerAttributionID = _ref3.partnerAttributionID,
      _ref3$isNativeTransac = _ref3.isNativeTransaction,
      isNativeTransaction = _ref3$isNativeTransac === void 0 ? false : _ref3$isNativeTransac;
  return buyerAccessToken || !isNativeTransaction ? callSmartAPI({
    accessToken: buyerAccessToken,
    method: 'post',
    url: SMART_API_URI.ORDER + "/" + orderID + "/capture"
  }) : callRestAPI({
    accessToken: facilitatorAccessToken,
    method: "post",
    url: ORDERS_API_URL + "/" + orderID + "/capture",
    headers: (_headers3 = {}, _headers3[constants_HEADERS.PARTNER_ATTRIBUTION_ID] = partnerAttributionID || '', _headers3)
  });
}
function order_authorizeOrder(orderID, _ref4) {
  var _headers4;

  var facilitatorAccessToken = _ref4.facilitatorAccessToken,
      buyerAccessToken = _ref4.buyerAccessToken,
      partnerAttributionID = _ref4.partnerAttributionID,
      _ref4$isNativeTransac = _ref4.isNativeTransaction,
      isNativeTransaction = _ref4$isNativeTransac === void 0 ? false : _ref4$isNativeTransac;
  return buyerAccessToken || !isNativeTransaction ? callSmartAPI({
    accessToken: buyerAccessToken,
    method: 'post',
    url: SMART_API_URI.ORDER + "/" + orderID + "/authorize"
  }) : callRestAPI({
    accessToken: facilitatorAccessToken,
    method: "post",
    url: ORDERS_API_URL + "/" + orderID + "/authorize",
    headers: (_headers4 = {}, _headers4[constants_HEADERS.PARTNER_ATTRIBUTION_ID] = partnerAttributionID || '', _headers4)
  });
}
function order_patchOrder(orderID, data, _ref5) {
  var _headers5;

  var facilitatorAccessToken = _ref5.facilitatorAccessToken,
      buyerAccessToken = _ref5.buyerAccessToken,
      partnerAttributionID = _ref5.partnerAttributionID,
      _ref5$isNativeTransac = _ref5.isNativeTransaction,
      isNativeTransaction = _ref5$isNativeTransac === void 0 ? false : _ref5$isNativeTransac;
  var patchData = Array.isArray(data) ? {
    patch: data
  } : data;
  return buyerAccessToken || !isNativeTransaction ? callSmartAPI({
    accessToken: buyerAccessToken,
    method: 'post',
    url: SMART_API_URI.ORDER + "/" + orderID + "/patch",
    json: {
      data: patchData
    }
  }) : callRestAPI({
    accessToken: facilitatorAccessToken,
    method: "patch",
    url: ORDERS_API_URL + "/" + orderID,
    data: patchData,
    headers: (_headers5 = {}, _headers5[constants_HEADERS.PARTNER_ATTRIBUTION_ID] = partnerAttributionID || '', _headers5)
  });
}
function getPayee(orderID) {
  return callSmartAPI({
    url: SMART_API_URI.CHECKOUT + "/" + orderID + "/payee"
  });
}
var VALIDATE_CONTINGENCIES = {
  THREE_DOMAIN_SECURE: '3D_SECURE'
};
function validatePaymentMethod(_ref6) {
  var _headers6;

  var clientAccessToken = _ref6.clientAccessToken,
      orderID = _ref6.orderID,
      paymentMethodID = _ref6.paymentMethodID,
      enableThreeDomainSecure = _ref6.enableThreeDomainSecure,
      partnerAttributionID = _ref6.partnerAttributionID,
      buttonSessionID = _ref6.buttonSessionID;
  getLogger().info("rest_api_create_order_token");
  var headers = (_headers6 = {}, _headers6[constants_HEADERS.AUTHORIZATION] = "Bearer " + clientAccessToken, _headers6[constants_HEADERS.PARTNER_ATTRIBUTION_ID] = partnerAttributionID, _headers6[constants_HEADERS.CLIENT_METADATA_ID] = buttonSessionID, _headers6);
  var paymentSource = {
    token: {
      id: paymentMethodID,
      type: 'NONCE'
    }
  };

  if (enableThreeDomainSecure) {
    paymentSource.contingencies = [VALIDATE_CONTINGENCIES.THREE_DOMAIN_SECURE];
  }

  var json = {
    payment_source: paymentSource
  };
  return http_request({
    method: "post",
    url: ORDERS_API_URL + "/" + orderID + "/" + VALIDATE_PAYMENT_METHOD_API,
    headers: headers,
    json: json
  });
}
function billingTokenToOrderID(billingToken) {
  return callSmartAPI({
    method: 'post',
    url: SMART_API_URI.PAYMENT + "/" + billingToken + "/ectoken"
  }).then(function (data) {
    return data.token;
  });
}
function subscriptionIdToCartId(subscriptionID) {
  return callSmartAPI({
    method: 'post',
    url: SMART_API_URI.SUBSCRIPTION + "/" + subscriptionID + "/cartid"
  }).then(function (data) {
    return data.token;
  });
}
function enableVault(_ref7) {
  var _headers7;

  var orderID = _ref7.orderID,
      clientAccessToken = _ref7.clientAccessToken;
  return api_callGraphQL({
    query: "\n            mutation EnableVault(\n                $orderID : String!\n            ) {\n                enableVault(\n                    token: $orderID\n                )\n            }\n        ",
    variables: {
      orderID: orderID
    },
    headers: (_headers7 = {}, _headers7[constants_HEADERS.ACCESS_TOKEN] = clientAccessToken, _headers7)
  });
}
function deleteVault(_ref8) {
  var _headers8;

  var paymentMethodID = _ref8.paymentMethodID,
      clientAccessToken = _ref8.clientAccessToken;
  return api_callGraphQL({
    query: "\n            mutation DeleteVault(\n                $paymentMethodID : String!\n            ) {\n                deleteVault(\n                    paymentMethodID: $paymentMethodID\n                )\n            }\n        ",
    variables: {
      paymentMethodID: paymentMethodID
    },
    headers: (_headers8 = {}, _headers8[constants_HEADERS.ACCESS_TOKEN] = clientAccessToken, _headers8)
  });
}
function order_updateClientConfig(_ref9) {
  var orderID = _ref9.orderID,
      fundingSource = _ref9.fundingSource,
      integrationArtifact = _ref9.integrationArtifact,
      userExperienceFlow = _ref9.userExperienceFlow,
      productFlow = _ref9.productFlow;
  return api_callGraphQL({
    query: "\n            mutation UpdateClientConfig(\n                $orderID : String!,\n                $fundingSource : ButtonFundingSourceType!,\n                $integrationArtifact : IntegrationArtifactType!,\n                $userExperienceFlow : UserExperienceFlowType!,\n                $productFlow : ProductFlowType!\n            ) {\n                updateClientConfig(\n                    token: $orderID,\n                    fundingSource: $fundingSource,\n                    integrationArtifact: $integrationArtifact,\n                    userExperienceFlow: $userExperienceFlow,\n                    productFlow: $productFlow\n                )\n            }\n        ",
    variables: {
      orderID: orderID,
      fundingSource: fundingSource,
      integrationArtifact: integrationArtifact,
      userExperienceFlow: userExperienceFlow,
      productFlow: productFlow
    }
  }).then(belter_src_util_noop);
}
// CONCATENATED MODULE: ./node_modules/@paypal/smart-payment-buttons/src/api/payment.js





function createPayment(payment, _ref) {
  var _headers;

  var facilitatorAccessToken = _ref.facilitatorAccessToken,
      partnerAttributionID = _ref.partnerAttributionID;
  getLogger().info("rest_api_create_payment_id");
  return callRestAPI({
    accessToken: facilitatorAccessToken,
    method: "post",
    url: "" + PAYMENTS_API_URL,
    data: payment,
    headers: (_headers = {}, _headers[constants_HEADERS.PARTNER_ATTRIBUTION_ID] = partnerAttributionID || '', _headers)
  }).then(function (body) {
    var _getLogger$track;

    var paymentID = body && body.id;

    if (!paymentID) {
      throw new Error("Payment Api response error:\n\n" + JSON.stringify(body, null, 4));
    }

    getLogger().track((_getLogger$track = {}, _getLogger$track[FPTI_KEY.TRANSITION] = FPTI_TRANSITION.CREATE_PAYMENT, _getLogger$track[FPTI_KEY.CONTEXT_TYPE] = FPTI_CONTEXT_TYPE.PAYMENT_ID, _getLogger$track[FPTI_KEY.TOKEN] = paymentID, _getLogger$track[FPTI_KEY.CONTEXT_ID] = paymentID, _getLogger$track));
    return body;
  });
}
function createPaymentID(payment, _ref2) {
  var facilitatorAccessToken = _ref2.facilitatorAccessToken,
      partnerAttributionID = _ref2.partnerAttributionID;
  return createPayment(payment, {
    facilitatorAccessToken: facilitatorAccessToken,
    partnerAttributionID: partnerAttributionID
  }).then(function (res) {
    return res.id;
  });
}
function createPaymentToken(payment, _ref3) {
  var facilitatorAccessToken = _ref3.facilitatorAccessToken,
      partnerAttributionID = _ref3.partnerAttributionID;
  return createPayment(payment, {
    facilitatorAccessToken: facilitatorAccessToken,
    partnerAttributionID: partnerAttributionID
  }).then(function (res) {
    if (res.links && res.links.length) {
      for (var i = 0; i < res.links.length; i++) {
        if (res.links[i].method === 'REDIRECT' && res.links[i].rel === 'approval_url') {
          var match = res.links[i].href.match(/token=((EC-)?[A-Z0-9]{17})/);

          if (match) {
            return match[1];
          }
        }
      }
    }

    throw new Error("Could not find payment token");
  });
}
function payment_getPayment(paymentID, _ref4) {
  var _headers2;

  var facilitatorAccessToken = _ref4.facilitatorAccessToken,
      buyerAccessToken = _ref4.buyerAccessToken,
      partnerAttributionID = _ref4.partnerAttributionID;
  return buyerAccessToken ? callSmartAPI({
    accessToken: buyerAccessToken,
    url: SMART_API_URI.PAYMENT + "/" + paymentID
  }) : callRestAPI({
    accessToken: facilitatorAccessToken,
    url: PAYMENTS_API_URL + "/" + paymentID,
    headers: (_headers2 = {}, _headers2[constants_HEADERS.PARTNER_ATTRIBUTION_ID] = partnerAttributionID || '', _headers2)
  });
}
function payment_executePayment(paymentID, payerID, _ref5) {
  var _headers3;

  var facilitatorAccessToken = _ref5.facilitatorAccessToken,
      buyerAccessToken = _ref5.buyerAccessToken,
      partnerAttributionID = _ref5.partnerAttributionID;
  return buyerAccessToken ? callSmartAPI({
    accessToken: buyerAccessToken,
    method: 'post',
    url: SMART_API_URI.PAYMENT + "/" + paymentID + "/execute",
    json: {
      data: {
        payer_id: payerID
      }
    }
  }) : callRestAPI({
    accessToken: facilitatorAccessToken,
    method: "post",
    url: PAYMENTS_API_URL + "/" + paymentID + "/execute",
    headers: (_headers3 = {}, _headers3[constants_HEADERS.PARTNER_ATTRIBUTION_ID] = partnerAttributionID || '', _headers3),
    data: {
      payer_id: payerID
    }
  });
}
function payment_patchPayment(paymentID, data, _ref6) {
  var _headers4;

  var facilitatorAccessToken = _ref6.facilitatorAccessToken,
      buyerAccessToken = _ref6.buyerAccessToken,
      partnerAttributionID = _ref6.partnerAttributionID;
  var patchData = Array.isArray(data) ? {
    patch: data
  } : data;
  return buyerAccessToken ? callSmartAPI({
    accessToken: buyerAccessToken,
    method: 'post',
    url: SMART_API_URI.ORDER + "/" + paymentID + "/patch",
    json: {
      data: patchData
    }
  }) : callRestAPI({
    accessToken: facilitatorAccessToken,
    method: "patch",
    url: PAYMENTS_API_URL + "/" + paymentID,
    data: patchData,
    headers: (_headers4 = {}, _headers4[constants_HEADERS.PARTNER_ATTRIBUTION_ID] = partnerAttributionID || '', _headers4)
  });
}
// CONCATENATED MODULE: ./node_modules/@paypal/smart-payment-buttons/src/api/subscription.js




function subscription_createSubscription(accessToken, subscriptionPayload, _ref) {
  var partnerAttributionID = _ref.partnerAttributionID;
  getLogger().info("rest_api_create_subscription_id");

  if (!accessToken) {
    throw new Error("Access token not passed");
  }

  if (!subscriptionPayload) {
    throw new Error("Expected subscription payload to be passed");
  }

  var headers = {
    'Authorization': "Bearer " + accessToken,
    'PayPal-Partner-Attribution-Id': partnerAttributionID
  };
  return http_request({
    method: "post",
    url: CREATE_SUBSCRIPTIONS_API_URL,
    headers: headers,
    json: subscriptionPayload
  }).then(function (_ref2) {
    var body = _ref2.body;

    if (!body || !body.id) {
      throw new Error("Create Subscription Api response error:\n\n" + JSON.stringify(body, null, 4));
    }

    return body.id;
  });
}
function reviseSubscription(accessToken, subscriptionID, subscriptionPayload, _ref3) {
  var partnerAttributionID = _ref3.partnerAttributionID;
  getLogger().info("rest_api_create_subscription_id");

  if (!accessToken) {
    throw new Error("Access token not passed");
  }

  if (!subscriptionID) {
    throw new Error("Expected subscription id to be passed as first argument to revise subscription api");
  }

  if (!subscriptionPayload) {
    throw new Error("Expected subscription payload to be passed");
  }

  var headers = {
    'Authorization': "Bearer " + accessToken,
    'PayPal-Partner-Attribution-Id': partnerAttributionID
  };
  return http_request({
    method: "post",
    url: CREATE_SUBSCRIPTIONS_API_URL + "/" + subscriptionID + "/revise",
    headers: headers,
    json: subscriptionPayload
  }).then(function (_ref4) {
    var body = _ref4.body,
        status = _ref4.status;

    if (status !== 200) {
      throw new Error("Revise Subscription Api HTTP-" + status + " response: error:\n\n" + JSON.stringify(body, null, 4));
    } // for revision flow the same subscription id is returned


    return subscriptionID;
  });
}
function activateSubscription(subscriptionID, _ref5) {
  var buyerAccessToken = _ref5.buyerAccessToken;
  return callSmartAPI({
    accessToken: buyerAccessToken,
    method: "post",
    url: SMART_API_URI.SUBSCRIPTION + "/" + subscriptionID + "/activate"
  });
}
function getSubscription(subscriptionID, _ref6) {
  var buyerAccessToken = _ref6.buyerAccessToken;
  return callSmartAPI({
    accessToken: buyerAccessToken,
    url: SMART_API_URI.SUBSCRIPTION + "/" + subscriptionID
  });
}
// CONCATENATED MODULE: ./node_modules/@paypal/smart-payment-buttons/src/api/socket.js


/* eslint unicorn/prefer-add-event-listener: off, max-lines: off */





var MESSAGE_TYPE = {
  REQUEST: 'request',
  RESPONSE: 'response'
};
var RESPONSE_STATUS = {
  SUCCESS: 'success',
  ERROR: 'error'
};
function messageSocket(_ref) {
  var sessionUID = _ref.sessionUID,
      driver = _ref.driver,
      sourceApp = _ref.sourceApp,
      sourceAppVersion = _ref.sourceAppVersion,
      targetApp = _ref.targetApp,
      _ref$retry = _ref.retry,
      retry = _ref$retry === void 0 ? true : _ref$retry;
  var receivedMessages = {};
  var responseListeners = {};
  var activeRequests = [];
  var requestListeners = {};
  var errorListeners = [];

  var sendMessage = function sendMessage(socket, data) {
    var messageUID = uniqueID();
    receivedMessages[messageUID] = true;

    var message = _extends({
      session_uid: sessionUID,
      message_uid: messageUID,
      source_app: sourceApp,
      source_app_version: sourceAppVersion,
      target_app: targetApp
    }, data);

    socket.send(JSON.stringify(message));
  };

  var sendResponse = function sendResponse(socket, _ref2) {
    var messageName = _ref2.messageName,
        responseStatus = _ref2.responseStatus,
        responseData = _ref2.responseData,
        requestUID = _ref2.requestUID;

    if (!socket.isOpen()) {
      return;
    }

    return sendMessage(socket, {
      request_uid: requestUID,
      message_name: messageName,
      message_status: responseStatus,
      message_type: MESSAGE_TYPE.RESPONSE,
      message_data: responseData
    });
  };

  var onRequest = function onRequest(socket, _ref3) {
    var messageSessionUID = _ref3.messageSessionUID,
        requestUID = _ref3.requestUID,
        messageName = _ref3.messageName,
        messageData = _ref3.messageData;
    var activeRequest = new promise_ZalgoPromise();
    activeRequests.push(activeRequest);
    return promise_ZalgoPromise.try(function () {
      var requestListener = requestListeners[messageName];

      if (!requestListener) {
        throw new Error("No listener found for name: " + messageName);
      }

      var handler = requestListener.handler,
          requireSessionUID = requestListener.requireSessionUID;

      if (requireSessionUID && messageSessionUID !== sessionUID) {
        throw new Error("Incorrect sessionUID: " + (messageSessionUID || 'undefined'));
      }

      return handler({
        data: messageData
      });
    }).then(function (res) {
      sendResponse(socket, {
        responseStatus: RESPONSE_STATUS.SUCCESS,
        responseData: res,
        messageName: messageName,
        requestUID: requestUID
      });
    }, function (err) {
      var res = {
        message: err && err.message ? err.message : 'Unknown error'
      };
      sendResponse(socket, {
        responseStatus: RESPONSE_STATUS.ERROR,
        responseData: res,
        messageName: messageName,
        messageSessionUID: messageSessionUID,
        requestUID: requestUID
      });
    }).finally(function () {
      activeRequest.resolve();
      activeRequests.splice(activeRequests.indexOf(activeRequest), 1);
    });
  };

  var onResponse = function onResponse(_ref4) {
    var requestUID = _ref4.requestUID,
        messageSessionUID = _ref4.messageSessionUID,
        responseStatus = _ref4.responseStatus,
        messageData = _ref4.messageData;
    var _responseListeners$re = responseListeners[requestUID],
        listenerPromise = _responseListeners$re.listenerPromise,
        requireSessionUID = _responseListeners$re.requireSessionUID;

    if (!listenerPromise) {
      throw new Error("Could not find response listener with id: " + requestUID);
    }

    if (requireSessionUID && messageSessionUID !== sessionUID) {
      throw new Error("Incorrect sessionUID: " + (messageSessionUID || 'undefined'));
    }

    delete responseListeners[requestUID];

    if (responseStatus === RESPONSE_STATUS.SUCCESS) {
      listenerPromise.resolve({
        data: messageData
      });
    } else if (responseStatus === RESPONSE_STATUS.ERROR) {
      listenerPromise.reject(new Error(messageData.message));
    } else {
      throw new Error("Can not handle response status: " + (status || 'undefined'));
    }
  };

  var onMessage = function onMessage(socket, rawData) {
    var parsedData;

    try {
      parsedData = JSON.parse(rawData);
    } catch (err) {
      throw new Error("Could not parse socket message: " + rawData);
    }

    if (!parsedData) {
      throw new Error("No data passed from socket message");
    }

    var _parsedData = parsedData,
        messageSessionUID = _parsedData.session_uid,
        requestUID = _parsedData.request_uid,
        messageUID = _parsedData.message_uid,
        messageName = _parsedData.message_name,
        messageType = _parsedData.message_type,
        messageData = _parsedData.message_data,
        responseStatus = _parsedData.message_status,
        messageTargetApp = _parsedData.target_app;
    requestUID = requestUID || parsedData.request_id;

    if (messageUID && receivedMessages[messageUID]) {
      return;
    }

    if (!messageUID || !requestUID || !messageName || !messageType || !messageTargetApp) {
      throw new Error("Incomplete message: " + rawData);
    }

    receivedMessages[messageUID] = true;

    if (messageType === MESSAGE_TYPE.REQUEST) {
      return onRequest(socket, {
        messageSessionUID: messageSessionUID,
        requestUID: requestUID,
        messageName: messageName,
        messageData: messageData
      });
    } else if (messageType === MESSAGE_TYPE.RESPONSE) {
      return onResponse({
        requestUID: requestUID,
        messageSessionUID: messageSessionUID,
        responseStatus: responseStatus,
        messageData: messageData
      });
    } else {
      throw new Error("Unhandleable message type: " + messageType);
    }
  };

  var closed = false;
  var retryDelay;

  var updateRetryDelay = function updateRetryDelay() {
    if (retry) {
      retryDelay = retryDelay ? retryDelay * 2 : 1;
    }
  };

  var socketPromise;
  var retryPromise;

  var init = function init() {
    socketPromise = promise_ZalgoPromise.try(function () {
      if (retryDelay) {
        retryPromise = promise_ZalgoPromise.delay(retryDelay);
        return retryPromise;
      }
    }).then(function () {
      retryPromise = null;
      var instance = driver();
      var connectionPromise = new promise_ZalgoPromise(function (resolve, reject) {
        instance.onOpen(function () {
          closed = false;
          retryDelay = 0;
          resolve(instance);
        });
        instance.onClose(function (err) {
          closed = true;
          reject(err || new Error('socket closed'));

          if (retry) {
            updateRetryDelay();
            init();
          }
        });
        instance.onError(function (err) {
          reject(err);

          for (var _i2 = 0, _errorListeners2 = errorListeners; _i2 < _errorListeners2.length; _i2++) {
            var errorListener = _errorListeners2[_i2];
            errorListener(err);
          }
        });
      });
      instance.onMessage(function (rawMessage) {
        return connectionPromise.then(function (socket) {
          return onMessage(socket, rawMessage);
        });
      });
      return connectionPromise;
    });
    socketPromise.catch(belter_src_util_noop);
  };

  init();

  var on = function on(name, handler, _temp) {
    var _ref5 = _temp === void 0 ? {} : _temp,
        _ref5$requireSessionU = _ref5.requireSessionUID,
        requireSessionUID = _ref5$requireSessionU === void 0 ? true : _ref5$requireSessionU;

    if (requestListeners[name]) {
      throw new Error("Listener already registered for name: " + name);
    }

    requestListeners[name] = {
      handler: handler,
      requireSessionUID: requireSessionUID
    };
    return {
      cancel: function cancel() {
        delete requestListeners[name];
      }
    };
  };

  var send = function send(messageName, messageData, _temp2) {
    var _ref6 = _temp2 === void 0 ? {} : _temp2,
        _ref6$requireSessionU = _ref6.requireSessionUID,
        requireSessionUID = _ref6$requireSessionU === void 0 ? true : _ref6$requireSessionU,
        _ref6$timeout = _ref6.timeout,
        timeout = _ref6$timeout === void 0 ? 0 : _ref6$timeout;

    return socketPromise.then(function (socket) {
      var requestUID = uniqueID();
      var listenerPromise = new promise_ZalgoPromise();
      responseListeners[requestUID] = {
        listenerPromise: listenerPromise,
        requireSessionUID: requireSessionUID
      };
      sendMessage(socket, {
        request_uid: requestUID,
        message_name: messageName,
        message_type: MESSAGE_TYPE.REQUEST,
        message_data: messageData
      });

      if (timeout) {
        setTimeout(function () {
          listenerPromise.reject(new Error("Timeoued out waiting for " + messageName + " response after " + timeout + "ms"));
        }, timeout);
      }

      return listenerPromise;
    });
  };

  var reconnect = function reconnect() {
    return promise_ZalgoPromise.try(function () {
      if (!closed) {
        return socketPromise;
      }

      if (retryPromise) {
        retryPromise.resolve();
        return socketPromise;
      }

      retryDelay = 0;
      return init();
    });
  };

  var close = function close() {
    retry = false;
    requestListeners = {};
    errorListeners = [];

    for (var _i4 = 0, _Object$keys2 = Object.keys(responseListeners); _i4 < _Object$keys2.length; _i4++) {
      var requestUID = _Object$keys2[_i4];
      var listenerPromise = responseListeners[requestUID].listenerPromise;
      listenerPromise.asyncReject(new Error("Socket closed"));
    }

    promise_ZalgoPromise.all(activeRequests).then(function () {
      return socketPromise.then(function (socket) {
        return socket.close();
      }, belter_src_util_noop);
    });
  };

  var onError = function onError(handler) {
    errorListeners.push(handler);
  };

  return {
    on: on,
    send: send,
    onError: onError,
    reconnect: reconnect,
    close: close
  };
}
function webSocket(_ref7) {
  var sessionUID = _ref7.sessionUID,
      url = _ref7.url,
      sourceApp = _ref7.sourceApp,
      sourceAppVersion = _ref7.sourceAppVersion,
      targetApp = _ref7.targetApp;

  var driver = function driver() {
    var socket = new WebSocket(url);
    return {
      send: function send(data) {
        socket.send(data);
      },
      close: function close() {
        socket.close();
      },
      onMessage: function onMessage(handler) {
        socket.onmessage = function (event) {
          var data = event.data;

          if (typeof data !== 'string' || !data) {
            throw new TypeError("Expected string data from web socket");
          }

          handler(data);
        };
      },
      onError: function onError(handler) {
        socket.onerror = function () {
          handler(new Error("The socket encountered an error"));
        };
      },
      onOpen: function onOpen(handler) {
        socket.onopen = function () {
          return handler();
        };
      },
      onClose: function onClose(handler) {
        socket.onclose = function () {
          return handler(new Error("Websocket connection closed"));
        };
      },
      isOpen: function isOpen() {
        return socket.readyState === WebSocket.OPEN;
      }
    };
  };

  return messageSocket({
    sessionUID: sessionUID,
    driver: driver,
    sourceApp: sourceApp,
    sourceAppVersion: sourceAppVersion,
    targetApp: targetApp
  });
}
var loadFirebaseSDK = util_memoize(function (config) {
  return loadScript(FIREBASE_SCRIPTS.APP).then(function () {
    return promise_ZalgoPromise.all([loadScript(FIREBASE_SCRIPTS.AUTH), loadScript(FIREBASE_SCRIPTS.DATABASE)]);
  }).then(function () {
    var firebase = window.firebase;

    if (!firebase) {
      throw new Error("Firebase failed to load");
    }

    firebase.initializeApp(config);
    return firebase;
  });
});
function firebaseSocket(_ref8) {
  var sessionUID = _ref8.sessionUID,
      config = _ref8.config,
      sourceApp = _ref8.sourceApp,
      sourceAppVersion = _ref8.sourceAppVersion,
      targetApp = _ref8.targetApp;

  var driver = function driver() {
    var open = false;
    var onMessageHandlers = [];
    var onErrorHandlers = [];
    var onCloseHandlers = [];
    var onOpenHandlers = [];

    var error = function error(err) {
      for (var _i6 = 0; _i6 < onErrorHandlers.length; _i6++) {
        var _handler = onErrorHandlers[_i6];

        _handler(err);
      }
    };

    var databasePromise = promise_ZalgoPromise.all([loadFirebaseSDK(config), getFirebaseSessionToken(sessionUID)]).then(function (_ref9) {
      var firebase = _ref9[0],
          sessionToken = _ref9[1];
      return firebase.auth().signInWithCustomToken(sessionToken).then(function () {
        var database = firebase.database();
        firebase.database.INTERNAL.forceWebSockets();
        open = true;

        for (var _i8 = 0; _i8 < onOpenHandlers.length; _i8++) {
          var _handler2 = onOpenHandlers[_i8];

          _handler2();
        }

        database.ref("users/" + sessionUID + "/messages").on('value', function (res) {
          var messages = res.val() || {};

          for (var _i10 = 0, _Object$keys4 = Object.keys(messages); _i10 < _Object$keys4.length; _i10++) {
            var messageID = _Object$keys4[_i10];
            var message = messages[messageID];

            for (var _i12 = 0; _i12 < onMessageHandlers.length; _i12++) {
              var _handler3 = onMessageHandlers[_i12];

              _handler3(message);
            }
          }
        }, function (err) {
          error(err);
        });
        database.goOnline();
        return database;
      });
    });
    databasePromise.catch(belter_src_util_noop);
    return {
      send: function send(data) {
        databasePromise.then(function (database) {
          return database.ref("users/" + sessionUID + "/messages/" + uniqueID()).set(data);
        }).catch(error);
      },
      close: function close() {
        databasePromise.then(function (database) {
          database.goOffline();
        });
      },
      onMessage: function onMessage(handler) {
        onMessageHandlers.push(handler);
      },
      onError: function onError(handler) {
        onErrorHandlers.push(handler);
      },
      onOpen: function onOpen(handler) {
        if (open) {
          handler();
        } else {
          onOpenHandlers.push(handler);
        }
      },
      onClose: function onClose(handler) {
        onCloseHandlers.push(handler);
      },
      isOpen: function isOpen() {
        return open;
      }
    };
  };

  return messageSocket({
    sessionUID: sessionUID,
    driver: driver,
    sourceApp: sourceApp,
    sourceAppVersion: sourceAppVersion,
    targetApp: targetApp
  });
}
// CONCATENATED MODULE: ./node_modules/@paypal/smart-payment-buttons/src/api/index.js





// CONCATENATED MODULE: ./public/js/button/logger.js

var logger_track = window.paypal && window.paypal.logger && window.paypal.logger.track || noop;
var logger_error = window.paypal && window.paypal.logger && window.paypal.logger.error || noop;
var logger_info = window.paypal && window.paypal.logger && window.paypal.logger.info || noop;
var logger_flush = window.paypal && window.paypal.logger && window.paypal.logger.flush || noop;
// CONCATENATED MODULE: ./public/js/button/lightbox.js


var lightboxEligibilityTimeout;
function isLightboxEligible() {
  return window.paypal.Promise.resolve().then(function () {
    if (window.xprops.disableLightbox) {
      return false;
    }

    if (!$util.cookiesEnabled()) {
      return false;
    }

    return isLoggedIn();
  });
}
function enableLightbox() {
  if (lightboxEligibilityTimeout) {
    clearTimeout(lightboxEligibilityTimeout);
  }

  lightboxEligibilityTimeout = setTimeout(function () {
    window.paypal.Checkout.contexts.lightbox = false;
    window.paypal.Checkout.contexts.iframe = false;
  }, 5 * 60 * 1000);
  window.paypal.Checkout.contexts.lightbox = true;
  window.paypal.Checkout.contexts.iframe = true;
}
function detectLightboxEligibility() {
  return isLightboxEligible().then(function (eligible) {
    if (eligible) {
      // enableLightbox();
      if (window.xprops.onAuth) {
        window.xprops.onAuth();
      }
    }
  });
}
// CONCATENATED MODULE: ./public/js/button/checkout.js











function getShippingChangeDataDefault() {
  // $FlowFixMe
  return {};
}

function buildPatchActions(data) {
  var handlePatchError = function handlePatchError() {
    throw new Error('Payment could not be patched, error occured in API call.');
  };

  return {
    paymentPatch: function paymentPatch(patch) {
      var paymentID = data.paymentID;

      if (!paymentID) {
        throw new Error('Client side patch is only available for REST based transactions');
      }

      return patchPayment(paymentID, patch).catch(handlePatchError);
    },
    orderPatch: function orderPatch(patch) {
      var orderID = data.orderID;

      if (!orderID) {
        throw new Error('Client side patch is only available for REST based transactions');
      }

      return patchOrder(orderID, patch).catch(handlePatchError);
    }
  };
}

function buildActions(checkout, data, actions, overrides) {
  var fundingSource = overrides.fundingSource,
      _overrides$isNative = overrides.isNative,
      isNative = _overrides$isNative === void 0 ? false : _overrides$isNative,
      facilitatorAccessTokenPromise = overrides.facilitatorAccessTokenPromise,
      partnerAttributionID = overrides.partnerAttributionID;

  var redirect = function redirect(win, url) {
    return window.paypal.Promise.all([util_redirect(win || window.top, url || data.returnUrl), actions.close()]);
  };

  var restartFlow = function restartFlow() {
    return checkout.close().then(function () {
      enableLightbox();
      renderCheckout({
        fundingSource: fundingSource,
        payment: function payment() {
          return window.paypal.Promise.resolve(data.paymentToken);
        }
      }); // eslint-disable-line no-use-before-define

      return new window.paypal.Promise(noop);
    });
  };

  var handleExecuteError = function handleExecuteError(err) {
    if (err && err.message === 'CC_PROCESSOR_DECLINED') {
      // $FlowFixMe
      return restartFlow();
    }

    if (err && err.message === 'INSTRUMENT_DECLINED') {
      // $FlowFixMe
      return restartFlow();
    }

    throw new Error('Payment could not be executed');
  };

  var paymentGet = memoize(function () {
    var paymentID = data.paymentID;

    if (!paymentID) {
      throw new Error('Client side payment get is only available for REST based transactions');
    }

    var buyerAccessToken = getPersistedAccessToken();

    if (buyerAccessToken) {
      logger_info('payment_get_buyer_access_token_present');
    } else {
      logger_info('payment_get_buyer_access_token_not_present');
    }

    if (isNative && facilitatorAccessTokenPromise && !buyerAccessToken) {
      return facilitatorAccessTokenPromise.then(function (facilitatorAccessToken) {
        return payment_getPayment(paymentID, {
          facilitatorAccessToken: facilitatorAccessToken,
          buyerAccessToken: buyerAccessToken,
          partnerAttributionID: partnerAttributionID
        });
      });
    }

    return getPayment(paymentID);
  });
  var paymentExecute = memoize(function () {
    var paymentID = data.paymentID;

    if (!paymentID) {
      throw new Error('Client side payment execute is only available for REST based transactions');
    }

    checkout.closeComponent();
    var buyerAccessToken = getPersistedAccessToken();

    if (buyerAccessToken) {
      logger_info('payment_execute_buyer_access_token_present');
    } else {
      logger_info('payment_execute_buyer_access_token_not_present');
    }

    if (isNative && facilitatorAccessTokenPromise && !buyerAccessToken) {
      return facilitatorAccessTokenPromise.then(function (facilitatorAccessToken) {
        return payment_executePayment(paymentID, data.payerID, {
          facilitatorAccessToken: facilitatorAccessToken,
          partnerAttributionID: partnerAttributionID
        });
      });
    }

    return executePayment(paymentID, data.payerID).catch(handleExecuteError) // $FlowFixMe
    .finally(paymentGet.reset);
  });
  var orderGet = memoize(function () {
    if (!data.orderID) {
      throw new Error('Client side order get is only available for REST based transactions');
    }

    var buyerAccessToken = getPersistedAccessToken();

    if (buyerAccessToken) {
      logger_info('order_get_buyer_access_token_present');
    } else {
      logger_info('order_get_buyer_access_token_not_present');
    }

    return getOrder(data.orderID);
  });
  var orderCapture = memoize(function () {
    if (!data.orderID) {
      throw new Error('Client side order capture is only available for REST based transactions');
    }

    checkout.closeComponent();
    var buyerAccessToken = getPersistedAccessToken();

    if (buyerAccessToken) {
      logger_info('order_capture_buyer_access_token_present');
    } else {
      logger_info('order_capture_buyer_access_token_not_present');
    }

    return captureOrder(data.orderID).catch(handleExecuteError) // $FlowFixMe
    .finally(orderGet.reset);
  });
  var orderAuthorize = memoize(function () {
    if (!data.orderID) {
      throw new Error('Client side order capture is only available for REST based transactions');
    }

    checkout.closeComponent();
    var buyerAccessToken = getPersistedAccessToken();

    if (buyerAccessToken) {
      logger_info('order_authorize_buyer_access_token_present');
    } else {
      logger_info('order_authorize_buyer_access_token_not_present');
    }

    return authorizeOrder(data.orderID).catch(handleExecuteError) // $FlowFixMe
    .finally(orderGet.reset);
  });

  var _buildPatchActions = buildPatchActions(data),
      paymentPatch = _buildPatchActions.paymentPatch,
      orderPatch = _buildPatchActions.orderPatch;

  return _extends({
    payment: {
      execute: paymentExecute,
      patch: paymentPatch,
      get: paymentGet
    },
    order: {
      capture: orderCapture,
      authorize: orderAuthorize,
      patch: orderPatch,
      get: orderGet
    },
    redirect: redirect,
    restart: restartFlow
  }, actions);
}

function buildCancelActions(checkout, data, actions) {
  var redirect = function redirect(win, url) {
    return window.paypal.Promise.all([util_redirect(win || window.top, url || data.cancelUrl), actions.close()]).then(noop);
  };

  return _extends({}, actions, {
    redirect: redirect
  });
}

function getCancelData(payment) {
  return payment().then(function (paymentToken) {
    return window.paypal.Promise.all([getCheckoutAppData(paymentToken), getCheckoutCart(paymentToken)]).then(function (_ref) {
      var appData = _ref[0],
          cart = _ref[1];
      var paymentID = appData.payment_id;
      var cancelUrl = appData.urls.cancel_url;
      var intent = cart.payment_action;
      var billingID = paymentToken;
      var billingToken = cart.billing && cart.billing.ba_token;
      var button_version = "2.1.80";
      return {
        paymentToken: paymentToken,
        paymentID: paymentID,
        intent: intent,
        billingID: billingID,
        billingToken: billingToken,
        cancelUrl: cancelUrl,
        button_version: button_version
      };
    });
  });
}

function buildCheckoutProps(props) {
  var memoizedPayment = memoize(props.payment || function () {
    return window.xprops.payment({
      button_version: "2.1.80"
    });
  }); // $FlowFixMe

  var payment = function payment() {
    return memoizedPayment().then(normalizeECToken);
  };

  var builtProps = _extends({
    payment: payment,
    locale: window.xprops.locale,
    commit: window.xprops.commit,
    onError: window.xprops.onError,
    onAuthorize: function onAuthorize(data, actions) {
      if (data === void 0) {
        data = {};
      }

      data.button_version = "2.1.80";
      actions = buildActions(this, data, actions, props);
      return window.xprops.onAuthorize(data, actions).catch(function (err) {
        return window.xchild.error(err);
      });
    },
    onCancel: function onCancel(data, actions) {
      var _this = this;

      return window.paypal.Promise.try(function () {
        return getCancelData(payment);
      }).then(function (cancelData) {
        var cancelActions = buildCancelActions(_this, cancelData, actions);
        return window.xprops.onCancel(cancelData, cancelActions);
      }).catch(function (err) {
        return window.xchild.error(err);
      });
    },
    onAuth: function onAuth(_ref2) {
      var accessToken = _ref2.accessToken;

      if (accessToken) {
        logger_info('onauth_buyer_access_token_present');
      } else {
        logger_info('onauth_buyer_access_token_not_present');
      }

      persistAccessToken(accessToken);
      detectLightboxEligibility();
    },
    style: {
      overlayColor: window.xprops.style.overlayColor
    }
  }, props);

  if (window.xprops.onShippingChange) {
    builtProps = _extends({}, builtProps, {
      onShippingChange: function onShippingChange(data, actions) {
        if (data === void 0) {
          data = getShippingChangeDataDefault();
        }

        var _buildPatchActions2 = buildPatchActions(data),
            paymentPatch = _buildPatchActions2.paymentPatch,
            orderPatch = _buildPatchActions2.orderPatch;

        data.button_version = "2.1.80";
        return window.xprops.onShippingChange(data, _extends({}, actions, {
          order: {
            patch: orderPatch
          },
          payment: {
            patch: paymentPatch
          }
        }));
      }
    });
  }

  return builtProps;
}
function renderCheckout(props) {
  var checkoutProps = buildCheckoutProps(props);

  if (UPDATE_CLIENT_CONFIGURATION) {
    checkoutProps.payment().then(function (paymentToken) {
      updateClientConfig({
        paymentToken: paymentToken,
        fundingSource: checkoutProps.fundingSource,
        integrationArtifact: INTEGRATION_ARTIFACT.JS_V4,
        userExperienceFlow: USER_EXPERIENCE_FLOW.INCONTEXT,
        productFlow: PRODUCT_FLOW.SMART_PAYMENT_BUTTONS
      });
    });
  }

  window.paypal.Checkout.renderTo(window.top, checkoutProps).catch(noop);
}
// CONCATENATED MODULE: ./public/js/button/util/attachClickEvent.js

var attachClickEvent_attachClickEventToElement = function attachClickEventToElement(element, fn) {
  element.addEventListener('touchstart', function () {
    /* pass */
  });
  element.addEventListener('click', fn);
  element.addEventListener('keypress', function (event) {
    if (event.keyCode === KEY_CODES.ENTER) {
      return fn(event);
    }
  });
};
// CONCATENATED MODULE: ./public/js/constants.js
var PAYMENT_EXECUTION_ERROR = {
  CC_PROCESSOR_DECLINED: 'CC_PROCESSOR_DECLINED',
  INSTRUMENT_DECLINED: 'INSTRUMENT_DECLINED'
};
// CONCATENATED MODULE: ./public/js/inlineGuest/creditCardForm.js














function creditCardForm_buildActions(checkout, data, actions) {
  var handleExecuteError = function handleExecuteError(err) {
    var errorMessage = get_get(err, 'message');
    var wasCardDeclined = errorMessage === PAYMENT_EXECUTION_ERROR.CC_PROCESSOR_DECLINED || errorMessage === PAYMENT_EXECUTION_ERROR.INSTRUMENT_DECLINED; // expand the inline guest to show the error messages

    onEvent_expand(); // $FlowFixMe

    return renderGoToXoon({
      // eslint-disable-line no-use-before-define
      paymentToken: data.paymentID,
      wasCardDeclined: wasCardDeclined
    });
  };

  var paymentGet = memoize(function () {
    if (!data.paymentID) {
      throw new Error('Client side payment get is only available for REST based transactions');
    }

    return getPayment(data.paymentID);
  });
  var paymentExecute = memoize(function () {
    if (!data.paymentID) {
      throw new Error('Client side payment execute is only available for REST based transactions');
    }

    return executePayment(data.paymentID, data.payerID).catch(handleExecuteError) // $FlowFixMe
    .finally(paymentGet.reset);
  });
  var orderGet = memoize(function () {
    if (!data.orderID) {
      throw new Error('Client side order get is only available for REST based transactions');
    }

    return getOrder(data.orderID);
  });
  var orderCapture = memoize(function () {
    if (!data.orderID) {
      throw new Error('Client side order capture is only available for REST based transactions');
    }

    checkout.closeComponent();
    return captureOrder(data.orderID).catch(handleExecuteError) // $FlowFixMe
    .finally(orderGet.reset);
  });
  return _extends({}, actions, {
    payment: {
      execute: paymentExecute,
      get: paymentGet
    },
    order: {
      capture: orderCapture,
      get: orderGet
    }
  });
}

function renderGoToXoon(params) {
  var paymentToken = params.paymentToken,
      wasCardDeclined = params.wasCardDeclined;
  var zomboEl = document.getElementById('cardExp');

  if (!zomboEl) {
    throw new Error('Inline Guest div not found');
  } // clear loading spinner;


  zomboEl.innerHTML = '';
  var errorMessage = wasCardDeclined ? get_get(window, 'localizationJSON.cardWasDeclined') : get_get(window, 'localizationJSON.somethingWentWrong');
  var buttonContent = "\n    <div id=\"go-to-xoon-error-message\"\n        style=\"\n          font-family: HelveticaNeue-Light,Helvetica Neue Light,helvetica,arial,sans-serif;\n          line-height: 24px;\n          font-size: 18px;\n          color: #000;\n          margin: 10px 0 24px 0;\n          text-align: center;\n        \"\n    >" + errorMessage + "</div>\n    <button id=\"go-to-xoon\"\n      role=\"button\"\n      style=\"\n          height: 48px;\n          line-height: 48px;\n          border-radius: 4px;\n          -moz-border-radius: 4px;\n          background-color: #0070BA;\n          border-color: #0070BA;\n          color: #fff;\n          font-size: 15px;\n          user-select: none;\n          text-align: center;\n          font-family: Helvetica Neue,HelveticaNeue,helvetica,arial,sans-serif;\n          cursor: pointer;\n          width: 100%;\n      \"\n    >" + get_get(window, 'localizationJSON.tryAgain', 'Try Again') + "</button>\n    ";
  zomboEl.innerHTML = buttonContent;
  var buttons = document.querySelectorAll('#go-to-xoon');

  if (buttons.length === 0) {
    throw new Error('Cannot find the go to guest checkout button');
  }

  var goToXoonButton = buttons[0];
  attachClickEvent_attachClickEventToElement(goToXoonButton, function (event) {
    event.preventDefault();
    event.stopPropagation();
    return renderCheckout(_extends({
      fundingSource: FUNDING.CARD
    }, paymentToken ? {
      payment: function payment() {
        return window.paypal.Promise.resolve(paymentToken);
      }
    } : {}));
  });
  return window.paypal.Promise.resolve();
}

function renderCardExperience(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      token = _ref.token,
      otherProps = _objectWithoutPropertiesLoose(_ref, ["token"]);

  // animate zombo
  // $FlowFixMe
  var zomboEl = document.getElementById('cardExp'); // clear loading spinner;
  // $FlowFixMe

  zomboEl.innerHTML = ''; // $FlowFixMe

  zomboEl.className = 'cardExpOpened';

  if (UPDATE_CLIENT_CONFIGURATION) {
    updateClientConfig({
      paymentToken: token,
      fundingSource: FUNDING.CARD,
      integrationArtifact: INTEGRATION_ARTIFACT.JS_V4,
      userExperienceFlow: USER_EXPERIENCE_FLOW.INLINE,
      productFlow: PRODUCT_FLOW.SMART_PAYMENT_BUTTONS
    });
  }

  return window.paypal.Card.render(_extends({
    token: token,
    locale: window.xprops.locale,
    commit: window.xprops.commit,
    onAuthorize: function onAuthorize(data, actions) {
      var newActions = creditCardForm_buildActions(this, data, actions);
      return window.xprops.onAuthorize(data, newActions).catch(function (err) {
        return window.xchild.error(err);
      });
    },
    onCancel: function onCancel(data) {
      return window.xprops.onCancel(data, {});
    },
    onAuth: function onAuth(_ref2) {
      var accessToken = _ref2.accessToken;
      return persistAccessToken(accessToken);
    },
    onError: window.xchild.error
  }, otherProps), zomboEl);
}

// CONCATENATED MODULE: ./public/js/inlineGuest/onEvent.js








var buttonsIframeHeight = window.innerHeight;
var buttonsIframeWidth = window.innerWidth;
var onEvent_dispatch = function dispatch(action) {
  if (action && window.xprops.dispatch) {
    window.xprops.dispatch(action);
  }
};
var onEvent_changeCardTypeTo = function changeCardTypeTo(cardType) {
  var _getState = state_getState(),
      currentCardType = _getState.currentCardType;

  if (currentCardType === cardType) {
    return;
  }

  state_setState({
    currentCardType: cardType
  });
  disableAllCardTypes();
  var selectedCardEl = utils_getCardElementFromCardType(cardType);
  enableCard(selectedCardEl);
};

var onEvent_zomboResizeActions = function zomboResizeActions() {
  var parent = window.xchild;
  var BUTTON_HEIGHT = getButtonHeight_getButtonHeight();

  var collapse = function collapse(_temp) {
    var _ref = _temp === void 0 ? {
      width: buttonsIframeWidth
    } : _temp,
        width = _ref.width;

    state_setState({
      isExpanded: false
    });
    parent.resize(width, buttonsIframeHeight);
  };

  var expand = function expand(_temp2) {
    var _ref2 = _temp2 === void 0 ? {
      width: buttonsIframeWidth
    } : _temp2,
        width = _ref2.width;

    var state = state_getState();
    state_setState({
      isExpanded: true
    });
    var top = BUTTON_HEIGHT + PADDING + POWERED_BY_PAYPAL_HEIGHT;
    parent.resize(width, state.contentHeight + top);
  };

  var toggle = function toggle(dimenssions) {
    if (dimenssions === void 0) {
      dimenssions = {
        width: buttonsIframeWidth
      };
    }

    var _getState2 = state_getState(),
        _getState2$isExpanded = _getState2.isExpanded,
        isExpanded = _getState2$isExpanded === void 0 ? false : _getState2$isExpanded;

    if (isExpanded) {
      collapse(dimenssions);
      return;
    }

    expand(dimenssions);
  };

  return {
    collapse: collapse,
    expand: expand,
    toggle: toggle
  };
};

var onEvent_expand = function expand(dimenssions) {
  var resizeActions = onEvent_zomboResizeActions();
  var container = document.getElementById('paypal-animation-container');
  var BUTTON_HEIGHT = getButtonHeight_getButtonHeight();
  var content = document.getElementById('paypal-animation-content');

  if (!content || !container) {
    return;
  }

  var numberOfPayPalButtons = container.querySelectorAll('.paypal-button').length - 1; // does not count "credit cards" button

  var transitionTop = BUTTON_HEIGHT * numberOfPayPalButtons - PADDING;
  resizeActions.expand(dimenssions);
  content.style.transform = "translateY(-" + transitionTop + "px)";
  removeClass(container, 'paypal-animation-container-expanded');
  addClass(container, 'paypal-animation-container-collapsed');
  var paypalButtons = querySelectorAll('.paypal-button');
  paypalButtons.forEach(function (button) {
    var isCreditCardButton = button.getAttribute('data-funding-source') !== 'card';

    if (isCreditCardButton) {
      button.style.opacity = 0;
    }
  });
};
var onEvent_collapse = function collapse(dimenssions) {
  var resizeActions = onEvent_zomboResizeActions();
  var container = document.getElementById('paypal-animation-container');
  var content = document.getElementById('paypal-animation-content');
  resizeActions.collapse(dimenssions);

  if (!content) {
    return;
  }

  content.style.transform = "translateY(0px)";
  addClass(container, 'paypal-animation-container-expanded');
  removeClass(container, 'paypal-animation-container-collapsed');
  var paypalButtons = querySelectorAll('.paypal-button');
  paypalButtons.forEach(function (button) {
    var isCreditCardButton = button.getAttribute('data-funding-source') !== 'card';

    if (isCreditCardButton) {
      button.style.opacity = 1;
    }
  });
};

/* eslint-disable complexity */
var onEvent_onEvent = function onEvent(event) {
  var _ref3 = event || {},
      type = _ref3.type,
      _ref3$payload = _ref3.payload,
      payload = _ref3$payload === void 0 ? {} : _ref3$payload;

  if (!type) {
    return;
  }

  var state = state_getState();

  var _ref4 = state || {},
      currentCardType = _ref4.currentCardType,
      zipCode = _ref4.zipCode;

  if (type === ACTIONS.ZIP_CODE_CHANGED) {
    state_setState({
      zipCode: payload
    });
    return;
  }

  if (type === ACTIONS.DISPLAY_GO_TO_XOON) {
    var paymentToken = get_get(payload, 'paymentToken');
    return renderGoToXoon({
      paymentToken: paymentToken
    });
  }

  if (type === ACTIONS.OPEN_BILLING_ADDRESS) {
    var newPayload = {};

    if (payload !== null && typeof payload === 'object' && Array.isArray(payload) === false) {
      newPayload = payload;
    }

    return renderBillingPage(_extends({}, newPayload, {
      env: window.paypal.Button.xprops.env,
      onEvent: onEvent,
      prefilledZipCode: zipCode || '',
      cardType: currentCardType
    }));
  }

  if (type === ACTIONS.SUBMIT_BILLING_ADDRESS) {
    state_setState({
      billingAddress: payload
    });
    return window.xprops.dispatch({
      type: type,
      payload: payload
    });
  }

  if (type === ACTIONS.SET_CONTENT_HEIGHT) {
    state_setState({
      contentHeight: payload
    });
    return;
  }

  if (type === ACTIONS.CARD_TYPE_CHANGED) {
    var newCardType = payload;

    if (!(typeof newCardType === 'string' || typeof newCardType === 'undefined')) {
      return;
    }

    onEvent_changeCardTypeTo(newCardType);
    return;
  }

  if (type === ACTIONS.CARD_FORM_COLLAPSE) {
    onEvent_collapse();
    return;
  }

  if (type === ACTIONS.CARD_FORM_EXPAND) {
    onEvent_expand();
    return;
  }

  if (type === ACTIONS.CARD_FORM_CLEAR) {
    // waiting for the animation is finished before clean up the form
    setTimeout(function () {
      onEvent_dispatch(clearFormAction);
    }, 1000);
    return;
  }

  if (type === ACTIONS.BUTTONS_RESET) {
    enableAllCardTypes();
    state_setState({
      currentCardType: undefined
    });
    return;
  }

  if (type === ACTIONS.CARD_FORM_RESPONDED_SUCCESS) {
    onEvent({
      type: ACTIONS.CARD_FORM_COLLAPSE
    });
    onEvent({
      type: ACTIONS.CARD_FORM_CLEAR
    });
    onEvent({
      type: ACTIONS.BUTTONS_RESET
    });
  }
};
/* eslint-enable complexity */
// CONCATENATED MODULE: ./public/js/inlineGuest/inlineGuestEligibility.js

var isZomboCookieEnabled = function isZomboCookieEnabled() {
  return document.cookie.indexOf('zombo=1') >= 0;
};
var inlineGuestEligibility_inlineGuestPXPEnabled = function inlineGuestPXPEnabled() {
  var isEnable = false;
  var treatments = get_get(window.pre, 'inlineGuest.res.data.treatments') || [];
  treatments.forEach(function (t) {
    if (t.treatment_name === 'xo_hermesnodeweb_inline_guest_treatment') {
      isEnable = true;
    }
  });
  return isEnable;
};
var shouldEnableInlineGuest = function shouldEnableInlineGuest(buttonEl, buttonsContainer) {
  var hasButtonElements = buttonEl && buttonsContainer;
  var hasAttributes = buttonEl ? buttonEl.getAttribute : false;
  var hasCallbackAPI = window.xprops && window.xprops.onShippingChange;

  if (!hasButtonElements || !hasAttributes || hasCallbackAPI) {
    return false;
  }

  var miniumWidthForInlineGuest = 250;
  var isSPBWideEnoughForInlineGuest = buttonsContainer && buttonsContainer.scrollWidth >= miniumWidthForInlineGuest;
  var buttonLayout = buttonEl ? buttonEl.getAttribute('data-layout') : '';
  var isVerticalLayout = buttonLayout === 'vertical';

  if (isSPBWideEnoughForInlineGuest && isVerticalLayout && (inlineGuestEligibility_inlineGuestPXPEnabled() || isZomboCookieEnabled())) {
    return true;
  }

  return false;
};
// CONCATENATED MODULE: ./public/js/inlineGuest/index.js






// CONCATENATED MODULE: ./public/js/inlineGuest/utils/isInlineEnableByPXP.js

var isInlineEnableByPXP_isInlineGuestEnableByPXP = function isInlineGuestEnableByPXP(preloadData) {
  var treatments = get_get(preloadData, 'inlineGuest.res.data.treatments') || [];
  return treatments.reduce(function (value, treatment) {
    return treatment && treatment.treatment_name === 'xo_hermesnodeweb_inline_guest_treatment' ? treatment : value;
  }, undefined);
};
// CONCATENATED MODULE: ./node_modules/jsx-pragmatic/src/constants.js
var NODE_TYPE = {
  ELEMENT: 'element',
  TEXT: 'text',
  COMPONENT: 'component',
  FRAGMENT: 'fragment'
};
// CONCATENATED MODULE: ./node_modules/jsx-pragmatic/src/node.js


function _renderChildren(children, renderer) {
  // eslint-disable-line no-use-before-define
  var result = [];

  for (var _i2 = 0; _i2 < children.length; _i2++) {
    var child = children[_i2];
    var renderedChild = child.render(renderer);

    if (!renderedChild) {
      continue;
    } else if (Array.isArray(renderedChild)) {
      for (var _i4 = 0; _i4 < renderedChild.length; _i4++) {
        var subchild = renderedChild[_i4];

        if (subchild) {
          result.push(subchild);
        }
      }
    } else {
      result.push(renderedChild);
    }
  }

  return result;
}

var node_ElementNode =
/*#__PURE__*/
function () {
  // eslint-disable-line no-use-before-define
  // eslint-disable-line no-undef
  function ElementNode(name, props, children) {
    this.type = NODE_TYPE.ELEMENT;
    this.name = void 0;
    this.props = void 0;
    this.children = void 0;
    this.onRender = void 0;
    // eslint-disable-line no-use-before-define
    this.name = name;
    this.props = props;
    this.children = children;
    var onRender = props.onRender;

    if (typeof onRender === 'function') {
      this.onRender = onRender;
      delete props.onRender;
    }
  }

  var _proto = ElementNode.prototype;

  _proto.render = function render(renderer) {
    var el = renderer(this);

    if (this.onRender) {
      this.onRender(el);
    }

    return el;
  };

  _proto.renderChildren = function renderChildren(renderer) {
    return _renderChildren(this.children, renderer);
  };

  return ElementNode;
}();
var node_FragmentNode =
/*#__PURE__*/
function () {
  // eslint-disable-line no-use-before-define
  function FragmentNode(children) {
    this.type = NODE_TYPE.FRAGMENT;
    this.children = void 0;
    // eslint-disable-line no-use-before-define
    this.children = children;
  }

  var _proto2 = FragmentNode.prototype;

  _proto2.render = function render(renderer) {
    return _renderChildren(this.children, renderer);
  };

  return FragmentNode;
}();
var node_TextNode =
/*#__PURE__*/
function () {
  function TextNode(text) {
    this.type = NODE_TYPE.TEXT;
    this.text = void 0;
    this.text = text;
  }

  var _proto3 = TextNode.prototype;

  _proto3.render = function render(renderer) {
    return renderer(this);
  };

  return TextNode;
}();
var node_ComponentNode =
/*#__PURE__*/
function () {
  function ComponentNode(component, props, children) {
    this.type = NODE_TYPE.COMPONENT;
    this.component = void 0;
    this.props = void 0;
    this.children = void 0;
    this.component = component;
    this.props = props;
    this.children = children;
  }

  var _proto4 = ComponentNode.prototype;

  _proto4.renderComponent = function renderComponent(renderer) {
    // $FlowFixMe
    var props = this.props;
    var child = normalizeChild(this.component(props, this.children)); // eslint-disable-line no-use-before-define

    if (child) {
      return child.render(renderer);
    }
  };

  _proto4.render = function render(renderer) {
    return renderer(this);
  };

  _proto4.renderChildren = function renderChildren(renderer) {
    return _renderChildren(this.children, renderer);
  };

  return ComponentNode;
}();

function normalizeChildren(children) {
  var result = [];

  for (var _i6 = 0; _i6 < children.length; _i6++) {
    var child = children[_i6];

    if (!child) {
      continue;
    } else if (typeof child === 'string') {
      result.push(new node_TextNode(child));
    } else if (Array.isArray(child)) {
      for (var _i8 = 0, _normalizeChildren2 = normalizeChildren(child); _i8 < _normalizeChildren2.length; _i8++) {
        var subchild = _normalizeChildren2[_i8];
        result.push(subchild);
      }
    } else if (child && (child.type === NODE_TYPE.ELEMENT || child.type === NODE_TYPE.TEXT || child.type === NODE_TYPE.COMPONENT)) {
      result.push(child);
    } else {
      throw new TypeError("Unrecognized node type: " + typeof child);
    }
  }

  return result;
}

function normalizeChild(child) {
  var children = normalizeChildren(Array.isArray(child) ? child : [child]);

  if (children.length === 1) {
    return children[0];
  } else if (children.length > 1) {
    return new node_FragmentNode(children);
  }
}

var node_node = function node(element, props) {
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  // $FlowFixMe
  props = props || {};
  children = normalizeChildren(children);

  if (typeof element === 'string') {
    // $FlowFixMe
    return new node_ElementNode(element, props, children);
  }

  if (typeof element === 'function') {
    // $FlowFixMe
    return new node_ComponentNode(element, props, children);
  }

  throw new TypeError("Expected jsx element to be a string or a function");
};
var Fragment = function Fragment(props, children) {
  if (props && Object.keys(props).length) {
    throw new Error("Do not pass props to Fragment");
  }

  return children;
};
// CONCATENATED MODULE: ./node_modules/jsx-pragmatic/src/util.js
var ALPHA_CHARS = '0123456789abcdef';
function util_uniqueID() {
  return 'xxxxxxxxxx'.replace(/./g, function () {
    return ALPHA_CHARS.charAt(Math.floor(Math.random() * ALPHA_CHARS.length));
  });
}
// CONCATENATED MODULE: ./node_modules/jsx-pragmatic/src/renderers/dom.js
var _ADD_CHILDREN;




var ELEMENT_TAG = {
  HTML: 'html',
  IFRAME: 'iframe',
  SCRIPT: 'script',
  NODE: 'node',
  DEFAULT: 'default'
};
var ELEMENT_PROP = {
  ID: 'id',
  INNER_HTML: 'innerHTML',
  EL: 'el'
};

function dom_fixScripts(el, doc) {
  if (doc === void 0) {
    doc = window.document;
  }

  for (var _i2 = 0, _el$querySelectorAll2 = el.querySelectorAll('script'); _i2 < _el$querySelectorAll2.length; _i2++) {
    var script = _el$querySelectorAll2[_i2];
    var parentNode = script.parentNode;

    if (!parentNode) {
      continue;
    }

    var newScript = doc.createElement('script'); // $FlowFixMe

    newScript.text = script.textContent;
    parentNode.replaceChild(newScript, script);
  }
}

function dom_createElement(doc, node) {
  if (node.props[ELEMENT_PROP.EL]) {
    // $FlowFixMe
    return node.props[ELEMENT_PROP.EL];
  }

  return doc.createElement(node.name);
}

function createTextElement(doc, node) {
  return doc.createTextNode(node.text);
}

function addProps(el, node) {
  var props = node.props;

  for (var _i4 = 0, _Object$keys2 = Object.keys(props); _i4 < _Object$keys2.length; _i4++) {
    var prop = _Object$keys2[_i4];
    var val = props[prop];

    if (val === null || typeof val === 'undefined' || prop === ELEMENT_PROP.EL || prop === ELEMENT_PROP.INNER_HTML) {
      continue;
    }

    if (prop.match(/^on[A-Z][a-z]/) && typeof val === 'function') {
      el.addEventListener(prop.slice(2).toLowerCase(), val);
    } else if (typeof val === 'string' || typeof val === 'number') {
      el.setAttribute(prop, val.toString());
    } else if (typeof val === 'boolean') {
      if (val === true) {
        el.setAttribute(prop, '');
      }
    }
  }

  if (el.tagName.toLowerCase() === ELEMENT_TAG.IFRAME && !props.id) {
    el.setAttribute(ELEMENT_PROP.ID, "jsx-iframe-" + util_uniqueID());
  }
}

var ADD_CHILDREN = (_ADD_CHILDREN = {}, _ADD_CHILDREN[ELEMENT_TAG.IFRAME] = function (el, node) {
  var firstChild = node.children[0];

  if (node.children.length !== 1 || !(firstChild && firstChild.type === NODE_TYPE.ELEMENT) || firstChild.name !== ELEMENT_TAG.HTML) {
    throw new Error("Expected only single html element node as child of " + ELEMENT_TAG.IFRAME + " element");
  }

  el.addEventListener('load', function () {
    // $FlowFixMe
    var win = el.contentWindow;

    if (!win) {
      throw new Error("Expected frame to have contentWindow");
    }

    var doc = win.document;
    var docElement = doc.documentElement;

    while (docElement.children && docElement.children.length) {
      docElement.removeChild(docElement.children[0]);
    } // eslint-disable-next-line no-use-before-define


    var child = firstChild.render(dom({
      doc: doc
    }));

    while (child.children.length) {
      docElement.appendChild(child.children[0]);
    }
  });
}, _ADD_CHILDREN[ELEMENT_TAG.SCRIPT] = function (el, node) {
  var firstChild = node.children[0];

  if (node.children.length !== 1 || !(firstChild && firstChild.type === NODE_TYPE.TEXT)) {
    throw new Error("Expected only single text node as child of " + ELEMENT_TAG.SCRIPT + " element");
  } // $FlowFixMe


  el.text = firstChild.text;
}, _ADD_CHILDREN[ELEMENT_TAG.DEFAULT] = function (el, node, renderer) {
  for (var _i6 = 0, _node$renderChildren2 = node.renderChildren(renderer); _i6 < _node$renderChildren2.length; _i6++) {
    var child = _node$renderChildren2[_i6];
    el.appendChild(child);
  }
}, _ADD_CHILDREN);

function addChildren(el, node, doc, renderer) {
  if (node.props.hasOwnProperty(ELEMENT_PROP.INNER_HTML)) {
    if (node.children.length) {
      throw new Error("Expected no children to be passed when " + ELEMENT_PROP.INNER_HTML + " prop is set");
    }

    var html = node.props[ELEMENT_PROP.INNER_HTML];

    if (typeof html !== 'string') {
      throw new TypeError(ELEMENT_PROP.INNER_HTML + " prop must be string");
    }

    if (node.name === ELEMENT_TAG.SCRIPT) {
      // $FlowFixMe
      el.text = html;
    } else {
      el.innerHTML = html;
      dom_fixScripts(el, doc);
    }
  } else {
    var addChildrenToElement = ADD_CHILDREN[node.name] || ADD_CHILDREN[ELEMENT_TAG.DEFAULT];
    addChildrenToElement(el, node, renderer);
  }
}

function dom(opts) {
  if (opts === void 0) {
    opts = {};
  }

  var _opts = opts,
      _opts$doc = _opts.doc,
      doc = _opts$doc === void 0 ? document : _opts$doc;

  var domRenderer = function domRenderer(node) {
    if (node.type === NODE_TYPE.COMPONENT) {
      return node.renderComponent(domRenderer);
    }

    if (node.type === NODE_TYPE.TEXT) {
      // $FlowFixMe
      return createTextElement(doc, node);
    }

    if (node.type === NODE_TYPE.ELEMENT) {
      var el = dom_createElement(doc, node);
      addProps(el, node);
      addChildren(el, node, doc, domRenderer); // $FlowFixMe

      return el;
    }

    throw new TypeError("Unhandleable node");
  };

  return domRenderer;
}
// CONCATENATED MODULE: ./node_modules/jsx-pragmatic/src/renderers/react.js


// eslint-disable-line import/no-unresolved



function mapReactProps(props) {
  var innerHTML = props.innerHTML,
      className = props.class,
      remainingProps = _objectWithoutPropertiesLoose(props, ["innerHTML", "class"]);

  var dangerouslySetInnerHTML = innerHTML ? {
    __html: innerHTML
  } : null;
  return _extends({
    dangerouslySetInnerHTML: dangerouslySetInnerHTML,
    className: className
  }, remainingProps);
}

function react(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      React = _ref.React;

  if (!React) {
    throw new Error("Must pass React library to react renderer");
  }

  var reactRenderer = function reactRenderer(node) {
    if (node.type === NODE_TYPE.COMPONENT) {
      return React.createElement.apply(React, [function () {
        return node.renderComponent(reactRenderer) || null;
      }, node.props].concat(node.renderChildren(reactRenderer)));
    }

    if (node.type === NODE_TYPE.ELEMENT) {
      return React.createElement.apply(React, [node.name, mapReactProps(node.props)].concat(node.renderChildren(reactRenderer)));
    }

    if (node.type === NODE_TYPE.TEXT) {
      return node.text;
    }

    throw new TypeError("Unhandleable node");
  };

  return reactRenderer;
}
// CONCATENATED MODULE: ./node_modules/jsx-pragmatic/src/renderers/html.js


var html_ELEMENT_PROP = {
  INNER_HTML: 'innerHTML'
};
var SELF_CLOSING_TAGS = {
  br: true
};

function html_htmlEncode(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/\//g, '&#x2F;');
}

function propsToHTML(props) {
  var keys = Object.keys(props).filter(function (key) {
    var val = props[key];

    if (key === html_ELEMENT_PROP.INNER_HTML) {
      return false;
    }

    if (!val) {
      return false;
    }

    if (typeof val === 'string' || typeof val === 'number' || val === true) {
      return true;
    }

    return false;
  });

  if (!keys.length) {
    return '';
  }

  var pairs = keys.map(function (key) {
    var val = props[key];

    if (val === true) {
      return "" + html_htmlEncode(key);
    }

    if (typeof val !== 'string' && typeof val !== 'number') {
      throw new TypeError("Unexpected prop type: " + typeof val);
    }

    return html_htmlEncode(key) + "=\"" + html_htmlEncode(val.toString()) + "\"";
  });
  return " " + pairs.join(' ');
}

function html() {
  var htmlRenderer = function htmlRenderer(node) {
    if (node.type === NODE_TYPE.COMPONENT) {
      return [].concat(node.renderComponent(htmlRenderer)).join('');
    }

    if (node.type === NODE_TYPE.ELEMENT) {
      var renderedProps = propsToHTML(node.props);

      if (SELF_CLOSING_TAGS[node.name]) {
        return "<" + node.name + renderedProps + " />";
      } else {
        var renderedChildren = typeof node.props[html_ELEMENT_PROP.INNER_HTML] === 'string' ? node.props[html_ELEMENT_PROP.INNER_HTML] : node.renderChildren(htmlRenderer).join('');
        return "<" + node.name + renderedProps + ">" + renderedChildren + "</" + node.name + ">";
      }
    }

    if (node.type === NODE_TYPE.TEXT) {
      return html_htmlEncode(node.text);
    }

    throw new TypeError("Unhandleable node: " + node.type);
  };

  return htmlRenderer;
}
// CONCATENATED MODULE: ./node_modules/jsx-pragmatic/src/renderers/preact.js


// eslint-disable-line import/no-unresolved



function mapPreactProps(props) {
  var innerHTML = props.innerHTML,
      remainingProps = _objectWithoutPropertiesLoose(props, ["innerHTML"]);

  var dangerouslySetInnerHTML = innerHTML ? {
    __html: innerHTML
  } : null;
  return _extends({
    dangerouslySetInnerHTML: dangerouslySetInnerHTML
  }, remainingProps);
}

function preact(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      Preact = _ref.Preact;

  if (!Preact) {
    throw new Error("Must pass Preact library to react renderer");
  }

  var reactRenderer = function reactRenderer(node) {
    if (node.type === NODE_TYPE.COMPONENT) {
      return Preact.h.apply(Preact, [function () {
        return node.renderComponent(reactRenderer) || null;
      }, node.props].concat(node.renderChildren(reactRenderer)));
    }

    if (node.type === NODE_TYPE.ELEMENT) {
      return Preact.h.apply(Preact, [node.name, mapPreactProps(node.props)].concat(node.renderChildren(reactRenderer)));
    }

    if (node.type === NODE_TYPE.TEXT) {
      return node.text;
    }

    throw new TypeError("Unhandleable node");
  };

  return reactRenderer;
}
// CONCATENATED MODULE: ./node_modules/jsx-pragmatic/src/renderers/index.js




// CONCATENATED MODULE: ./node_modules/jsx-pragmatic/src/index.js



// CONCATENATED MODULE: ./node_modules/@paypal/common-components/src/ui/spinnerPage.jsx
/** @jsx node */

var spinnerStyle = "\n\n    body {\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n        position: fixed;\n        top: 0;\n        left: 0;\n        margin: 0;\n    }\n\n    .spinner {\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        z-index: 10\n    }\n\n    .spinner .spinWrap {\n        width: 200px;\n        height: 100px;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin-left: -100px;\n        margin-top: -50px\n    }\n\n    .spinner .loader,\n    .spinner .spinnerImage {\n        height: 100px;\n        width: 100px;\n        position: absolute;\n        top: 0;\n        left: 50%;\n        opacity: 1;\n        filter: alpha(opacity=100)\n    }\n\n    .spinner .spinnerImage {\n        margin: 28px 0 0 -25px;\n        background: url(https://www.paypalobjects.com/images/checkout/hermes/icon_ot_spin_lock_skinny.png) no-repeat\n    }\n\n    .spinner .loader {\n        margin: 0 0 0 -55px;\n        background-color: transparent;\n        animation: rotation .7s infinite linear;\n        border-left: 5px solid #cbcbca;\n        border-right: 5px solid #cbcbca;\n        border-bottom: 5px solid #cbcbca;\n        border-top: 5px solid #2380be;\n        border-radius: 100%\n    }\n\n    @keyframes rotation {\n        from {\n            transform: rotate(0deg)\n        }\n        to {\n            transform: rotate(359deg)\n        }\n    }\n";
function SpinnerPage(_ref, children) {
  var nonce = _ref.nonce;
  return node_node("html", null, node_node("head", null, node_node("title", null, "PayPal"), node_node("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  })), node_node("body", null, node_node("div", {
    class: "preloader spinner"
  }, node_node("style", {
    nonce: nonce,
    innerHTML: spinnerStyle
  }), node_node("div", {
    class: "spinWrap"
  }, node_node("p", {
    class: "spinnerImage"
  }), node_node("p", {
    class: "loader"
  }))), children));
}
// CONCATENATED MODULE: ./node_modules/@paypal/common-components/src/ui/index.js

// CONCATENATED MODULE: ./node_modules/@paypal/smart-payment-buttons/src/button/dom.js



function getButtons() {
  return dom_querySelectorAll("[ " + DATA_ATTRIBUTES.FUNDING_SOURCE + " ]");
}
function getSelectedFunding(button) {
  var fundingSource = button.getAttribute(DATA_ATTRIBUTES.FUNDING_SOURCE);
  var paymentMethodID = button.getAttribute(DATA_ATTRIBUTES.PAYMENT_METHOD_ID);
  var card = button.getAttribute(DATA_ATTRIBUTES.CARD); // $FlowFixMe

  return {
    fundingSource: fundingSource,
    card: card,
    paymentMethodID: paymentMethodID
  };
}
function enableLoadingSpinner(button) {
  button.classList.add(CLASS.LOADING);
}
function disableLoadingSpinner(button) {
  button.classList.remove(CLASS.LOADING);
}
function getNonce() {
  var nonce = '';

  if (document.body) {
    nonce = document.body.getAttribute("" + DATA_ATTRIBUTES.NONCE) || '';
  }

  return nonce;
}
// CONCATENATED MODULE: ./node_modules/@paypal/smart-payment-buttons/src/ui/popup.jsx
/** @jsx node */





function openPopup(_ref) {
  var width = _ref.width,
      height = _ref.height;
  var win = assertSameDomain(popup('', {
    width: width,
    height: height
  }));
  var doc = win.document;
  var spinner = node_node(SpinnerPage, {
    nonce: getNonce()
  }).render(dom({
    doc: doc
  }));
  writeElementToWindow(win, spinner);
  return win;
}
// CONCATENATED MODULE: ./node_modules/@paypal/smart-payment-buttons/src/ui/index.js

// CONCATENATED MODULE: ./node_modules/@paypal/smart-payment-buttons/src/payment-flows/checkout.js









var CHECKOUT_POPUP_DIMENSIONS = {
  WIDTH: 500,
  HEIGHT: 590
};
var checkoutOpen = false;
var canRenderTop = false;

function getRenderWindow() {
  var top = getTop(window);

  if (canRenderTop && top) {
    return top;
  } else if (getParent()) {
    return getParent();
  } else {
    return window;
  }
}

function setupCheckout(_ref) {
  var components = _ref.components;
  var Checkout = components.Checkout;
  checkoutOpen = false;
  var _ref2 = [getParent(window), getTop(window)],
      parent = _ref2[0],
      top = _ref2[1];
  var tasks = {};

  if (top && parent && parent !== top) {
    tasks.canRenderTo = Checkout.canRenderTo(top).then(function (result) {
      canRenderTop = result;
    });
  }

  return promise_ZalgoPromise.hash(tasks).then(belter_src_util_noop);
}

function isCheckoutEligible() {
  return true;
}

function isCheckoutPaymentEligible() {
  return true;
}

function isVaultAutoSetupEligible(_ref3) {
  var vault = _ref3.vault,
      clientAccessToken = _ref3.clientAccessToken,
      createBillingAgreement = _ref3.createBillingAgreement,
      createSubscription = _ref3.createSubscription,
      fundingSource = _ref3.fundingSource,
      fundingEligibility = _ref3.fundingEligibility;

  if (!clientAccessToken) {
    return false;
  }

  if (createBillingAgreement || createSubscription) {
    return false;
  }

  var fundingSourceEligible = Boolean(fundingEligibility[fundingSource] && fundingEligibility[fundingSource].vaultable);

  if (vault && !fundingSourceEligible) {
    throw new Error("SDK received " + SDK_QUERY_KEYS.VAULT + "=true parameter, but " + fundingSource + " is not vaultable.");
  }

  if (vault) {
    return true;
  }

  if (fundingSourceEligible) {
    return true;
  }

  return false;
}

function enableVaultSetup(_ref4) {
  var orderID = _ref4.orderID,
      vault = _ref4.vault,
      clientAccessToken = _ref4.clientAccessToken,
      createBillingAgreement = _ref4.createBillingAgreement,
      createSubscription = _ref4.createSubscription,
      fundingSource = _ref4.fundingSource,
      fundingEligibility = _ref4.fundingEligibility;
  return promise_ZalgoPromise.try(function () {
    if (!clientAccessToken) {
      return;
    }

    if (isVaultAutoSetupEligible({
      vault: vault,
      clientAccessToken: clientAccessToken,
      createBillingAgreement: createBillingAgreement,
      createSubscription: createSubscription,
      fundingSource: fundingSource,
      fundingEligibility: fundingEligibility
    })) {
      return enableVault({
        orderID: orderID,
        clientAccessToken: clientAccessToken
      }).catch(function (err) {
        if (vault) {
          throw err;
        }
      });
    }
  });
}

function getContext(_ref5) {
  var win = _ref5.win,
      isClick = _ref5.isClick;

  if (win) {
    return CONTEXT.POPUP;
  }

  if (isClick && supportsPopups()) {
    return CONTEXT.POPUP;
  }

  return CONTEXT.IFRAME;
}

function initCheckout(_ref6) {
  var props = _ref6.props,
      components = _ref6.components,
      serviceData = _ref6.serviceData,
      payment = _ref6.payment,
      config = _ref6.config;

  if (checkoutOpen) {
    throw new Error("Checkout already rendered");
  }

  var Checkout = components.Checkout;
  var sessionID = props.sessionID,
      buttonSessionID = props.buttonSessionID,
      _createOrder = props.createOrder,
      _onApprove = props.onApprove,
      _onCancel = props.onCancel,
      onShippingChange = props.onShippingChange,
      locale = props.locale,
      commit = props.commit,
      onError = props.onError,
      vault = props.vault,
      clientAccessToken = props.clientAccessToken,
      createBillingAgreement = props.createBillingAgreement,
      createSubscription = props.createSubscription,
      onClick = props.onClick;
  var button = payment.button,
      win = payment.win,
      fundingSource = payment.fundingSource,
      card = payment.card,
      isClick = payment.isClick,
      buyerAccessToken = payment.buyerAccessToken,
      venmoPayloadID = payment.venmoPayloadID;
  var fundingEligibility = serviceData.fundingEligibility,
      buyerCountry = serviceData.buyerCountry;
  var cspNonce = config.cspNonce;
  var context = getContext({
    win: win,
    isClick: isClick
  });
  var approved = false;
  var restart = util_memoize(function () {
    return initCheckout({
      props: props,
      components: components,
      serviceData: serviceData,
      config: config,
      payment: {
        button: button,
        win: win,
        fundingSource: fundingSource,
        card: card,
        isClick: false
      }
    }).start().finally(unresolvedPromise);
  });

  var onClose = function onClose() {
    checkoutOpen = false;

    if (!approved) {
      return _onCancel();
    }
  };

  var init = function init() {
    return Checkout({
      window: win,
      sessionID: sessionID,
      buttonSessionID: buttonSessionID,
      clientAccessToken: clientAccessToken,
      buyerAccessToken: buyerAccessToken,
      venmoPayloadID: venmoPayloadID,
      createOrder: function createOrder() {
        return _createOrder().then(function (orderID) {
          return enableVaultSetup({
            orderID: orderID,
            vault: vault,
            clientAccessToken: clientAccessToken,
            fundingEligibility: fundingEligibility,
            fundingSource: fundingSource,
            createBillingAgreement: createBillingAgreement,
            createSubscription: createSubscription
          }).then(function () {
            return orderID;
          });
        });
      },
      onApprove: function onApprove(_ref7) {
        var payerID = _ref7.payerID,
            paymentID = _ref7.paymentID,
            billingToken = _ref7.billingToken,
            subscriptionID = _ref7.subscriptionID;
        approved = true; // eslint-disable-next-line no-use-before-define

        return close().then(function () {
          return _onApprove({
            payerID: payerID,
            paymentID: paymentID,
            billingToken: billingToken,
            subscriptionID: subscriptionID,
            buyerAccessToken: buyerAccessToken
          }, {
            restart: restart
          }).catch(belter_src_util_noop);
        });
      },
      onAuth: function onAuth(_ref8) {
        var accessToken = _ref8.accessToken;
        buyerAccessToken = accessToken;
      },
      onCancel: function onCancel() {
        // eslint-disable-next-line no-use-before-define
        return close().then(function () {
          return _onCancel();
        });
      },
      onShippingChange: onShippingChange ? function (data, actions) {
        return onShippingChange(_extends({
          buyerAccessToken: buyerAccessToken
        }, data), actions);
      } : null,
      onError: onError,
      onClose: onClose,
      fundingSource: fundingSource,
      card: card,
      buyerCountry: buyerCountry,
      locale: locale,
      commit: commit,
      cspNonce: cspNonce
    });
  };

  var instance;

  var close = function close() {
    checkoutOpen = false;
    return promise_ZalgoPromise.try(function () {
      if (instance) {
        return instance.close();
      }
    });
  };

  var start = util_memoize(function () {
    instance = init();
    return instance.renderTo(getRenderWindow(), TARGET_ELEMENT.BODY, context);
  });

  var click = function click() {
    if (!onClick) {
      start();
      return;
    }

    if (supportsPopups()) {
      win = win || openPopup({
        width: CHECKOUT_POPUP_DIMENSIONS.WIDTH,
        height: CHECKOUT_POPUP_DIMENSIONS.HEIGHT
      });
    }

    return promise_ZalgoPromise.try(function () {
      return onClick ? onClick({
        fundingSource: fundingSource
      }) : true;
    }).then(function (valid) {
      if (win && !valid) {
        win.close();
      }
    });
  };

  return {
    click: click,
    start: start,
    close: close
  };
}

var checkout_checkout = {
  name: 'checkout',
  setup: setupCheckout,
  isEligible: isCheckoutEligible,
  isPaymentEligible: isCheckoutPaymentEligible,
  init: initCheckout
};
// CONCATENATED MODULE: ./node_modules/@paypal/smart-payment-buttons/src/payment-flows/native.js










var SOURCE_APP = 'paypal_smart_payment_buttons';
var TARGET_APP = 'paypal_native_checkout';
var MESSAGE = {
  SET_PROPS: 'setProps',
  GET_PROPS: 'getProps',
  CLOSE: 'close',
  FALLBACK: 'fallback',
  ON_APPROVE: 'onApprove',
  ON_CANCEL: 'onCancel',
  ON_ERROR: 'onError'
};
var getNativeSocket = util_memoize(function (_ref) {
  var sessionUID = _ref.sessionUID,
      firebaseConfig = _ref.firebaseConfig,
      version = _ref.version;
  return firebaseSocket({
    sessionUID: sessionUID,
    sourceApp: SOURCE_APP,
    sourceAppVersion: version,
    targetApp: TARGET_APP,
    config: firebaseConfig
  });
});

function isIOSSafari() {
  return isIos() && isSafari();
}

function isAndroidChrome() {
  return isAndroid() && isChrome();
}

function isNativeOptedIn(_ref2) {
  var props = _ref2.props;
  var enableNativeCheckout = props.enableNativeCheckout;

  if (enableNativeCheckout) {
    return true;
  }

  try {
    if (window.localStorage.getItem('__native_checkout__')) {
      return true;
    }
  } catch (err) {// pass
  }

  return false;
}

var native_sessionUID;
var nativeSocket;
var initialPageUrl;

function isNativeEligible(_ref3) {
  var props = _ref3.props,
      config = _ref3.config,
      serviceData = _ref3.serviceData;
  var platform = props.platform,
      onShippingChange = props.onShippingChange,
      createBillingAgreement = props.createBillingAgreement,
      createSubscription = props.createSubscription;
  var firebaseConfig = config.firebase;
  var eligibility = serviceData.eligibility;

  if (platform !== PLATFORM.MOBILE) {
    return false;
  }

  if (onShippingChange) {
    return false;
  }

  if (createBillingAgreement || createSubscription) {
    return false;
  }

  if (!supportsPopups()) {
    return false;
  }

  if (!firebaseConfig) {
    return false;
  }

  if (!isIOSSafari() && !isAndroidChrome()) {
    return false;
  }

  if (isNativeOptedIn({
    props: props
  })) {
    return true;
  }

  if (eligibility.nativeCheckout.paypal || eligibility.nativeCheckout.venmo) {
    return true;
  }

  return false;
}

function isNativePaymentEligible(_ref4) {
  var payment = _ref4.payment,
      props = _ref4.props,
      serviceData = _ref4.serviceData;
  var win = payment.win,
      fundingSource = payment.fundingSource;
  var eligibility = serviceData.eligibility;

  if (win) {
    return false;
  }

  if (!nativeSocket) {
    return false;
  }

  if (fundingSource === FUNDING.VENMO && !isNativeOptedIn({
    props: props
  })) {
    return false;
  }

  if (isNativeOptedIn({
    props: props
  })) {
    return true;
  }

  if (eligibility.nativeCheckout[fundingSource]) {
    return true;
  }

  return false;
}

function setupNative(_ref5) {
  var config = _ref5.config,
      props = _ref5.props;
  return promise_ZalgoPromise.try(function () {
    var version = config.version,
        firebaseConfig = config.firebase;
    var getPageUrl = props.getPageUrl;
    native_sessionUID = uniqueID();
    nativeSocket = getNativeSocket({
      sessionUID: native_sessionUID,
      firebaseConfig: firebaseConfig,
      version: version
    });
    nativeSocket.onError(function (err) {
      nativeSocket = null;
      getLogger().error('native_socket_error', {
        err: stringifyError(err)
      });
    });
    return getPageUrl().then(function (pageUrl) {
      initialPageUrl = pageUrl;
    });
  });
}

function appSwitchPopup(url) {
  var win;
  var appSwitched = false;

  try {
    win = popup(url);
  } catch (err) {
    if (err instanceof PopupOpenError && isIOSSafari()) {
      appSwitched = true;
    } else {
      throw err;
    }
  }

  var getWindow = function getWindow() {
    return win;
  };

  var didSwitch = function didSwitch() {
    if (appSwitched) {
      return true;
    }

    if (isAndroidChrome() && win && isWindowClosed(win)) {
      return true;
    }

    return false;
  };

  var close = function close() {
    if (win) {
      win.close();
    }
  };

  return {
    getWindow: getWindow,
    didSwitch: didSwitch,
    close: close
  };
}

function initNative(_ref6) {
  var props = _ref6.props,
      components = _ref6.components,
      config = _ref6.config,
      payment = _ref6.payment,
      serviceData = _ref6.serviceData;
  var createOrder = props.createOrder,
      onApprove = props.onApprove,
      onCancel = props.onCancel,
      onError = props.onError,
      commit = props.commit,
      getPageUrl = props.getPageUrl,
      buttonSessionID = props.buttonSessionID,
      env = props.env,
      stageHost = props.stageHost,
      apiStageHost = props.apiStageHost,
      onClick = props.onClick;
  var facilitatorAccessToken = serviceData.facilitatorAccessToken;
  var fundingSource = payment.fundingSource;
  var instance = {
    close: promiseNoop
  };

  var fallbackToWebCheckout = function fallbackToWebCheckout(_temp) {
    var _ref7 = _temp === void 0 ? {} : _temp,
        win = _ref7.win,
        buyerAccessToken = _ref7.buyerAccessToken,
        venmoPayloadID = _ref7.venmoPayloadID;

    var checkoutPayment = _extends({}, payment, {
      buyerAccessToken: buyerAccessToken,
      venmoPayloadID: venmoPayloadID,
      win: win,
      isClick: false
    });

    instance = checkout_checkout.init({
      props: props,
      components: components,
      payment: checkoutPayment,
      config: config,
      serviceData: serviceData
    });
    return instance.start();
  };

  var getNativeUrl = function getNativeUrl() {
    var domain = fundingSource === FUNDING.VENMO ? 'https://www.paypal.com' : getDomain();
    return extendUrl("" + domain + NATIVE_CHECKOUT_URI[fundingSource], {
      query: {
        sessionUID: native_sessionUID,
        buttonSessionID: buttonSessionID,
        pageUrl: initialPageUrl
      }
    });
  };

  var getWebCheckoutFallbackUrl = function getWebCheckoutFallbackUrl(_ref8) {
    var orderID = _ref8.orderID;
    return extendUrl("" + getDomain() + WEB_CHECKOUT_URI, {
      query: {
        fundingSource: fundingSource,
        facilitatorAccessToken: facilitatorAccessToken,
        token: orderID,
        useraction: commit ? USER_ACTION.COMMIT : USER_ACTION.CONTINUE,
        native_xo: '1',
        venmoOverride: fundingSource === FUNDING.VENMO ? '1' : '0'
      }
    });
  };

  var getSDKProps = function getSDKProps() {
    return promise_ZalgoPromise.hash({
      orderID: createOrder(),
      pageUrl: getPageUrl()
    }).then(function (_ref9) {
      var orderID = _ref9.orderID,
          pageUrl = _ref9.pageUrl;
      var userAgent = getUserAgent();
      var webCheckoutUrl = getWebCheckoutFallbackUrl({
        orderID: orderID
      });
      var forceEligible = isNativeOptedIn({
        props: props
      });
      return {
        orderID: orderID,
        facilitatorAccessToken: facilitatorAccessToken,
        pageUrl: pageUrl,
        commit: commit,
        webCheckoutUrl: webCheckoutUrl,
        userAgent: userAgent,
        buttonSessionID: buttonSessionID,
        env: env,
        stageHost: stageHost,
        apiStageHost: apiStageHost,
        forceEligible: forceEligible
      };
    });
  };

  var connectNative = function connectNative() {
    var socket = nativeSocket;

    if (!socket) {
      throw new Error("Native socket connection not established");
    }

    socket.on(MESSAGE.GET_PROPS, function () {
      getLogger().info("native_message_getprops").flush();
      return getSDKProps();
    });
    socket.on(MESSAGE.ON_APPROVE, function (_ref10) {
      var _ref10$data = _ref10.data,
          payerID = _ref10$data.payerID,
          paymentID = _ref10$data.paymentID,
          billingToken = _ref10$data.billingToken;
      getLogger().info("native_message_onapprove").flush();
      socket.close();
      var data = {
        payerID: payerID,
        paymentID: paymentID,
        billingToken: billingToken,
        isNativeTransaction: true
      };
      var actions = {
        restart: function restart() {
          return fallbackToWebCheckout();
        }
      };
      return onApprove(data, actions);
    });
    socket.on(MESSAGE.ON_CANCEL, function () {
      getLogger().info("native_message_oncancel").flush();
      socket.close();
      return onCancel();
    });
    socket.on(MESSAGE.ON_ERROR, function (_ref11) {
      var message = _ref11.data.message;
      getLogger().info("native_message_onerror", {
        err: message
      }).flush();
      socket.close();
      return onError(new Error(message));
    });
    socket.on(MESSAGE.FALLBACK, function (_ref12) {
      var _ref12$data = _ref12.data,
          buyerAccessToken = _ref12$data.buyerAccessToken,
          venmoPayloadID = _ref12$data.venmoPayloadID;
      getLogger().info("native_message_fallback").flush();
      socket.close();
      return fallbackToWebCheckout({
        buyerAccessToken: buyerAccessToken,
        venmoPayloadID: venmoPayloadID
      });
    });

    var setProps = function setProps() {
      return getSDKProps().then(function (sdkProps) {
        getLogger().info("native_message_setprops").flush();
        return socket.send(MESSAGE.SET_PROPS, sdkProps);
      }).then(function () {
        getLogger().info("native_response_setprops").flush();
      });
    };

    var closeNative = function closeNative() {
      getLogger().info("native_message_close").flush();
      return socket.send(MESSAGE.CLOSE).then(function () {
        getLogger().info("native_response_close").flush();
        socket.close();
      });
    };

    socket.reconnect();
    return {
      setProps: setProps,
      close: closeNative
    };
  };

  var appSwitch;

  var open = function open() {
    appSwitch = appSwitchPopup(getNativeUrl());
  };

  var close = function close() {
    return promise_ZalgoPromise.delay(500).then(function () {
      if (appSwitch.didSwitch()) {
        connectNative().close();
      }

      if (appSwitch) {
        appSwitch.close();
      }
    });
  };

  var click = function click() {
    open();
    return promise_ZalgoPromise.try(function () {
      return onClick ? onClick({
        fundingSource: fundingSource
      }) : true;
    }).then(function (valid) {
      if (!valid) {
        close();
      }
    }, function (err) {
      close();
      throw err;
    });
  };

  var start = util_memoize(function () {
    return createOrder().then(function () {
      if (appSwitch.didSwitch()) {
        var _getLogger$info$track;

        getLogger().info("native_detect_app_switch").track((_getLogger$info$track = {}, _getLogger$info$track[FPTI_KEY.TRANSITION] = FPTI_TRANSITION.NATIVE_DETECT_APP_SWITCH, _getLogger$info$track)).flush();
        instance = connectNative();
        return instance.setProps().then(function () {
          var _getLogger$info$track2;

          getLogger().info("native_app_switch_ack").track((_getLogger$info$track2 = {}, _getLogger$info$track2[FPTI_KEY.TRANSITION] = FPTI_TRANSITION.NATIVE_APP_SWITCH_ACK, _getLogger$info$track2)).flush();
        });
      } else {
        var _getLogger$info$track3;

        getLogger().info("native_detect_no_app_switch").track((_getLogger$info$track3 = {}, _getLogger$info$track3[FPTI_KEY.TRANSITION] = FPTI_TRANSITION.NATIVE_DETECT_NO_APP_SWITCH, _getLogger$info$track3)).flush();
        return fallbackToWebCheckout({
          win: appSwitch.getWindow()
        });
      }
    }).catch(function (err) {
      var _getLogger$info$track4;

      getLogger().info("native_error", {
        err: stringifyError(err)
      }).track((_getLogger$info$track4 = {}, _getLogger$info$track4[FPTI_KEY.TRANSITION] = FPTI_TRANSITION.NATIVE_ERROR, _getLogger$info$track4[FPTI_KEY.ERROR_CODE] = 'native_error', _getLogger$info$track4[FPTI_KEY.ERROR_DESC] = stringifyErrorMessage(err), _getLogger$info$track4)).flush();
      close();
      throw err;
    });
  });
  return {
    click: click,
    start: start,
    close: function close() {
      return instance.close();
    }
  };
}

var native_native = {
  name: 'native',
  setup: setupNative,
  isEligible: isNativeEligible,
  isPaymentEligible: isNativePaymentEligible,
  init: initNative,
  spinner: true
};
// CONCATENATED MODULE: ./public/js/button/native.js











function queryNativeEligibility(_ref) {
  var shippingCallbackEnabled = _ref.shippingCallbackEnabled,
      clientID = _ref.clientID,
      buyerCountry = _ref.buyerCountry,
      userAgent = _ref.userAgent,
      buttonSessionID = _ref.buttonSessionID,
      cookies = _ref.cookies;
  return callGraphQL("\n            query NativeEligibility(\n                $shippingCallbackEnabled : Boolean,\n                $facilitatorClientID : String,\n                $buyerCountry : String,\n                $currency : String,\n                $userAgent : String,\n                $buttonSessionID : String,\n                $cookies : String\n            ) {\n                mobileSDKEligibility(\n                    shippingCallbackEnabled: $shippingCallbackEnabled,\n                    facilitatorClientID: $facilitatorClientID,\n                    buyerCountry: $buyerCountry,\n                    currency: $currency,\n                    userAgent: $userAgent,\n                    buttonSessionID: $buttonSessionID,\n                    cookies : $cookies\n                ) {\n                    paypal {\n                        eligibility\n                        ineligibilityReason\n                    }\n                    venmo {\n                        eligibility\n                        ineligibilityReason\n                    }\n                }\n            }\n        ", {
    shippingCallbackEnabled: shippingCallbackEnabled,
    facilitatorClientID: clientID,
    buyerCountry: buyerCountry,
    userAgent: userAgent,
    buttonSessionID: buttonSessionID,
    cookies: cookies
  }).then(function (res) {
    var result = res.data;
    var paypal = result.mobileSDKEligibility && result.mobileSDKEligibility.paypal && result.mobileSDKEligibility.paypal.eligibility;
    var venmo = result.mobileSDKEligibility && result.mobileSDKEligibility.venmo && result.mobileSDKEligibility.venmo.eligibility;
    return {
      paypal: paypal || false,
      venmo: venmo || false
    };
  }).catch(function (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    return {
      paypal: false,
      venmo: false
    };
  });
}
function querySupplementalData(orderID) {
  return callGraphQL("\n            query SupplementalData(\n                $orderID: String!\n            ) {\n                checkoutSession(token: $orderID) {\n                    cart {\n                        intent\n                        paymentId\n                        cancelUrl {\n                            href  \n                        },\n                        returnUrl {\n                            href  \n                        }\n                    }\n                }\n            }\n        ", {
    orderID: orderID
  }).then(function (res) {
    var cart = res.data.checkoutSession.cart;
    var intent = cart.intent ? cart.intent.toLowerCase() : '';
    var paymentID = cart.paymentId;
    var returnUrl = cart.returnUrl && cart.returnUrl.href;
    var cancelUrl = cart.cancelUrl && cart.cancelUrl.href;
    return {
      orderID: orderID,
      paymentID: paymentID,
      intent: intent,
      returnUrl: returnUrl,
      cancelUrl: cancelUrl
    };
  });
}
function Native(_ref2) {
  var correlationID = _ref2.correlationID,
      firebaseConfig = _ref2.firebaseConfig,
      buyerCountry = _ref2.buyerCountry,
      cookies = _ref2.cookies,
      sdkMeta = _ref2.sdkMeta;
  // eslint-disable-next-line flowtype/no-weak-types
  var NotImplementedNull = null;

  var NotImplementedFunction = function NotImplementedFunction() {
    return NotImplementedNull;
  };

  var locale = window.xprops.locale || 'en_US';
  var props = {
    env: window.xprops.env,
    vault: false,
    commit: window.xprops.commit,
    locale: {
      country: locale.split('_')[1],
      lang: locale.split('_')[0]
    },
    platform: isDevice() ? PLATFORM.MOBILE : PLATFORM.DESKTOP,
    sessionID: window.xprops.sessionID,
    buttonSessionID: window.xprops.buttonSessionID,
    clientID: window.xprops.client ? window.xprops.client[window.xprops.env] : NotImplementedNull,
    partnerAttributionID: NotImplementedNull,
    correlationID: correlationID || '',
    clientAccessToken: NotImplementedNull,
    getPopupBridge: NotImplementedFunction,
    getPrerenderDetails: NotImplementedFunction,
    getPageUrl: window.xprops.getPageUrl,
    enableThreeDomainSecure: false,
    enableStandardCardFields: false,
    enableNativeCheckout: window.xprops.enableNativeCheckout,
    rememberFunding: NotImplementedFunction,
    onError: window.xprops.onError || NotImplementedFunction,
    stageHost: NotImplementedNull,
    apiStageHost: NotImplementedNull,
    style: NotImplementedNull,
    getParent: function getParent() {
      return window.parent;
    },
    currency: NotImplementedNull,
    merchantDomain: window.xchild.getParentDomain(),
    onClick: NotImplementedNull,
    onInit: NotImplementedNull,
    createOrder: function createOrder() {
      return window.xprops.payment({
        button_version: "2.1.80"
      }).then(normalizeECToken);
    },
    createBillingAgreement: NotImplementedNull,
    createSubscription: NotImplementedNull,
    onApprove: NotImplementedFunction,
    onCancel: window.xprops.onCancel,
    onShippingChange: window.xprops.onShipping
  };
  var config = {
    version: window.paypal.version,
    cspNonce: '',
    firebase: firebaseConfig
  };
  var getFacilitatorAccessToken = memoize(function () {
    return props.clientID ? createAccessToken(props.clientID) : promise_ZalgoPromise.resolve('');
  });
  var getNativeEligibility = memoize(function () {
    return queryNativeEligibility({
      buyerCountry: buyerCountry,
      cookies: cookies,
      buttonSessionID: props.buttonSessionID,
      clientID: props.clientID,
      shippingCallbackEnabled: Boolean(window.xprops.onShippingChange),
      userAgent: window.navigator.userAgent
    });
  });
  var getServiceData = memoize(function () {
    return promise_ZalgoPromise.hash({
      facilitatorAccessToken: getFacilitatorAccessToken(),
      nativeEligibility: getNativeEligibility()
    }).then(function (_ref3) {
      var facilitatorAccessToken = _ref3.facilitatorAccessToken,
          nativeEligibility = _ref3.nativeEligibility;
      var serviceData = {
        fundingEligibility: NotImplementedNull,
        personalization: NotImplementedNull,
        merchantID: [],
        buyerCountry: buyerCountry,
        eligibility: {
          cardFields: false,
          nativeCheckout: nativeEligibility
        },
        facilitatorAccessToken: facilitatorAccessToken
      }; // $FlowFixMe

      serviceData.sdkMeta = sdkMeta; // $FlowFixMe

      return serviceData;
    });
  });

  var getComponents = function getComponents(_temp) {
    var _ref4 = _temp === void 0 ? {} : _temp,
        createOrder = _ref4.createOrder;

    var Checkout = function Checkout(_ref5) {
      var window = _ref5.window,
          fundingSource = _ref5.fundingSource;
      return {
        renderTo: function renderTo() {
          return renderCheckout({
            fundingSource: fundingSource,
            win: window,
            payment: createOrder
          });
        }
      };
    };

    Checkout.canRenderTo = function () {
      return true;
    };

    return {
      // $FlowFixMe
      Checkout: Checkout,
      CardFields: NotImplementedNull,
      ThreeDomainSecure: NotImplementedNull
    };
  };

  return {
    setup: function setup() {
      return getServiceData().then(function (serviceData) {
        var components = getComponents();

        if (native_native.isEligible({
          props: props,
          config: config,
          serviceData: serviceData
        })) {
          var env = props.env,
              sessionID = props.sessionID,
              buttonSessionID = props.buttonSessionID,
              clientID = props.clientID,
              partnerAttributionID = props.partnerAttributionID,
              commit = props.commit,
              merchantDomain = props.merchantDomain;
          var version = config.version;
          setupLogger({
            env: env,
            sessionID: sessionID,
            buttonSessionID: buttonSessionID,
            clientID: clientID,
            partnerAttributionID: partnerAttributionID,
            commit: commit,
            correlationID: correlationID || 'unknown',
            locale: locale,
            merchantID: [],
            merchantDomain: merchantDomain,
            version: version
          });
          return native_native.setup({
            components: components,
            props: props,
            config: config,
            serviceData: serviceData
          });
        }
      }).then(belter_src_util_noop);
    },
    isPaymentEligible: function isPaymentEligible(_ref6) {
      var button = _ref6.button,
          fundingSource = _ref6.fundingSource;
      var payment = {
        button: button,
        fundingSource: fundingSource,
        card: undefined,
        isClick: true
      };
      var serviceData;
      getServiceData().then(function (result) {
        serviceData = result;
      });

      if (!serviceData) {
        return false;
      }

      return native_native.isEligible({
        props: props,
        config: config,
        serviceData: serviceData
      }) && native_native.isPaymentEligible({
        props: props,
        config: config,
        serviceData: serviceData,
        payment: payment
      });
    },
    start: function start(_ref7) {
      var button = _ref7.button,
          fundingSource = _ref7.fundingSource;
      return getServiceData().then(function (serviceData) {
        var payment = {
          button: button,
          fundingSource: fundingSource,
          card: undefined,
          isClick: true
        };
        var createOrder = memoize(props.createOrder);
        var supplementalDataPromise = createOrder().then(function (orderID) {
          return querySupplementalData(orderID);
        });

        var _buildCheckoutProps = buildCheckoutProps({
          fundingSource: fundingSource,
          payment: createOrder,
          facilitatorAccessTokenPromise: getFacilitatorAccessToken(),
          isNative: true,
          partnerAttributionID: props.partnerAttributionID
        }),
            onAuthorize = _buildCheckoutProps.onAuthorize,
            legacyOnCancel = _buildCheckoutProps.onCancel;

        var onApprove = function onApprove(_ref8) {
          var payerID = _ref8.payerID,
              billingToken = _ref8.billingToken;
          return supplementalDataPromise.then(function (_ref9) {
            var orderID = _ref9.orderID,
                paymentID = _ref9.paymentID,
                intent = _ref9.intent,
                returnUrl = _ref9.returnUrl;

            if (!payerID) {
              throw new Error("payerID missing in onApprove");
            }

            var data = {
              orderID: orderID,
              paymentToken: orderID,
              payerID: payerID,
              billingToken: billingToken,
              paymentID: paymentID,
              intent: intent,
              returnUrl: $util.buildURL(returnUrl, {
                PayerID: payerID
              })
            };
            var actions = {
              close: function close() {
                return promise_ZalgoPromise.try(belter_src_util_noop);
              }
            };
            return onAuthorize(data, actions);
          });
        };

        var onCancel = function onCancel() {
          return supplementalDataPromise.then(function (_ref10) {
            var orderID = _ref10.orderID,
                paymentID = _ref10.paymentID,
                intent = _ref10.intent,
                cancelUrl = _ref10.cancelUrl;
            var data = {
              orderID: orderID,
              paymentID: paymentID,
              paymentToken: orderID,
              intent: intent,
              cancelUrl: cancelUrl,
              button_version: "2.1.80"
            };
            var actions = {
              close: function close() {
                return promise_ZalgoPromise.try(belter_src_util_noop);
              }
            };
            return legacyOnCancel(data, actions);
          });
        };

        var instanceProps = _extends({}, props, {
          createOrder: createOrder,
          onApprove: onApprove,
          onCancel: onCancel
        });

        var components = getComponents({
          createOrder: createOrder
        });

        var _native$init = native_native.init({
          components: components,
          props: instanceProps,
          config: config,
          serviceData: serviceData,
          payment: payment
        }),
            click = _native$init.click,
            start = _native$init.start;

        if (!click) {
          throw new Error("Expected click to be available for native driver");
        }

        var clickPromise = promise_ZalgoPromise.try(click);
        return start().then(function () {
          return clickPromise;
        }).then(belter_src_util_noop);
      });
    }
  };
}
// CONCATENATED MODULE: ./public/js/button/locale.js

function determineLocale() {
  return window.paypal.Promise.try(function () {
    var userLocale = window.xprops.locale;

    if (userLocale) {
      var _userLocale$split = userLocale.split('_'),
          lang = _userLocale$split[0],
          country = _userLocale$split[1];

      if (!window.paypal.config.locales[country]) {
        throw new Error("Invalid country: " + country + " for locale " + userLocale);
      }

      if (window.paypal.config.locales[country].indexOf(lang) === -1) {
        throw new Error("Invalid language: " + lang + " for locale " + userLocale);
      }

      return {
        lang: lang,
        country: country
      };
    }

    return getLocale();
  });
}
// EXTERNAL MODULE: ./node_modules/whatwg-fetch/fetch.js
var whatwg_fetch_fetch = __webpack_require__(4);

// CONCATENATED MODULE: ./public/js/button/paymentRequest.js
/* eslint-disable-next-line import/no-unassigned-import */

var networks = ['amex', 'diners', 'discover', 'jcb', 'mastercard', 'unionpay', 'visa', 'mir'];
var types = ['debit', 'credit', 'prepaid'];
var supportedInstruments = [{
  supportedMethods: networks
}, {
  supportedMethods: ['basic-card'],
  data: {
    supportedNetworks: networks,
    supportedTypes: types
  }
}];
var details = {
  total: {
    label: 'Donation',
    amount: {
      currency: 'USD',
      value: '55.00'
    }
  },
  displayItems: [{
    label: 'Original donation amount',
    amount: {
      currency: 'USD',
      value: '65.00'
    }
  }, {
    label: 'Friends and family discount',
    amount: {
      currency: 'USD',
      value: '-10.00'
    }
  }]
};
var paymentRequest_payment = function payment() {
  return new PaymentRequest(supportedInstruments, details);
}; // eslint-disable-line compat/compat
// eslint-disable-next-line no-restricted-globals,  promise/no-native

var guestEligibilityCheck = function guestEligibilityCheck(_ref) {
  var token = _ref.token;
  var params = {
    operation: 'GuestFlowCheck',
    query: "query GuestFlowCheck { checkoutSession( token: \"" + token + "\" ) { flags { isHostedFieldsAllowed isGuestEligible }}}",
    variables: null
  };
  var graphqlEndpoint = window.__GRAPHQL_ENDPOINT__ || 'https://www.paypal.com/graphql';
  return fetch(graphqlEndpoint, // eslint-disable-line compat/compat
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  }).then(function (res) {
    return res.json();
  }).catch(function (err) {
    throw err;
  });
};
// CONCATENATED MODULE: ./public/js/button/promise.js

 // eslint-disable-line import/no-unassigned-import

function usePayPalPromise() {
  $promise.use(window.paypal.Promise);
}
// CONCATENATED MODULE: ./public/js/button/promiseRetry.js
// eslint-disable-next-line no-restricted-globals,  promise/no-native
function promiseRetry(promiseFactory, time) {
  if (time === void 0) {
    time = 3;
  }

  var promise = promiseFactory();
  return promise.then(function (result) {
    return result;
  }, function (error) {
    if (time === 0) {
      throw error;
    }

    return promiseRetry(promiseFactory, time - 1);
  });
}
// CONCATENATED MODULE: ./public/js/button/button.js
/* eslint max-lines: off */
















var buttonEnabled = true;

function clickButton(event, _ref) {
  var _ref$fundingSource = _ref.fundingSource,
      fundingSource = _ref$fundingSource === void 0 ? FUNDING.PAYPAL : _ref$fundingSource,
      card = _ref.card;
  event.preventDefault();
  event.stopPropagation();

  if (window.xprops.onClick) {
    window.xprops.onClick({
      fundingSource: fundingSource,
      card: card,
      flow: PAYMENT_FLOW.CHECKOUT,
      button_version: "2.1.80"
    });
  }

  if (!buttonEnabled) {
    return;
  }

  var buttonEl = event.currentTarget; // $FlowFixMe

  var buttonSize = buttonEl.getAttribute('data-size'); // $FlowFixMe

  var buttonLayout = buttonEl.getAttribute('data-layout'); // check inline guest cookie and pxp

  var buttonsContainer = document.getElementById('paypal-animation-container');

  if (!shouldEnableInlineGuest(buttonEl, buttonsContainer)) {
    return renderCheckout({
      fundingSource: fundingSource
    });
  }

  if (!(card || fundingSource === FUNDING.CARD)) {
    return renderCheckout({
      fundingSource: fundingSource
    });
  } else {
    // inline guest cannot handle CUP card for now
    if (card === CARD.CUP) {
      // collapse inline guest form
      onEvent_onEvent({
        type: ACTIONS.CARD_FORM_COLLAPSE
      });
      onEvent_onEvent({
        type: ACTIONS.CARD_FORM_CLEAR
      });
      onEvent_onEvent({
        type: ACTIONS.BUTTONS_RESET
      }); // open the xoon flow

      return renderCheckout({
        fundingSource: fundingSource
      });
    }

    var _getState = state_getState(),
        currentCardType = _getState.currentCardType,
        isZomboRendered = _getState.isZomboRendered;

    if (!card) {
      return;
    }

    if (state_isSubmitting()) {
      return;
    }

    if (currentCardType !== card) {
      onEvent_changeCardTypeTo(card); // only call expand for the first time buyer clicks on card icon

      var isFirstClickOnCard = !currentCardType;

      if (isFirstClickOnCard) {
        onEvent_expand();
      }

      onEvent_dispatch(clearFormAction);
    }

    if (isZomboRendered) {
      return;
    }

    return window.xprops.payment({
      button_version: "2.1.80"
    }).then(function (paymentToken) {
      // make API call to check flow eligibility
      return promiseRetry(function () {
        return guestEligibilityCheck({
          token: paymentToken
        });
      }).then(function (res) {
        return get_get(res, 'data.checkoutSession.flags', {});
      }).then(function (_ref2) {
        var isHostedFieldsAllowed = _ref2.isHostedFieldsAllowed;
        logger_track({
          state_name: 'checkoutjs_inline_guest',
          transition_name: 'process_checking_inline_guest_eligibility',
          inline_guest_enabled: isHostedFieldsAllowed ? 1 : 0
        });
        logger_info('inline_guest_eligibility', JSON.stringify({
          inlineGuestEnable: isHostedFieldsAllowed,
          isInlneGuestCookied: isZomboCookieEnabled,
          spbLayout: buttonLayout,
          spbSize: buttonSize,
          inlineGuestPXP: inlineGuestEligibility_inlineGuestPXPEnabled()
        }));
        logger_flush();
        var state = state_getState();

        if (isHostedFieldsAllowed) {
          // render zombo
          if (!state.isZomboRendered) {
            state_setState({
              isZomboRendered: true
            });
            var treatments = get_get(window.pre, 'inlineGuest.res.data.treatments') || [];
            logger_track({
              state_name: 'checkoutjs_inline_guest',
              transition_name: 'process_pxp_checkoutjs_inline_guest',
              pxp_trtmnt_id: treatments.map(function (t) {
                return t.treatment_id;
              }).join(':'),
              pxp_exp_id: treatments.map(function (t) {
                return t.experiment_id;
              }).join(':')
            });
            logger_info('inline_guest_checkoutjs_render_inline_guest');
            logger_flush();
            return renderCardExperience({
              token: paymentToken,
              card: card,
              onEvent: onEvent_onEvent,
              getState: state_getState
            });
          }
        } else {
          // render a button to go to xoon since we cannot open
          // new popup because this check is asynchonous
          // go to xoon signup
          logger_info('inline_guest_checkoutjs_render_go_to_xoon_button');
          renderGoToXoon({
            paymentToken: paymentToken
          });
        }
      });
    }).catch(function (err) {
      onEvent_onEvent({
        type: ACTIONS.CARD_FORM_COLLAPSE
      });
      onEvent_onEvent({
        type: ACTIONS.CARD_FORM_CLEAR
      });
      onEvent_onEvent({
        type: ACTIONS.BUTTONS_RESET
      });
      logger_error('inline_guest_buttonjs_init_error', {
        err: err.stack ? err.stack : err.toString()
      });
      window.xprops.onError(err);
    });
  }
}

var button_inlineGuestFptiLogging = function inlineGuestFptiLogging() {
  var inlineGuestTreatment = isInlineEnableByPXP_isInlineGuestEnableByPXP(window.pre);

  if (!inlineGuestTreatment) {
    return;
  }

  var trackingPayload = {
    pxp_exp_id: get_get(inlineGuestTreatment, 'experiment_id'),
    pxp_trtmnt_id: get_get(inlineGuestTreatment, 'treatment_id'),
    state_name: 'PXP_CHECK'
  };
  logger_track(trackingPayload);
  logger_flush();
};

function setupButton(buttonOpts) {
  // eslint-disable-line no-undef
  if (window.name && window.name.indexOf('__prerender') === 0) {
    if (window.console && window.console.warn) {
      window.console.warn('Button setup inside prerender');
    }

    return;
  }

  usePayPalPromise(); // FPTI for inline guest

  button_inlineGuestFptiLogging();
  querySelectorAll('#paypal-other-options').forEach(function (button) {
    var onClick = function onClick() {
      onEvent_onEvent({
        type: ACTIONS.CARD_FORM_COLLAPSE
      });
      onEvent_onEvent({
        type: ACTIONS.CARD_FORM_CLEAR
      });
      onEvent_onEvent({
        type: ACTIONS.BUTTONS_RESET
      });
    };

    attachClickEvent_attachClickEventToElement(button, onClick);
  });

  var _ref3 = buttonOpts || {},
      correlationID = _ref3.correlationID,
      firebaseConfig = _ref3.firebaseConfig,
      buyerCountry = _ref3.buyerCountry,
      _ref3$cookies = _ref3.cookies,
      cookies = _ref3$cookies === void 0 ? '' : _ref3$cookies,
      sdkMeta = _ref3.sdkMeta;

  var native = Native({
    correlationID: correlationID,
    firebaseConfig: firebaseConfig,
    buyerCountry: buyerCountry,
    cookies: cookies,
    sdkMeta: sdkMeta
  });
  querySelectorAll('.paypal-button').forEach(function (button) {
    attachClickEvent_attachClickEventToElement(button, function (event) {
      var fundingSource = button.getAttribute('data-funding-source'); // checkoutCustomization received from MORS to customize the SPB.
      // sending beacon to setup tracking on the button wrt customized tagline

      if (buttonOpts) {
        var checkoutCustomization = buttonOpts.checkoutCustomization;

        if (checkoutCustomization && checkoutCustomization.tagline && checkoutCustomization.tagline.tracking && checkoutCustomization.tagline.tracking.click) {
          sendBeacon(checkoutCustomization.tagline.tracking.click);
        }

        if (checkoutCustomization && checkoutCustomization.buttonText && checkoutCustomization.buttonText.tracking && checkoutCustomization.buttonText.tracking.click) {
          sendBeacon(checkoutCustomization.buttonText.tracking.click);
        }
      }

      if (native.isPaymentEligible({
        button: button,
        fundingSource: fundingSource
      })) {
        if (window.xprops.onClick) {
          window.xprops.onClick({
            fundingSource: fundingSource,
            flow: PAYMENT_FLOW.NATIVE,
            button_version: "2.1.80"
          });
        }

        if (!buttonEnabled) {
          return;
        }

        native.start({
          button: button,
          fundingSource: fundingSource
        });
        return;
      }

      return clickButton(event, {
        fundingSource: fundingSource
      });
    });
  });
  querySelectorAll('.paypal-button-card').forEach(function (button) {
    attachClickEvent_attachClickEventToElement(button, function (event) {
      var fundingSource = button.getAttribute('data-funding-source');
      var card = button.getAttribute('data-card');
      return clickButton(event, {
        fundingSource: fundingSource,
        card: card
      });
    });
  });
  buttonEnabled = true;

  if (window.xprops.validate) {
    window.xprops.validate({
      enable: function enable() {
        buttonEnabled = true;
      },
      disable: function disable() {
        buttonEnabled = false;
      }
    });
  }

  return window.paypal.Promise.all([detectLightboxEligibility(), determineLocale().then(function (locale) {
    window.paypal.config.locale.country = locale.country;
    window.paypal.config.locale.lang = locale.lang;
  }), getButtonFunding().then(function (funding) {
    if (window.xprops.funding && window.xprops.funding.remember && funding.remembered && funding.remembered.length) {
      window.xprops.funding.remember(funding.remembered);
    }
  }), native.setup()]);
}
function button_setup(buttonOpts) {
  // eslint-disable-line no-undef
  if (!window.paypal && (!window.name || window.name.indexOf('xcomponent__ppbutton') === -1)) {
    return;
  }

  return window.paypal.Promise.try(function () {
    return setupButton(buttonOpts);
  }).catch(function (err) {
    window.paypal.logger.error('xo_buttonjs_bootstrap_err', {
      err: err.stack ? err.stack : err.toString()
    });
  });
}
// CONCATENATED MODULE: ./public/js/button/index.js
/* concated harmony reexport setup */__webpack_require__.d(__webpack_exports__, "setup", function() { return button_setup; });
// eslint-disable-next-line import/no-unassigned-import



/***/ })
/******/ ]);
//# sourceMappingURL=button.js.map