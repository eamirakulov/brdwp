this["wp"] = this["wp"] || {}; this["wp"]["blockEditor"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 437);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),
/* 1 */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),
/* 2 */
/***/ (function(module, exports) {

(function() { module.exports = this["lodash"]; }());

/***/ }),
/* 3 */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),
/* 4 */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["primitives"]; }());

/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
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

/***/ }),
/* 9 */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["compose"]; }());

/***/ }),
/* 10 */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _slicedToArray; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
var arrayWithHoles = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
var nonIterableRest = __webpack_require__(39);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return Object(arrayWithHoles["a" /* default */])(arr) || _iterableToArrayLimit(arr, i) || Object(unsupportedIterableToArray["a" /* default */])(arr, i) || Object(nonIterableRest["a" /* default */])();
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutProperties; });
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutPropertiesLoose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _objectSpread2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _createForOfIteratorHelperLoose; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

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

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = o[Symbol.iterator]();
  return it.next.bind(it);
}




/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _toConsumableArray; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
var arrayLikeToArray = __webpack_require__(26);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(arrayLikeToArray["a" /* default */])(arr);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
var iterableToArray = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || Object(iterableToArray["a" /* default */])(arr) || Object(unsupportedIterableToArray["a" /* default */])(arr) || _nonIterableSpread();
}

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),
/* 21 */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["keycodes"]; }());

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _inherits; });

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(self);
}

/***/ }),
/* 24 */
/***/ (function(module, exports) {

(function() { module.exports = this["regeneratorRuntime"]; }());

/***/ }),
/* 25 */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["richText"]; }());

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),
/* 27 */,
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(138)();
}


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o, minLen);
}

/***/ }),
/* 30 */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["dom"]; }());

/***/ }),
/* 31 */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["url"]; }());

/***/ }),
/* 32 */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["hooks"]; }());

/***/ }),
/* 33 */,
/* 34 */,
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),
/* 36 */,
/* 37 */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["deprecated"]; }());

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutPropertiesLoose; });
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

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


var LEAF_KEY, hasWeakMap;

/**
 * Arbitrary value used as key for referencing cache object in WeakMap tree.
 *
 * @type {Object}
 */
LEAF_KEY = {};

/**
 * Whether environment supports WeakMap.
 *
 * @type {boolean}
 */
hasWeakMap = typeof WeakMap !== 'undefined';

/**
 * Returns the first argument as the sole entry in an array.
 *
 * @param {*} value Value to return.
 *
 * @return {Array} Value returned as entry in array.
 */
function arrayOf( value ) {
	return [ value ];
}

/**
 * Returns true if the value passed is object-like, or false otherwise. A value
 * is object-like if it can support property assignment, e.g. object or array.
 *
 * @param {*} value Value to test.
 *
 * @return {boolean} Whether value is object-like.
 */
function isObjectLike( value ) {
	return !! value && 'object' === typeof value;
}

/**
 * Creates and returns a new cache object.
 *
 * @return {Object} Cache object.
 */
function createCache() {
	var cache = {
		clear: function() {
			cache.head = null;
		},
	};

	return cache;
}

/**
 * Returns true if entries within the two arrays are strictly equal by
 * reference from a starting index.
 *
 * @param {Array}  a         First array.
 * @param {Array}  b         Second array.
 * @param {number} fromIndex Index from which to start comparison.
 *
 * @return {boolean} Whether arrays are shallowly equal.
 */
function isShallowEqual( a, b, fromIndex ) {
	var i;

	if ( a.length !== b.length ) {
		return false;
	}

	for ( i = fromIndex; i < a.length; i++ ) {
		if ( a[ i ] !== b[ i ] ) {
			return false;
		}
	}

	return true;
}

/**
 * Returns a memoized selector function. The getDependants function argument is
 * called before the memoized selector and is expected to return an immutable
 * reference or array of references on which the selector depends for computing
 * its own return value. The memoize cache is preserved only as long as those
 * dependant references remain the same. If getDependants returns a different
 * reference(s), the cache is cleared and the selector value regenerated.
 *
 * @param {Function} selector      Selector function.
 * @param {Function} getDependants Dependant getter returning an immutable
 *                                 reference or array of reference used in
 *                                 cache bust consideration.
 *
 * @return {Function} Memoized selector.
 */
/* harmony default export */ __webpack_exports__["a"] = (function( selector, getDependants ) {
	var rootCache, getCache;

	// Use object source as dependant if getter not provided
	if ( ! getDependants ) {
		getDependants = arrayOf;
	}

	/**
	 * Returns the root cache. If WeakMap is supported, this is assigned to the
	 * root WeakMap cache set, otherwise it is a shared instance of the default
	 * cache object.
	 *
	 * @return {(WeakMap|Object)} Root cache object.
	 */
	function getRootCache() {
		return rootCache;
	}

	/**
	 * Returns the cache for a given dependants array. When possible, a WeakMap
	 * will be used to create a unique cache for each set of dependants. This
	 * is feasible due to the nature of WeakMap in allowing garbage collection
	 * to occur on entries where the key object is no longer referenced. Since
	 * WeakMap requires the key to be an object, this is only possible when the
	 * dependant is object-like. The root cache is created as a hierarchy where
	 * each top-level key is the first entry in a dependants set, the value a
	 * WeakMap where each key is the next dependant, and so on. This continues
	 * so long as the dependants are object-like. If no dependants are object-
	 * like, then the cache is shared across all invocations.
	 *
	 * @see isObjectLike
	 *
	 * @param {Array} dependants Selector dependants.
	 *
	 * @return {Object} Cache object.
	 */
	function getWeakMapCache( dependants ) {
		var caches = rootCache,
			isUniqueByDependants = true,
			i, dependant, map, cache;

		for ( i = 0; i < dependants.length; i++ ) {
			dependant = dependants[ i ];

			// Can only compose WeakMap from object-like key.
			if ( ! isObjectLike( dependant ) ) {
				isUniqueByDependants = false;
				break;
			}

			// Does current segment of cache already have a WeakMap?
			if ( caches.has( dependant ) ) {
				// Traverse into nested WeakMap.
				caches = caches.get( dependant );
			} else {
				// Create, set, and traverse into a new one.
				map = new WeakMap();
				caches.set( dependant, map );
				caches = map;
			}
		}

		// We use an arbitrary (but consistent) object as key for the last item
		// in the WeakMap to serve as our running cache.
		if ( ! caches.has( LEAF_KEY ) ) {
			cache = createCache();
			cache.isUniqueByDependants = isUniqueByDependants;
			caches.set( LEAF_KEY, cache );
		}

		return caches.get( LEAF_KEY );
	}

	// Assign cache handler by availability of WeakMap
	getCache = hasWeakMap ? getWeakMapCache : getRootCache;

	/**
	 * Resets root memoization cache.
	 */
	function clear() {
		rootCache = hasWeakMap ? new WeakMap() : createCache();
	}

	// eslint-disable-next-line jsdoc/check-param-names
	/**
	 * The augmented selector call, considering first whether dependants have
	 * changed before passing it to underlying memoize function.
	 *
	 * @param {Object} source    Source object for derivation.
	 * @param {...*}   extraArgs Additional arguments to pass to selector.
	 *
	 * @return {*} Selector result.
	 */
	function callSelector( /* source, ...extraArgs */ ) {
		var len = arguments.length,
			cache, node, i, args, dependants;

		// Create copy of arguments (avoid leaking deoptimization).
		args = new Array( len );
		for ( i = 0; i < len; i++ ) {
			args[ i ] = arguments[ i ];
		}

		dependants = getDependants.apply( null, args );
		cache = getCache( dependants );

		// If not guaranteed uniqueness by dependants (primitive type or lack
		// of WeakMap support), shallow compare against last dependants and, if
		// references have changed, destroy cache to recalculate result.
		if ( ! cache.isUniqueByDependants ) {
			if ( cache.lastDependants && ! isShallowEqual( dependants, cache.lastDependants, 0 ) ) {
				cache.clear();
			}

			cache.lastDependants = dependants;
		}

		node = cache.head;
		while ( node ) {
			// Check whether node arguments match arguments
			if ( ! isShallowEqual( node.args, args, 1 ) ) {
				node = node.next;
				continue;
			}

			// At this point we can assume we've found a match

			// Surface matched node to head if not already
			if ( node !== cache.head ) {
				// Adjust siblings to point to each other.
				node.prev.next = node.next;
				if ( node.next ) {
					node.next.prev = node.prev;
				}

				node.next = cache.head;
				node.prev = null;
				cache.head.prev = node;
				cache.head = node;
			}

			// Return immediately
			return node.val;
		}

		// No cached value found. Continue to insertion phase:

		node = {
			// Generate the result from original function
			val: selector.apply( null, args ),
		};

		// Avoid including the source object in the cache.
		args[ 0 ] = null;
		node.args = args;

		// Don't need to check whether node is already head, since it would
		// have been returned above already if it was

		// Shift existing head down list
		if ( cache.head ) {
			cache.head.prev = node;
			node.next = cache.head;
		}

		cache.head = node;

		return node.val;
	}

	callSelector.getDependants = getDependants;
	callSelector.clear = clear;
	clear();

	return callSelector;
});


/***/ }),
/* 43 */,
/* 44 */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blob"]; }());

/***/ }),
/* 45 */,
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useLiveRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useIsomorphicEffect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59);



/**
 * A `React.Ref` that keeps track of the passed `value`.
 */

function useLiveRef(value) {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(value);
  Object(_useIsomorphicEffect_js__WEBPACK_IMPORTED_MODULE_1__[/* useIsomorphicEffect */ "a"])(function () {
    ref.current = value;
  });
  return ref;
}




/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDocument; });
/**
 * Returns `element.ownerDocument || window.document`.
 */
function getDocument(element) {
  return element ? element.ownerDocument || element : window.document;
}




/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ createHook; });

// EXTERNAL MODULE: external {"this":"React"}
var external_this_React_ = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/reakit-system/es/SystemContext.js
var SystemContext = __webpack_require__(74);

// CONCATENATED MODULE: ./node_modules/reakit-system/es/useToken.js



/**
 * React custom hook that returns the value of any token defined in the
 * SystemContext. It's mainly used internally in [`useOptions`](#useoptions)
 * and [`useProps`](#useprops).
 *
 * @example
 * import { SystemProvider, useToken } from "reakit-system";
 *
 * const system = {
 *   token: "value",
 * };
 *
 * function Component(props) {
 *   const token = useToken("token", "default value");
 *   return <div {...props}>{token}</div>;
 * }
 *
 * function App() {
 *   return (
 *     <SystemProvider unstable_system={system}>
 *       <Component />
 *     </SystemProvider>
 *   );
 * }
 */

function useToken(token, defaultValue) {
  Object(external_this_React_["useDebugValue"])(token);
  var context = Object(external_this_React_["useContext"])(SystemContext["a" /* SystemContext */]);
  return context[token] != null ? context[token] : defaultValue;
}



// CONCATENATED MODULE: ./node_modules/reakit-system/es/useProps.js




/**
 * React custom hook that returns the props returned by a given
 * `use${name}Props` in the SystemContext.
 *
 * @example
 * import { SystemProvider, useProps } from "reakit-system";
 *
 * const system = {
 *   useAProps(options, htmlProps) {
 *     return {
 *       ...htmlProps,
 *       href: options.url,
 *     };
 *   },
 * };
 *
 * function A({ url, ...htmlProps }) {
 *   const props = useProps("A", { url }, htmlProps);
 *   return <a {...props} />;
 * }
 *
 * function App() {
 *   return (
 *     <SystemProvider unstable_system={system}>
 *       <A url="url">It will convert url into href in useAProps</A>
 *     </SystemProvider>
 *   );
 * }
 */

function useProps(name, options, htmlProps) {
  if (options === void 0) {
    options = {};
  }

  if (htmlProps === void 0) {
    htmlProps = {};
  }

  var hookName = "use" + name + "Props";
  Object(external_this_React_["useDebugValue"])(hookName);
  var useHook = useToken(hookName);

  if (useHook) {
    return useHook(options, htmlProps);
  }

  return htmlProps;
}



// EXTERNAL MODULE: ./node_modules/reakit-system/es/_rollupPluginBabelHelpers-0c84a174.js
var _rollupPluginBabelHelpers_0c84a174 = __webpack_require__(55);

// CONCATENATED MODULE: ./node_modules/reakit-system/es/useOptions.js





/**
 * React custom hook that returns the options returned by a given
 * `use${name}Options` in the SystemContext.
 *
 * @example
 * import React from "react";
 * import { SystemProvider, useOptions } from "reakit-system";
 *
 * const system = {
 *   useAOptions(options, htmlProps) {
 *     return {
 *       ...options,
 *       url: htmlProps.href,
 *     };
 *   },
 * };
 *
 * function A({ url, ...htmlProps }) {
 *   const options = useOptions("A", { url }, htmlProps);
 *   return <a href={options.url} {...htmlProps} />;
 * }
 *
 * function App() {
 *   return (
 *     <SystemProvider unstable_system={system}>
 *       <A href="url">
 *         It will convert href into url in useAOptions and then url into href in A
 *       </A>
 *     </SystemProvider>
 *   );
 * }
 */

function useOptions(name, options, htmlProps) {
  if (options === void 0) {
    options = {};
  }

  if (htmlProps === void 0) {
    htmlProps = {};
  }

  var hookName = "use" + name + "Options";
  Object(external_this_React_["useDebugValue"])(hookName);
  var useHook = useToken(hookName);

  if (useHook) {
    return Object(_rollupPluginBabelHelpers_0c84a174["a" /* _ */])(Object(_rollupPluginBabelHelpers_0c84a174["a" /* _ */])({}, options), useHook(options, htmlProps));
  }

  return options;
}



// EXTERNAL MODULE: ./node_modules/reakit-utils/es/shallowEqual.js
var shallowEqual = __webpack_require__(56);

// CONCATENATED MODULE: ./node_modules/reakit-utils/es/toArray.js
/**
 * Transforms `arg` into an array if it's not already.
 *
 * @example
 * import { toArray } from "reakit-utils";
 *
 * toArray("a"); // ["a"]
 * toArray(["a"]); // ["a"]
 */
function toArray(arg) {
  if (Array.isArray(arg)) {
    return arg;
  }

  return typeof arg !== "undefined" ? [arg] : [];
}



// CONCATENATED MODULE: ./node_modules/reakit-system/es/createHook.js









/**
 * Creates a React custom hook that will return component props.
 *
 * @example
 * import { createHook } from "reakit-system";
 *
 * const useA = createHook({
 *   name: "A",
 *   keys: ["url"], // custom props/options keys
 *   useProps(options, htmlProps) {
 *     return {
 *       ...htmlProps,
 *       href: options.url,
 *     };
 *   },
 * });
 *
 * function A({ url, ...htmlProps }) {
 *   const props = useA({ url }, htmlProps);
 *   return <a {...props} />;
 * }
 *
 * @param options
 */
function createHook(options) {
  var _options$useState, _composedHooks$;

  var composedHooks = toArray(options.compose);

  var __useOptions = function __useOptions(hookOptions, htmlProps) {
    // Call the current hook's useOptions first
    if (options.useOptions) {
      hookOptions = options.useOptions(hookOptions, htmlProps);
    } // If there's name, call useOptions from the system context


    if (options.name) {
      hookOptions = useOptions(options.name, hookOptions, htmlProps);
    } // Run composed hooks useOptions


    if (options.compose) {
      for (var _iterator = Object(_rollupPluginBabelHelpers_0c84a174["c" /* b */])(composedHooks), _step; !(_step = _iterator()).done;) {
        var hook = _step.value;
        hookOptions = hook.__useOptions(hookOptions, htmlProps);
      }
    }

    return hookOptions;
  };

  var useHook = function useHook(hookOptions, htmlProps, unstable_ignoreUseOptions) {
    if (hookOptions === void 0) {
      hookOptions = {};
    }

    if (htmlProps === void 0) {
      htmlProps = {};
    }

    if (unstable_ignoreUseOptions === void 0) {
      unstable_ignoreUseOptions = false;
    }

    // This won't execute when useHook was called from within another useHook
    if (!unstable_ignoreUseOptions) {
      hookOptions = __useOptions(hookOptions, htmlProps);
    } // Call the current hook's useProps


    if (options.useProps) {
      htmlProps = options.useProps(hookOptions, htmlProps);
    } // If there's name, call useProps from the system context


    if (options.name) {
      htmlProps = useProps(options.name, hookOptions, htmlProps);
    }

    if (options.compose) {
      if (options.useComposeOptions) {
        hookOptions = options.useComposeOptions(hookOptions, htmlProps);
      }

      if (options.useComposeProps) {
        htmlProps = options.useComposeProps(hookOptions, htmlProps);
      } else {
        for (var _iterator2 = Object(_rollupPluginBabelHelpers_0c84a174["c" /* b */])(composedHooks), _step2; !(_step2 = _iterator2()).done;) {
          var hook = _step2.value;
          htmlProps = hook(hookOptions, htmlProps, true);
        }
      }
    } // Remove undefined values from htmlProps


    var finalHTMLProps = {};
    var definedHTMLProps = htmlProps || {};

    for (var prop in definedHTMLProps) {
      if (definedHTMLProps[prop] !== undefined) {
        finalHTMLProps[prop] = definedHTMLProps[prop];
      }
    }

    return finalHTMLProps;
  };

  useHook.__useOptions = __useOptions;
  var composedKeys = composedHooks.reduce(function (keys, hook) {
    keys.push.apply(keys, hook.__keys || []);
    return keys;
  }, []); // It's used by createComponent to split option props (keys) and html props

  useHook.__keys = [].concat(composedKeys, ((_options$useState = options.useState) === null || _options$useState === void 0 ? void 0 : _options$useState.__keys) || [], options.keys || []);
  useHook.unstable_propsAreEqual = options.propsAreEqual || ((_composedHooks$ = composedHooks[0]) === null || _composedHooks$ === void 0 ? void 0 : _composedHooks$.unstable_propsAreEqual) || shallowEqual["a" /* shallowEqual */];

  if (false) {}

  return useHook;
}




/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ createComponent; });

// EXTERNAL MODULE: external {"this":"React"}
var external_this_React_ = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/reakit-system/es/_rollupPluginBabelHelpers-0c84a174.js
var _rollupPluginBabelHelpers_0c84a174 = __webpack_require__(55);

// EXTERNAL MODULE: ./node_modules/reakit-system/es/useCreateElement.js
var useCreateElement = __webpack_require__(78);

// CONCATENATED MODULE: ./node_modules/reakit-utils/es/splitProps.js
/**
 * Splits an object (`props`) into a tuple where the first item is an object
 * with the passed `keys`, and the second item is an object with these keys
 * omitted.
 *
 * @example
 * import { splitProps } from "reakit-utils";
 *
 * splitProps({ a: "a", b: "b" }, ["a"]); // [{ a: "a" }, { b: "b" }]
 */
function splitProps(props, keys) {
  var propsKeys = Object.keys(props);
  var picked = {};
  var omitted = {};

  for (var _i = 0, _propsKeys = propsKeys; _i < _propsKeys.length; _i++) {
    var key = _propsKeys[_i];

    if (keys.indexOf(key) >= 0) {
      picked[key] = props[key];
    } else {
      omitted[key] = props[key];
    }
  }

  return [picked, omitted];
}



// EXTERNAL MODULE: ./node_modules/reakit-utils/es/shallowEqual.js
var shallowEqual = __webpack_require__(56);

// CONCATENATED MODULE: ./node_modules/reakit-system/es/createComponent.js







function forwardRef(component) {
  return /*#__PURE__*/Object(external_this_React_["forwardRef"])(component);
}

function memo(component, propsAreEqual) {
  return /*#__PURE__*/Object(external_this_React_["memo"])(component, propsAreEqual);
}

/**
 * Creates a React component.
 *
 * @example
 * import { createComponent } from "reakit-system";
 *
 * const A = createComponent({ as: "a" });
 *
 * @param options
 */
function createComponent(_ref) {
  var type = _ref.as,
      useHook = _ref.useHook,
      shouldMemo = _ref.memo,
      _ref$propsAreEqual = _ref.propsAreEqual,
      propsAreEqual = _ref$propsAreEqual === void 0 ? useHook === null || useHook === void 0 ? void 0 : useHook.unstable_propsAreEqual : _ref$propsAreEqual,
      _ref$keys = _ref.keys,
      keys = _ref$keys === void 0 ? (useHook === null || useHook === void 0 ? void 0 : useHook.__keys) || [] : _ref$keys,
      _ref$useCreateElement = _ref.useCreateElement,
      useCreateElement$1 = _ref$useCreateElement === void 0 ? useCreateElement["a" /* useCreateElement */] : _ref$useCreateElement;

  var Comp = function Comp(_ref2, ref) {
    var _ref2$as = _ref2.as,
        as = _ref2$as === void 0 ? type : _ref2$as,
        props = Object(_rollupPluginBabelHelpers_0c84a174["b" /* a */])(_ref2, ["as"]);

    if (useHook) {
      var _as$render;

      var _splitProps = splitProps(props, keys),
          _options = _splitProps[0],
          htmlProps = _splitProps[1];

      var _useHook = useHook(_options, Object(_rollupPluginBabelHelpers_0c84a174["a" /* _ */])({
        ref: ref
      }, htmlProps)),
          wrapElement = _useHook.wrapElement,
          elementProps = Object(_rollupPluginBabelHelpers_0c84a174["b" /* a */])(_useHook, ["wrapElement"]); // @ts-ignore


      var asKeys = ((_as$render = as.render) === null || _as$render === void 0 ? void 0 : _as$render.__keys) || as.__keys;
      var asOptions = asKeys && splitProps(props, asKeys)[0];
      var allProps = asOptions ? Object(_rollupPluginBabelHelpers_0c84a174["a" /* _ */])(Object(_rollupPluginBabelHelpers_0c84a174["a" /* _ */])({}, elementProps), asOptions) : elementProps;

      var _element = useCreateElement$1(as, allProps);

      if (wrapElement) {
        return wrapElement(_element);
      }

      return _element;
    }

    return useCreateElement$1(as, Object(_rollupPluginBabelHelpers_0c84a174["a" /* _ */])({
      ref: ref
    }, props));
  };

  if (false) {}

  Comp = forwardRef(Comp);

  if (shouldMemo) {
    Comp = memo(Comp, propsAreEqual);
  }

  Comp.__keys = keys;
  Comp.unstable_propsAreEqual = propsAreEqual || shallowEqual["a" /* shallowEqual */];
  return Comp;
}




/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return findFirstEnabledItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return groupItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return findEnabledItemById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getCurrentId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return reverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return useCompositeState; });
/* harmony import */ var _rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reakit_utils_useIsomorphicEffect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59);
/* harmony import */ var reakit_utils_useSealedState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62);
/* harmony import */ var reakit_utils_applyState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61);
/* harmony import */ var _Id_IdState_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65);







function reverse(array) {
  return array.slice().reverse();
}

function isElementPreceding(element1, element2) {
  return Boolean(element2.compareDocumentPosition(element1) & Node.DOCUMENT_POSITION_PRECEDING);
}

function findDOMIndex(items, item) {
  return items.findIndex(function (currentItem) {
    if (!currentItem.ref.current || !item.ref.current) {
      return false;
    }

    return isElementPreceding(item.ref.current, currentItem.ref.current);
  });
}

function findFirstEnabledItem(items, excludeId) {
  if (excludeId) {
    return items.find(function (item) {
      return !item.disabled && item.id !== excludeId;
    });
  }

  return items.find(function (item) {
    return !item.disabled;
  });
}

function findEnabledItemById(items, id) {
  if (!id) return undefined;
  return items === null || items === void 0 ? void 0 : items.find(function (item) {
    return item.id === id && !item.disabled;
  });
}

function groupItems(items) {
  var groups = [[]];

  var _loop = function _loop() {
    var item = _step.value;
    var group = groups.find(function (g) {
      return !g[0] || g[0].groupId === item.groupId;
    });

    if (group) {
      group.push(item);
    } else {
      groups.push([item]);
    }
  };

  for (var _iterator = Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* b */ "c"])(items), _step; !(_step = _iterator()).done;) {
    _loop();
  }

  return groups;
}

function getMaxLength(rows) {
  var maxLength = 0;

  for (var _iterator = Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* b */ "c"])(rows), _step; !(_step = _iterator()).done;) {
    var length = _step.value.length;

    if (length > maxLength) {
      maxLength = length;
    }
  }

  return maxLength;
}

/**
 * Turns [row1, row1, row2, row2] into [row1, row2, row1, row2]
 */

function verticalizeItems(items) {
  var groups = groupItems(items);
  var maxLength = getMaxLength(groups);
  var verticalized = [];

  for (var i = 0; i < maxLength; i += 1) {
    for (var _iterator = Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* b */ "c"])(groups), _step; !(_step = _iterator()).done;) {
      var group = _step.value;

      if (group[i]) {
        verticalized.push(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({}, group[i]), {}, {
          // If there's no groupId, it means that it's not a grid composite,
          // but a single row instead. So, instead of verticalizing it, that
          // is, assigning a different groupId based on the column index, we
          // keep it undefined so they will be part of the same group.
          // It's useful when using up/down on one-dimensional composites.
          groupId: group[i].groupId ? "" + i : undefined
        }));
      }
    }
  }

  return verticalized;
}

function flatten(grid) {
  var flattened = [];

  for (var _iterator = Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* b */ "c"])(grid), _step; !(_step = _iterator()).done;) {
    var row = _step.value;
    flattened.push.apply(flattened, row);
  }

  return flattened;
}

/**
 * Turns [[row1, row1], [row2]] into [[row1, row1], [row2, row2]]
 */

function fillGroups(groups) {
  var maxLength = getMaxLength(groups);

  for (var _iterator = Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* b */ "c"])(groups), _step; !(_step = _iterator()).done;) {
    var group = _step.value;

    if (group.length < maxLength) {
      for (var i = 0; i < maxLength; i += 1) {
        if (!group[i]) {
          group[i] = {
            id: "__EMPTY_ITEM__",
            disabled: true,
            ref: {
              current: null
            },
            groupId: group[i - 1].groupId
          };
        }
      }
    }
  }

  return groups;
}

function getCurrentId(options, passedId) {
  var _findFirstEnabledItem;

  if (passedId || passedId === null) {
    return passedId;
  }

  if (options.currentId || options.currentId === null) {
    return options.currentId;
  }

  return (_findFirstEnabledItem = findFirstEnabledItem(options.items || [])) === null || _findFirstEnabledItem === void 0 ? void 0 : _findFirstEnabledItem.id;
}

var nullItem = {
  id: null,
  ref: {
    current: null
  }
};
function placeItemsAfter(items, id, shouldInsertNullItem) {
  var index = items.findIndex(function (item) {
    return item.id === id;
  });
  return [].concat(items.slice(index + 1), shouldInsertNullItem ? [nullItem] : [], items.slice(0, index));
}

function getItemsInGroup(items, groupId) {
  return items.filter(function (item) {
    return item.groupId === groupId;
  });
}

var map = {
  horizontal: "vertical",
  vertical: "horizontal"
};
function getOppositeOrientation(orientation) {
  return orientation && map[orientation];
}

function addItemAtIndex(array, item, index) {
  if (!(index in array)) {
    return [].concat(array, [item]);
  }

  return [].concat(array.slice(0, index), [item], array.slice(index));
}

function sortBasedOnDOMPosition(items) {
  var copy = items.slice();
  var isOrderDifferent = false;
  copy.sort(function (a, b) {
    var elementA = a.ref.current;
    var elementB = b.ref.current;

    if (elementA && elementB && isElementPreceding(elementA, elementB)) {
      isOrderDifferent = true;
      return -1;
    }

    return 0;
  });

  if (isOrderDifferent) {
    return copy;
  }

  return items;
}

function reducer(state, action) {
  var virtual = state.unstable_virtual,
      rtl = state.rtl,
      orientation = state.orientation,
      items = state.items,
      groups = state.groups,
      currentId = state.currentId,
      loop = state.loop,
      wrap = state.wrap,
      pastIds = state.pastIds,
      moves = state.unstable_moves,
      initialVirtual = state.initialVirtual,
      initialRTL = state.initialRTL,
      initialOrientation = state.initialOrientation,
      initialCurrentId = state.initialCurrentId,
      initialLoop = state.initialLoop,
      initialWrap = state.initialWrap,
      hasSetCurrentId = state.hasSetCurrentId;

  switch (action.type) {
    case "registerGroup":
      {
        var _group = action.group; // If there are no groups yet, just add it as the first one

        if (groups.length === 0) {
          return Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({}, state), {}, {
            groups: [_group]
          });
        } // Finds the group index based on DOM position


        var index = findDOMIndex(groups, _group);
        return Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({}, state), {}, {
          groups: addItemAtIndex(groups, _group, index)
        });
      }

    case "unregisterGroup":
      {
        var _id = action.id;
        var nextGroups = groups.filter(function (group) {
          return group.id !== _id;
        }); // The group isn't registered, so do nothing

        if (nextGroups.length === groups.length) {
          return state;
        }

        return Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({}, state), {}, {
          groups: nextGroups
        });
      }

    case "registerItem":
      {
        var _item = action.item; // Finds the item group based on the DOM hierarchy

        var _group2 = groups.find(function (r) {
          var _r$ref$current;

          return (_r$ref$current = r.ref.current) === null || _r$ref$current === void 0 ? void 0 : _r$ref$current.contains(_item.ref.current);
        }); // Group will be null if it's a one-dimensional composite


        var nextItem = Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({
          groupId: _group2 === null || _group2 === void 0 ? void 0 : _group2.id
        }, _item);

        var _index = findDOMIndex(items, nextItem);

        var nextState = Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({}, state), {}, {
          items: addItemAtIndex(items, nextItem, _index)
        });

        if (!hasSetCurrentId && !moves && initialCurrentId === undefined) {
          var _findFirstEnabledItem;

          // Sets currentId to the first enabled item. This runs whenever an item
          // is registered because the first enabled item may be registered
          // asynchronously.
          return Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({}, nextState), {}, {
            currentId: (_findFirstEnabledItem = findFirstEnabledItem(nextState.items)) === null || _findFirstEnabledItem === void 0 ? void 0 : _findFirstEnabledItem.id
          });
        }

        return nextState;
      }

    case "unregisterItem":
      {
        var _id2 = action.id;
        var nextItems = items.filter(function (item) {
          return item.id !== _id2;
        }); // The item isn't registered, so do nothing

        if (nextItems.length === items.length) {
          return state;
        } // Filters out the item that is being removed from the pastIds list


        var nextPastIds = pastIds.filter(function (pastId) {
          return pastId !== _id2;
        });

        var _nextState = Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({}, state), {}, {
          pastIds: nextPastIds,
          items: nextItems
        }); // If the current item is the item that is being removed, focus pastId


        if (currentId && currentId === _id2) {
          var nextId = getCurrentId(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({}, _nextState), {}, {
            currentId: nextPastIds[0]
          }));
          return Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({}, _nextState), {}, {
            currentId: nextId
          });
        }

        return _nextState;
      }

    case "move":
      {
        var _id3 = action.id; // move() does nothing

        if (_id3 === undefined) {
          return state;
        } // Removes the current item and the item that is receiving focus from the
        // pastIds list


        var filteredPastIds = pastIds.filter(function (pastId) {
          return pastId !== currentId && pastId !== _id3;
        }); // If there's a currentId, add it to the pastIds list so it can be focused
        // if the new item gets removed or disabled

        var _nextPastIds = currentId ? [currentId].concat(filteredPastIds) : filteredPastIds;

        var _nextState2 = Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({}, state), {}, {
          pastIds: _nextPastIds
        }); // move(null) will focus the composite element itself, not an item


        if (_id3 === null) {
          return Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({}, _nextState2), {}, {
            unstable_moves: moves + 1,
            currentId: getCurrentId(_nextState2, _id3)
          });
        }

        var _item2 = findEnabledItemById(items, _id3);

        return Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({}, _nextState2), {}, {
          unstable_moves: _item2 ? moves + 1 : moves,
          currentId: getCurrentId(_nextState2, _item2 === null || _item2 === void 0 ? void 0 : _item2.id)
        });
      }

    case "next":
      {
        // If there's no item focused, we just move the first one
        if (currentId == null) {
          return reducer(state, Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({}, action), {}, {
            type: "first"
          }));
        } // RTL doesn't make sense on vertical navigation


        var isHorizontal = orientation !== "vertical";
        var isRTL = rtl && isHorizontal;
        var allItems = isRTL ? reverse(items) : items;
        var currentItem = allItems.find(function (item) {
          return item.id === currentId;
        }); // If there's no item focused, we just move the first one

        if (!currentItem) {
          return reducer(state, Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({}, action), {}, {
            type: "first"
          }));
        }

        var isGrid = !!currentItem.groupId;
        var currentIndex = allItems.indexOf(currentItem);

        var _nextItems = allItems.slice(currentIndex + 1);

        var nextItemsInGroup = getItemsInGroup(_nextItems, currentItem.groupId); // Home, End

        if (action.allTheWay) {
          // We reverse so we can get the last enabled item in the group. If it's
          // RTL, nextItems and nextItemsInGroup are already reversed and don't
          // have the items before the current one anymore. So we have to get
          // items in group again with allItems.
          var _nextItem2 = findFirstEnabledItem(isRTL ? getItemsInGroup(allItems, currentItem.groupId) : reverse(nextItemsInGroup));

          return reducer(state, Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({}, action), {}, {
            type: "move",
            id: _nextItem2 === null || _nextItem2 === void 0 ? void 0 : _nextItem2.id
          }));
        }

        var oppositeOrientation = getOppositeOrientation( // If it's a grid and orientation is not set, it's a next/previous
        // call, which is inherently horizontal. up/down will call next with
        // orientation set to vertical by default (see below on up/down cases).
        isGrid ? orientation || "horizontal" : orientation);
        var canLoop = loop && loop !== oppositeOrientation;
        var canWrap = isGrid && wrap && wrap !== oppositeOrientation;
        var hasNullItem = // `previous` and `up` will set action.hasNullItem, but when calling
        // next directly, hasNullItem will only be true if it's not a grid and
        // loop is set to true, which means that pressing right or down keys on
        // grids will never focus the composite element. On one-dimensional
        // composites that don't loop, pressing right or down keys also doesn't
        // focus the composite element.
        action.hasNullItem || !isGrid && canLoop && initialCurrentId === null;

        if (canLoop) {
          var loopItems = canWrap && !hasNullItem ? allItems : getItemsInGroup(allItems, currentItem.groupId); // Turns [0, 1, current, 3, 4] into [3, 4, 0, 1]

          var sortedItems = placeItemsAfter(loopItems, currentId, hasNullItem);

          var _nextItem3 = findFirstEnabledItem(sortedItems, currentId);

          return reducer(state, Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({}, action), {}, {
            type: "move",
            id: _nextItem3 === null || _nextItem3 === void 0 ? void 0 : _nextItem3.id
          }));
        }

        if (canWrap) {
          var _nextItem4 = findFirstEnabledItem( // We can use nextItems, which contains all the next items, including
          // items from other groups, to wrap between groups. However, if there
          // is a null item (the composite element), we'll only use the next
          // items in the group. So moving next from the last item will focus
          // the composite element (null). On grid composites, horizontal
          // navigation never focuses the composite element, only vertical.
          hasNullItem ? nextItemsInGroup : _nextItems, currentId);

          var _nextId = hasNullItem ? (_nextItem4 === null || _nextItem4 === void 0 ? void 0 : _nextItem4.id) || null : _nextItem4 === null || _nextItem4 === void 0 ? void 0 : _nextItem4.id;

          return reducer(state, Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({}, action), {}, {
            type: "move",
            id: _nextId
          }));
        }

        var _nextItem = findFirstEnabledItem(nextItemsInGroup, currentId);

        if (!_nextItem && hasNullItem) {
          return reducer(state, Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({}, action), {}, {
            type: "move",
            id: null
          }));
        }

        return reducer(state, Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({}, action), {}, {
          type: "move",
          id: _nextItem === null || _nextItem === void 0 ? void 0 : _nextItem.id
        }));
      }

    case "previous":
      {
        // If currentId is initially set to null, the composite element will be
        // focusable while navigating with arrow keys. But, if it's a grid, we
        // don't want to focus the composite element with horizontal navigation.
        var _isGrid = !!groups.length;

        var _hasNullItem = !_isGrid && initialCurrentId === null;

        var _nextState3 = reducer(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({}, state), {}, {
          items: reverse(items)
        }), Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({}, action), {}, {
          type: "next",
          hasNullItem: _hasNullItem
        }));

        return Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({}, _nextState3), {}, {
          items: items
        });
      }

    case "down":
      {
        // First, we make sure groups have the same number of items by filling it
        // with disabled fake items. Then, we reorganize the items list so
        // [1-1, 1-2, 2-1, 2-2] becomes [1-1, 2-1, 1-2, 2-2].
        var verticalItems = verticalizeItems(flatten(fillGroups(groupItems(items))));

        var _canLoop = loop && loop !== "horizontal"; // Pressing down arrow key will only focus the composite element if loop
        // is true or vertical.


        var _hasNullItem2 = _canLoop && initialCurrentId === null;

        var _nextState4 = reducer(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({}, state), {}, {
          orientation: "vertical",
          items: verticalItems
        }), Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({}, action), {}, {
          type: "next",
          hasNullItem: _hasNullItem2
        }));

        return Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({}, _nextState4), {}, {
          orientation: orientation,
          items: items
        });
      }

    case "up":
      {
        var _verticalItems = verticalizeItems(reverse(flatten(fillGroups(groupItems(items))))); // If currentId is initially set to null, we'll always focus the
        // composite element when the up arrow key is pressed in the first row.


        var _hasNullItem3 = initialCurrentId === null;

        var _nextState5 = reducer(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({}, state), {}, {
          orientation: "vertical",
          items: _verticalItems
        }), Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({}, action), {}, {
          type: "next",
          hasNullItem: _hasNullItem3
        }));

        return Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({}, _nextState5), {}, {
          orientation: orientation,
          items: items
        });
      }

    case "first":
      {
        var firstItem = findFirstEnabledItem(items);
        return reducer(state, Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({}, action), {}, {
          type: "move",
          id: firstItem === null || firstItem === void 0 ? void 0 : firstItem.id
        }));
      }

    case "last":
      {
        var _nextState6 = reducer(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({}, state), {}, {
          items: reverse(items)
        }), Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({}, action), {}, {
          type: "first"
        }));

        return Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({}, _nextState6), {}, {
          items: items
        });
      }

    case "sort":
      {
        return Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({}, state), {}, {
          items: sortBasedOnDOMPosition(items),
          groups: sortBasedOnDOMPosition(groups)
        });
      }

    case "setVirtual":
      return Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({}, state), {}, {
        unstable_virtual: Object(reakit_utils_applyState__WEBPACK_IMPORTED_MODULE_4__[/* applyState */ "a"])(action.virtual, virtual)
      });

    case "setRTL":
      return Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({}, state), {}, {
        rtl: Object(reakit_utils_applyState__WEBPACK_IMPORTED_MODULE_4__[/* applyState */ "a"])(action.rtl, rtl)
      });

    case "setOrientation":
      return Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({}, state), {}, {
        orientation: Object(reakit_utils_applyState__WEBPACK_IMPORTED_MODULE_4__[/* applyState */ "a"])(action.orientation, orientation)
      });

    case "setCurrentId":
      {
        var nextCurrentId = getCurrentId(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({}, state), {}, {
          currentId: Object(reakit_utils_applyState__WEBPACK_IMPORTED_MODULE_4__[/* applyState */ "a"])(action.currentId, currentId)
        }));
        return Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({}, state), {}, {
          currentId: nextCurrentId,
          hasSetCurrentId: true
        });
      }

    case "setLoop":
      return Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({}, state), {}, {
        loop: Object(reakit_utils_applyState__WEBPACK_IMPORTED_MODULE_4__[/* applyState */ "a"])(action.loop, loop)
      });

    case "setWrap":
      return Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({}, state), {}, {
        wrap: Object(reakit_utils_applyState__WEBPACK_IMPORTED_MODULE_4__[/* applyState */ "a"])(action.wrap, wrap)
      });

    case "reset":
      return Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({}, state), {}, {
        unstable_virtual: initialVirtual,
        rtl: initialRTL,
        orientation: initialOrientation,
        currentId: getCurrentId(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({}, state), {}, {
          currentId: initialCurrentId
        })),
        loop: initialLoop,
        wrap: initialWrap,
        unstable_moves: 0,
        pastIds: []
      });

    default:
      throw new Error();
  }
}

function useAction(fn) {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(fn, []);
}

function useIsUnmountedRef() {
  var isUnmountedRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);
  Object(reakit_utils_useIsomorphicEffect__WEBPACK_IMPORTED_MODULE_2__[/* useIsomorphicEffect */ "a"])(function () {
    return function () {
      isUnmountedRef.current = true;
    };
  }, []);
  return isUnmountedRef;
}

function useCompositeState(initialState) {
  if (initialState === void 0) {
    initialState = {};
  }

  var _useSealedState = Object(reakit_utils_useSealedState__WEBPACK_IMPORTED_MODULE_3__[/* useSealedState */ "a"])(initialState),
      _useSealedState$unsta = _useSealedState.unstable_virtual,
      virtual = _useSealedState$unsta === void 0 ? false : _useSealedState$unsta,
      _useSealedState$rtl = _useSealedState.rtl,
      rtl = _useSealedState$rtl === void 0 ? false : _useSealedState$rtl,
      orientation = _useSealedState.orientation,
      currentId = _useSealedState.currentId,
      _useSealedState$loop = _useSealedState.loop,
      loop = _useSealedState$loop === void 0 ? false : _useSealedState$loop,
      _useSealedState$wrap = _useSealedState.wrap,
      wrap = _useSealedState$wrap === void 0 ? false : _useSealedState$wrap,
      sealed = Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* _ */ "a"])(_useSealedState, ["unstable_virtual", "rtl", "orientation", "currentId", "loop", "wrap"]);

  var _React$useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(reducer, {
    unstable_virtual: virtual,
    rtl: rtl,
    orientation: orientation,
    items: [],
    groups: [],
    currentId: currentId,
    loop: loop,
    wrap: wrap,
    unstable_moves: 0,
    pastIds: [],
    initialVirtual: virtual,
    initialRTL: rtl,
    initialOrientation: orientation,
    initialCurrentId: currentId,
    initialLoop: loop,
    initialWrap: wrap
  }),
      _React$useReducer$ = _React$useReducer[0],
      pastIds = _React$useReducer$.pastIds,
      initialVirtual = _React$useReducer$.initialVirtual,
      initialRTL = _React$useReducer$.initialRTL,
      initialOrientation = _React$useReducer$.initialOrientation,
      initialCurrentId = _React$useReducer$.initialCurrentId,
      initialLoop = _React$useReducer$.initialLoop,
      initialWrap = _React$useReducer$.initialWrap,
      hasSetCurrentId = _React$useReducer$.hasSetCurrentId,
      state = Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* _ */ "a"])(_React$useReducer$, ["pastIds", "initialVirtual", "initialRTL", "initialOrientation", "initialCurrentId", "initialLoop", "initialWrap", "hasSetCurrentId"]),
      dispatch = _React$useReducer[1];

  var _React$useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      hasActiveWidget = _React$useState[0],
      setHasActiveWidget = _React$useState[1];

  var idState = Object(_Id_IdState_js__WEBPACK_IMPORTED_MODULE_5__[/* unstable_useIdState */ "a"])(sealed); // register/unregister may be called when this component is unmounted. We
  // store the unmounted state here so we don't update the state if it's true.
  // This only happens in a very specific situation.
  // See https://github.com/reakit/reakit/issues/650

  var isUnmountedRef = useIsUnmountedRef();
  return Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({}, idState), state), {}, {
    unstable_hasActiveWidget: hasActiveWidget,
    unstable_setHasActiveWidget: setHasActiveWidget,
    registerItem: useAction(function (item) {
      if (isUnmountedRef.current) return;
      dispatch({
        type: "registerItem",
        item: item
      });
    }),
    unregisterItem: useAction(function (id) {
      if (isUnmountedRef.current) return;
      dispatch({
        type: "unregisterItem",
        id: id
      });
    }),
    registerGroup: useAction(function (group) {
      if (isUnmountedRef.current) return;
      dispatch({
        type: "registerGroup",
        group: group
      });
    }),
    unregisterGroup: useAction(function (id) {
      if (isUnmountedRef.current) return;
      dispatch({
        type: "unregisterGroup",
        id: id
      });
    }),
    move: useAction(function (id) {
      return dispatch({
        type: "move",
        id: id
      });
    }),
    next: useAction(function (allTheWay) {
      return dispatch({
        type: "next",
        allTheWay: allTheWay
      });
    }),
    previous: useAction(function (allTheWay) {
      return dispatch({
        type: "previous",
        allTheWay: allTheWay
      });
    }),
    up: useAction(function (allTheWay) {
      return dispatch({
        type: "up",
        allTheWay: allTheWay
      });
    }),
    down: useAction(function (allTheWay) {
      return dispatch({
        type: "down",
        allTheWay: allTheWay
      });
    }),
    first: useAction(function () {
      return dispatch({
        type: "first"
      });
    }),
    last: useAction(function () {
      return dispatch({
        type: "last"
      });
    }),
    unstable_sort: useAction(function () {
      return dispatch({
        type: "sort"
      });
    }),
    unstable_setVirtual: useAction(function (value) {
      return dispatch({
        type: "setVirtual",
        virtual: value
      });
    }),
    setRTL: useAction(function (value) {
      return dispatch({
        type: "setRTL",
        rtl: value
      });
    }),
    setOrientation: useAction(function (value) {
      return dispatch({
        type: "setOrientation",
        orientation: value
      });
    }),
    setCurrentId: useAction(function (value) {
      return dispatch({
        type: "setCurrentId",
        currentId: value
      });
    }),
    setLoop: useAction(function (value) {
      return dispatch({
        type: "setLoop",
        loop: value
      });
    }),
    setWrap: useAction(function (value) {
      return dispatch({
        type: "setWrap",
        wrap: value
      });
    }),
    reset: useAction(function () {
      return dispatch({
        type: "reset"
      });
    })
  });
}
var keys = [].concat(_Id_IdState_js__WEBPACK_IMPORTED_MODULE_5__[/* unstable_useIdState */ "a"].__keys, ["unstable_virtual", "rtl", "orientation", "items", "groups", "currentId", "loop", "wrap", "unstable_moves", "unstable_hasActiveWidget", "registerItem", "unregisterItem", "registerGroup", "unregisterGroup", "move", "next", "previous", "up", "down", "first", "last", "unstable_sort", "unstable_setVirtual", "setRTL", "setOrientation", "setCurrentId", "setLoop", "setWrap", "reset", "unstable_setHasActiveWidget"]);
useCompositeState.__keys = keys;




/***/ }),
/* 52 */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["keyboardShortcuts"]; }());

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isSelfTarget; });
/**
 * Returns `true` if `event.target` and `event.currentTarget` are the same.
 */
function isSelfTarget(event) {
  return event.target === event.currentTarget;
}




/***/ }),
/* 54 */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["a11y"]; }());

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _objectWithoutPropertiesLoose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _createForOfIteratorHelperLoose; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

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

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = o[Symbol.iterator]();
  return it.next.bind(it);
}




/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return shallowEqual; });
/**
 * Compares two objects.
 *
 * @example
 * import { shallowEqual } from "reakit-utils";
 *
 * shallowEqual({ a: "a" }, {}); // false
 * shallowEqual({ a: "a" }, { b: "b" }); // false
 * shallowEqual({ a: "a" }, { a: "a" }); // true
 * shallowEqual({ a: "a" }, { a: "a", b: "b" }); // false
 */
function shallowEqual(objA, objB) {
  if (objA === objB) return true;
  if (!objA) return false;
  if (!objB) return false;
  if (typeof objA !== "object") return false;
  if (typeof objB !== "object") return false;
  var aKeys = Object.keys(objA);
  var bKeys = Object.keys(objB);
  var length = aKeys.length;
  if (bKeys.length !== length) return false;

  for (var _i = 0, _aKeys = aKeys; _i < _aKeys.length; _i++) {
    var key = _aKeys[_i];

    if (objA[key] !== objB[key]) {
      return false;
    }
  }

  return true;
}




/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getActiveElement; });
/* harmony import */ var _getDocument_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);


/**
 * Returns `element.ownerDocument.activeElement`.
 */

function getActiveElement(element) {
  return Object(_getDocument_js__WEBPACK_IMPORTED_MODULE_0__[/* getDocument */ "a"])(element).activeElement;
}




/***/ }),
/* 58 */,
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useIsomorphicEffect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/**
 * `React.useLayoutEffect` that fallbacks to `React.useEffect` on server side
 * rendering.
 */

var useIsomorphicEffect = typeof window === "undefined" ? react__WEBPACK_IMPORTED_MODULE_0__["useEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"];




/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Memize options object.
 *
 * @typedef MemizeOptions
 *
 * @property {number} [maxSize] Maximum size of the cache.
 */

/**
 * Internal cache entry.
 *
 * @typedef MemizeCacheNode
 *
 * @property {?MemizeCacheNode|undefined} [prev] Previous node.
 * @property {?MemizeCacheNode|undefined} [next] Next node.
 * @property {Array<*>}                   args   Function arguments for cache
 *                                               entry.
 * @property {*}                          val    Function result.
 */

/**
 * Properties of the enhanced function for controlling cache.
 *
 * @typedef MemizeMemoizedFunction
 *
 * @property {()=>void} clear Clear the cache.
 */

/**
 * Accepts a function to be memoized, and returns a new memoized function, with
 * optional options.
 *
 * @template {Function} F
 *
 * @param {F}             fn        Function to memoize.
 * @param {MemizeOptions} [options] Options object.
 *
 * @return {F & MemizeMemoizedFunction} Memoized function.
 */
function memize( fn, options ) {
	var size = 0;

	/** @type {?MemizeCacheNode|undefined} */
	var head;

	/** @type {?MemizeCacheNode|undefined} */
	var tail;

	options = options || {};

	function memoized( /* ...args */ ) {
		var node = head,
			len = arguments.length,
			args, i;

		searchCache: while ( node ) {
			// Perform a shallow equality test to confirm that whether the node
			// under test is a candidate for the arguments passed. Two arrays
			// are shallowly equal if their length matches and each entry is
			// strictly equal between the two sets. Avoid abstracting to a
			// function which could incur an arguments leaking deoptimization.

			// Check whether node arguments match arguments length
			if ( node.args.length !== arguments.length ) {
				node = node.next;
				continue;
			}

			// Check whether node arguments match arguments values
			for ( i = 0; i < len; i++ ) {
				if ( node.args[ i ] !== arguments[ i ] ) {
					node = node.next;
					continue searchCache;
				}
			}

			// At this point we can assume we've found a match

			// Surface matched node to head if not already
			if ( node !== head ) {
				// As tail, shift to previous. Must only shift if not also
				// head, since if both head and tail, there is no previous.
				if ( node === tail ) {
					tail = node.prev;
				}

				// Adjust siblings to point to each other. If node was tail,
				// this also handles new tail's empty `next` assignment.
				/** @type {MemizeCacheNode} */ ( node.prev ).next = node.next;
				if ( node.next ) {
					node.next.prev = node.prev;
				}

				node.next = head;
				node.prev = null;
				/** @type {MemizeCacheNode} */ ( head ).prev = node;
				head = node;
			}

			// Return immediately
			return node.val;
		}

		// No cached value found. Continue to insertion phase:

		// Create a copy of arguments (avoid leaking deoptimization)
		args = new Array( len );
		for ( i = 0; i < len; i++ ) {
			args[ i ] = arguments[ i ];
		}

		node = {
			args: args,

			// Generate the result from original function
			val: fn.apply( null, args ),
		};

		// Don't need to check whether node is already head, since it would
		// have been returned above already if it was

		// Shift existing head down list
		if ( head ) {
			head.prev = node;
			node.next = head;
		} else {
			// If no head, follows that there's no tail (at initial or reset)
			tail = node;
		}

		// Trim tail if we're reached max size and are pending cache insertion
		if ( size === /** @type {MemizeOptions} */ ( options ).maxSize ) {
			tail = /** @type {MemizeCacheNode} */ ( tail ).prev;
			/** @type {MemizeCacheNode} */ ( tail ).next = null;
		} else {
			size++;
		}

		head = node;

		return node.val;
	}

	memoized.clear = function() {
		head = null;
		tail = null;
		size = 0;
	};

	if ( false ) {}

	// Ignore reason: There's not a clear solution to create an intersection of
	// the function with additional properties, where the goal is to retain the
	// function signature of the incoming argument and add control properties
	// on the return value.

	// @ts-ignore
	return memoized;
}

module.exports = memize;


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return applyState; });
function isUpdater(argument) {
  return typeof argument === "function";
}
/**
 * Receives a `setState` argument and calls it with `currentValue` if it's a
 * function. Otherwise return the argument as the new value.
 *
 * @example
 * import { applyState } from "reakit-utils";
 *
 * applyState((value) => value + 1, 1); // 2
 * applyState(2, 1); // 2
 */


function applyState(argument, currentValue) {
  if (isUpdater(argument)) {
    return argument(currentValue);
  }

  return argument;
}




/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useSealedState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/**
 * React custom hook that returns the very first value passed to `initialState`,
 * even if it changes between re-renders.
 */
function useSealedState(initialState) {
  var _React$useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState),
      sealed = _React$useState[0];

  return sealed;
}




/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useForkRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


// https://github.com/mui-org/material-ui/blob/2bcc874cf07b81202968f769cb9c2398c7c11311/packages/material-ui/src/utils/useForkRef.js

function setRef(ref, value) {
  if (value === void 0) {
    value = null;
  }

  if (!ref) return;

  if (typeof ref === "function") {
    ref(value);
  } else {
    ref.current = value;
  }
}
/**
 * Merges up to two React Refs into a single memoized function React Ref so you
 * can pass it to an element.
 *
 * @example
 * import React from "react";
 * import { useForkRef } from "reakit-utils";
 *
 * const Component = React.forwardRef((props, ref) => {
 *   const internalRef = React.useRef();
 *   return <div {...props} ref={useForkRef(internalRef, ref)} />;
 * });
 */


function useForkRef(refA, refB) {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    if (refA == null && refB == null) {
      return null;
    }

    return function (value) {
      setRef(refA, value);
      setRef(refB, value);
    };
  }, [refA, refB]);
}




/***/ }),
/* 64 */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["isShallowEqual"]; }());

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return unstable_useIdState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reakit_utils_useSealedState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62);
/* harmony import */ var _IdProvider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68);




function unstable_useIdState(initialState) {
  if (initialState === void 0) {
    initialState = {};
  }

  var _useSealedState = Object(reakit_utils_useSealedState__WEBPACK_IMPORTED_MODULE_1__[/* useSealedState */ "a"])(initialState),
      initialBaseId = _useSealedState.baseId;

  var generateId = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_IdProvider_js__WEBPACK_IMPORTED_MODULE_2__[/* unstable_IdContext */ "a"]);
  var idCountRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);

  var _React$useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () {
    return initialBaseId || generateId();
  }),
      baseId = _React$useState[0],
      setBaseId = _React$useState[1];

  return {
    baseId: baseId,
    unstable_setBaseId: setBaseId,
    unstable_idCountRef: idCountRef
  };
}
var keys = ["baseId", "unstable_setBaseId", "unstable_idCountRef"];
unstable_useIdState.__keys = keys;




/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;// TinyColor v1.4.2
// https://github.com/bgrins/TinyColor
// Brian Grinstead, MIT License

(function(Math) {

var trimLeft = /^\s+/,
    trimRight = /\s+$/,
    tinyCounter = 0,
    mathRound = Math.round,
    mathMin = Math.min,
    mathMax = Math.max,
    mathRandom = Math.random;

function tinycolor (color, opts) {

    color = (color) ? color : '';
    opts = opts || { };

    // If input is already a tinycolor, return itself
    if (color instanceof tinycolor) {
       return color;
    }
    // If we are called as a function, call using new instead
    if (!(this instanceof tinycolor)) {
        return new tinycolor(color, opts);
    }

    var rgb = inputToRGB(color);
    this._originalInput = color,
    this._r = rgb.r,
    this._g = rgb.g,
    this._b = rgb.b,
    this._a = rgb.a,
    this._roundA = mathRound(100*this._a) / 100,
    this._format = opts.format || rgb.format;
    this._gradientType = opts.gradientType;

    // Don't let the range of [0,255] come back in [0,1].
    // Potentially lose a little bit of precision here, but will fix issues where
    // .5 gets interpreted as half of the total, instead of half of 1
    // If it was supposed to be 128, this was already taken care of by `inputToRgb`
    if (this._r < 1) { this._r = mathRound(this._r); }
    if (this._g < 1) { this._g = mathRound(this._g); }
    if (this._b < 1) { this._b = mathRound(this._b); }

    this._ok = rgb.ok;
    this._tc_id = tinyCounter++;
}

tinycolor.prototype = {
    isDark: function() {
        return this.getBrightness() < 128;
    },
    isLight: function() {
        return !this.isDark();
    },
    isValid: function() {
        return this._ok;
    },
    getOriginalInput: function() {
      return this._originalInput;
    },
    getFormat: function() {
        return this._format;
    },
    getAlpha: function() {
        return this._a;
    },
    getBrightness: function() {
        //http://www.w3.org/TR/AERT#color-contrast
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    },
    getLuminance: function() {
        //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        var rgb = this.toRgb();
        var RsRGB, GsRGB, BsRGB, R, G, B;
        RsRGB = rgb.r/255;
        GsRGB = rgb.g/255;
        BsRGB = rgb.b/255;

        if (RsRGB <= 0.03928) {R = RsRGB / 12.92;} else {R = Math.pow(((RsRGB + 0.055) / 1.055), 2.4);}
        if (GsRGB <= 0.03928) {G = GsRGB / 12.92;} else {G = Math.pow(((GsRGB + 0.055) / 1.055), 2.4);}
        if (BsRGB <= 0.03928) {B = BsRGB / 12.92;} else {B = Math.pow(((BsRGB + 0.055) / 1.055), 2.4);}
        return (0.2126 * R) + (0.7152 * G) + (0.0722 * B);
    },
    setAlpha: function(value) {
        this._a = boundAlpha(value);
        this._roundA = mathRound(100*this._a) / 100;
        return this;
    },
    toHsv: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
    },
    toHsvString: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
        return (this._a == 1) ?
          "hsv("  + h + ", " + s + "%, " + v + "%)" :
          "hsva(" + h + ", " + s + "%, " + v + "%, "+ this._roundA + ")";
    },
    toHsl: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
    },
    toHslString: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
        return (this._a == 1) ?
          "hsl("  + h + ", " + s + "%, " + l + "%)" :
          "hsla(" + h + ", " + s + "%, " + l + "%, "+ this._roundA + ")";
    },
    toHex: function(allow3Char) {
        return rgbToHex(this._r, this._g, this._b, allow3Char);
    },
    toHexString: function(allow3Char) {
        return '#' + this.toHex(allow3Char);
    },
    toHex8: function(allow4Char) {
        return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
    },
    toHex8String: function(allow4Char) {
        return '#' + this.toHex8(allow4Char);
    },
    toRgb: function() {
        return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
    },
    toRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :
          "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
    },
    toPercentageRgb: function() {
        return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
    },
    toPercentageRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" :
          "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
    },
    toName: function() {
        if (this._a === 0) {
            return "transparent";
        }

        if (this._a < 1) {
            return false;
        }

        return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
    },
    toFilter: function(secondColor) {
        var hex8String = '#' + rgbaToArgbHex(this._r, this._g, this._b, this._a);
        var secondHex8String = hex8String;
        var gradientType = this._gradientType ? "GradientType = 1, " : "";

        if (secondColor) {
            var s = tinycolor(secondColor);
            secondHex8String = '#' + rgbaToArgbHex(s._r, s._g, s._b, s._a);
        }

        return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
    },
    toString: function(format) {
        var formatSet = !!format;
        format = format || this._format;

        var formattedString = false;
        var hasAlpha = this._a < 1 && this._a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");

        if (needsAlphaFormat) {
            // Special case for "transparent", all other non-alpha formats
            // will return rgba when there is transparency.
            if (format === "name" && this._a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format === "rgb") {
            formattedString = this.toRgbString();
        }
        if (format === "prgb") {
            formattedString = this.toPercentageRgbString();
        }
        if (format === "hex" || format === "hex6") {
            formattedString = this.toHexString();
        }
        if (format === "hex3") {
            formattedString = this.toHexString(true);
        }
        if (format === "hex4") {
            formattedString = this.toHex8String(true);
        }
        if (format === "hex8") {
            formattedString = this.toHex8String();
        }
        if (format === "name") {
            formattedString = this.toName();
        }
        if (format === "hsl") {
            formattedString = this.toHslString();
        }
        if (format === "hsv") {
            formattedString = this.toHsvString();
        }

        return formattedString || this.toHexString();
    },
    clone: function() {
        return tinycolor(this.toString());
    },

    _applyModification: function(fn, args) {
        var color = fn.apply(null, [this].concat([].slice.call(args)));
        this._r = color._r;
        this._g = color._g;
        this._b = color._b;
        this.setAlpha(color._a);
        return this;
    },
    lighten: function() {
        return this._applyModification(lighten, arguments);
    },
    brighten: function() {
        return this._applyModification(brighten, arguments);
    },
    darken: function() {
        return this._applyModification(darken, arguments);
    },
    desaturate: function() {
        return this._applyModification(desaturate, arguments);
    },
    saturate: function() {
        return this._applyModification(saturate, arguments);
    },
    greyscale: function() {
        return this._applyModification(greyscale, arguments);
    },
    spin: function() {
        return this._applyModification(spin, arguments);
    },

    _applyCombination: function(fn, args) {
        return fn.apply(null, [this].concat([].slice.call(args)));
    },
    analogous: function() {
        return this._applyCombination(analogous, arguments);
    },
    complement: function() {
        return this._applyCombination(complement, arguments);
    },
    monochromatic: function() {
        return this._applyCombination(monochromatic, arguments);
    },
    splitcomplement: function() {
        return this._applyCombination(splitcomplement, arguments);
    },
    triad: function() {
        return this._applyCombination(triad, arguments);
    },
    tetrad: function() {
        return this._applyCombination(tetrad, arguments);
    }
};

// If input is an object, force 1 into "1.0" to handle ratios properly
// String input requires "1.0" as input, so 1 will be treated as 1
tinycolor.fromRatio = function(color, opts) {
    if (typeof color == "object") {
        var newColor = {};
        for (var i in color) {
            if (color.hasOwnProperty(i)) {
                if (i === "a") {
                    newColor[i] = color[i];
                }
                else {
                    newColor[i] = convertToPercentage(color[i]);
                }
            }
        }
        color = newColor;
    }

    return tinycolor(color, opts);
};

// Given a string or object, convert that input to RGB
// Possible string inputs:
//
//     "red"
//     "#f00" or "f00"
//     "#ff0000" or "ff0000"
//     "#ff000000" or "ff000000"
//     "rgb 255 0 0" or "rgb (255, 0, 0)"
//     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
//     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
//     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
//     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
//     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
//     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
//
function inputToRGB(color) {

    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;

    if (typeof color == "string") {
        color = stringInputToObject(color);
    }

    if (typeof color == "object") {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format = "hsv";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format = "hsl";
        }

        if (color.hasOwnProperty("a")) {
            a = color.a;
        }
    }

    a = boundAlpha(a);

    return {
        ok: ok,
        format: color.format || format,
        r: mathMin(255, mathMax(rgb.r, 0)),
        g: mathMin(255, mathMax(rgb.g, 0)),
        b: mathMin(255, mathMax(rgb.b, 0)),
        a: a
    };
}


// Conversion Functions
// --------------------

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

// `rgbToRgb`
// Handle bounds / percentage checking to conform to CSS color spec
// <http://www.w3.org/TR/css3-color/>
// *Assumes:* r, g, b in [0, 255] or [0, 1]
// *Returns:* { r, g, b } in [0, 255]
function rgbToRgb(r, g, b){
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255
    };
}

// `rgbToHsl`
// Converts an RGB color value to HSL.
// *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
// *Returns:* { h, s, l } in [0,1]
function rgbToHsl(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min) {
        h = s = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }

        h /= 6;
    }

    return { h: h, s: s, l: l };
}

// `hslToRgb`
// Converts an HSL color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
function hslToRgb(h, s, l) {
    var r, g, b;

    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);

    function hue2rgb(p, q, t) {
        if(t < 0) t += 1;
        if(t > 1) t -= 1;
        if(t < 1/6) return p + (q - p) * 6 * t;
        if(t < 1/2) return q;
        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
    }

    if(s === 0) {
        r = g = b = l; // achromatic
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHsv`
// Converts an RGB color value to HSV
// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
// *Returns:* { h, s, v } in [0,1]
function rgbToHsv(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, v = max;

    var d = max - min;
    s = max === 0 ? 0 : d / max;

    if(max == min) {
        h = 0; // achromatic
    }
    else {
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}

// `hsvToRgb`
// Converts an HSV color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
 function hsvToRgb(h, s, v) {

    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);

    var i = Math.floor(h),
        f = h - i,
        p = v * (1 - s),
        q = v * (1 - f * s),
        t = v * (1 - (1 - f) * s),
        mod = i % 6,
        r = [v, q, p, p, t, v][mod],
        g = [t, v, v, q, p, p][mod],
        b = [p, p, t, v, v, q][mod];

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHex`
// Converts an RGB color to hex
// Assumes r, g, and b are contained in the set [0, 255]
// Returns a 3 or 6 character hex
function rgbToHex(r, g, b, allow3Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    // Return a 3 character hex if possible
    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }

    return hex.join("");
}

// `rgbaToHex`
// Converts an RGBA color plus alpha transparency to hex
// Assumes r, g, b are contained in the set [0, 255] and
// a in [0, 1]. Returns a 4 or 8 character rgba hex
function rgbaToHex(r, g, b, a, allow4Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16)),
        pad2(convertDecimalToHex(a))
    ];

    // Return a 4 character hex if possible
    if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }

    return hex.join("");
}

// `rgbaToArgbHex`
// Converts an RGBA color to an ARGB Hex8 string
// Rarely used, but required for "toFilter()"
function rgbaToArgbHex(r, g, b, a) {

    var hex = [
        pad2(convertDecimalToHex(a)),
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    return hex.join("");
}

// `equals`
// Can be called with any tinycolor input
tinycolor.equals = function (color1, color2) {
    if (!color1 || !color2) { return false; }
    return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
};

tinycolor.random = function() {
    return tinycolor.fromRatio({
        r: mathRandom(),
        g: mathRandom(),
        b: mathRandom()
    });
};


// Modification Functions
// ----------------------
// Thanks to less.js for some of the basics here
// <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

function desaturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function saturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function greyscale(color) {
    return tinycolor(color).desaturate(100);
}

function lighten (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

function brighten(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var rgb = tinycolor(color).toRgb();
    rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));
    rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));
    rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));
    return tinycolor(rgb);
}

function darken (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

// Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
// Values outside of this range will be wrapped into this range.
function spin(color, amount) {
    var hsl = tinycolor(color).toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return tinycolor(hsl);
}

// Combination Functions
// ---------------------
// Thanks to jQuery xColor for some of the ideas behind these
// <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

function complement(color) {
    var hsl = tinycolor(color).toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return tinycolor(hsl);
}

function triad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
    ];
}

function tetrad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
    ];
}

function splitcomplement(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
        tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
    ];
}

function analogous(color, results, slices) {
    results = results || 6;
    slices = slices || 30;

    var hsl = tinycolor(color).toHsl();
    var part = 360 / slices;
    var ret = [tinycolor(color)];

    for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
        hsl.h = (hsl.h + part) % 360;
        ret.push(tinycolor(hsl));
    }
    return ret;
}

function monochromatic(color, results) {
    results = results || 6;
    var hsv = tinycolor(color).toHsv();
    var h = hsv.h, s = hsv.s, v = hsv.v;
    var ret = [];
    var modification = 1 / results;

    while (results--) {
        ret.push(tinycolor({ h: h, s: s, v: v}));
        v = (v + modification) % 1;
    }

    return ret;
}

// Utility Functions
// ---------------------

tinycolor.mix = function(color1, color2, amount) {
    amount = (amount === 0) ? 0 : (amount || 50);

    var rgb1 = tinycolor(color1).toRgb();
    var rgb2 = tinycolor(color2).toRgb();

    var p = amount / 100;

    var rgba = {
        r: ((rgb2.r - rgb1.r) * p) + rgb1.r,
        g: ((rgb2.g - rgb1.g) * p) + rgb1.g,
        b: ((rgb2.b - rgb1.b) * p) + rgb1.b,
        a: ((rgb2.a - rgb1.a) * p) + rgb1.a
    };

    return tinycolor(rgba);
};


// Readability Functions
// ---------------------
// <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)

// `contrast`
// Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
tinycolor.readability = function(color1, color2) {
    var c1 = tinycolor(color1);
    var c2 = tinycolor(color2);
    return (Math.max(c1.getLuminance(),c2.getLuminance())+0.05) / (Math.min(c1.getLuminance(),c2.getLuminance())+0.05);
};

// `isReadable`
// Ensure that foreground and background color combinations meet WCAG2 guidelines.
// The third argument is an optional Object.
//      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
//      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
// If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.

// *Example*
//    tinycolor.isReadable("#000", "#111") => false
//    tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false
tinycolor.isReadable = function(color1, color2, wcag2) {
    var readability = tinycolor.readability(color1, color2);
    var wcag2Parms, out;

    out = false;

    wcag2Parms = validateWCAG2Parms(wcag2);
    switch (wcag2Parms.level + wcag2Parms.size) {
        case "AAsmall":
        case "AAAlarge":
            out = readability >= 4.5;
            break;
        case "AAlarge":
            out = readability >= 3;
            break;
        case "AAAsmall":
            out = readability >= 7;
            break;
    }
    return out;

};

// `mostReadable`
// Given a base color and a list of possible foreground or background
// colors for that base, returns the most readable color.
// Optionally returns Black or White if the most readable color is unreadable.
// *Example*
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();  // "#ffffff"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"
tinycolor.mostReadable = function(baseColor, colorList, args) {
    var bestColor = null;
    var bestScore = 0;
    var readability;
    var includeFallbackColors, level, size ;
    args = args || {};
    includeFallbackColors = args.includeFallbackColors ;
    level = args.level;
    size = args.size;

    for (var i= 0; i < colorList.length ; i++) {
        readability = tinycolor.readability(baseColor, colorList[i]);
        if (readability > bestScore) {
            bestScore = readability;
            bestColor = tinycolor(colorList[i]);
        }
    }

    if (tinycolor.isReadable(baseColor, bestColor, {"level":level,"size":size}) || !includeFallbackColors) {
        return bestColor;
    }
    else {
        args.includeFallbackColors=false;
        return tinycolor.mostReadable(baseColor,["#fff", "#000"],args);
    }
};


// Big List of Colors
// ------------------
// <http://www.w3.org/TR/css3-color/#svg-color>
var names = tinycolor.names = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
};

// Make it easy to access colors via `hexNames[hex]`
var hexNames = tinycolor.hexNames = flip(names);


// Utilities
// ---------

// `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
function flip(o) {
    var flipped = { };
    for (var i in o) {
        if (o.hasOwnProperty(i)) {
            flipped[o[i]] = i;
        }
    }
    return flipped;
}

// Return a valid alpha value [0,1] with all invalid values being set to 1
function boundAlpha(a) {
    a = parseFloat(a);

    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }

    return a;
}

// Take input from [0, n] and return it as [0, 1]
function bound01(n, max) {
    if (isOnePointZero(n)) { n = "100%"; }

    var processPercent = isPercentage(n);
    n = mathMin(max, mathMax(0, parseFloat(n)));

    // Automatically convert percentage into number
    if (processPercent) {
        n = parseInt(n * max, 10) / 100;
    }

    // Handle floating point rounding errors
    if ((Math.abs(n - max) < 0.000001)) {
        return 1;
    }

    // Convert into [0, 1] range if it isn't already
    return (n % max) / parseFloat(max);
}

// Force a number between 0 and 1
function clamp01(val) {
    return mathMin(1, mathMax(0, val));
}

// Parse a base-16 hex value into a base-10 integer
function parseIntFromHex(val) {
    return parseInt(val, 16);
}

// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
function isOnePointZero(n) {
    return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
}

// Check to see if string passed in is a percentage
function isPercentage(n) {
    return typeof n === "string" && n.indexOf('%') != -1;
}

// Force a hex value to have 2 characters
function pad2(c) {
    return c.length == 1 ? '0' + c : '' + c;
}

// Replace a decimal with it's percentage value
function convertToPercentage(n) {
    if (n <= 1) {
        n = (n * 100) + "%";
    }

    return n;
}

// Converts a decimal to a hex value
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
// Converts a hex value to a decimal
function convertHexToDecimal(h) {
    return (parseIntFromHex(h) / 255);
}

var matchers = (function() {

    // <http://www.w3.org/TR/css3-values/#integers>
    var CSS_INTEGER = "[-\\+]?\\d+%?";

    // <http://www.w3.org/TR/css3-values/#number-value>
    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

    // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
    var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

    // Actual matching.
    // Parentheses and commas are optional, but not required.
    // Whitespace can take the place of commas or opening paren
    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

    return {
        CSS_UNIT: new RegExp(CSS_UNIT),
        rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
        rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
        hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
        hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
        hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
        hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
})();

// `isValidCSSUnit`
// Take in a single string / number and check to see if it looks like a CSS unit
// (see `matchers` above for definition).
function isValidCSSUnit(color) {
    return !!matchers.CSS_UNIT.exec(color);
}

// `stringInputToObject`
// Permissive string parsing.  Take in a number of formats, and output an object
// based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
function stringInputToObject(color) {

    color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color == 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: "name" };
    }

    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match;
    if ((match = matchers.rgb.exec(color))) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    if ((match = matchers.rgba.exec(color))) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    if ((match = matchers.hsl.exec(color))) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    if ((match = matchers.hsla.exec(color))) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    if ((match = matchers.hsv.exec(color))) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    if ((match = matchers.hsva.exec(color))) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    if ((match = matchers.hex8.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex6.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? "name" : "hex"
        };
    }
    if ((match = matchers.hex4.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            a: convertHexToDecimal(match[4] + '' + match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex3.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            format: named ? "name" : "hex"
        };
    }

    return false;
}

function validateWCAG2Parms(parms) {
    // return valid WCAG2 parms for isReadable.
    // If input parms are invalid, return {"level":"AA", "size":"small"}
    var level, size;
    parms = parms || {"level":"AA", "size":"small"};
    level = (parms.level || "AA").toUpperCase();
    size = (parms.size || "small").toLowerCase();
    if (level !== "AA" && level !== "AAA") {
        level = "AA";
    }
    if (size !== "small" && size !== "large") {
        size = "small";
    }
    return {"level":level, "size":size};
}

// Node: Export function
if ( true && module.exports) {
    module.exports = tinycolor;
}
// AMD/requirejs: Define the module
else if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {return tinycolor;}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}
// Browser: Expose to window
else {}

})(Math);


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Box */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useBox; });
/* harmony import */ var _rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var reakit_system_createComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var reakit_system_createHook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48);
/* harmony import */ var reakit_utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56);





var useBox = Object(reakit_system_createHook__WEBPACK_IMPORTED_MODULE_2__[/* createHook */ "a"])({
  name: "Box",
  keys: ["unstable_system"],
  propsAreEqual: function propsAreEqual(prev, next) {
    var prevSystem = prev.unstable_system,
        prevProps = Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* _ */ "a"])(prev, ["unstable_system"]);

    var nextSystem = next.unstable_system,
        nextProps = Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* _ */ "a"])(next, ["unstable_system"]);

    if (prevSystem !== nextSystem && !Object(reakit_utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__[/* shallowEqual */ "a"])(prevSystem, nextSystem)) {
      return false;
    }

    return Object(reakit_utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__[/* shallowEqual */ "a"])(prevProps, nextProps);
  }
});
var Box = Object(reakit_system_createComponent__WEBPACK_IMPORTED_MODULE_1__[/* createComponent */ "a"])({
  as: "div",
  useHook: useBox
});




/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return unstable_IdContext; });
/* unused harmony export unstable_IdProvider */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var defaultPrefix = "id";
function generateRandomString(prefix) {
  if (prefix === void 0) {
    prefix = defaultPrefix;
  }

  return "" + (prefix ? prefix + "-" : "") + Math.random().toString(32).substr(2, 6);
}

var unstable_IdContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(generateRandomString);
function unstable_IdProvider(_ref) {
  var children = _ref.children,
      _ref$prefix = _ref.prefix,
      prefix = _ref$prefix === void 0 ? defaultPrefix : _ref$prefix;
  var count = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);
  var generateId = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (localPrefix) {
    if (localPrefix === void 0) {
      localPrefix = prefix;
    }

    return "" + (localPrefix ? localPrefix + "-" : "") + ++count.current;
  }, [prefix]);
  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(unstable_IdContext.Provider, {
    value: generateId
  }, children);
}




/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hasFocusWithin; });
/* harmony import */ var _getActiveElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);



/**
 * Checks if `element` has focus.
 *
 * @example
 * import { hasFocusWithin } from "reakit-utils";
 *
 * hasFocusWithin(document.getElementById("id"));
 */

function hasFocusWithin(element) {
  var activeElement = Object(_getActiveElement_js__WEBPACK_IMPORTED_MODULE_0__[/* getActiveElement */ "a"])(element);
  if (!activeElement) return false;
  if (element.contains(activeElement)) return true;
  var activeDescendant = activeElement.getAttribute("aria-activedescendant");
  if (!activeDescendant) return false;
  return activeDescendant === element.id || !!element.querySelector("#" + activeDescendant);
}




/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isButton; });
var buttonInputTypes = ["button", "color", "file", "image", "reset", "submit"];
/**
 * Checks whether `element` is a native HTML button element or not.
 *
 * @example
 * import { isButton } from "reakit-utils";
 *
 * isButton(document.querySelector("button")); // true
 * isButton(document.querySelector("input[type='button']")); // true
 * isButton(document.querySelector("div")); // false
 * isButton(document.querySelector("input[type='text']")); // false
 *
 * @returns {boolean}
 */

function isButton(element) {
  if (element.tagName === "BUTTON") return true;

  if (element.tagName === "INPUT") {
    var input = element;
    return buttonInputTypes.indexOf(input.type) !== -1;
  }

  return false;
}




/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ ensureFocus; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ getClosestFocusable; });

// UNUSED EXPORTS: getAllFocusableIn, getAllTabbableIn, getFirstFocusableIn, getFirstTabbableIn, getLastTabbableIn, getNextTabbableIn, getPreviousTabbableIn, isFocusable, isTabbable

// CONCATENATED MODULE: ./node_modules/reakit-utils/es/matches.js
/**
 * Ponyfill for `Element.prototype.matches`
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
 */
function matches(element, selectors) {
  if ("matches" in element) return element.matches(selectors);
  if ("msMatchesSelector" in element) return element.msMatchesSelector(selectors);
  return element.webkitMatchesSelector(selectors);
}



// CONCATENATED MODULE: ./node_modules/reakit-utils/es/closest.js


/**
 * Ponyfill for `Element.prototype.closest`
 *
 * @example
 * import { closest } from "reakit-utils";
 *
 * closest(document.getElementById("id"), "div");
 * // same as
 * document.getElementById("id").closest("div");
 */
function closest(element, selectors) {
  if ("closest" in element) return element.closest(selectors);

  do {
    if (matches(element, selectors)) return element;
    element = element.parentElement || element.parentNode;
  } while (element !== null && element.nodeType === 1);

  return null;
}



// EXTERNAL MODULE: ./node_modules/reakit-utils/es/getActiveElement.js
var getActiveElement = __webpack_require__(57);

// CONCATENATED MODULE: ./node_modules/reakit-utils/es/tabbable.js





/** @module tabbable */
var selector = "input:not([type='hidden']):not([disabled]), select:not([disabled]), " + "textarea:not([disabled]), a[href], button:not([disabled]), [tabindex], " + "iframe, object, embed, area[href], audio[controls], video[controls], " + "[contenteditable]:not([contenteditable='false'])";

function isVisible(element) {
  return element.offsetWidth > 0 || element.offsetHeight > 0 || element.getClientRects().length > 0;
}

function hasNegativeTabIndex(element) {
  var tabIndex = parseInt(element.getAttribute("tabindex") || "0", 10);
  return tabIndex < 0;
}
/**
 * Checks whether `element` is focusable or not.
 *
 * @memberof tabbable
 *
 * @example
 * import { isFocusable } from "reakit-utils";
 *
 * isFocusable(document.querySelector("input")); // true
 * isFocusable(document.querySelector("input[tabindex='-1']")); // true
 * isFocusable(document.querySelector("input[hidden]")); // false
 * isFocusable(document.querySelector("input:disabled")); // false
 */


function isFocusable(element) {
  return matches(element, selector) && isVisible(element);
}
/**
 * Checks whether `element` is tabbable or not.
 *
 * @memberof tabbable
 *
 * @example
 * import { isTabbable } from "reakit-utils";
 *
 * isTabbable(document.querySelector("input")); // true
 * isTabbable(document.querySelector("input[tabindex='-1']")); // false
 * isTabbable(document.querySelector("input[hidden]")); // false
 * isTabbable(document.querySelector("input:disabled")); // false
 */

function isTabbable(element) {
  return isFocusable(element) && !hasNegativeTabIndex(element);
}
/**
 * Returns all the focusable elements in `container`.
 *
 * @memberof tabbable
 *
 * @param {Element} container
 *
 * @returns {Element[]}
 */

function getAllFocusableIn(container) {
  var allFocusable = Array.from(container.querySelectorAll(selector));
  allFocusable.unshift(container);
  return allFocusable.filter(isFocusable);
}
/**
 * Returns the first focusable element in `container`.
 *
 * @memberof tabbable
 *
 * @param {Element} container
 *
 * @returns {Element|null}
 */

function getFirstFocusableIn(container) {
  var allFocusable = getAllFocusableIn(container);
  return allFocusable.length ? allFocusable[0] : null;
}
/**
 * Returns all the tabbable elements in `container`, including the container
 * itself.
 *
 * @memberof tabbable
 *
 * @param {Element} container
 * @param fallbackToFocusable If `true`, it'll return focusable elements if there are no tabbable ones.
 *
 * @returns {Element[]}
 */

function getAllTabbableIn(container, fallbackToFocusable) {
  var allFocusable = Array.from(container.querySelectorAll(selector));
  var allTabbable = allFocusable.filter(isTabbable);

  if (isTabbable(container)) {
    allTabbable.unshift(container);
  }

  if (!allTabbable.length && fallbackToFocusable) {
    return allFocusable;
  }

  return allTabbable;
}
/**
 * Returns the first tabbable element in `container`, including the container
 * itself if it's tabbable.
 *
 * @memberof tabbable
 *
 * @param {Element} container
 * @param fallbackToFocusable If `true`, it'll return the first focusable element if there are no tabbable ones.
 *
 * @returns {Element|null}
 */

function getFirstTabbableIn(container, fallbackToFocusable) {
  var _getAllTabbableIn = getAllTabbableIn(container, fallbackToFocusable),
      first = _getAllTabbableIn[0];

  return first || null;
}
/**
 * Returns the last tabbable element in `container`, including the container
 * itself if it's tabbable.
 *
 * @memberof tabbable
 *
 * @param {Element} container
 * @param fallbackToFocusable If `true`, it'll return the last focusable element if there are no tabbable ones.
 *
 * @returns {Element|null}
 */

function getLastTabbableIn(container, fallbackToFocusable) {
  var allTabbable = getAllTabbableIn(container, fallbackToFocusable);
  return allTabbable[allTabbable.length - 1] || null;
}
/**
 * Returns the next tabbable element in `container`.
 *
 * @memberof tabbable
 *
 * @param {Element} container
 * @param fallbackToFocusable If `true`, it'll return the next focusable element if there are no tabbable ones.
 *
 * @returns {Element|null}
 */

function getNextTabbableIn(container, fallbackToFocusable) {
  var activeElement = Object(getActiveElement["a" /* getActiveElement */])(container);
  var allFocusable = getAllFocusableIn(container);
  var index = allFocusable.indexOf(activeElement);
  var slice = allFocusable.slice(index + 1);
  return slice.find(isTabbable) || allFocusable.find(isTabbable) || (fallbackToFocusable ? slice[0] : null);
}
/**
 * Returns the previous tabbable element in `container`.
 *
 * @memberof tabbable
 *
 * @param {Element} container
 * @param fallbackToFocusable If `true`, it'll return the previous focusable element if there are no tabbable ones.
 *
 * @returns {Element|null}
 */

function getPreviousTabbableIn(container, fallbackToFocusable) {
  var activeElement = Object(getActiveElement["a" /* getActiveElement */])(container);
  var allFocusable = getAllFocusableIn(container).reverse();
  var index = allFocusable.indexOf(activeElement);
  var slice = allFocusable.slice(index + 1);
  return slice.find(isTabbable) || allFocusable.find(isTabbable) || (fallbackToFocusable ? slice[0] : null);
}
/**
 * Returns the closest focusable element.
 *
 * @memberof tabbable
 *
 * @param {Element} container
 *
 * @returns {Element|null}
 */

function getClosestFocusable(element) {
  while (element && !isFocusable(element)) {
    element = closest(element, selector);
  }

  return element;
}

function defaultIsActive(element) {
  return Object(getActiveElement["a" /* getActiveElement */])(element) === element;
}

/**
 * Ensures `element` will receive focus if it's not already.
 *
 * @memberof tabbable
 *
 * @example
 * import { ensureFocus } from "reakit-utils";
 *
 * ensureFocus(document.activeElement); // does nothing
 *
 * const element = document.querySelector("input");
 *
 * ensureFocus(element); // focuses element
 * ensureFocus(element, { preventScroll: true }); // focuses element preventing scroll jump
 *
 * function isActive(el) {
 *   return el.dataset.active === "true";
 * }
 *
 * ensureFocus(document.querySelector("[data-active='true']"), { isActive }); // does nothing
 *
 * @returns {number} `requestAnimationFrame` call ID so it can be passed to `cancelAnimationFrame` if needed.
 */
function ensureFocus(element, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$isActive = _ref.isActive,
      isActive = _ref$isActive === void 0 ? defaultIsActive : _ref$isActive,
      preventScroll = _ref.preventScroll;

  if (isActive(element)) return -1;
  element.focus({
    preventScroll: preventScroll
  });
  if (isActive(element)) return -1;
  return requestAnimationFrame(function () {
    element.focus({
      preventScroll: preventScroll
    });
  });
}




/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ isPortalEvent; });

// CONCATENATED MODULE: ./node_modules/reakit-utils/es/contains.js
/**
 * Similar to `Element.prototype.contains`.
 */
function contains(parent, child) {
  return parent === child || parent.contains(child);
}



// CONCATENATED MODULE: ./node_modules/reakit-utils/es/isPortalEvent.js


/**
 * Returns `true` if `event` has been fired within a React Portal element.
 */

function isPortalEvent(event) {
  return !contains(event.currentTarget, event.target);
}




/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Tabbable */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useTabbable; });
/* harmony import */ var _rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var reakit_system_createComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var reakit_system_createHook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reakit_utils_useForkRef__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63);
/* harmony import */ var reakit_utils_isButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70);
/* harmony import */ var reakit_warning__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80);
/* harmony import */ var reakit_utils_useLiveRef__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(46);
/* harmony import */ var reakit_utils_useIsomorphicEffect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(59);
/* harmony import */ var reakit_utils_hasFocusWithin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(69);
/* harmony import */ var reakit_utils_isPortalEvent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(72);
/* harmony import */ var reakit_utils_getActiveElement__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(57);
/* harmony import */ var reakit_utils_tabbable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(71);
















function isUA(string) {
  if (typeof window === "undefined") return false;
  return window.navigator.userAgent.indexOf(string) !== -1;
}

var isSafariOrFirefoxOnMac = isUA("Mac") && !isUA("Chrome") && (isUA("Safari") || isUA("Firefox"));

function focusIfNeeded(element) {
  if (!Object(reakit_utils_hasFocusWithin__WEBPACK_IMPORTED_MODULE_10__[/* hasFocusWithin */ "a"])(element)) {
    element.focus();
  }
} // Safari and Firefox on MacOS don't focus on buttons on mouse down like other
// browsers/platforms. Instead, they focus on the closest focusable ancestor
// element, which is ultimately the body element. So we make sure to give focus
// to the tabbable element on mouse down so it works consistently across
// browsers.
// istanbul ignore next


function useFocusOnMouseDown() {
  if (!isSafariOrFirefoxOnMac) return undefined;

  var _React$useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      tabbable = _React$useState[0],
      scheduleFocus = _React$useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (!tabbable) return;
    focusIfNeeded(tabbable);
    scheduleFocus(null);
  }, [tabbable]);
  var onMouseDown = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (event) {
    var element = event.currentTarget;
    if (Object(reakit_utils_isPortalEvent__WEBPACK_IMPORTED_MODULE_11__[/* isPortalEvent */ "a"])(event)) return;
    if (!Object(reakit_utils_isButton__WEBPACK_IMPORTED_MODULE_6__[/* isButton */ "a"])(element)) return;
    var activeElement = Object(reakit_utils_getActiveElement__WEBPACK_IMPORTED_MODULE_12__[/* getActiveElement */ "a"])(element);
    if (!activeElement) return;
    var activeElementIsBody = activeElement.tagName === "BODY";
    var focusableAncestor = Object(reakit_utils_tabbable__WEBPACK_IMPORTED_MODULE_13__[/* getClosestFocusable */ "b"])(element.parentElement);

    if (activeElement === focusableAncestor || activeElementIsBody && !focusableAncestor) {
      // When the active element is the focusable ancestor, it'll not emit
      // focus/blur events. After all, it's already focused. So we can't
      // listen to those events to focus this tabbable element.
      // When the active element is body and there's no focusable ancestor,
      // we also don't have any other event to listen to since body never
      // emits focus/blur events on itself.
      // In both of these cases, we have to schedule focus on this tabbable
      // element.
      scheduleFocus(element);
    } else if (focusableAncestor) {
      // Clicking (mouse down) on the tabbable element on Safari and Firefox
      // on MacOS will fire focus on the focusable ancestor element if
      // there's any and if it's not the current active element. So we wait
      // for this event to happen before moving focus to this element.
      // Instead of moving focus right away, we have to schedule it,
      // otherwise it's gonna prevent drag events from happening.
      var onFocus = function onFocus() {
        return scheduleFocus(element);
      };

      focusableAncestor.addEventListener("focusin", onFocus, {
        once: true
      });
    } else {
      // Finally, if there's no focsuable ancestor and there's another
      // element with focus, we wait for that element to get blurred before
      // focusing this one.
      var onBlur = function onBlur() {
        return focusIfNeeded(element);
      };

      activeElement.addEventListener("blur", onBlur, {
        once: true
      });
    }
  }, []);
  return onMouseDown;
}

function isNativeTabbable(element) {
  return element.tagName === "BUTTON" || element.tagName === "INPUT" || element.tagName === "SELECT" || element.tagName === "TEXTAREA" || element.tagName === "A" || element.tagName === "AUDIO" || element.tagName === "VIDEO";
}

var useTabbable = Object(reakit_system_createHook__WEBPACK_IMPORTED_MODULE_2__[/* createHook */ "a"])({
  name: "Tabbable",
  compose: _Box_Box_js__WEBPACK_IMPORTED_MODULE_3__[/* useBox */ "a"],
  keys: ["disabled", "focusable"],
  useOptions: function useOptions(options, _ref) {
    var disabled = _ref.disabled;
    return Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({
      disabled: disabled
    }, options);
  },
  useProps: function useProps(options, _ref2) {
    var htmlRef = _ref2.ref,
        htmlTabIndex = _ref2.tabIndex,
        htmlOnClick = _ref2.onClick,
        htmlOnMouseDown = _ref2.onMouseDown,
        htmlStyle = _ref2.style,
        htmlProps = Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* _ */ "a"])(_ref2, ["ref", "tabIndex", "onClick", "onMouseDown", "style"]);

    var ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
    var onClickRef = Object(reakit_utils_useLiveRef__WEBPACK_IMPORTED_MODULE_8__[/* useLiveRef */ "a"])(htmlOnClick);
    var onMouseDownRef = Object(reakit_utils_useLiveRef__WEBPACK_IMPORTED_MODULE_8__[/* useLiveRef */ "a"])(htmlOnMouseDown);
    var trulyDisabled = options.disabled && !options.focusable;

    var _React$useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
        nativeTabbable = _React$useState2[0],
        setNativeTabbable = _React$useState2[1];

    var tabIndex = nativeTabbable ? htmlTabIndex : htmlTabIndex || 0;
    var style = options.disabled ? Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({
      pointerEvents: "none"
    }, htmlStyle) : htmlStyle;
    var focusOnMouseDown = useFocusOnMouseDown();
    Object(reakit_utils_useIsomorphicEffect__WEBPACK_IMPORTED_MODULE_9__[/* useIsomorphicEffect */ "a"])(function () {
      var tabbable = ref.current;

      if (!tabbable) {
         false ? undefined : void 0;
        return;
      }

      if (!isNativeTabbable(tabbable)) {
        setNativeTabbable(false);
      }
    }, []);
    var onClick = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (event) {
      var _onClickRef$current;

      if (options.disabled) {
        event.stopPropagation();
        event.preventDefault();
        return;
      }

      (_onClickRef$current = onClickRef.current) === null || _onClickRef$current === void 0 ? void 0 : _onClickRef$current.call(onClickRef, event);
    }, [options.disabled]);
    var onMouseDown = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (event) {
      var _onMouseDownRef$curre;

      if (options.disabled) {
        event.stopPropagation();
        event.preventDefault();
        return;
      }

      (_onMouseDownRef$curre = onMouseDownRef.current) === null || _onMouseDownRef$curre === void 0 ? void 0 : _onMouseDownRef$curre.call(onMouseDownRef, event);
      if (event.defaultPrevented) return;
      focusOnMouseDown === null || focusOnMouseDown === void 0 ? void 0 : focusOnMouseDown(event);
    }, [options.disabled, focusOnMouseDown]);
    return Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({
      ref: Object(reakit_utils_useForkRef__WEBPACK_IMPORTED_MODULE_5__[/* useForkRef */ "a"])(ref, htmlRef),
      style: style,
      tabIndex: !trulyDisabled ? tabIndex : undefined,
      disabled: trulyDisabled && nativeTabbable ? true : undefined,
      "aria-disabled": options.disabled ? true : undefined,
      onClick: onClick,
      onMouseDown: onMouseDown
    }, htmlProps);
  }
});
var Tabbable = Object(reakit_system_createComponent__WEBPACK_IMPORTED_MODULE_1__[/* createComponent */ "a"])({
  as: "div",
  useHook: useTabbable
});




/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SystemContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var SystemContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});




/***/ }),
/* 75 */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["htmlEntities"]; }());

/***/ }),
/* 76 */,
/* 77 */,
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useCreateElement; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SystemContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74);
/* harmony import */ var _rollupPluginBabelHelpers_0c84a174_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55);




function isRenderProp(children) {
  return typeof children === "function";
}

/**
 * Custom hook that will call `children` if it's a function. If
 * `useCreateElement` has been passed to the context, it'll be used instead.
 *
 * @example
 * import React from "react";
 * import { SystemProvider, useCreateElement } from "reakit-system";
 *
 * const system = {
 *   useCreateElement(type, props, children = props.children) {
 *     // very similar to what `useCreateElement` does already
 *     if (typeof children === "function") {
 *       const { children: _, ...rest } = props;
 *       return children(rest);
 *     }
 *     return React.createElement(type, props, children);
 *   },
 * };
 *
 * function Component(props) {
 *   return useCreateElement("div", props);
 * }
 *
 * function App() {
 *   return (
 *     <SystemProvider unstable_system={system}>
 *       <Component url="url">{({ url }) => <a href={url}>link</a>}</Component>
 *     </SystemProvider>
 *   );
 * }
 */

var useCreateElement = function useCreateElement(type, props, children) {
  if (children === void 0) {
    children = props.children;
  }

  var context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_SystemContext_js__WEBPACK_IMPORTED_MODULE_1__[/* SystemContext */ "a"]);

  if (context.useCreateElement) {
    return context.useCreateElement(type, props, children);
  }

  if (typeof type === "string" && isRenderProp(children)) {
    var _ = props.children,
        rest = Object(_rollupPluginBabelHelpers_0c84a174_js__WEBPACK_IMPORTED_MODULE_2__[/* a */ "b"])(props, ["children"]);

    return children(rest);
  }

  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(type, props, children);
};




/***/ }),
/* 79 */,
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: warning, useWarning

// EXTERNAL MODULE: ./node_modules/reakit-warning/es/warning.js
var warning = __webpack_require__(106);

// EXTERNAL MODULE: external {"this":"React"}
var external_this_React_ = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/reakit-utils/es/isObject.js
/**
 * Checks whether `arg` is an object or not.
 *
 * @returns {boolean}
 */
function isObject(arg) {
  return typeof arg === "object" && arg != null;
}



// CONCATENATED MODULE: ./node_modules/reakit-warning/es/useWarning.js





function isRefObject(ref) {
  return isObject(ref) && "current" in ref;
}
/**
 * Logs `messages` to the console using `console.warn` based on a `condition`.
 * This should be used inside components.
 */


function useWarning(condition) {
  for (var _len = arguments.length, messages = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    messages[_key - 1] = arguments[_key];
  }

  if (false) {}
}



// CONCATENATED MODULE: ./node_modules/reakit-warning/es/index.js







/***/ }),
/* 81 */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["viewport"]; }());

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createOnKeyDown; });
/**
 * Returns an `onKeyDown` handler to be passed to a component.
 *
 * @param options
 */
function createOnKeyDown(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      keyMap = _ref.keyMap,
      onKey = _ref.onKey,
      stopPropagation = _ref.stopPropagation,
      onKeyDown = _ref.onKeyDown,
      _ref$shouldKeyDown = _ref.shouldKeyDown,
      shouldKeyDown = _ref$shouldKeyDown === void 0 ? function () {
    return true;
  } : _ref$shouldKeyDown,
      _ref$preventDefault = _ref.preventDefault,
      preventDefault = _ref$preventDefault === void 0 ? true : _ref$preventDefault;

  return function (event) {
    if (!keyMap) return;
    var finalKeyMap = typeof keyMap === "function" ? keyMap(event) : keyMap;
    var shouldPreventDefault = typeof preventDefault === "function" ? preventDefault(event) : preventDefault;
    var shouldStopPropagation = typeof stopPropagation === "function" ? stopPropagation(event) : stopPropagation;

    if (event.key in finalKeyMap) {
      var action = finalKeyMap[event.key];

      if (typeof action === "function" && shouldKeyDown(event)) {
        if (shouldPreventDefault) event.preventDefault();
        if (shouldStopPropagation) event.stopPropagation();
        if (onKey) onKey(event);
        action(event); // Prevent onKeyDown from being called twice for the same keys

        return;
      }
    }

    if (onKeyDown && "current" in onKeyDown) {
      var _onKeyDown$current;

      (_onKeyDown$current = onKeyDown.current) === null || _onKeyDown$current === void 0 ? void 0 : _onKeyDown$current.call(onKeyDown, event);
    } else {
      onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(event);
    }
  };
}




/***/ }),
/* 83 */,
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Clickable */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useClickable; });
/* harmony import */ var _rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var reakit_system_createComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var reakit_system_createHook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reakit_utils_isButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70);
/* harmony import */ var reakit_warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80);
/* harmony import */ var reakit_utils_useLiveRef__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46);
/* harmony import */ var reakit_utils_isSelfTarget__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53);
/* harmony import */ var _Tabbable_Tabbable_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73);


















function isNativeClick(event) {
  var element = event.currentTarget;
  if (!event.isTrusted) return false; // istanbul ignore next: can't test trusted events yet

  return Object(reakit_utils_isButton__WEBPACK_IMPORTED_MODULE_4__[/* isButton */ "a"])(element) || element.tagName === "INPUT" || element.tagName === "TEXTAREA" || element.tagName === "A" || element.tagName === "SELECT";
}

var useClickable = Object(reakit_system_createHook__WEBPACK_IMPORTED_MODULE_2__[/* createHook */ "a"])({
  name: "Clickable",
  compose: _Tabbable_Tabbable_js__WEBPACK_IMPORTED_MODULE_8__[/* useTabbable */ "a"],
  keys: ["unstable_clickOnEnter", "unstable_clickOnSpace"],
  useOptions: function useOptions(_ref) {
    var _ref$unstable_clickOn = _ref.unstable_clickOnEnter,
        unstable_clickOnEnter = _ref$unstable_clickOn === void 0 ? true : _ref$unstable_clickOn,
        _ref$unstable_clickOn2 = _ref.unstable_clickOnSpace,
        unstable_clickOnSpace = _ref$unstable_clickOn2 === void 0 ? true : _ref$unstable_clickOn2,
        options = Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* _ */ "a"])(_ref, ["unstable_clickOnEnter", "unstable_clickOnSpace"]);

    return Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({
      unstable_clickOnEnter: unstable_clickOnEnter,
      unstable_clickOnSpace: unstable_clickOnSpace
    }, options);
  },
  useProps: function useProps(options, _ref2) {
    var htmlOnKeyDown = _ref2.onKeyDown,
        htmlOnKeyUp = _ref2.onKeyUp,
        htmlProps = Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* _ */ "a"])(_ref2, ["onKeyDown", "onKeyUp"]);

    var _React$useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
        active = _React$useState[0],
        setActive = _React$useState[1];

    var onKeyDownRef = Object(reakit_utils_useLiveRef__WEBPACK_IMPORTED_MODULE_6__[/* useLiveRef */ "a"])(htmlOnKeyDown);
    var onKeyUpRef = Object(reakit_utils_useLiveRef__WEBPACK_IMPORTED_MODULE_6__[/* useLiveRef */ "a"])(htmlOnKeyUp);
    var onKeyDown = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (event) {
      var _onKeyDownRef$current;

      (_onKeyDownRef$current = onKeyDownRef.current) === null || _onKeyDownRef$current === void 0 ? void 0 : _onKeyDownRef$current.call(onKeyDownRef, event);
      if (event.defaultPrevented) return;
      if (options.disabled) return;
      if (event.metaKey) return;
      if (!Object(reakit_utils_isSelfTarget__WEBPACK_IMPORTED_MODULE_7__[/* isSelfTarget */ "a"])(event)) return;
      var isEnter = options.unstable_clickOnEnter && event.key === "Enter";
      var isSpace = options.unstable_clickOnSpace && event.key === " ";

      if (isEnter || isSpace) {
        if (isNativeClick(event)) return;
        event.preventDefault();

        if (isEnter) {
          event.currentTarget.click();
        } else if (isSpace) {
          setActive(true);
        }
      }
    }, [options.disabled, options.unstable_clickOnEnter, options.unstable_clickOnSpace]);
    var onKeyUp = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (event) {
      var _onKeyUpRef$current;

      (_onKeyUpRef$current = onKeyUpRef.current) === null || _onKeyUpRef$current === void 0 ? void 0 : _onKeyUpRef$current.call(onKeyUpRef, event);
      if (event.defaultPrevented) return;
      if (options.disabled) return;
      if (event.metaKey) return;
      var isSpace = options.unstable_clickOnSpace && event.key === " ";

      if (active && isSpace) {
        setActive(false);
        event.currentTarget.click();
      }
    }, [options.disabled, options.unstable_clickOnSpace, active]);
    return Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({
      "data-active": active || undefined,
      onKeyDown: onKeyDown,
      onKeyUp: onKeyUp
    }, htmlProps);
  }
});
var Clickable = Object(reakit_system_createComponent__WEBPACK_IMPORTED_MODULE_1__[/* createComponent */ "a"])({
  as: "button",
  memo: true,
  useHook: useClickable
});




/***/ }),
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export unstable_Id */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return unstable_useId; });
/* harmony import */ var _rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var reakit_system_createComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var reakit_system_createHook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _IdProvider_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68);
/* harmony import */ var _IdState_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65);








var unstable_useId = Object(reakit_system_createHook__WEBPACK_IMPORTED_MODULE_2__[/* createHook */ "a"])({
  useState: _IdState_js__WEBPACK_IMPORTED_MODULE_5__[/* unstable_useIdState */ "a"],
  keys: ["id"],
  useOptions: function useOptions(options, htmlProps) {
    var generateId = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_IdProvider_js__WEBPACK_IMPORTED_MODULE_4__[/* unstable_IdContext */ "a"]);

    var _React$useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(function () {
      // This comes from useIdState
      if (options.unstable_idCountRef) {
        options.unstable_idCountRef.current += 1;
        return "-" + options.unstable_idCountRef.current;
      } // If there's no useIdState, we check if `baseId` was passed (as a prop,
      // not from useIdState).


      if (options.baseId) {
        return "-" + generateId("");
      }

      return "";
    }),
        suffix = _React$useState[0]; // `baseId` will be the prop passed directly as a prop or via useIdState.
    // If there's neither, then it'll fallback to Context's generateId.
    // This generateId can result in a sequential ID (if there's a Provider)
    // or a random string (without Provider).


    var baseId = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
      return options.baseId || generateId();
    }, [options.baseId, generateId]);
    var id = htmlProps.id || options.id || "" + baseId + suffix;
    return Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({}, options), {}, {
      id: id
    });
  },
  useProps: function useProps(options, htmlProps) {
    return Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({
      id: options.id
    }, htmlProps);
  }
});
var unstable_Id = Object(reakit_system_createComponent__WEBPACK_IMPORTED_MODULE_1__[/* createComponent */ "a"])({
  as: "div",
  useHook: unstable_useId
});




/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fireEvent; });
/* harmony import */ var _createEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(122);



/**
 * Creates and dispatches `Event` in a way that also works on IE 11.
 *
 * @example
 * import { fireEvent } from "reakit-utils";
 *
 * fireEvent(document.getElementById("id"), "blur", {
 *   bubbles: true,
 *   cancelable: true,
 * });
 */

function fireEvent(element, type, eventInit) {
  return element.dispatchEvent(Object(_createEvent_js__WEBPACK_IMPORTED_MODULE_0__[/* createEvent */ "a"])(element, type, eventInit));
}




/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isTextField; });
/**
 * Check whether the given element is a text field, where text field is defined
 * by the ability to select within the input, or that it is contenteditable.
 */
function isTextField(element) {
  try {
    var isTextInput = element instanceof HTMLInputElement && element.selectionStart !== null;
    var isTextArea = element.tagName === "TEXTAREA";
    var isContentEditable = element.contentEditable === "true";
    return isTextInput || isTextArea || isContentEditable || false;
  } catch (error) {
    // Safari throws an exception when trying to get `selectionStart`
    // on non-text <input> elements (which, understandably, don't
    // have the text selection API). We catch this via a try/catch
    // block, as opposed to a more explicit check of the element's
    // input types, because of Safari's non-standard behavior. This
    // also means we don't have to worry about the list of input
    // types that support `selectionStart` changing as the HTML spec
    // evolves over time.
    return false;
  }
}




/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setTextFieldValue; });
function setTextFieldValue(element, value) {
  element.value = value;
}




/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var TextareaAutosize_1 = __webpack_require__(173);
exports["default"] = TextareaAutosize_1["default"];


/***/ }),
/* 98 */,
/* 99 */,
/* 100 */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["notices"]; }());

/***/ }),
/* 101 */,
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ fireKeyboardEvent; });

// EXTERNAL MODULE: ./node_modules/reakit-utils/es/getDocument.js
var getDocument = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/reakit-utils/es/getDefaultView.js


/**
 * Returns `element.ownerDocument.defaultView || window`.
 */

function getDefaultView(element) {
  return Object(getDocument["a" /* getDocument */])(element).defaultView || window;
}



// CONCATENATED MODULE: ./node_modules/reakit-utils/es/createKeyboardEvent.js



/**
 * Creates a `KeyboardEvent` in a way that also works on IE 11.
 *
 * @example
 * import { createKeyboardEvent } from "reakit-utils";
 *
 * const el = document.getElementById("id");
 * el.dispatchEvent(createKeyboardEvent(el, "keydown", { key: "ArrowDown" }));
 */

function createKeyboardEvent(element, type, eventInit) {
  if (eventInit === void 0) {
    eventInit = {};
  }

  if (typeof KeyboardEvent === "function") {
    return new KeyboardEvent(type, eventInit);
  } // IE 11 doesn't support Event constructors


  var event = Object(getDocument["a" /* getDocument */])(element).createEvent("KeyboardEvent");
  event.initKeyboardEvent(type, eventInit.bubbles, eventInit.cancelable, getDefaultView(element), eventInit.key, eventInit.location, eventInit.ctrlKey, eventInit.altKey, eventInit.shiftKey, eventInit.metaKey);
  return event;
}



// CONCATENATED MODULE: ./node_modules/reakit-utils/es/fireKeyboardEvent.js




/**
 * Creates and dispatches `KeyboardEvent` in a way that also works on IE 11.
 *
 * @example
 * import { fireKeyboardEvent } from "reakit-utils";
 *
 * fireKeyboardEvent(document.getElementById("id"), "keydown", {
 *   key: "ArrowDown",
 *   shiftKey: true,
 * });
 */

function fireKeyboardEvent(element, type, eventInit) {
  return element.dispatchEvent(createKeyboardEvent(element, type, eventInit));
}




/***/ }),
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export warning */


/**
 * Logs `messages` to the console using `console.warn` based on a `condition`.
 *
 * @example
 * import { warning } from "reakit-warning";
 *
 * warning(true, "a", "b"); // console.warn("a", "\n", "b")
 * warning(false, "a", "b"); // does nothing
 */

function warning(condition) {
  if (false) { var warns, _len, messages, _key, _console; }
}




/***/ }),
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function flattenIntoMap( map, effects ) {
	var i;
	if ( Array.isArray( effects ) ) {
		for ( i = 0; i < effects.length; i++ ) {
			flattenIntoMap( map, effects[ i ] );
		}
	} else {
		for ( i in effects ) {
			map[ i ] = ( map[ i ] || [] ).concat( effects[ i ] );
		}
	}
}

function refx( effects ) {
	var map = {},
		middleware;

	flattenIntoMap( map, effects );

	middleware = function( store ) {
		return function( next ) {
			return function( action ) {
				var handlers = map[ action.type ],
					result = next( action ),
					i, handlerAction;

				if ( handlers ) {
					for ( i = 0; i < handlers.length; i++ ) {
						handlerAction = handlers[ i ]( action, store );
						if ( handlerAction ) {
							store.dispatch( handlerAction );
						}
					}
				}

				return result;
			};
		};
	};

	middleware.effects = map;

	return middleware;
}

module.exports = refx;


/***/ }),
/* 111 */,
/* 112 */,
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _extends = _interopDefault(__webpack_require__(170));
var _objectWithoutPropertiesLoose = _interopDefault(__webpack_require__(171));
var React = __webpack_require__(13);
var React__default = _interopDefault(React);
var _inheritsLoose = _interopDefault(__webpack_require__(145));
var _assertThisInitialized = _interopDefault(__webpack_require__(172));

var is = {
  arr: Array.isArray,
  obj: function obj(a) {
    return Object.prototype.toString.call(a) === '[object Object]';
  },
  fun: function fun(a) {
    return typeof a === 'function';
  },
  str: function str(a) {
    return typeof a === 'string';
  },
  num: function num(a) {
    return typeof a === 'number';
  },
  und: function und(a) {
    return a === void 0;
  },
  nul: function nul(a) {
    return a === null;
  },
  set: function set(a) {
    return a instanceof Set;
  },
  map: function map(a) {
    return a instanceof Map;
  },
  equ: function equ(a, b) {
    if (typeof a !== typeof b) return false;
    if (is.str(a) || is.num(a)) return a === b;
    if (is.obj(a) && is.obj(b) && Object.keys(a).length + Object.keys(b).length === 0) return true;
    var i;

    for (i in a) {
      if (!(i in b)) return false;
    }

    for (i in b) {
      if (a[i] !== b[i]) return false;
    }

    return is.und(i) ? a === b : true;
  }
};
function merge(target, lowercase) {
  if (lowercase === void 0) {
    lowercase = true;
  }

  return function (object) {
    return (is.arr(object) ? object : Object.keys(object)).reduce(function (acc, element) {
      var key = lowercase ? element[0].toLowerCase() + element.substring(1) : element;
      acc[key] = target(key);
      return acc;
    }, target);
  };
}
function useForceUpdate() {
  var _useState = React.useState(false),
      f = _useState[1];

  var forceUpdate = React.useCallback(function () {
    return f(function (v) {
      return !v;
    });
  }, []);
  return forceUpdate;
}
function withDefault(value, defaultValue) {
  return is.und(value) || is.nul(value) ? defaultValue : value;
}
function toArray(a) {
  return !is.und(a) ? is.arr(a) ? a : [a] : [];
}
function callProp(obj) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return is.fun(obj) ? obj.apply(void 0, args) : obj;
}

function getForwardProps(props) {
  var to = props.to,
      from = props.from,
      config = props.config,
      onStart = props.onStart,
      onRest = props.onRest,
      onFrame = props.onFrame,
      children = props.children,
      reset = props.reset,
      reverse = props.reverse,
      force = props.force,
      immediate = props.immediate,
      delay = props.delay,
      attach = props.attach,
      destroyed = props.destroyed,
      interpolateTo = props.interpolateTo,
      ref = props.ref,
      lazy = props.lazy,
      forward = _objectWithoutPropertiesLoose(props, ["to", "from", "config", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "delay", "attach", "destroyed", "interpolateTo", "ref", "lazy"]);

  return forward;
}

function interpolateTo(props) {
  var forward = getForwardProps(props);
  if (is.und(forward)) return _extends({
    to: forward
  }, props);
  var rest = Object.keys(props).reduce(function (a, k) {
    var _extends2;

    return !is.und(forward[k]) ? a : _extends({}, a, (_extends2 = {}, _extends2[k] = props[k], _extends2));
  }, {});
  return _extends({
    to: forward
  }, rest);
}
function handleRef(ref, forward) {
  if (forward) {
    // If it's a function, assume it's a ref callback
    if (is.fun(forward)) forward(ref);else if (is.obj(forward)) {
      forward.current = ref;
    }
  }

  return ref;
}

var Animated =
/*#__PURE__*/
function () {
  function Animated() {
    this.payload = void 0;
    this.children = [];
  }

  var _proto = Animated.prototype;

  _proto.getAnimatedValue = function getAnimatedValue() {
    return this.getValue();
  };

  _proto.getPayload = function getPayload() {
    return this.payload || this;
  };

  _proto.attach = function attach() {};

  _proto.detach = function detach() {};

  _proto.getChildren = function getChildren() {
    return this.children;
  };

  _proto.addChild = function addChild(child) {
    if (this.children.length === 0) this.attach();
    this.children.push(child);
  };

  _proto.removeChild = function removeChild(child) {
    var index = this.children.indexOf(child);
    this.children.splice(index, 1);
    if (this.children.length === 0) this.detach();
  };

  return Animated;
}();
var AnimatedArray =
/*#__PURE__*/
function (_Animated) {
  _inheritsLoose(AnimatedArray, _Animated);

  function AnimatedArray() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Animated.call.apply(_Animated, [this].concat(args)) || this;
    _this.payload = [];

    _this.attach = function () {
      return _this.payload.forEach(function (p) {
        return p instanceof Animated && p.addChild(_assertThisInitialized(_this));
      });
    };

    _this.detach = function () {
      return _this.payload.forEach(function (p) {
        return p instanceof Animated && p.removeChild(_assertThisInitialized(_this));
      });
    };

    return _this;
  }

  return AnimatedArray;
}(Animated);
var AnimatedObject =
/*#__PURE__*/
function (_Animated2) {
  _inheritsLoose(AnimatedObject, _Animated2);

  function AnimatedObject() {
    var _this2;

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this2 = _Animated2.call.apply(_Animated2, [this].concat(args)) || this;
    _this2.payload = {};

    _this2.attach = function () {
      return Object.values(_this2.payload).forEach(function (s) {
        return s instanceof Animated && s.addChild(_assertThisInitialized(_this2));
      });
    };

    _this2.detach = function () {
      return Object.values(_this2.payload).forEach(function (s) {
        return s instanceof Animated && s.removeChild(_assertThisInitialized(_this2));
      });
    };

    return _this2;
  }

  var _proto2 = AnimatedObject.prototype;

  _proto2.getValue = function getValue(animated) {
    if (animated === void 0) {
      animated = false;
    }

    var payload = {};

    for (var _key4 in this.payload) {
      var value = this.payload[_key4];
      if (animated && !(value instanceof Animated)) continue;
      payload[_key4] = value instanceof Animated ? value[animated ? 'getAnimatedValue' : 'getValue']() : value;
    }

    return payload;
  };

  _proto2.getAnimatedValue = function getAnimatedValue() {
    return this.getValue(true);
  };

  return AnimatedObject;
}(Animated);

var applyAnimatedValues;
function injectApplyAnimatedValues(fn, transform) {
  applyAnimatedValues = {
    fn: fn,
    transform: transform
  };
}
var colorNames;
function injectColorNames(names) {
  colorNames = names;
}
var requestFrame = function requestFrame(cb) {
  return typeof window !== 'undefined' ? window.requestAnimationFrame(cb) : -1;
};
var cancelFrame = function cancelFrame(id) {
  typeof window !== 'undefined' && window.cancelAnimationFrame(id);
};
function injectFrame(raf, caf) {
  requestFrame = raf;
  cancelFrame = caf;
}
var interpolation;
function injectStringInterpolator(fn) {
  interpolation = fn;
}
var now = function now() {
  return Date.now();
};
function injectNow(nowFn) {
  now = nowFn;
}
var defaultElement;
function injectDefaultElement(el) {
  defaultElement = el;
}
var animatedApi = function animatedApi(node) {
  return node.current;
};
function injectAnimatedApi(fn) {
  animatedApi = fn;
}
var createAnimatedStyle;
function injectCreateAnimatedStyle(factory) {
  createAnimatedStyle = factory;
}
var manualFrameloop;
function injectManualFrameloop(callback) {
  manualFrameloop = callback;
}

var Globals = /*#__PURE__*/Object.freeze({
  get applyAnimatedValues () { return applyAnimatedValues; },
  injectApplyAnimatedValues: injectApplyAnimatedValues,
  get colorNames () { return colorNames; },
  injectColorNames: injectColorNames,
  get requestFrame () { return requestFrame; },
  get cancelFrame () { return cancelFrame; },
  injectFrame: injectFrame,
  get interpolation () { return interpolation; },
  injectStringInterpolator: injectStringInterpolator,
  get now () { return now; },
  injectNow: injectNow,
  get defaultElement () { return defaultElement; },
  injectDefaultElement: injectDefaultElement,
  get animatedApi () { return animatedApi; },
  injectAnimatedApi: injectAnimatedApi,
  get createAnimatedStyle () { return createAnimatedStyle; },
  injectCreateAnimatedStyle: injectCreateAnimatedStyle,
  get manualFrameloop () { return manualFrameloop; },
  injectManualFrameloop: injectManualFrameloop
});

/**
 * Wraps the `style` property with `AnimatedStyle`.
 */

var AnimatedProps =
/*#__PURE__*/
function (_AnimatedObject) {
  _inheritsLoose(AnimatedProps, _AnimatedObject);

  function AnimatedProps(props, callback) {
    var _this;

    _this = _AnimatedObject.call(this) || this;
    _this.update = void 0;
    _this.payload = !props.style ? props : _extends({}, props, {
      style: createAnimatedStyle(props.style)
    });
    _this.update = callback;

    _this.attach();

    return _this;
  }

  return AnimatedProps;
}(AnimatedObject);

var isFunctionComponent = function isFunctionComponent(val) {
  return is.fun(val) && !(val.prototype instanceof React__default.Component);
};

var createAnimatedComponent = function createAnimatedComponent(Component) {
  var AnimatedComponent = React.forwardRef(function (props, ref) {
    var forceUpdate = useForceUpdate();
    var mounted = React.useRef(true);
    var propsAnimated = React.useRef(null);
    var node = React.useRef(null);
    var attachProps = React.useCallback(function (props) {
      var oldPropsAnimated = propsAnimated.current;

      var callback = function callback() {
        var didUpdate = false;

        if (node.current) {
          didUpdate = applyAnimatedValues.fn(node.current, propsAnimated.current.getAnimatedValue());
        }

        if (!node.current || didUpdate === false) {
          // If no referenced node has been found, or the update target didn't have a
          // native-responder, then forceUpdate the animation ...
          forceUpdate();
        }
      };

      propsAnimated.current = new AnimatedProps(props, callback);
      oldPropsAnimated && oldPropsAnimated.detach();
    }, []);
    React.useEffect(function () {
      return function () {
        mounted.current = false;
        propsAnimated.current && propsAnimated.current.detach();
      };
    }, []);
    React.useImperativeHandle(ref, function () {
      return animatedApi(node, mounted, forceUpdate);
    });
    attachProps(props);

    var _getValue = propsAnimated.current.getValue(),
        scrollTop = _getValue.scrollTop,
        scrollLeft = _getValue.scrollLeft,
        animatedProps = _objectWithoutPropertiesLoose(_getValue, ["scrollTop", "scrollLeft"]); // Functions cannot have refs, see:
    // See: https://github.com/react-spring/react-spring/issues/569


    var refFn = isFunctionComponent(Component) ? undefined : function (childRef) {
      return node.current = handleRef(childRef, ref);
    };
    return React__default.createElement(Component, _extends({}, animatedProps, {
      ref: refFn
    }));
  });
  return AnimatedComponent;
};

var active = false;
var controllers = new Set();

var update = function update() {
  if (!active) return false;
  var time = now();

  for (var _iterator = controllers, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var controller = _ref;
    var isActive = false;

    for (var configIdx = 0; configIdx < controller.configs.length; configIdx++) {
      var config = controller.configs[configIdx];
      var endOfAnimation = void 0,
          lastTime = void 0;

      for (var valIdx = 0; valIdx < config.animatedValues.length; valIdx++) {
        var animation = config.animatedValues[valIdx]; // If an animation is done, skip, until all of them conclude

        if (animation.done) continue;
        var from = config.fromValues[valIdx];
        var to = config.toValues[valIdx];
        var position = animation.lastPosition;
        var isAnimated = to instanceof Animated;
        var velocity = Array.isArray(config.initialVelocity) ? config.initialVelocity[valIdx] : config.initialVelocity;
        if (isAnimated) to = to.getValue(); // Conclude animation if it's either immediate, or from-values match end-state

        if (config.immediate) {
          animation.setValue(to);
          animation.done = true;
          continue;
        } // Break animation when string values are involved


        if (typeof from === 'string' || typeof to === 'string') {
          animation.setValue(to);
          animation.done = true;
          continue;
        }

        if (config.duration !== void 0) {
          /** Duration easing */
          position = from + config.easing((time - animation.startTime) / config.duration) * (to - from);
          endOfAnimation = time >= animation.startTime + config.duration;
        } else if (config.decay) {
          /** Decay easing */
          position = from + velocity / (1 - 0.998) * (1 - Math.exp(-(1 - 0.998) * (time - animation.startTime)));
          endOfAnimation = Math.abs(animation.lastPosition - position) < 0.1;
          if (endOfAnimation) to = position;
        } else {
          /** Spring easing */
          lastTime = animation.lastTime !== void 0 ? animation.lastTime : time;
          velocity = animation.lastVelocity !== void 0 ? animation.lastVelocity : config.initialVelocity; // If we lost a lot of frames just jump to the end.

          if (time > lastTime + 64) lastTime = time; // http://gafferongames.com/game-physics/fix-your-timestep/

          var numSteps = Math.floor(time - lastTime);

          for (var i = 0; i < numSteps; ++i) {
            var force = -config.tension * (position - to);
            var damping = -config.friction * velocity;
            var acceleration = (force + damping) / config.mass;
            velocity = velocity + acceleration * 1 / 1000;
            position = position + velocity * 1 / 1000;
          } // Conditions for stopping the spring animation


          var isOvershooting = config.clamp && config.tension !== 0 ? from < to ? position > to : position < to : false;
          var isVelocity = Math.abs(velocity) <= config.precision;
          var isDisplacement = config.tension !== 0 ? Math.abs(to - position) <= config.precision : true;
          endOfAnimation = isOvershooting || isVelocity && isDisplacement;
          animation.lastVelocity = velocity;
          animation.lastTime = time;
        } // Trails aren't done until their parents conclude


        if (isAnimated && !config.toValues[valIdx].done) endOfAnimation = false;

        if (endOfAnimation) {
          // Ensure that we end up with a round value
          if (animation.value !== to) position = to;
          animation.done = true;
        } else isActive = true;

        animation.setValue(position);
        animation.lastPosition = position;
      } // Keep track of updated values only when necessary


      if (controller.props.onFrame) controller.values[config.name] = config.interpolation.getValue();
    } // Update callbacks in the end of the frame


    if (controller.props.onFrame) controller.props.onFrame(controller.values); // Either call onEnd or next frame

    if (!isActive) {
      controllers.delete(controller);
      controller.stop(true);
    }
  } // Loop over as long as there are controllers ...


  if (controllers.size) {
    if (manualFrameloop) manualFrameloop();else requestFrame(update);
  } else {
    active = false;
  }

  return active;
};

var start = function start(controller) {
  if (!controllers.has(controller)) controllers.add(controller);

  if (!active) {
    active = true;
    if (manualFrameloop) requestFrame(manualFrameloop);else requestFrame(update);
  }
};

var stop = function stop(controller) {
  if (controllers.has(controller)) controllers.delete(controller);
};

function createInterpolator(range, output, extrapolate) {
  if (typeof range === 'function') {
    return range;
  }

  if (Array.isArray(range)) {
    return createInterpolator({
      range: range,
      output: output,
      extrapolate: extrapolate
    });
  }

  if (interpolation && typeof range.output[0] === 'string') {
    return interpolation(range);
  }

  var config = range;
  var outputRange = config.output;
  var inputRange = config.range || [0, 1];
  var extrapolateLeft = config.extrapolateLeft || config.extrapolate || 'extend';
  var extrapolateRight = config.extrapolateRight || config.extrapolate || 'extend';

  var easing = config.easing || function (t) {
    return t;
  };

  return function (input) {
    var range = findRange(input, inputRange);
    return interpolate(input, inputRange[range], inputRange[range + 1], outputRange[range], outputRange[range + 1], easing, extrapolateLeft, extrapolateRight, config.map);
  };
}

function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
  var result = map ? map(input) : input; // Extrapolate

  if (result < inputMin) {
    if (extrapolateLeft === 'identity') return result;else if (extrapolateLeft === 'clamp') result = inputMin;
  }

  if (result > inputMax) {
    if (extrapolateRight === 'identity') return result;else if (extrapolateRight === 'clamp') result = inputMax;
  }

  if (outputMin === outputMax) return outputMin;
  if (inputMin === inputMax) return input <= inputMin ? outputMin : outputMax; // Input Range

  if (inputMin === -Infinity) result = -result;else if (inputMax === Infinity) result = result - inputMin;else result = (result - inputMin) / (inputMax - inputMin); // Easing

  result = easing(result); // Output Range

  if (outputMin === -Infinity) result = -result;else if (outputMax === Infinity) result = result + outputMin;else result = result * (outputMax - outputMin) + outputMin;
  return result;
}

function findRange(input, inputRange) {
  for (var i = 1; i < inputRange.length - 1; ++i) {
    if (inputRange[i] >= input) break;
  }

  return i - 1;
}

var AnimatedInterpolation =
/*#__PURE__*/
function (_AnimatedArray) {
  _inheritsLoose(AnimatedInterpolation, _AnimatedArray);

  function AnimatedInterpolation(parents, range, output, extrapolate) {
    var _this;

    _this = _AnimatedArray.call(this) || this;
    _this.calc = void 0;
    _this.payload = parents instanceof AnimatedArray && !(parents instanceof AnimatedInterpolation) ? parents.getPayload() : Array.isArray(parents) ? parents : [parents];
    _this.calc = createInterpolator(range, output, extrapolate);
    return _this;
  }

  var _proto = AnimatedInterpolation.prototype;

  _proto.getValue = function getValue() {
    return this.calc.apply(this, this.payload.map(function (value) {
      return value.getValue();
    }));
  };

  _proto.updateConfig = function updateConfig(range, output, extrapolate) {
    this.calc = createInterpolator(range, output, extrapolate);
  };

  _proto.interpolate = function interpolate(range, output, extrapolate) {
    return new AnimatedInterpolation(this, range, output, extrapolate);
  };

  return AnimatedInterpolation;
}(AnimatedArray);

var interpolate$1 = function interpolate(parents, range, output) {
  return parents && new AnimatedInterpolation(parents, range, output);
};

var config = {
  default: {
    tension: 170,
    friction: 26
  },
  gentle: {
    tension: 120,
    friction: 14
  },
  wobbly: {
    tension: 180,
    friction: 12
  },
  stiff: {
    tension: 210,
    friction: 20
  },
  slow: {
    tension: 280,
    friction: 60
  },
  molasses: {
    tension: 280,
    friction: 120
  }
};

/** API
 *  useChain(references, timeSteps, timeFrame)
 */

function useChain(refs, timeSteps, timeFrame) {
  if (timeFrame === void 0) {
    timeFrame = 1000;
  }

  var previous = React.useRef();
  React.useEffect(function () {
    if (is.equ(refs, previous.current)) refs.forEach(function (_ref) {
      var current = _ref.current;
      return current && current.start();
    });else if (timeSteps) {
      refs.forEach(function (_ref2, index) {
        var current = _ref2.current;

        if (current) {
          var ctrls = current.controllers;

          if (ctrls.length) {
            var t = timeFrame * timeSteps[index];
            ctrls.forEach(function (ctrl) {
              ctrl.queue = ctrl.queue.map(function (e) {
                return _extends({}, e, {
                  delay: e.delay + t
                });
              });
              ctrl.start();
            });
          }
        }
      });
    } else refs.reduce(function (q, _ref3, rI) {
      var current = _ref3.current;
      return q = q.then(function () {
        return current.start();
      });
    }, Promise.resolve());
    previous.current = refs;
  });
}

/**
 * Animated works by building a directed acyclic graph of dependencies
 * transparently when you render your Animated components.
 *
 *               new Animated.Value(0)
 *     .interpolate()        .interpolate()    new Animated.Value(1)
 *         opacity               translateY      scale
 *          style                         transform
 *         View#234                         style
 *                                         View#123
 *
 * A) Top Down phase
 * When an AnimatedValue is updated, we recursively go down through this
 * graph in order to find leaf nodes: the views that we flag as needing
 * an update.
 *
 * B) Bottom Up phase
 * When a view is flagged as needing an update, we recursively go back up
 * in order to build the new value that it needs. The reason why we need
 * this two-phases process is to deal with composite props such as
 * transform which can receive values from multiple parents.
 */
function addAnimatedStyles(node, styles) {
  if ('update' in node) {
    styles.add(node);
  } else {
    node.getChildren().forEach(function (child) {
      return addAnimatedStyles(child, styles);
    });
  }
}

var AnimatedValue =
/*#__PURE__*/
function (_Animated) {
  _inheritsLoose(AnimatedValue, _Animated);

  function AnimatedValue(_value) {
    var _this;

    _this = _Animated.call(this) || this;
    _this.animatedStyles = new Set();
    _this.value = void 0;
    _this.startPosition = void 0;
    _this.lastPosition = void 0;
    _this.lastVelocity = void 0;
    _this.startTime = void 0;
    _this.lastTime = void 0;
    _this.done = false;

    _this.setValue = function (value, flush) {
      if (flush === void 0) {
        flush = true;
      }

      _this.value = value;
      if (flush) _this.flush();
    };

    _this.value = _value;
    _this.startPosition = _value;
    _this.lastPosition = _value;
    return _this;
  }

  var _proto = AnimatedValue.prototype;

  _proto.flush = function flush() {
    if (this.animatedStyles.size === 0) {
      addAnimatedStyles(this, this.animatedStyles);
    }

    this.animatedStyles.forEach(function (animatedStyle) {
      return animatedStyle.update();
    });
  };

  _proto.clearStyles = function clearStyles() {
    this.animatedStyles.clear();
  };

  _proto.getValue = function getValue() {
    return this.value;
  };

  _proto.interpolate = function interpolate(range, output, extrapolate) {
    return new AnimatedInterpolation(this, range, output, extrapolate);
  };

  return AnimatedValue;
}(Animated);

var AnimatedValueArray =
/*#__PURE__*/
function (_AnimatedArray) {
  _inheritsLoose(AnimatedValueArray, _AnimatedArray);

  function AnimatedValueArray(values) {
    var _this;

    _this = _AnimatedArray.call(this) || this;
    _this.payload = values.map(function (n) {
      return new AnimatedValue(n);
    });
    return _this;
  }

  var _proto = AnimatedValueArray.prototype;

  _proto.setValue = function setValue(value, flush) {
    var _this2 = this;

    if (flush === void 0) {
      flush = true;
    }

    if (Array.isArray(value)) {
      if (value.length === this.payload.length) {
        value.forEach(function (v, i) {
          return _this2.payload[i].setValue(v, flush);
        });
      }
    } else {
      this.payload.forEach(function (p) {
        return p.setValue(value, flush);
      });
    }
  };

  _proto.getValue = function getValue() {
    return this.payload.map(function (v) {
      return v.getValue();
    });
  };

  _proto.interpolate = function interpolate(range, output) {
    return new AnimatedInterpolation(this, range, output);
  };

  return AnimatedValueArray;
}(AnimatedArray);

var G = 0;

var Controller =
/*#__PURE__*/
function () {
  function Controller() {
    var _this = this;

    this.id = void 0;
    this.idle = true;
    this.hasChanged = false;
    this.guid = 0;
    this.local = 0;
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.values = {};
    this.configs = [];
    this.listeners = [];
    this.queue = [];
    this.localQueue = void 0;

    this.getValues = function () {
      return _this.interpolations;
    };

    this.id = G++;
  }
  /** update(props)
   *  This function filters input props and creates an array of tasks which are executed in .start()
   *  Each task is allowed to carry a delay, which means it can execute asnychroneously */


  var _proto = Controller.prototype;

  _proto.update = function update$$1(args) {
    //this._id = n + this.id
    if (!args) return this; // Extract delay and the to-prop from props

    var _ref = interpolateTo(args),
        _ref$delay = _ref.delay,
        delay = _ref$delay === void 0 ? 0 : _ref$delay,
        to = _ref.to,
        props = _objectWithoutPropertiesLoose(_ref, ["delay", "to"]);

    if (is.arr(to) || is.fun(to)) {
      // If config is either a function or an array queue it up as is
      this.queue.push(_extends({}, props, {
        delay: delay,
        to: to
      }));
    } else if (to) {
      // Otherwise go through each key since it could be delayed individually
      var ops = {};
      Object.entries(to).forEach(function (_ref2) {
        var _to;

        var k = _ref2[0],
            v = _ref2[1];

        // Fetch delay and create an entry, consisting of the to-props, the delay, and basic props
        var entry = _extends({
          to: (_to = {}, _to[k] = v, _to),
          delay: callProp(delay, k)
        }, props);

        var previous = ops[entry.delay] && ops[entry.delay].to;
        ops[entry.delay] = _extends({}, ops[entry.delay], entry, {
          to: _extends({}, previous, entry.to)
        });
      });
      this.queue = Object.values(ops);
    } // Sort queue, so that async calls go last


    this.queue = this.queue.sort(function (a, b) {
      return a.delay - b.delay;
    }); // Diff the reduced props immediately (they'll contain the from-prop and some config)

    this.diff(props);
    return this;
  }
  /** start(onEnd)
   *  This function either executes a queue, if present, or starts the frameloop, which animates */
  ;

  _proto.start = function start$$1(onEnd) {
    var _this2 = this;

    // If a queue is present we must excecute it
    if (this.queue.length) {
      this.idle = false; // Updates can interrupt trailing queues, in that case we just merge values

      if (this.localQueue) {
        this.localQueue.forEach(function (_ref3) {
          var _ref3$from = _ref3.from,
              from = _ref3$from === void 0 ? {} : _ref3$from,
              _ref3$to = _ref3.to,
              to = _ref3$to === void 0 ? {} : _ref3$to;
          if (is.obj(from)) _this2.merged = _extends({}, from, _this2.merged);
          if (is.obj(to)) _this2.merged = _extends({}, _this2.merged, to);
        });
      } // The guid helps us tracking frames, a new queue over an old one means an override
      // We discard async calls in that caseÍ


      var local = this.local = ++this.guid;
      var queue = this.localQueue = this.queue;
      this.queue = []; // Go through each entry and execute it

      queue.forEach(function (_ref4, index) {
        var delay = _ref4.delay,
            props = _objectWithoutPropertiesLoose(_ref4, ["delay"]);

        var cb = function cb(finished) {
          if (index === queue.length - 1 && local === _this2.guid && finished) {
            _this2.idle = true;
            if (_this2.props.onRest) _this2.props.onRest(_this2.merged);
          }

          if (onEnd) onEnd();
        }; // Entries can be delayed, ansyc or immediate


        var async = is.arr(props.to) || is.fun(props.to);

        if (delay) {
          setTimeout(function () {
            if (local === _this2.guid) {
              if (async) _this2.runAsync(props, cb);else _this2.diff(props).start(cb);
            }
          }, delay);
        } else if (async) _this2.runAsync(props, cb);else _this2.diff(props).start(cb);
      });
    } // Otherwise we kick of the frameloop
    else {
        if (is.fun(onEnd)) this.listeners.push(onEnd);
        if (this.props.onStart) this.props.onStart();

        start(this);
      }

    return this;
  };

  _proto.stop = function stop$$1(finished) {
    this.listeners.forEach(function (onEnd) {
      return onEnd(finished);
    });
    this.listeners = [];
    return this;
  }
  /** Pause sets onEnd listeners free, but also removes the controller from the frameloop */
  ;

  _proto.pause = function pause(finished) {
    this.stop(true);
    if (finished) stop(this);
    return this;
  };

  _proto.runAsync = function runAsync(_ref5, onEnd) {
    var _this3 = this;

    var delay = _ref5.delay,
        props = _objectWithoutPropertiesLoose(_ref5, ["delay"]);

    var local = this.local; // If "to" is either a function or an array it will be processed async, therefor "to" should be empty right now
    // If the view relies on certain values "from" has to be present

    var queue = Promise.resolve(undefined);

    if (is.arr(props.to)) {
      var _loop = function _loop(i) {
        var index = i;

        var fresh = _extends({}, props, interpolateTo(props.to[index]));

        if (is.arr(fresh.config)) fresh.config = fresh.config[index];
        queue = queue.then(function () {
          //this.stop()
          if (local === _this3.guid) return new Promise(function (r) {
            return _this3.diff(fresh).start(r);
          });
        });
      };

      for (var i = 0; i < props.to.length; i++) {
        _loop(i);
      }
    } else if (is.fun(props.to)) {
      var index = 0;
      var last;
      queue = queue.then(function () {
        return props.to( // next(props)
        function (p) {
          var fresh = _extends({}, props, interpolateTo(p));

          if (is.arr(fresh.config)) fresh.config = fresh.config[index];
          index++; //this.stop()

          if (local === _this3.guid) return last = new Promise(function (r) {
            return _this3.diff(fresh).start(r);
          });
          return;
        }, // cancel()
        function (finished) {
          if (finished === void 0) {
            finished = true;
          }

          return _this3.stop(finished);
        }).then(function () {
          return last;
        });
      });
    }

    queue.then(onEnd);
  };

  _proto.diff = function diff(props) {
    var _this4 = this;

    this.props = _extends({}, this.props, props);
    var _this$props = this.props,
        _this$props$from = _this$props.from,
        from = _this$props$from === void 0 ? {} : _this$props$from,
        _this$props$to = _this$props.to,
        to = _this$props$to === void 0 ? {} : _this$props$to,
        _this$props$config = _this$props.config,
        config = _this$props$config === void 0 ? {} : _this$props$config,
        reverse = _this$props.reverse,
        attach = _this$props.attach,
        reset = _this$props.reset,
        immediate = _this$props.immediate; // Reverse values when requested

    if (reverse) {
      var _ref6 = [to, from];
      from = _ref6[0];
      to = _ref6[1];
    } // This will collect all props that were ever set, reset merged props when necessary


    this.merged = _extends({}, from, this.merged, to);
    this.hasChanged = false; // Attachment handling, trailed springs can "attach" themselves to a previous spring

    var target = attach && attach(this); // Reduces input { name: value } pairs into animated values

    this.animations = Object.entries(this.merged).reduce(function (acc, _ref7) {
      var name = _ref7[0],
          value = _ref7[1];
      // Issue cached entries, except on reset
      var entry = acc[name] || {}; // Figure out what the value is supposed to be

      var isNumber = is.num(value);
      var isString = is.str(value) && !value.startsWith('#') && !/\d/.test(value) && !colorNames[value];
      var isArray = is.arr(value);
      var isInterpolation = !isNumber && !isArray && !isString;
      var fromValue = !is.und(from[name]) ? from[name] : value;
      var toValue = isNumber || isArray ? value : isString ? value : 1;
      var toConfig = callProp(config, name);
      if (target) toValue = target.animations[name].parent;
      var parent = entry.parent,
          interpolation$$1 = entry.interpolation,
          toValues = toArray(target ? toValue.getPayload() : toValue),
          animatedValues;
      var newValue = value;
      if (isInterpolation) newValue = interpolation({
        range: [0, 1],
        output: [value, value]
      })(1);
      var currentValue = interpolation$$1 && interpolation$$1.getValue(); // Change detection flags

      var isFirst = is.und(parent);
      var isActive = !isFirst && entry.animatedValues.some(function (v) {
        return !v.done;
      });
      var currentValueDiffersFromGoal = !is.equ(newValue, currentValue);
      var hasNewGoal = !is.equ(newValue, entry.previous);
      var hasNewConfig = !is.equ(toConfig, entry.config); // Change animation props when props indicate a new goal (new value differs from previous one)
      // and current values differ from it. Config changes trigger a new update as well (though probably shouldn't?)

      if (reset || hasNewGoal && currentValueDiffersFromGoal || hasNewConfig) {
        var _extends2;

        // Convert regular values into animated values, ALWAYS re-use if possible
        if (isNumber || isString) parent = interpolation$$1 = entry.parent || new AnimatedValue(fromValue);else if (isArray) parent = interpolation$$1 = entry.parent || new AnimatedValueArray(fromValue);else if (isInterpolation) {
          var prev = entry.interpolation && entry.interpolation.calc(entry.parent.value);
          prev = prev !== void 0 && !reset ? prev : fromValue;

          if (entry.parent) {
            parent = entry.parent;
            parent.setValue(0, false);
          } else parent = new AnimatedValue(0);

          var range = {
            output: [prev, value]
          };

          if (entry.interpolation) {
            interpolation$$1 = entry.interpolation;
            entry.interpolation.updateConfig(range);
          } else interpolation$$1 = parent.interpolate(range);
        }
        toValues = toArray(target ? toValue.getPayload() : toValue);
        animatedValues = toArray(parent.getPayload());
        if (reset && !isInterpolation) parent.setValue(fromValue, false);
        _this4.hasChanged = true; // Reset animated values

        animatedValues.forEach(function (value) {
          value.startPosition = value.value;
          value.lastPosition = value.value;
          value.lastVelocity = isActive ? value.lastVelocity : undefined;
          value.lastTime = isActive ? value.lastTime : undefined;
          value.startTime = now();
          value.done = false;
          value.animatedStyles.clear();
        }); // Set immediate values

        if (callProp(immediate, name)) {
          parent.setValue(isInterpolation ? toValue : value, false);
        }

        return _extends({}, acc, (_extends2 = {}, _extends2[name] = _extends({}, entry, {
          name: name,
          parent: parent,
          interpolation: interpolation$$1,
          animatedValues: animatedValues,
          toValues: toValues,
          previous: newValue,
          config: toConfig,
          fromValues: toArray(parent.getValue()),
          immediate: callProp(immediate, name),
          initialVelocity: withDefault(toConfig.velocity, 0),
          clamp: withDefault(toConfig.clamp, false),
          precision: withDefault(toConfig.precision, 0.01),
          tension: withDefault(toConfig.tension, 170),
          friction: withDefault(toConfig.friction, 26),
          mass: withDefault(toConfig.mass, 1),
          duration: toConfig.duration,
          easing: withDefault(toConfig.easing, function (t) {
            return t;
          }),
          decay: toConfig.decay
        }), _extends2));
      } else {
        if (!currentValueDiffersFromGoal) {
          var _extends3;

          // So ... the current target value (newValue) appears to be different from the previous value,
          // which normally constitutes an update, but the actual value (currentValue) matches the target!
          // In order to resolve this without causing an animation update we silently flag the animation as done,
          // which it technically is. Interpolations also needs a config update with their target set to 1.
          if (isInterpolation) {
            parent.setValue(1, false);
            interpolation$$1.updateConfig({
              output: [newValue, newValue]
            });
          }

          parent.done = true;
          _this4.hasChanged = true;
          return _extends({}, acc, (_extends3 = {}, _extends3[name] = _extends({}, acc[name], {
            previous: newValue
          }), _extends3));
        }

        return acc;
      }
    }, this.animations);

    if (this.hasChanged) {
      // Make animations available to frameloop
      this.configs = Object.values(this.animations);
      this.values = {};
      this.interpolations = {};

      for (var key in this.animations) {
        this.interpolations[key] = this.animations[key].interpolation;
        this.values[key] = this.animations[key].interpolation.getValue();
      }
    }

    return this;
  };

  _proto.destroy = function destroy() {
    this.stop();
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.values = {};
    this.configs = [];
    this.local = 0;
  };

  return Controller;
}();

/** API
 * const props = useSprings(number, [{ ... }, { ... }, ...])
 * const [props, set] = useSprings(number, (i, controller) => ({ ... }))
 */

var useSprings = function useSprings(length, props) {
  var mounted = React.useRef(false);
  var ctrl = React.useRef();
  var isFn = is.fun(props); // The controller maintains the animation values, starts and stops animations

  var _useMemo = React.useMemo(function () {
    // Remove old controllers
    if (ctrl.current) {
      ctrl.current.map(function (c) {
        return c.destroy();
      });
      ctrl.current = undefined;
    }

    var ref;
    return [new Array(length).fill().map(function (_, i) {
      var ctrl = new Controller();
      var newProps = isFn ? callProp(props, i, ctrl) : props[i];
      if (i === 0) ref = newProps.ref;
      ctrl.update(newProps);
      if (!ref) ctrl.start();
      return ctrl;
    }), ref];
  }, [length]),
      controllers = _useMemo[0],
      ref = _useMemo[1];

  ctrl.current = controllers; // The hooks reference api gets defined here ...

  var api = React.useImperativeHandle(ref, function () {
    return {
      start: function start() {
        return Promise.all(ctrl.current.map(function (c) {
          return new Promise(function (r) {
            return c.start(r);
          });
        }));
      },
      stop: function stop(finished) {
        return ctrl.current.forEach(function (c) {
          return c.stop(finished);
        });
      },

      get controllers() {
        return ctrl.current;
      }

    };
  }); // This function updates the controllers

  var updateCtrl = React.useMemo(function () {
    return function (updateProps) {
      return ctrl.current.map(function (c, i) {
        c.update(isFn ? callProp(updateProps, i, c) : updateProps[i]);
        if (!ref) c.start();
      });
    };
  }, [length]); // Update controller if props aren't functional

  React.useEffect(function () {
    if (mounted.current) {
      if (!isFn) updateCtrl(props);
    } else if (!ref) ctrl.current.forEach(function (c) {
      return c.start();
    });
  }); // Update mounted flag and destroy controller on unmount

  React.useEffect(function () {
    return mounted.current = true, function () {
      return ctrl.current.forEach(function (c) {
        return c.destroy();
      });
    };
  }, []); // Return animated props, or, anim-props + the update-setter above

  var propValues = ctrl.current.map(function (c) {
    return c.getValues();
  });
  return isFn ? [propValues, updateCtrl, function (finished) {
    return ctrl.current.forEach(function (c) {
      return c.pause(finished);
    });
  }] : propValues;
};

/** API
 * const props = useSpring({ ... })
 * const [props, set] = useSpring(() => ({ ... }))
 */

var useSpring = function useSpring(props) {
  var isFn = is.fun(props);

  var _useSprings = useSprings(1, isFn ? props : [props]),
      result = _useSprings[0],
      set = _useSprings[1],
      pause = _useSprings[2];

  return isFn ? [result[0], set, pause] : result;
};

/** API
 * const trails = useTrail(number, { ... })
 * const [trails, set] = useTrail(number, () => ({ ... }))
 */

var useTrail = function useTrail(length, props) {
  var mounted = React.useRef(false);
  var isFn = is.fun(props);
  var updateProps = callProp(props);
  var instances = React.useRef();

  var _useSprings = useSprings(length, function (i, ctrl) {
    if (i === 0) instances.current = [];
    instances.current.push(ctrl);
    return _extends({}, updateProps, {
      config: callProp(updateProps.config, i),
      attach: i > 0 && function () {
        return instances.current[i - 1];
      }
    });
  }),
      result = _useSprings[0],
      set = _useSprings[1],
      pause = _useSprings[2]; // Set up function to update controller


  var updateCtrl = React.useMemo(function () {
    return function (props) {
      return set(function (i, ctrl) {
        var last = props.reverse ? i === 0 : length - 1 === i;
        var attachIdx = props.reverse ? i + 1 : i - 1;
        var attachController = instances.current[attachIdx];
        return _extends({}, props, {
          config: callProp(props.config || updateProps.config, i),
          attach: attachController && function () {
            return attachController;
          }
        });
      });
    };
  }, [length, updateProps.reverse]); // Update controller if props aren't functional

  React.useEffect(function () {
    return void (mounted.current && !isFn && updateCtrl(props));
  }); // Update mounted flag and destroy controller on unmount

  React.useEffect(function () {
    return void (mounted.current = true);
  }, []);
  return isFn ? [result, updateCtrl, pause] : result;
};

/** API
 * const transitions = useTransition(items, itemKeys, { ... })
 * const [transitions, update] = useTransition(items, itemKeys, () => ({ ... }))
 */

var guid = 0;
var ENTER = 'enter';
var LEAVE = 'leave';
var UPDATE = 'update';

var mapKeys = function mapKeys(items, keys) {
  return (typeof keys === 'function' ? items.map(keys) : toArray(keys)).map(String);
};

var get = function get(props) {
  var items = props.items,
      _props$keys = props.keys,
      keys = _props$keys === void 0 ? function (item) {
    return item;
  } : _props$keys,
      rest = _objectWithoutPropertiesLoose(props, ["items", "keys"]);

  items = toArray(items !== void 0 ? items : null);
  return _extends({
    items: items,
    keys: mapKeys(items, keys)
  }, rest);
};

function useTransition(input, keyTransform, config) {
  var props = _extends({
    items: input,
    keys: keyTransform || function (i) {
      return i;
    }
  }, config);

  var _get = get(props),
      _get$lazy = _get.lazy,
      lazy = _get$lazy === void 0 ? false : _get$lazy,
      _get$unique = _get.unique,
      _get$reset = _get.reset,
      reset = _get$reset === void 0 ? false : _get$reset,
      enter = _get.enter,
      leave = _get.leave,
      update = _get.update,
      onDestroyed = _get.onDestroyed,
      keys = _get.keys,
      items = _get.items,
      onFrame = _get.onFrame,
      _onRest = _get.onRest,
      onStart = _get.onStart,
      ref = _get.ref,
      extra = _objectWithoutPropertiesLoose(_get, ["lazy", "unique", "reset", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "ref"]);

  var forceUpdate = useForceUpdate();
  var mounted = React.useRef(false);
  var state = React.useRef({
    mounted: false,
    first: true,
    deleted: [],
    current: {},
    transitions: [],
    prevProps: {},
    paused: !!props.ref,
    instances: !mounted.current && new Map(),
    forceUpdate: forceUpdate
  });
  React.useImperativeHandle(props.ref, function () {
    return {
      start: function start() {
        return Promise.all(Array.from(state.current.instances).map(function (_ref) {
          var c = _ref[1];
          return new Promise(function (r) {
            return c.start(r);
          });
        }));
      },
      stop: function stop(finished) {
        return Array.from(state.current.instances).forEach(function (_ref2) {
          var c = _ref2[1];
          return c.stop(finished);
        });
      },

      get controllers() {
        return Array.from(state.current.instances).map(function (_ref3) {
          var c = _ref3[1];
          return c;
        });
      }

    };
  }); // Update state

  state.current = diffItems(state.current, props);

  if (state.current.changed) {
    // Update state
    state.current.transitions.forEach(function (transition) {
      var slot = transition.slot,
          from = transition.from,
          to = transition.to,
          config = transition.config,
          trail = transition.trail,
          key = transition.key,
          item = transition.item;
      if (!state.current.instances.has(key)) state.current.instances.set(key, new Controller()); // update the map object

      var ctrl = state.current.instances.get(key);

      var newProps = _extends({}, extra, {
        to: to,
        from: from,
        config: config,
        ref: ref,
        onRest: function onRest(values) {
          if (state.current.mounted) {
            if (transition.destroyed) {
              // If no ref is given delete destroyed items immediately
              if (!ref && !lazy) cleanUp(state, key);
              if (onDestroyed) onDestroyed(item);
            } // A transition comes to rest once all its springs conclude


            var curInstances = Array.from(state.current.instances);
            var active = curInstances.some(function (_ref4) {
              var c = _ref4[1];
              return !c.idle;
            });
            if (!active && (ref || lazy) && state.current.deleted.length > 0) cleanUp(state);
            if (_onRest) _onRest(item, slot, values);
          }
        },
        onStart: onStart && function () {
          return onStart(item, slot);
        },
        onFrame: onFrame && function (values) {
          return onFrame(item, slot, values);
        },
        delay: trail,
        reset: reset && slot === ENTER // Update controller

      });

      ctrl.update(newProps);
      if (!state.current.paused) ctrl.start();
    });
  }

  React.useEffect(function () {
    state.current.mounted = mounted.current = true;
    return function () {
      state.current.mounted = mounted.current = false;
      Array.from(state.current.instances).map(function (_ref5) {
        var c = _ref5[1];
        return c.destroy();
      });
      state.current.instances.clear();
    };
  }, []);
  return state.current.transitions.map(function (_ref6) {
    var item = _ref6.item,
        slot = _ref6.slot,
        key = _ref6.key;
    return {
      item: item,
      key: key,
      state: slot,
      props: state.current.instances.get(key).getValues()
    };
  });
}

function cleanUp(state, filterKey) {
  var deleted = state.current.deleted;

  var _loop = function _loop() {
    if (_isArray) {
      if (_i >= _iterator.length) return "break";
      _ref8 = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) return "break";
      _ref8 = _i.value;
    }

    var _ref7 = _ref8;
    var key = _ref7.key;

    var filter = function filter(t) {
      return t.key !== key;
    };

    if (is.und(filterKey) || filterKey === key) {
      state.current.instances.delete(key);
      state.current.transitions = state.current.transitions.filter(filter);
      state.current.deleted = state.current.deleted.filter(filter);
    }
  };

  for (var _iterator = deleted, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref8;

    var _ret = _loop();

    if (_ret === "break") break;
  }

  state.current.forceUpdate();
}

function diffItems(_ref9, props) {
  var first = _ref9.first,
      prevProps = _ref9.prevProps,
      state = _objectWithoutPropertiesLoose(_ref9, ["first", "prevProps"]);

  var _get2 = get(props),
      items = _get2.items,
      keys = _get2.keys,
      initial = _get2.initial,
      from = _get2.from,
      enter = _get2.enter,
      leave = _get2.leave,
      update = _get2.update,
      _get2$trail = _get2.trail,
      trail = _get2$trail === void 0 ? 0 : _get2$trail,
      unique = _get2.unique,
      config = _get2.config,
      _get2$order = _get2.order,
      order = _get2$order === void 0 ? [ENTER, LEAVE, UPDATE] : _get2$order;

  var _get3 = get(prevProps),
      _keys = _get3.keys,
      _items = _get3.items;

  var current = _extends({}, state.current);

  var deleted = [].concat(state.deleted); // Compare next keys with current keys

  var currentKeys = Object.keys(current);
  var currentSet = new Set(currentKeys);
  var nextSet = new Set(keys);
  var added = keys.filter(function (item) {
    return !currentSet.has(item);
  });
  var removed = state.transitions.filter(function (item) {
    return !item.destroyed && !nextSet.has(item.originalKey);
  }).map(function (i) {
    return i.originalKey;
  });
  var updated = keys.filter(function (item) {
    return currentSet.has(item);
  });
  var delay = -trail;

  while (order.length) {
    var changeType = order.shift();

    switch (changeType) {
      case ENTER:
        {
          added.forEach(function (key, index) {
            // In unique mode, remove fading out transitions if their key comes in again
            if (unique && deleted.find(function (d) {
              return d.originalKey === key;
            })) deleted = deleted.filter(function (t) {
              return t.originalKey !== key;
            });
            var keyIndex = keys.indexOf(key);
            var item = items[keyIndex];
            var slot = first && initial !== void 0 ? 'initial' : ENTER;
            current[key] = {
              slot: slot,
              originalKey: key,
              key: unique ? String(key) : guid++,
              item: item,
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              from: callProp(first ? initial !== void 0 ? initial || {} : from : from, item),
              to: callProp(enter, item)
            };
          });
          break;
        }

      case LEAVE:
        {
          removed.forEach(function (key) {
            var keyIndex = _keys.indexOf(key);

            var item = _items[keyIndex];
            var slot = LEAVE;
            deleted.unshift(_extends({}, current[key], {
              slot: slot,
              destroyed: true,
              left: _keys[Math.max(0, keyIndex - 1)],
              right: _keys[Math.min(_keys.length, keyIndex + 1)],
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              to: callProp(leave, item)
            }));
            delete current[key];
          });
          break;
        }

      case UPDATE:
        {
          updated.forEach(function (key) {
            var keyIndex = keys.indexOf(key);
            var item = items[keyIndex];
            var slot = UPDATE;
            current[key] = _extends({}, current[key], {
              item: item,
              slot: slot,
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              to: callProp(update, item)
            });
          });
          break;
        }
    }
  }

  var out = keys.map(function (key) {
    return current[key];
  }); // This tries to restore order for deleted items by finding their last known siblings
  // only using the left sibling to keep order placement consistent for all deleted items

  deleted.forEach(function (_ref10) {
    var left = _ref10.left,
        right = _ref10.right,
        item = _objectWithoutPropertiesLoose(_ref10, ["left", "right"]);

    var pos; // Was it the element on the left, if yes, move there ...

    if ((pos = out.findIndex(function (t) {
      return t.originalKey === left;
    })) !== -1) pos += 1; // And if nothing else helps, move it to the start ¯\_(ツ)_/¯

    pos = Math.max(0, pos);
    out = [].concat(out.slice(0, pos), [item], out.slice(pos));
  });
  return _extends({}, state, {
    changed: added.length || removed.length || updated.length,
    first: first && added.length === 0,
    transitions: out,
    current: current,
    deleted: deleted,
    prevProps: props
  });
}

var AnimatedStyle =
/*#__PURE__*/
function (_AnimatedObject) {
  _inheritsLoose(AnimatedStyle, _AnimatedObject);

  function AnimatedStyle(style) {
    var _this;

    if (style === void 0) {
      style = {};
    }

    _this = _AnimatedObject.call(this) || this;

    if (style.transform && !(style.transform instanceof Animated)) {
      style = applyAnimatedValues.transform(style);
    }

    _this.payload = style;
    return _this;
  }

  return AnimatedStyle;
}(AnimatedObject);

// http://www.w3.org/TR/css3-color/#svg-color
var colors = {
  transparent: 0x00000000,
  aliceblue: 0xf0f8ffff,
  antiquewhite: 0xfaebd7ff,
  aqua: 0x00ffffff,
  aquamarine: 0x7fffd4ff,
  azure: 0xf0ffffff,
  beige: 0xf5f5dcff,
  bisque: 0xffe4c4ff,
  black: 0x000000ff,
  blanchedalmond: 0xffebcdff,
  blue: 0x0000ffff,
  blueviolet: 0x8a2be2ff,
  brown: 0xa52a2aff,
  burlywood: 0xdeb887ff,
  burntsienna: 0xea7e5dff,
  cadetblue: 0x5f9ea0ff,
  chartreuse: 0x7fff00ff,
  chocolate: 0xd2691eff,
  coral: 0xff7f50ff,
  cornflowerblue: 0x6495edff,
  cornsilk: 0xfff8dcff,
  crimson: 0xdc143cff,
  cyan: 0x00ffffff,
  darkblue: 0x00008bff,
  darkcyan: 0x008b8bff,
  darkgoldenrod: 0xb8860bff,
  darkgray: 0xa9a9a9ff,
  darkgreen: 0x006400ff,
  darkgrey: 0xa9a9a9ff,
  darkkhaki: 0xbdb76bff,
  darkmagenta: 0x8b008bff,
  darkolivegreen: 0x556b2fff,
  darkorange: 0xff8c00ff,
  darkorchid: 0x9932ccff,
  darkred: 0x8b0000ff,
  darksalmon: 0xe9967aff,
  darkseagreen: 0x8fbc8fff,
  darkslateblue: 0x483d8bff,
  darkslategray: 0x2f4f4fff,
  darkslategrey: 0x2f4f4fff,
  darkturquoise: 0x00ced1ff,
  darkviolet: 0x9400d3ff,
  deeppink: 0xff1493ff,
  deepskyblue: 0x00bfffff,
  dimgray: 0x696969ff,
  dimgrey: 0x696969ff,
  dodgerblue: 0x1e90ffff,
  firebrick: 0xb22222ff,
  floralwhite: 0xfffaf0ff,
  forestgreen: 0x228b22ff,
  fuchsia: 0xff00ffff,
  gainsboro: 0xdcdcdcff,
  ghostwhite: 0xf8f8ffff,
  gold: 0xffd700ff,
  goldenrod: 0xdaa520ff,
  gray: 0x808080ff,
  green: 0x008000ff,
  greenyellow: 0xadff2fff,
  grey: 0x808080ff,
  honeydew: 0xf0fff0ff,
  hotpink: 0xff69b4ff,
  indianred: 0xcd5c5cff,
  indigo: 0x4b0082ff,
  ivory: 0xfffff0ff,
  khaki: 0xf0e68cff,
  lavender: 0xe6e6faff,
  lavenderblush: 0xfff0f5ff,
  lawngreen: 0x7cfc00ff,
  lemonchiffon: 0xfffacdff,
  lightblue: 0xadd8e6ff,
  lightcoral: 0xf08080ff,
  lightcyan: 0xe0ffffff,
  lightgoldenrodyellow: 0xfafad2ff,
  lightgray: 0xd3d3d3ff,
  lightgreen: 0x90ee90ff,
  lightgrey: 0xd3d3d3ff,
  lightpink: 0xffb6c1ff,
  lightsalmon: 0xffa07aff,
  lightseagreen: 0x20b2aaff,
  lightskyblue: 0x87cefaff,
  lightslategray: 0x778899ff,
  lightslategrey: 0x778899ff,
  lightsteelblue: 0xb0c4deff,
  lightyellow: 0xffffe0ff,
  lime: 0x00ff00ff,
  limegreen: 0x32cd32ff,
  linen: 0xfaf0e6ff,
  magenta: 0xff00ffff,
  maroon: 0x800000ff,
  mediumaquamarine: 0x66cdaaff,
  mediumblue: 0x0000cdff,
  mediumorchid: 0xba55d3ff,
  mediumpurple: 0x9370dbff,
  mediumseagreen: 0x3cb371ff,
  mediumslateblue: 0x7b68eeff,
  mediumspringgreen: 0x00fa9aff,
  mediumturquoise: 0x48d1ccff,
  mediumvioletred: 0xc71585ff,
  midnightblue: 0x191970ff,
  mintcream: 0xf5fffaff,
  mistyrose: 0xffe4e1ff,
  moccasin: 0xffe4b5ff,
  navajowhite: 0xffdeadff,
  navy: 0x000080ff,
  oldlace: 0xfdf5e6ff,
  olive: 0x808000ff,
  olivedrab: 0x6b8e23ff,
  orange: 0xffa500ff,
  orangered: 0xff4500ff,
  orchid: 0xda70d6ff,
  palegoldenrod: 0xeee8aaff,
  palegreen: 0x98fb98ff,
  paleturquoise: 0xafeeeeff,
  palevioletred: 0xdb7093ff,
  papayawhip: 0xffefd5ff,
  peachpuff: 0xffdab9ff,
  peru: 0xcd853fff,
  pink: 0xffc0cbff,
  plum: 0xdda0ddff,
  powderblue: 0xb0e0e6ff,
  purple: 0x800080ff,
  rebeccapurple: 0x663399ff,
  red: 0xff0000ff,
  rosybrown: 0xbc8f8fff,
  royalblue: 0x4169e1ff,
  saddlebrown: 0x8b4513ff,
  salmon: 0xfa8072ff,
  sandybrown: 0xf4a460ff,
  seagreen: 0x2e8b57ff,
  seashell: 0xfff5eeff,
  sienna: 0xa0522dff,
  silver: 0xc0c0c0ff,
  skyblue: 0x87ceebff,
  slateblue: 0x6a5acdff,
  slategray: 0x708090ff,
  slategrey: 0x708090ff,
  snow: 0xfffafaff,
  springgreen: 0x00ff7fff,
  steelblue: 0x4682b4ff,
  tan: 0xd2b48cff,
  teal: 0x008080ff,
  thistle: 0xd8bfd8ff,
  tomato: 0xff6347ff,
  turquoise: 0x40e0d0ff,
  violet: 0xee82eeff,
  wheat: 0xf5deb3ff,
  white: 0xffffffff,
  whitesmoke: 0xf5f5f5ff,
  yellow: 0xffff00ff,
  yellowgreen: 0x9acd32ff
};

// const INTEGER = '[-+]?\\d+';
var NUMBER = '[-+]?\\d*\\.?\\d+';
var PERCENTAGE = NUMBER + '%';

function call() {
  for (var _len = arguments.length, parts = new Array(_len), _key = 0; _key < _len; _key++) {
    parts[_key] = arguments[_key];
  }

  return '\\(\\s*(' + parts.join(')\\s*,\\s*(') + ')\\s*\\)';
}

var rgb = new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER));
var rgba = new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER));
var hsl = new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE));
var hsla = new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
var hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
var hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
var hex6 = /^#([0-9a-fA-F]{6})$/;
var hex8 = /^#([0-9a-fA-F]{8})$/;

/*
https://github.com/react-community/normalize-css-color

BSD 3-Clause License

Copyright (c) 2016, React Community
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of the copyright holder nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
function normalizeColor(color) {
  var match;

  if (typeof color === 'number') {
    return color >>> 0 === color && color >= 0 && color <= 0xffffffff ? color : null;
  } // Ordered based on occurrences on Facebook codebase


  if (match = hex6.exec(color)) return parseInt(match[1] + 'ff', 16) >>> 0;
  if (colors.hasOwnProperty(color)) return colors[color];

  if (match = rgb.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    0x000000ff) >>> // a
    0;
  }

  if (match = rgba.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    parse1(match[4])) >>> // a
    0;
  }

  if (match = hex3.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    'ff', // a
    16) >>> 0;
  } // https://drafts.csswg.org/css-color-4/#hex-notation


  if (match = hex8.exec(color)) return parseInt(match[1], 16) >>> 0;

  if (match = hex4.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    match[4] + match[4], // a
    16) >>> 0;
  }

  if (match = hsl.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | 0x000000ff) >>> // a
    0;
  }

  if (match = hsla.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | parse1(match[4])) >>> // a
    0;
  }

  return null;
}

function hue2rgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

function hslToRgb(h, s, l) {
  var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  var p = 2 * l - q;
  var r = hue2rgb(p, q, h + 1 / 3);
  var g = hue2rgb(p, q, h);
  var b = hue2rgb(p, q, h - 1 / 3);
  return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
}

function parse255(str) {
  var int = parseInt(str, 10);
  if (int < 0) return 0;
  if (int > 255) return 255;
  return int;
}

function parse360(str) {
  var int = parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}

function parse1(str) {
  var num = parseFloat(str);
  if (num < 0) return 0;
  if (num > 1) return 255;
  return Math.round(num * 255);
}

function parsePercentage(str) {
  // parseFloat conveniently ignores the final %
  var int = parseFloat(str);
  if (int < 0) return 0;
  if (int > 100) return 1;
  return int / 100;
}

function colorToRgba(input) {
  var int32Color = normalizeColor(input);
  if (int32Color === null) return input;
  int32Color = int32Color || 0;
  var r = (int32Color & 0xff000000) >>> 24;
  var g = (int32Color & 0x00ff0000) >>> 16;
  var b = (int32Color & 0x0000ff00) >>> 8;
  var a = (int32Color & 0x000000ff) / 255;
  return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
} // Problem: https://github.com/animatedjs/animated/pull/102
// Solution: https://stackoverflow.com/questions/638565/parsing-scientific-notation-sensibly/658662


var stringShapeRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g; // Covers rgb, rgba, hsl, hsla
// Taken from https://gist.github.com/olmokramer/82ccce673f86db7cda5e

var colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi; // Covers color names (transparent, blue, etc.)

var colorNamesRegex = new RegExp("(" + Object.keys(colors).join('|') + ")", 'g');
/**
 * Supports string shapes by extracting numbers so new values can be computed,
 * and recombines those values into new strings of the same shape.  Supports
 * things like:
 *
 *   rgba(123, 42, 99, 0.36)           // colors
 *   -45deg                            // values with units
 *   0 2px 2px 0px rgba(0, 0, 0, 0.12) // box shadows
 */

var createStringInterpolator = function createStringInterpolator(config) {
  // Replace colors with rgba
  var outputRange = config.output.map(function (rangeValue) {
    return rangeValue.replace(colorRegex, colorToRgba);
  }).map(function (rangeValue) {
    return rangeValue.replace(colorNamesRegex, colorToRgba);
  });
  var outputRanges = outputRange[0].match(stringShapeRegex).map(function () {
    return [];
  });
  outputRange.forEach(function (value) {
    value.match(stringShapeRegex).forEach(function (number, i) {
      return outputRanges[i].push(+number);
    });
  });
  var interpolations = outputRange[0].match(stringShapeRegex).map(function (_value, i) {
    return createInterpolator(_extends({}, config, {
      output: outputRanges[i]
    }));
  });
  return function (input) {
    var i = 0;
    return outputRange[0] // 'rgba(0, 100, 200, 0)'
    // ->
    // 'rgba(${interpolations[0](input)}, ${interpolations[1](input)}, ...'
    .replace(stringShapeRegex, function () {
      return interpolations[i++](input);
    }) // rgba requires that the r,g,b are integers.... so we want to round them, but we *dont* want to
    // round the opacity (4th column).
    .replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, function (_, p1, p2, p3, p4) {
      return "rgba(" + Math.round(p1) + ", " + Math.round(p2) + ", " + Math.round(p3) + ", " + p4 + ")";
    });
  };
};

var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};

var prefixKey = function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
};

var prefixes = ['Webkit', 'Ms', 'Moz', 'O'];
isUnitlessNumber = Object.keys(isUnitlessNumber).reduce(function (acc, prop) {
  prefixes.forEach(function (prefix) {
    return acc[prefixKey(prefix, prop)] = acc[prop];
  });
  return acc;
}, isUnitlessNumber);

function dangerousStyleValue(name, value, isCustomProperty) {
  if (value == null || typeof value === 'boolean' || value === '') return '';
  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers

  return ('' + value).trim();
}

var attributeCache = {};
injectCreateAnimatedStyle(function (style) {
  return new AnimatedStyle(style);
});
injectDefaultElement('div');
injectStringInterpolator(createStringInterpolator);
injectColorNames(colors);
injectApplyAnimatedValues(function (instance, props) {
  if (instance.nodeType && instance.setAttribute !== undefined) {
    var style = props.style,
        children = props.children,
        scrollTop = props.scrollTop,
        scrollLeft = props.scrollLeft,
        attributes = _objectWithoutPropertiesLoose(props, ["style", "children", "scrollTop", "scrollLeft"]);

    var filter = instance.nodeName === 'filter' || instance.parentNode && instance.parentNode.nodeName === 'filter';
    if (scrollTop !== void 0) instance.scrollTop = scrollTop;
    if (scrollLeft !== void 0) instance.scrollLeft = scrollLeft; // Set textContent, if children is an animatable value

    if (children !== void 0) instance.textContent = children; // Set styles ...

    for (var styleName in style) {
      if (!style.hasOwnProperty(styleName)) continue;
      var isCustomProperty = styleName.indexOf('--') === 0;
      var styleValue = dangerousStyleValue(styleName, style[styleName], isCustomProperty);
      if (styleName === 'float') styleName = 'cssFloat';
      if (isCustomProperty) instance.style.setProperty(styleName, styleValue);else instance.style[styleName] = styleValue;
    } // Set attributes ...


    for (var name in attributes) {
      // Attributes are written in dash case
      var dashCase = filter ? name : attributeCache[name] || (attributeCache[name] = name.replace(/([A-Z])/g, function (n) {
        return '-' + n.toLowerCase();
      }));
      if (typeof instance.getAttribute(dashCase) !== 'undefined') instance.setAttribute(dashCase, attributes[name]);
    }

    return;
  } else return false;
}, function (style) {
  return style;
});

var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
// Extend animated with all the available THREE elements
var apply = merge(createAnimatedComponent, false);
var extendedAnimated = apply(domElements);

exports.apply = apply;
exports.config = config;
exports.update = update;
exports.animated = extendedAnimated;
exports.a = extendedAnimated;
exports.interpolate = interpolate$1;
exports.Globals = Globals;
exports.useSpring = useSpring;
exports.useTrail = useTrail;
exports.useTransition = useTransition;
exports.useChain = useChain;
exports.useSprings = useSprings;


/***/ }),
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Composite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useComposite; });
/* harmony import */ var _rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var reakit_system_createComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var reakit_system_createHook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reakit_utils_useForkRef__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63);
/* harmony import */ var reakit_warning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80);
/* harmony import */ var reakit_utils_useLiveRef__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(46);
/* harmony import */ var reakit_utils_isSelfTarget__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(53);
/* harmony import */ var reakit_utils_getActiveElement__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57);
/* harmony import */ var _Tabbable_Tabbable_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(73);
/* harmony import */ var reakit_system_useCreateElement__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(78);
/* harmony import */ var reakit_utils_createOnKeyDown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(82);
/* harmony import */ var reakit_utils_getDocument__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(47);
/* harmony import */ var reakit_utils_fireEvent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(94);
/* harmony import */ var reakit_utils_fireKeyboardEvent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(102);
/* harmony import */ var _CompositeState_3a25dcee_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(51);




























var isIE11 = typeof window !== "undefined" && "msCrypto" in window;
function getNextActiveElementOnBlur(event) {
  // IE 11 doesn't support event.relatedTarget on blur.
  // document.activeElement points the the next active element.
  // On modern browsers, document.activeElement points to the current target.
  if (isIE11) {
    var activeElement = Object(reakit_utils_getActiveElement__WEBPACK_IMPORTED_MODULE_9__[/* getActiveElement */ "a"])(event.target);
    return activeElement;
  }

  return event.relatedTarget;
}

var validCompositeRoles = ["combobox", "grid", "tablist", "listbox", "menu", "menubar", "toolbar", "radiogroup", "tree", "treegrid"];
var isIE11$1 = typeof window !== "undefined" && "msCrypto" in window;

function canProxyKeyboardEvent(event) {
  if (!Object(reakit_utils_isSelfTarget__WEBPACK_IMPORTED_MODULE_8__[/* isSelfTarget */ "a"])(event)) return false;
  if (event.metaKey) return false;
  if (event.key === "Tab") return false;
  return true;
}

function useKeyboardEventProxy(virtual, currentItem, htmlEventHandler) {
  var eventHandlerRef = Object(reakit_utils_useLiveRef__WEBPACK_IMPORTED_MODULE_7__[/* useLiveRef */ "a"])(htmlEventHandler);
  return Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (event) {
    var _eventHandlerRef$curr;

    if (virtual && canProxyKeyboardEvent(event)) {
      var currentElement = currentItem === null || currentItem === void 0 ? void 0 : currentItem.ref.current;

      if (currentElement) {
        Object(reakit_utils_fireKeyboardEvent__WEBPACK_IMPORTED_MODULE_15__[/* fireKeyboardEvent */ "a"])(currentElement, event.type, event); // The event will be triggered on the composite item and then
        // propagated up to this composite element again, so we can pretend
        // that it wasn't called on this component in the first place.

        if (event.currentTarget.contains(currentElement)) {
          event.stopPropagation();
          event.preventDefault();
          return;
        }
      }
    }

    (_eventHandlerRef$curr = eventHandlerRef.current) === null || _eventHandlerRef$curr === void 0 ? void 0 : _eventHandlerRef$curr.call(eventHandlerRef, event);
  }, [virtual, currentItem]);
} // istanbul ignore next


function useActiveElementRef(elementRef) {
  var activeElementRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var document = Object(reakit_utils_getDocument__WEBPACK_IMPORTED_MODULE_13__[/* getDocument */ "a"])(elementRef.current);

    var onFocus = function onFocus(event) {
      var target = event.target;
      activeElementRef.current = target;
    };

    document.addEventListener("focus", onFocus, true);
    return function () {
      document.removeEventListener("focus", onFocus, true);
    };
  }, []);
  return activeElementRef;
}

function findFirstEnabledItemInTheLastRow(items) {
  return Object(_CompositeState_3a25dcee_js__WEBPACK_IMPORTED_MODULE_16__["a"])(Object(_CompositeState_3a25dcee_js__WEBPACK_IMPORTED_MODULE_16__["b"])(Object(_CompositeState_3a25dcee_js__WEBPACK_IMPORTED_MODULE_16__[/* r */ "f"])(Object(_CompositeState_3a25dcee_js__WEBPACK_IMPORTED_MODULE_16__["c"])(items))));
}

function isItem(items, element) {
  return items === null || items === void 0 ? void 0 : items.some(function (item) {
    return !!element && item.ref.current === element;
  });
}

var useComposite = Object(reakit_system_createHook__WEBPACK_IMPORTED_MODULE_2__[/* createHook */ "a"])({
  name: "Composite",
  compose: [_Tabbable_Tabbable_js__WEBPACK_IMPORTED_MODULE_10__[/* useTabbable */ "a"]],
  useState: _CompositeState_3a25dcee_js__WEBPACK_IMPORTED_MODULE_16__[/* u */ "g"],
  useOptions: function useOptions(options) {
    return Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({}, options), {}, {
      currentId: Object(_CompositeState_3a25dcee_js__WEBPACK_IMPORTED_MODULE_16__[/* g */ "e"])(options)
    });
  },
  useProps: function useProps(options, _ref) {
    var htmlRef = _ref.ref,
        htmlOnFocus = _ref.onFocus,
        htmlOnBlur = _ref.onBlur,
        htmlOnKeyDown = _ref.onKeyDown,
        htmlOnKeyUp = _ref.onKeyUp,
        htmlProps = Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* _ */ "a"])(_ref, ["ref", "onFocus", "onBlur", "onKeyDown", "onKeyUp"]);

    var ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
    var currentItem = Object(_CompositeState_3a25dcee_js__WEBPACK_IMPORTED_MODULE_16__[/* f */ "d"])(options.items, options.currentId);
    var previousItem = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(undefined);
    var onFocusRef = Object(reakit_utils_useLiveRef__WEBPACK_IMPORTED_MODULE_7__[/* useLiveRef */ "a"])(htmlOnFocus);
    var onBlurRef = Object(reakit_utils_useLiveRef__WEBPACK_IMPORTED_MODULE_7__[/* useLiveRef */ "a"])(htmlOnBlur); // IE 11 doesn't support event.relatedTarget, so we use the active element
    // ref instead.

    var activeElementRef = isIE11$1 ? useActiveElementRef(ref) : undefined;
    Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
      var element = ref.current;

      if (!element) {
         false ? undefined : void 0;
        return;
      }

      if (options.unstable_moves && !currentItem) {
        // If composite.move(null) has been called, the composite container
        // will receive focus.
        element.focus();
      }
    }, [options.unstable_moves, currentItem]);
    var onKeyDown = useKeyboardEventProxy(options.unstable_virtual, currentItem, htmlOnKeyDown);
    var onKeyUp = useKeyboardEventProxy(options.unstable_virtual, currentItem, htmlOnKeyUp);
    var onFocus = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (event) {
      var _onFocusRef$current2;

      if (options.unstable_virtual) {
        // IE11 doesn't support event.relatedTarget, so we use the active
        // element ref instead.
        var previousActiveElement = (activeElementRef === null || activeElementRef === void 0 ? void 0 : activeElementRef.current) || event.relatedTarget;
        var previousActiveElementWasItem = isItem(options.items, previousActiveElement);

        if (Object(reakit_utils_isSelfTarget__WEBPACK_IMPORTED_MODULE_8__[/* isSelfTarget */ "a"])(event) && !previousActiveElementWasItem) {
          var _onFocusRef$current, _currentItem$ref$curr;

          // This means that the composite element has been focused while the
          // composite item has not. For example, by clicking on the
          // composite element without touching any item, or by tabbing into
          // the composite element. In this case, we want to trigger focus on
          // the item, just like it would happen with roving tabindex.
          // When it receives focus, the composite item will put focus back
          // on the composite element, in which case hasItemWithFocus will be
          // true.
          (_onFocusRef$current = onFocusRef.current) === null || _onFocusRef$current === void 0 ? void 0 : _onFocusRef$current.call(onFocusRef, event);
          currentItem === null || currentItem === void 0 ? void 0 : (_currentItem$ref$curr = currentItem.ref.current) === null || _currentItem$ref$curr === void 0 ? void 0 : _currentItem$ref$curr.focus();
          return;
        }

        if (previousActiveElementWasItem) {
          // Composite has been focused as a result of an item receiving
          // focus. The composite item will move focus back to the composite
          // container. In this case, we don't want to propagate this
          // additional event nor call the onFocus handler passed to
          // <Composite onFocus={...} /> (htmlOnFocus). Unless users add DOM
          // event handlers to the composite element directly, this will be
          // like this event has never existed.
          event.stopPropagation();
          return;
        }
      } else if (Object(reakit_utils_isSelfTarget__WEBPACK_IMPORTED_MODULE_8__[/* isSelfTarget */ "a"])(event)) {
        var _options$setCurrentId;

        // When the roving tabindex composite gets intentionally focused (for
        // example, by clicking directly on it, and not on an item), we make
        // sure to set the current id to null (which means the composite
        // itself is focused).
        (_options$setCurrentId = options.setCurrentId) === null || _options$setCurrentId === void 0 ? void 0 : _options$setCurrentId.call(options, null);
      }

      (_onFocusRef$current2 = onFocusRef.current) === null || _onFocusRef$current2 === void 0 ? void 0 : _onFocusRef$current2.call(onFocusRef, event);
    }, [options.unstable_virtual, options.items, currentItem, options.setCurrentId]);
    var onBlur = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (event) {
      var _onBlurRef$current;

      // When virtual is set to true, we move focus from the composite
      // container (this component) to the composite item that is being
      // selected. Then we move focus back to the composite container. This
      // is so we can provide the same API as the roving tabindex method,
      // which means people can attach onFocus/onBlur handlers on the
      // CompositeItem component regardless of whether it's virtual or not.
      // This sequence of blurring and focusing items and composite may be
      // confusing, so we ignore intermediate focus and blurs by stopping its
      // propagation and not calling the passed onBlur handler (htmlOnBlur).
      if (options.unstable_virtual) {
        var targetIsItem = isItem(options.items, event.target);
        var nextActiveElement = getNextActiveElementOnBlur(event);
        var nextActiveElementIsItem = isItem(options.items, nextActiveElement);

        if (Object(reakit_utils_isSelfTarget__WEBPACK_IMPORTED_MODULE_8__[/* isSelfTarget */ "a"])(event) && nextActiveElementIsItem) {
          var _previousItem$current;

          // This is an intermediate blur event: blurring the composite
          // container to focus an item (nextActiveElement). We ignore this
          // event.
          if ((_previousItem$current = previousItem.current) === null || _previousItem$current === void 0 ? void 0 : _previousItem$current.ref.current) {
            // If there's a previous active item we fire a blur event on it
            // so it will work just like if it had DOM focus before (like when
            // using roving tabindex).
            Object(reakit_utils_fireEvent__WEBPACK_IMPORTED_MODULE_14__[/* fireEvent */ "a"])(previousItem.current.ref.current, "blur", event);
          }

          previousItem.current = currentItem;
          event.stopPropagation();
          return;
        }

        if (!targetIsItem) {
          // If target is another thing (probably something outside of the
          // composite container), we don't ignore the event, but we should
          // reset the previousItem reference.
          if (currentItem === null || currentItem === void 0 ? void 0 : currentItem.ref.current) {
            Object(reakit_utils_fireEvent__WEBPACK_IMPORTED_MODULE_14__[/* fireEvent */ "a"])(currentItem.ref.current, "blur", event);
          }

          previousItem.current = undefined;
        } else {
          previousItem.current = currentItem;
        }
      }

      (_onBlurRef$current = onBlurRef.current) === null || _onBlurRef$current === void 0 ? void 0 : _onBlurRef$current.call(onBlurRef, event);
    }, [options.unstable_virtual, options.items, currentItem]);
    var onMove = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
      return Object(reakit_utils_createOnKeyDown__WEBPACK_IMPORTED_MODULE_12__[/* createOnKeyDown */ "a"])({
        onKeyDown: onKeyDown,
        stopPropagation: true,
        shouldKeyDown: function shouldKeyDown(event) {
          return Object(reakit_utils_isSelfTarget__WEBPACK_IMPORTED_MODULE_8__[/* isSelfTarget */ "a"])(event) && options.currentId === null;
        },
        keyMap: function keyMap() {
          var _options$groups;

          var isVertical = options.orientation !== "horizontal";
          var isHorizontal = options.orientation !== "vertical";
          var isGrid = !!((_options$groups = options.groups) === null || _options$groups === void 0 ? void 0 : _options$groups.length);

          var up = function up() {
            if (isGrid) {
              var item = findFirstEnabledItemInTheLastRow(options.items);

              if (item === null || item === void 0 ? void 0 : item.id) {
                var _options$move;

                (_options$move = options.move) === null || _options$move === void 0 ? void 0 : _options$move.call(options, item.id);
              }
            } else {
              var _options$last;

              (_options$last = options.last) === null || _options$last === void 0 ? void 0 : _options$last.call(options);
            }
          };

          var first = options.first && function () {
            return options.first();
          };

          var last = options.last && function () {
            return options.last();
          };

          return {
            ArrowUp: (isGrid || isVertical) && up,
            ArrowRight: (isGrid || isHorizontal) && first,
            ArrowDown: (isGrid || isVertical) && first,
            ArrowLeft: (isGrid || isHorizontal) && last,
            Home: first,
            End: last,
            PageUp: first,
            PageDown: last
          };
        }
      });
    }, [onKeyDown, options.currentId, options.orientation, options.groups, options.items, options.move, options.last, options.first]);
    return Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({
      ref: Object(reakit_utils_useForkRef__WEBPACK_IMPORTED_MODULE_5__[/* useForkRef */ "a"])(ref, htmlRef),
      id: options.baseId,
      onFocus: onFocus,
      onBlur: onBlur,
      onKeyDown: onMove,
      onKeyUp: onKeyUp,
      "aria-activedescendant": options.unstable_virtual ? (currentItem === null || currentItem === void 0 ? void 0 : currentItem.id) || undefined : undefined
    }, htmlProps);
  },
  useComposeProps: function useComposeProps(options, htmlProps) {
    htmlProps = Object(_Box_Box_js__WEBPACK_IMPORTED_MODULE_3__[/* useBox */ "a"])(options, htmlProps, true);
    var tabbableHTMLProps = Object(_Tabbable_Tabbable_js__WEBPACK_IMPORTED_MODULE_10__[/* useTabbable */ "a"])(options, htmlProps, true);

    if (options.unstable_virtual || options.currentId === null) {
      // Composite will only be tabbable by default if the focus is managed
      // using aria-activedescendant, which requires DOM focus on the container
      // element (the composite)
      return tabbableHTMLProps;
    }

    return Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({}, htmlProps), {}, {
      ref: tabbableHTMLProps.ref
    });
  }
});
var Composite = Object(reakit_system_createComponent__WEBPACK_IMPORTED_MODULE_1__[/* createComponent */ "a"])({
  as: "div",
  useHook: useComposite,
  useCreateElement: function useCreateElement$1(type, props, children) {
     false ? undefined : void 0;
     false ? undefined : void 0;
    return Object(reakit_system_useCreateElement__WEBPACK_IMPORTED_MODULE_11__[/* useCreateElement */ "a"])(type, props, children);
  }
});




/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompositeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useCompositeItem; });
/* harmony import */ var _rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var reakit_system_createComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var reakit_system_createHook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reakit_utils_useForkRef__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63);
/* harmony import */ var reakit_warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80);
/* harmony import */ var reakit_utils_useLiveRef__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46);
/* harmony import */ var reakit_utils_isSelfTarget__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53);
/* harmony import */ var reakit_utils_hasFocusWithin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(69);
/* harmony import */ var reakit_utils_isPortalEvent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72);
/* harmony import */ var reakit_utils_tabbable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(71);
/* harmony import */ var _Clickable_Clickable_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(84);
/* harmony import */ var reakit_utils_createOnKeyDown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(82);
/* harmony import */ var reakit_utils_getDocument__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(47);
/* harmony import */ var _CompositeState_3a25dcee_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(51);
/* harmony import */ var _Id_Id_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(93);
/* harmony import */ var reakit_utils_isTextField__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(95);
/* harmony import */ var _setTextFieldValue_78ab5d56_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(96);





























function getWidget(itemElement) {
  return itemElement.querySelector("[data-composite-item-widget]");
}

function useItem(options) {
  return Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    var _options$items;

    return (_options$items = options.items) === null || _options$items === void 0 ? void 0 : _options$items.find(function (item) {
      return options.id && item.id === options.id;
    });
  }, [options.items, options.id]);
}

function targetIsAnotherItem(event, items) {
  if (Object(reakit_utils_isSelfTarget__WEBPACK_IMPORTED_MODULE_7__[/* isSelfTarget */ "a"])(event)) return false;

  for (var _iterator = Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* b */ "c"])(items), _step; !(_step = _iterator()).done;) {
    var item = _step.value;

    if (item.ref.current === event.target) {
      return true;
    }
  }

  return false;
}

var useCompositeItem = Object(reakit_system_createHook__WEBPACK_IMPORTED_MODULE_2__[/* createHook */ "a"])({
  name: "CompositeItem",
  compose: [_Clickable_Clickable_js__WEBPACK_IMPORTED_MODULE_11__[/* useClickable */ "a"], _Id_Id_js__WEBPACK_IMPORTED_MODULE_15__[/* unstable_useId */ "a"]],
  useState: _CompositeState_3a25dcee_js__WEBPACK_IMPORTED_MODULE_14__[/* u */ "g"],
  propsAreEqual: function propsAreEqual(prev, next) {
    if (!next.id || prev.id !== next.id) {
      return _Clickable_Clickable_js__WEBPACK_IMPORTED_MODULE_11__[/* useClickable */ "a"].unstable_propsAreEqual(prev, next);
    }

    var prevCurrentId = prev.currentId,
        prevMoves = prev.unstable_moves,
        prevProps = Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* _ */ "a"])(prev, ["currentId", "unstable_moves"]);

    var nextCurrentId = next.currentId,
        nextMoves = next.unstable_moves,
        nextProps = Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* _ */ "a"])(next, ["currentId", "unstable_moves"]);

    if (nextCurrentId !== prevCurrentId) {
      if (next.id === nextCurrentId || next.id === prevCurrentId) {
        return false;
      }
    } else if (prevMoves !== nextMoves) {
      return false;
    }

    return _Clickable_Clickable_js__WEBPACK_IMPORTED_MODULE_11__[/* useClickable */ "a"].unstable_propsAreEqual(prevProps, nextProps);
  },
  useOptions: function useOptions(options) {
    return Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])(Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({}, options), {}, {
      id: options.id,
      currentId: Object(_CompositeState_3a25dcee_js__WEBPACK_IMPORTED_MODULE_14__[/* g */ "e"])(options),
      unstable_clickOnSpace: options.unstable_hasActiveWidget ? false : options.unstable_clickOnSpace
    });
  },
  useProps: function useProps(options, _ref) {
    var _options$items2;

    var htmlRef = _ref.ref,
        _ref$tabIndex = _ref.tabIndex,
        htmlTabIndex = _ref$tabIndex === void 0 ? 0 : _ref$tabIndex,
        htmlOnFocus = _ref.onFocus,
        htmlOnBlur = _ref.onBlur,
        htmlOnKeyDown = _ref.onKeyDown,
        htmlOnClick = _ref.onClick,
        htmlProps = Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* _ */ "a"])(_ref, ["ref", "tabIndex", "onFocus", "onBlur", "onKeyDown", "onClick"]);

    var ref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
    var id = options.id;
    var trulyDisabled = options.disabled && !options.focusable;
    var isCurrentItem = options.currentId === id;
    var isCurrentItemRef = Object(reakit_utils_useLiveRef__WEBPACK_IMPORTED_MODULE_6__[/* useLiveRef */ "a"])(isCurrentItem);
    var hasFocusedComposite = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(false);
    var item = useItem(options);
    var onFocusRef = Object(reakit_utils_useLiveRef__WEBPACK_IMPORTED_MODULE_6__[/* useLiveRef */ "a"])(htmlOnFocus);
    var onBlurRef = Object(reakit_utils_useLiveRef__WEBPACK_IMPORTED_MODULE_6__[/* useLiveRef */ "a"])(htmlOnBlur);
    var onKeyDownRef = Object(reakit_utils_useLiveRef__WEBPACK_IMPORTED_MODULE_6__[/* useLiveRef */ "a"])(htmlOnKeyDown);
    var onClickRef = Object(reakit_utils_useLiveRef__WEBPACK_IMPORTED_MODULE_6__[/* useLiveRef */ "a"])(htmlOnClick);
    var shouldTabIndex = !options.unstable_virtual && !options.unstable_hasActiveWidget && isCurrentItem || // We don't want to set tabIndex="-1" when using CompositeItem as a
    // standalone component, without state props.
    !((_options$items2 = options.items) === null || _options$items2 === void 0 ? void 0 : _options$items2.length);
    Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
      var _options$registerItem;

      if (!id) return undefined;
      (_options$registerItem = options.registerItem) === null || _options$registerItem === void 0 ? void 0 : _options$registerItem.call(options, {
        id: id,
        ref: ref,
        disabled: !!trulyDisabled
      });
      return function () {
        var _options$unregisterIt;

        (_options$unregisterIt = options.unregisterItem) === null || _options$unregisterIt === void 0 ? void 0 : _options$unregisterIt.call(options, id);
      };
    }, [id, trulyDisabled, options.registerItem, options.unregisterItem]);
    Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
      var element = ref.current;

      if (!element) {
         false ? undefined : void 0;
        return;
      } // `moves` will be incremented whenever next, previous, up, down, first,
      // last or move have been called. This means that the composite item will
      // be focused whenever some of these functions are called. We're using
      // isCurrentItemRef instead of isCurrentItem because we don't want to
      // focus the item if isCurrentItem changes (and options.moves doesn't).


      if (options.unstable_moves && isCurrentItemRef.current) {
        element.focus();
      }
    }, [options.unstable_moves]);
    var onFocus = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (event) {
      var _onFocusRef$current, _options$setCurrentId;

      (_onFocusRef$current = onFocusRef.current) === null || _onFocusRef$current === void 0 ? void 0 : _onFocusRef$current.call(onFocusRef, event);
      if (event.defaultPrevented) return;
      if (Object(reakit_utils_isPortalEvent__WEBPACK_IMPORTED_MODULE_9__[/* isPortalEvent */ "a"])(event)) return;
      if (!id) return;
      if (targetIsAnotherItem(event, options.items)) return;
      (_options$setCurrentId = options.setCurrentId) === null || _options$setCurrentId === void 0 ? void 0 : _options$setCurrentId.call(options, id); // When using aria-activedescendant, we want to make sure that the
      // composite container receives focus, not the composite item.
      // But we don't want to do this if the target is another focusable
      // element inside the composite item, such as CompositeItemWidget.

      if (options.unstable_virtual && options.baseId && Object(reakit_utils_isSelfTarget__WEBPACK_IMPORTED_MODULE_7__[/* isSelfTarget */ "a"])(event)) {
        var target = event.target;
        var composite = Object(reakit_utils_getDocument__WEBPACK_IMPORTED_MODULE_13__[/* getDocument */ "a"])(target).getElementById(options.baseId);

        if (composite) {
          hasFocusedComposite.current = true;
          Object(reakit_utils_tabbable__WEBPACK_IMPORTED_MODULE_10__[/* ensureFocus */ "a"])(composite);
        }
      }
    }, [id, options.items, options.setCurrentId, options.unstable_virtual, options.baseId]);
    var onBlur = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (event) {
      var _onBlurRef$current;

      if (options.unstable_virtual) {
        if (hasFocusedComposite.current) {
          // When hasFocusedComposite is true, composite has been focused
          // right after focusing this item. This is an intermediate blur
          // event, so we ignore it.
          hasFocusedComposite.current = false;
          event.preventDefault();
          event.stopPropagation();
          return;
        }
      }

      (_onBlurRef$current = onBlurRef.current) === null || _onBlurRef$current === void 0 ? void 0 : _onBlurRef$current.call(onBlurRef, event);
    }, [options.unstable_virtual]);
    var onCharacterKeyDown = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (event) {
      var _onKeyDownRef$current;

      (_onKeyDownRef$current = onKeyDownRef.current) === null || _onKeyDownRef$current === void 0 ? void 0 : _onKeyDownRef$current.call(onKeyDownRef, event);
      if (!Object(reakit_utils_isSelfTarget__WEBPACK_IMPORTED_MODULE_7__[/* isSelfTarget */ "a"])(event)) return;

      if (event.key.length === 1 && event.key !== " ") {
        var widget = getWidget(event.currentTarget);

        if (widget && Object(reakit_utils_isTextField__WEBPACK_IMPORTED_MODULE_16__[/* isTextField */ "a"])(widget)) {
          widget.focus();
          var key = event.key; // Using RAF here because otherwise the key will be added twice
          // to the input when using roving tabindex

          window.requestAnimationFrame(function () {
            Object(_setTextFieldValue_78ab5d56_js__WEBPACK_IMPORTED_MODULE_17__[/* s */ "a"])(widget, key);
          });
        }
      }
    }, []);
    var onKeyDown = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
      return Object(reakit_utils_createOnKeyDown__WEBPACK_IMPORTED_MODULE_12__[/* createOnKeyDown */ "a"])({
        onKeyDown: onCharacterKeyDown,
        stopPropagation: true,
        // We don't want to listen to focusable elements inside the composite
        // item, such as a CompositeItemWidget.
        shouldKeyDown: reakit_utils_isSelfTarget__WEBPACK_IMPORTED_MODULE_7__[/* isSelfTarget */ "a"],
        keyMap: function keyMap() {
          // `options.orientation` can also be undefined, which means that
          // both `isVertical` and `isHorizontal` will be `true`.
          var isVertical = options.orientation !== "horizontal";
          var isHorizontal = options.orientation !== "vertical";
          var isGrid = !!(item === null || item === void 0 ? void 0 : item.groupId);

          var Delete = function Delete(event) {
            var widget = getWidget(event.currentTarget);

            if (widget && Object(reakit_utils_isTextField__WEBPACK_IMPORTED_MODULE_16__[/* isTextField */ "a"])(widget)) {
              Object(_setTextFieldValue_78ab5d56_js__WEBPACK_IMPORTED_MODULE_17__[/* s */ "a"])(widget, "");
            }
          };

          var up = options.up && function () {
            return options.up();
          };

          var next = options.next && function () {
            return options.next();
          };

          var down = options.down && function () {
            return options.down();
          };

          var previous = options.previous && function () {
            return options.previous();
          };

          return {
            Delete: Delete,
            Backspace: Delete,
            ArrowUp: (isGrid || isVertical) && up,
            ArrowRight: (isGrid || isHorizontal) && next,
            ArrowDown: (isGrid || isVertical) && down,
            ArrowLeft: (isGrid || isHorizontal) && previous,
            Home: function Home(event) {
              if (!isGrid || event.ctrlKey) {
                var _options$first;

                (_options$first = options.first) === null || _options$first === void 0 ? void 0 : _options$first.call(options);
              } else {
                var _options$previous;

                (_options$previous = options.previous) === null || _options$previous === void 0 ? void 0 : _options$previous.call(options, true);
              }
            },
            End: function End(event) {
              if (!isGrid || event.ctrlKey) {
                var _options$last;

                (_options$last = options.last) === null || _options$last === void 0 ? void 0 : _options$last.call(options);
              } else {
                var _options$next;

                (_options$next = options.next) === null || _options$next === void 0 ? void 0 : _options$next.call(options, true);
              }
            },
            PageUp: function PageUp() {
              if (isGrid) {
                var _options$up;

                (_options$up = options.up) === null || _options$up === void 0 ? void 0 : _options$up.call(options, true);
              } else {
                var _options$first2;

                (_options$first2 = options.first) === null || _options$first2 === void 0 ? void 0 : _options$first2.call(options);
              }
            },
            PageDown: function PageDown() {
              if (isGrid) {
                var _options$down;

                (_options$down = options.down) === null || _options$down === void 0 ? void 0 : _options$down.call(options, true);
              } else {
                var _options$last2;

                (_options$last2 = options.last) === null || _options$last2 === void 0 ? void 0 : _options$last2.call(options);
              }
            }
          };
        }
      });
    }, [onCharacterKeyDown, options.orientation, item, options.up, options.next, options.down, options.previous, options.first, options.last]);
    var onClick = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (event) {
      var _onClickRef$current;

      (_onClickRef$current = onClickRef.current) === null || _onClickRef$current === void 0 ? void 0 : _onClickRef$current.call(onClickRef, event);
      if (event.defaultPrevented) return;
      var element = event.currentTarget;
      var widget = getWidget(element);

      if (widget && !Object(reakit_utils_hasFocusWithin__WEBPACK_IMPORTED_MODULE_8__[/* hasFocusWithin */ "a"])(widget)) {
        // If there's a widget inside the composite item, we make sure it's
        // focused when pressing enter, space or clicking on the composite item.
        widget.focus();
      }
    }, []);
    return Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({
      ref: Object(reakit_utils_useForkRef__WEBPACK_IMPORTED_MODULE_4__[/* useForkRef */ "a"])(ref, htmlRef),
      id: id,
      tabIndex: shouldTabIndex ? htmlTabIndex : -1,
      "aria-selected": options.unstable_virtual && isCurrentItem ? true : undefined,
      onFocus: onFocus,
      onBlur: onBlur,
      onKeyDown: onKeyDown,
      onClick: onClick
    }, htmlProps);
  }
});
var CompositeItem = Object(reakit_system_createComponent__WEBPACK_IMPORTED_MODULE_1__[/* createComponent */ "a"])({
  as: "button",
  memo: true,
  useHook: useCompositeItem
});




/***/ }),
/* 121 */,
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createEvent; });
/* harmony import */ var _getDocument_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);


/**
 * Creates an `Event` in a way that also works on IE 11.
 *
 * @example
 * import { createEvent } from "reakit-utils";
 *
 * const el = document.getElementById("id");
 * el.dispatchEvent(createEvent(el, "blur", { bubbles: false }));
 */

function createEvent(element, type, eventInit) {
  var _eventInit, _eventInit2;

  if (eventInit === void 0) {
    eventInit = {};
  }

  if (typeof Event === "function") {
    return new Event(type, eventInit);
  } // IE 11 doesn't support Event constructors


  var event = Object(_getDocument_js__WEBPACK_IMPORTED_MODULE_0__[/* getDocument */ "a"])(element).createEvent("Event");
  event.initEvent(type, (_eventInit = eventInit) === null || _eventInit === void 0 ? void 0 : _eventInit.bubbles, (_eventInit2 = eventInit) === null || _eventInit2 === void 0 ? void 0 : _eventInit2.cancelable);
  return event;
}




/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(178);

/***/ }),
/* 124 */,
/* 125 */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["shortcode"]; }());

/***/ }),
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */
 // Disable reason: JSDoc linter doesn't seem to parse the union (`&`) correctly.

/* eslint-disable jsdoc/valid-types */

/** @typedef {{icon: JSX.Element, size?: number} & import('react').ComponentPropsWithoutRef<'SVG'>} IconProps */

/* eslint-enable jsdoc/valid-types */

/**
 * Return an SVG icon.
 *
 * @param {IconProps} props icon is the SVG component to render
 *                          size is a number specifiying the icon size in pixels
 *                          Other props will be passed to wrapped SVG component
 *
 * @return {JSX.Element}  Icon component
 */

function Icon(_ref) {
  var icon = _ref.icon,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["icon", "size"]);

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["cloneElement"])(icon, _objectSpread({
    width: size,
    height: size
  }, props));
}

/* harmony default export */ __webpack_exports__["a"] = (Icon);


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(139);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _toArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39);




function _toArray(arr) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(arr) || Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(arr) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])();
}

/***/ }),
/* 147 */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["wordcount"]; }());

/***/ }),
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["tokenList"]; }());

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var close = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"
}));
/* harmony default export */ __webpack_exports__["a"] = (close);


/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var check = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M9 18.6L3.5 13l1-1L9 16.4l9.5-9.9 1 1z"
}));
/* harmony default export */ __webpack_exports__["a"] = (check);


/***/ }),
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      })
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      var TempCtor = function () {}
      TempCtor.prototype = superCtor.prototype
      ctor.prototype = new TempCtor()
      ctor.prototype.constructor = ctor
    }
  }
}


/***/ }),
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
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

module.exports = _extends;

/***/ }),
/* 171 */
/***/ (function(module, exports) {

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

module.exports = _objectWithoutPropertiesLoose;

/***/ }),
/* 172 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
exports.__esModule = true;
var React = __webpack_require__(13);
var PropTypes = __webpack_require__(28);
var autosize = __webpack_require__(174);
var _getLineHeight = __webpack_require__(175);
var getLineHeight = _getLineHeight;
var UPDATE = 'autosize:update';
var DESTROY = 'autosize:destroy';
var RESIZED = 'autosize:resized';
/**
 * A light replacement for built-in textarea component
 * which automaticaly adjusts its height to match the content
 */
var TextareaAutosize = /** @class */ (function (_super) {
    __extends(TextareaAutosize, _super);
    function TextareaAutosize() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            lineHeight: null
        };
        _this.dispatchEvent = function (EVENT_TYPE) {
            var event = document.createEvent('Event');
            event.initEvent(EVENT_TYPE, true, false);
            _this.textarea.dispatchEvent(event);
        };
        _this.updateLineHeight = function () {
            _this.setState({
                lineHeight: getLineHeight(_this.textarea)
            });
        };
        _this.onChange = function (e) {
            var onChange = _this.props.onChange;
            _this.currentValue = e.currentTarget.value;
            onChange && onChange(e);
        };
        _this.saveDOMNodeRef = function (ref) {
            var innerRef = _this.props.innerRef;
            if (innerRef) {
                innerRef(ref);
            }
            _this.textarea = ref;
        };
        _this.getLocals = function () {
            var _a = _this, _b = _a.props, onResize = _b.onResize, maxRows = _b.maxRows, onChange = _b.onChange, style = _b.style, innerRef = _b.innerRef, props = __rest(_b, ["onResize", "maxRows", "onChange", "style", "innerRef"]), lineHeight = _a.state.lineHeight, saveDOMNodeRef = _a.saveDOMNodeRef;
            var maxHeight = maxRows && lineHeight ? lineHeight * maxRows : null;
            return __assign({}, props, { saveDOMNodeRef: saveDOMNodeRef, style: maxHeight ? __assign({}, style, { maxHeight: maxHeight }) : style, onChange: _this.onChange });
        };
        return _this;
    }
    TextareaAutosize.prototype.componentDidMount = function () {
        var _this = this;
        var _a = this.props, onResize = _a.onResize, maxRows = _a.maxRows;
        if (typeof maxRows === 'number') {
            this.updateLineHeight();
        }
        /*
          the defer is needed to:
            - force "autosize" to activate the scrollbar when this.props.maxRows is passed
            - support StyledComponents (see #71)
        */
        setTimeout(function () { return autosize(_this.textarea); });
        if (onResize) {
            this.textarea.addEventListener(RESIZED, onResize);
        }
    };
    TextareaAutosize.prototype.componentWillUnmount = function () {
        var onResize = this.props.onResize;
        if (onResize) {
            this.textarea.removeEventListener(RESIZED, onResize);
        }
        this.dispatchEvent(DESTROY);
    };
    TextareaAutosize.prototype.render = function () {
        var _a = this.getLocals(), children = _a.children, saveDOMNodeRef = _a.saveDOMNodeRef, locals = __rest(_a, ["children", "saveDOMNodeRef"]);
        return (React.createElement("textarea", __assign({}, locals, { ref: saveDOMNodeRef }), children));
    };
    TextareaAutosize.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.value !== this.currentValue || this.props.rows !== prevProps.rows) {
            this.dispatchEvent(UPDATE);
        }
    };
    TextareaAutosize.defaultProps = {
        rows: 1
    };
    TextareaAutosize.propTypes = {
        rows: PropTypes.number,
        maxRows: PropTypes.number,
        onResize: PropTypes.func,
        innerRef: PropTypes.func
    };
    return TextareaAutosize;
}(React.Component));
exports["default"] = TextareaAutosize;


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	autosize 4.0.2
	license: MIT
	http://www.jacklmoore.com/autosize
*/
(function (global, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else { var mod; }
})(this, function (module, exports) {
	'use strict';

	var map = typeof Map === "function" ? new Map() : function () {
		var keys = [];
		var values = [];

		return {
			has: function has(key) {
				return keys.indexOf(key) > -1;
			},
			get: function get(key) {
				return values[keys.indexOf(key)];
			},
			set: function set(key, value) {
				if (keys.indexOf(key) === -1) {
					keys.push(key);
					values.push(value);
				}
			},
			delete: function _delete(key) {
				var index = keys.indexOf(key);
				if (index > -1) {
					keys.splice(index, 1);
					values.splice(index, 1);
				}
			}
		};
	}();

	var createEvent = function createEvent(name) {
		return new Event(name, { bubbles: true });
	};
	try {
		new Event('test');
	} catch (e) {
		// IE does not support `new Event()`
		createEvent = function createEvent(name) {
			var evt = document.createEvent('Event');
			evt.initEvent(name, true, false);
			return evt;
		};
	}

	function assign(ta) {
		if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || map.has(ta)) return;

		var heightOffset = null;
		var clientWidth = null;
		var cachedHeight = null;

		function init() {
			var style = window.getComputedStyle(ta, null);

			if (style.resize === 'vertical') {
				ta.style.resize = 'none';
			} else if (style.resize === 'both') {
				ta.style.resize = 'horizontal';
			}

			if (style.boxSizing === 'content-box') {
				heightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
			} else {
				heightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
			}
			// Fix when a textarea is not on document body and heightOffset is Not a Number
			if (isNaN(heightOffset)) {
				heightOffset = 0;
			}

			update();
		}

		function changeOverflow(value) {
			{
				// Chrome/Safari-specific fix:
				// When the textarea y-overflow is hidden, Chrome/Safari do not reflow the text to account for the space
				// made available by removing the scrollbar. The following forces the necessary text reflow.
				var width = ta.style.width;
				ta.style.width = '0px';
				// Force reflow:
				/* jshint ignore:start */
				ta.offsetWidth;
				/* jshint ignore:end */
				ta.style.width = width;
			}

			ta.style.overflowY = value;
		}

		function getParentOverflows(el) {
			var arr = [];

			while (el && el.parentNode && el.parentNode instanceof Element) {
				if (el.parentNode.scrollTop) {
					arr.push({
						node: el.parentNode,
						scrollTop: el.parentNode.scrollTop
					});
				}
				el = el.parentNode;
			}

			return arr;
		}

		function resize() {
			if (ta.scrollHeight === 0) {
				// If the scrollHeight is 0, then the element probably has display:none or is detached from the DOM.
				return;
			}

			var overflows = getParentOverflows(ta);
			var docTop = document.documentElement && document.documentElement.scrollTop; // Needed for Mobile IE (ticket #240)

			ta.style.height = '';
			ta.style.height = ta.scrollHeight + heightOffset + 'px';

			// used to check if an update is actually necessary on window.resize
			clientWidth = ta.clientWidth;

			// prevents scroll-position jumping
			overflows.forEach(function (el) {
				el.node.scrollTop = el.scrollTop;
			});

			if (docTop) {
				document.documentElement.scrollTop = docTop;
			}
		}

		function update() {
			resize();

			var styleHeight = Math.round(parseFloat(ta.style.height));
			var computed = window.getComputedStyle(ta, null);

			// Using offsetHeight as a replacement for computed.height in IE, because IE does not account use of border-box
			var actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(computed.height)) : ta.offsetHeight;

			// The actual height not matching the style height (set via the resize method) indicates that 
			// the max-height has been exceeded, in which case the overflow should be allowed.
			if (actualHeight < styleHeight) {
				if (computed.overflowY === 'hidden') {
					changeOverflow('scroll');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			} else {
				// Normally keep overflow set to hidden, to avoid flash of scrollbar as the textarea expands.
				if (computed.overflowY !== 'hidden') {
					changeOverflow('hidden');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			}

			if (cachedHeight !== actualHeight) {
				cachedHeight = actualHeight;
				var evt = createEvent('autosize:resized');
				try {
					ta.dispatchEvent(evt);
				} catch (err) {
					// Firefox will throw an error on dispatchEvent for a detached element
					// https://bugzilla.mozilla.org/show_bug.cgi?id=889376
				}
			}
		}

		var pageResize = function pageResize() {
			if (ta.clientWidth !== clientWidth) {
				update();
			}
		};

		var destroy = function (style) {
			window.removeEventListener('resize', pageResize, false);
			ta.removeEventListener('input', update, false);
			ta.removeEventListener('keyup', update, false);
			ta.removeEventListener('autosize:destroy', destroy, false);
			ta.removeEventListener('autosize:update', update, false);

			Object.keys(style).forEach(function (key) {
				ta.style[key] = style[key];
			});

			map.delete(ta);
		}.bind(ta, {
			height: ta.style.height,
			resize: ta.style.resize,
			overflowY: ta.style.overflowY,
			overflowX: ta.style.overflowX,
			wordWrap: ta.style.wordWrap
		});

		ta.addEventListener('autosize:destroy', destroy, false);

		// IE9 does not fire onpropertychange or oninput for deletions,
		// so binding to onkeyup to catch most of those events.
		// There is no way that I know of to detect something like 'cut' in IE9.
		if ('onpropertychange' in ta && 'oninput' in ta) {
			ta.addEventListener('keyup', update, false);
		}

		window.addEventListener('resize', pageResize, false);
		ta.addEventListener('input', update, false);
		ta.addEventListener('autosize:update', update, false);
		ta.style.overflowX = 'hidden';
		ta.style.wordWrap = 'break-word';

		map.set(ta, {
			destroy: destroy,
			update: update
		});

		init();
	}

	function destroy(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.destroy();
		}
	}

	function update(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.update();
		}
	}

	var autosize = null;

	// Do nothing in Node.js environment and IE8 (or lower)
	if (typeof window === 'undefined' || typeof window.getComputedStyle !== 'function') {
		autosize = function autosize(el) {
			return el;
		};
		autosize.destroy = function (el) {
			return el;
		};
		autosize.update = function (el) {
			return el;
		};
	} else {
		autosize = function autosize(el, options) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], function (x) {
					return assign(x, options);
				});
			}
			return el;
		};
		autosize.destroy = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], destroy);
			}
			return el;
		};
		autosize.update = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], update);
			}
			return el;
		};
	}

	exports.default = autosize;
	module.exports = exports['default'];
});

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

// Load in dependencies
var computedStyle = __webpack_require__(176);

/**
 * Calculate the `line-height` of a given node
 * @param {HTMLElement} node Element to calculate line height of. Must be in the DOM.
 * @returns {Number} `line-height` of the element in pixels
 */
function lineHeight(node) {
  // Grab the line-height via style
  var lnHeightStr = computedStyle(node, 'line-height');
  var lnHeight = parseFloat(lnHeightStr, 10);

  // If the lineHeight did not contain a unit (i.e. it was numeric), convert it to ems (e.g. '2.3' === '2.3em')
  if (lnHeightStr === lnHeight + '') {
    // Save the old lineHeight style and update the em unit to the element
    var _lnHeightStyle = node.style.lineHeight;
    node.style.lineHeight = lnHeightStr + 'em';

    // Calculate the em based height
    lnHeightStr = computedStyle(node, 'line-height');
    lnHeight = parseFloat(lnHeightStr, 10);

    // Revert the lineHeight style
    if (_lnHeightStyle) {
      node.style.lineHeight = _lnHeightStyle;
    } else {
      delete node.style.lineHeight;
    }
  }

  // If the lineHeight is in `pt`, convert it to pixels (4px for 3pt)
  // DEV: `em` units are converted to `pt` in IE6
  // Conversion ratio from https://developer.mozilla.org/en-US/docs/Web/CSS/length
  if (lnHeightStr.indexOf('pt') !== -1) {
    lnHeight *= 4;
    lnHeight /= 3;
  // Otherwise, if the lineHeight is in `mm`, convert it to pixels (96px for 25.4mm)
  } else if (lnHeightStr.indexOf('mm') !== -1) {
    lnHeight *= 96;
    lnHeight /= 25.4;
  // Otherwise, if the lineHeight is in `cm`, convert it to pixels (96px for 2.54cm)
  } else if (lnHeightStr.indexOf('cm') !== -1) {
    lnHeight *= 96;
    lnHeight /= 2.54;
  // Otherwise, if the lineHeight is in `in`, convert it to pixels (96px for 1in)
  } else if (lnHeightStr.indexOf('in') !== -1) {
    lnHeight *= 96;
  // Otherwise, if the lineHeight is in `pc`, convert it to pixels (12pt for 1pc)
  } else if (lnHeightStr.indexOf('pc') !== -1) {
    lnHeight *= 16;
  }

  // Continue our computation
  lnHeight = Math.round(lnHeight);

  // If the line-height is "normal", calculate by font-size
  if (lnHeightStr === 'normal') {
    // Create a temporary node
    var nodeName = node.nodeName;
    var _node = document.createElement(nodeName);
    _node.innerHTML = '&nbsp;';

    // If we have a text area, reset it to only 1 row
    // https://github.com/twolfson/line-height/issues/4
    if (nodeName.toUpperCase() === 'TEXTAREA') {
      _node.setAttribute('rows', '1');
    }

    // Set the font-size of the element
    var fontSizeStr = computedStyle(node, 'font-size');
    _node.style.fontSize = fontSizeStr;

    // Remove default padding/border which can affect offset height
    // https://github.com/twolfson/line-height/issues/4
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetHeight
    _node.style.padding = '0px';
    _node.style.border = '0px';

    // Append it to the body
    var body = document.body;
    body.appendChild(_node);

    // Assume the line height of the element is the height
    var height = _node.offsetHeight;
    lnHeight = height;

    // Remove our child from the DOM
    body.removeChild(_node);
  }

  // Return the calculated height
  return lnHeight;
}

// Export lineHeight
module.exports = lineHeight;


/***/ }),
/* 176 */
/***/ (function(module, exports) {

// This code has been refactored for 140 bytes
// You can see the original here: https://github.com/twolfson/computedStyle/blob/04cd1da2e30fa45844f95f5cb1ac898e9b9ef050/lib/computedStyle.js
var computedStyle = function (el, prop, getComputedStyle) {
  getComputedStyle = window.getComputedStyle;

  // In one fell swoop
  return (
    // If we have getComputedStyle
    getComputedStyle ?
      // Query it
      // TODO: From CSS-Query notes, we might need (node, null) for FF
      getComputedStyle(el) :

    // Otherwise, we are in IE and use currentStyle
      el.currentStyle
  )[
    // Switch to camelCase for CSSOM
    // DEV: Grabbed from jQuery
    // https://github.com/jquery/jquery/blob/1.9-stable/src/css.js#L191-L194
    // https://github.com/jquery/jquery/blob/1.9-stable/src/core.js#L593-L597
    prop.replace(/-(\w)/gi, function (word, letter) {
      return letter.toUpperCase();
    })
  ];
};

module.exports = computedStyle;


/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var closeSmall = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M13 11.9l3.3-3.4-1.1-1-3.2 3.3-3.2-3.3-1.1 1 3.3 3.4-3.5 3.6 1 1L12 13l3.5 3.5 1-1z"
}));
/* harmony default export */ __webpack_exports__["a"] = (closeSmall);


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(179);

function scrollIntoView(elem, container, config) {
  config = config || {};
  // document 归一化到 window
  if (container.nodeType === 9) {
    container = util.getWindow(container);
  }

  var allowHorizontalScroll = config.allowHorizontalScroll;
  var onlyScrollIfNeeded = config.onlyScrollIfNeeded;
  var alignWithTop = config.alignWithTop;
  var alignWithLeft = config.alignWithLeft;
  var offsetTop = config.offsetTop || 0;
  var offsetLeft = config.offsetLeft || 0;
  var offsetBottom = config.offsetBottom || 0;
  var offsetRight = config.offsetRight || 0;

  allowHorizontalScroll = allowHorizontalScroll === undefined ? true : allowHorizontalScroll;

  var isWin = util.isWindow(container);
  var elemOffset = util.offset(elem);
  var eh = util.outerHeight(elem);
  var ew = util.outerWidth(elem);
  var containerOffset = undefined;
  var ch = undefined;
  var cw = undefined;
  var containerScroll = undefined;
  var diffTop = undefined;
  var diffBottom = undefined;
  var win = undefined;
  var winScroll = undefined;
  var ww = undefined;
  var wh = undefined;

  if (isWin) {
    win = container;
    wh = util.height(win);
    ww = util.width(win);
    winScroll = {
      left: util.scrollLeft(win),
      top: util.scrollTop(win)
    };
    // elem 相对 container 可视视窗的距离
    diffTop = {
      left: elemOffset.left - winScroll.left - offsetLeft,
      top: elemOffset.top - winScroll.top - offsetTop
    };
    diffBottom = {
      left: elemOffset.left + ew - (winScroll.left + ww) + offsetRight,
      top: elemOffset.top + eh - (winScroll.top + wh) + offsetBottom
    };
    containerScroll = winScroll;
  } else {
    containerOffset = util.offset(container);
    ch = container.clientHeight;
    cw = container.clientWidth;
    containerScroll = {
      left: container.scrollLeft,
      top: container.scrollTop
    };
    // elem 相对 container 可视视窗的距离
    // 注意边框, offset 是边框到根节点
    diffTop = {
      left: elemOffset.left - (containerOffset.left + (parseFloat(util.css(container, 'borderLeftWidth')) || 0)) - offsetLeft,
      top: elemOffset.top - (containerOffset.top + (parseFloat(util.css(container, 'borderTopWidth')) || 0)) - offsetTop
    };
    diffBottom = {
      left: elemOffset.left + ew - (containerOffset.left + cw + (parseFloat(util.css(container, 'borderRightWidth')) || 0)) + offsetRight,
      top: elemOffset.top + eh - (containerOffset.top + ch + (parseFloat(util.css(container, 'borderBottomWidth')) || 0)) + offsetBottom
    };
  }

  if (diffTop.top < 0 || diffBottom.top > 0) {
    // 强制向上
    if (alignWithTop === true) {
      util.scrollTop(container, containerScroll.top + diffTop.top);
    } else if (alignWithTop === false) {
      util.scrollTop(container, containerScroll.top + diffBottom.top);
    } else {
      // 自动调整
      if (diffTop.top < 0) {
        util.scrollTop(container, containerScroll.top + diffTop.top);
      } else {
        util.scrollTop(container, containerScroll.top + diffBottom.top);
      }
    }
  } else {
    if (!onlyScrollIfNeeded) {
      alignWithTop = alignWithTop === undefined ? true : !!alignWithTop;
      if (alignWithTop) {
        util.scrollTop(container, containerScroll.top + diffTop.top);
      } else {
        util.scrollTop(container, containerScroll.top + diffBottom.top);
      }
    }
  }

  if (allowHorizontalScroll) {
    if (diffTop.left < 0 || diffBottom.left > 0) {
      // 强制向上
      if (alignWithLeft === true) {
        util.scrollLeft(container, containerScroll.left + diffTop.left);
      } else if (alignWithLeft === false) {
        util.scrollLeft(container, containerScroll.left + diffBottom.left);
      } else {
        // 自动调整
        if (diffTop.left < 0) {
          util.scrollLeft(container, containerScroll.left + diffTop.left);
        } else {
          util.scrollLeft(container, containerScroll.left + diffBottom.left);
        }
      }
    } else {
      if (!onlyScrollIfNeeded) {
        alignWithLeft = alignWithLeft === undefined ? true : !!alignWithLeft;
        if (alignWithLeft) {
          util.scrollLeft(container, containerScroll.left + diffTop.left);
        } else {
          util.scrollLeft(container, containerScroll.left + diffBottom.left);
        }
      }
    }
  }
}

module.exports = scrollIntoView;

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;

function getClientPosition(elem) {
  var box = undefined;
  var x = undefined;
  var y = undefined;
  var doc = elem.ownerDocument;
  var body = doc.body;
  var docElem = doc && doc.documentElement;
  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
  box = elem.getBoundingClientRect();

  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin

  x = box.left;
  y = box.top;

  // In IE, most of the time, 2 extra pixels are added to the top and left
  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
  // IE6 standards mode, this border can be overridden by setting the
  // document element's border to zero -- thus, we cannot rely on the
  // offset always being 2 pixels.

  // In quirks mode, the offset can be determined by querying the body's
  // clientLeft/clientTop, but in standards mode, it is found by querying
  // the document element's clientLeft/clientTop.  Since we already called
  // getClientBoundingRect we have already forced a reflow, so it is not
  // too expensive just to query them all.

  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
  // 窗口边框标准是设 documentElement ,quirks 时设置 body
  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
  // 标准 ie 下 docElem.clientTop 就是 border-top
  // ie7 html 即窗口边框改变不了。永远为 2
  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0

  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;

  return {
    left: x,
    top: y
  };
}

function getScroll(w, top) {
  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
  var method = 'scroll' + (top ? 'Top' : 'Left');
  if (typeof ret !== 'number') {
    var d = w.document;
    // ie6,7,8 standard mode
    ret = d.documentElement[method];
    if (typeof ret !== 'number') {
      // quirks mode
      ret = d.body[method];
    }
  }
  return ret;
}

function getScrollLeft(w) {
  return getScroll(w);
}

function getScrollTop(w) {
  return getScroll(w, true);
}

function getOffset(el) {
  var pos = getClientPosition(el);
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScrollLeft(w);
  pos.top += getScrollTop(w);
  return pos;
}
function _getComputedStyle(elem, name, computedStyle_) {
  var val = '';
  var d = elem.ownerDocument;
  var computedStyle = computedStyle_ || d.defaultView.getComputedStyle(elem, null);

  // https://github.com/kissyteam/kissy/issues/61
  if (computedStyle) {
    val = computedStyle.getPropertyValue(name) || computedStyle[name];
  }

  return val;
}

var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
var RE_POS = /^(top|right|bottom|left)$/;
var CURRENT_STYLE = 'currentStyle';
var RUNTIME_STYLE = 'runtimeStyle';
var LEFT = 'left';
var PX = 'px';

function _getComputedStyleIE(elem, name) {
  // currentStyle maybe null
  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];

  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
  // 在 ie 下不对，需要直接用 offset 方式
  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了

  // From the awesome hack by Dean Edwards
  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
  // If we're not dealing with a regular pixel number
  // but a number that has a weird ending, we need to convert it to pixels
  // exclude left right for relativity
  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
    // Remember the original values
    var style = elem.style;
    var left = style[LEFT];
    var rsLeft = elem[RUNTIME_STYLE][LEFT];

    // prevent flashing of content
    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];

    // Put in the new values to get a computed value out
    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
    ret = style.pixelLeft + PX;

    // Revert the changed values
    style[LEFT] = left;

    elem[RUNTIME_STYLE][LEFT] = rsLeft;
  }
  return ret === '' ? 'auto' : ret;
}

var getComputedStyleX = undefined;
if (typeof window !== 'undefined') {
  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
}

function each(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}

function isBorderBoxFn(elem) {
  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
}

var BOX_MODELS = ['margin', 'border', 'padding'];
var CONTENT_INDEX = -1;
var PADDING_INDEX = 2;
var BORDER_INDEX = 1;
var MARGIN_INDEX = 0;

function swap(elem, options, callback) {
  var old = {};
  var style = elem.style;
  var name = undefined;

  // Remember the old values, and insert the new ones
  for (name in options) {
    if (options.hasOwnProperty(name)) {
      old[name] = style[name];
      style[name] = options[name];
    }
  }

  callback.call(elem);

  // Revert the old values
  for (name in options) {
    if (options.hasOwnProperty(name)) {
      style[name] = old[name];
    }
  }
}

function getPBMWidth(elem, props, which) {
  var value = 0;
  var prop = undefined;
  var j = undefined;
  var i = undefined;
  for (j = 0; j < props.length; j++) {
    prop = props[j];
    if (prop) {
      for (i = 0; i < which.length; i++) {
        var cssProp = undefined;
        if (prop === 'border') {
          cssProp = prop + which[i] + 'Width';
        } else {
          cssProp = prop + which[i];
        }
        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
      }
    }
  }
  return value;
}

/**
 * A crude way of determining if an object is a window
 * @member util
 */
function isWindow(obj) {
  // must use == for ie8
  /* eslint eqeqeq:0 */
  return obj != null && obj == obj.window;
}

var domUtils = {};

each(['Width', 'Height'], function (name) {
  domUtils['doc' + name] = function (refWin) {
    var d = refWin.document;
    return Math.max(
    // firefox chrome documentElement.scrollHeight< body.scrollHeight
    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
    d.documentElement['scroll' + name],
    // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
    d.body['scroll' + name], domUtils['viewport' + name](d));
  };

  domUtils['viewport' + name] = function (win) {
    // pc browser includes scrollbar in window.innerWidth
    var prop = 'client' + name;
    var doc = win.document;
    var body = doc.body;
    var documentElement = doc.documentElement;
    var documentElementProp = documentElement[prop];
    // 标准模式取 documentElement
    // backcompat 取 body
    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
  };
});

/*
 得到元素的大小信息
 @param elem
 @param name
 @param {String} [extra]  'padding' : (css width) + padding
 'border' : (css width) + padding + border
 'margin' : (css width) + padding + border + margin
 */
function getWH(elem, name, extra) {
  if (isWindow(elem)) {
    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
  } else if (elem.nodeType === 9) {
    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
  }
  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
  var borderBoxValue = name === 'width' ? elem.offsetWidth : elem.offsetHeight;
  var computedStyle = getComputedStyleX(elem);
  var isBorderBox = isBorderBoxFn(elem, computedStyle);
  var cssBoxValue = 0;
  if (borderBoxValue == null || borderBoxValue <= 0) {
    borderBoxValue = undefined;
    // Fall back to computed then un computed css if necessary
    cssBoxValue = getComputedStyleX(elem, name);
    if (cssBoxValue == null || Number(cssBoxValue) < 0) {
      cssBoxValue = elem.style[name] || 0;
    }
    // Normalize '', auto, and prepare for extra
    cssBoxValue = parseFloat(cssBoxValue) || 0;
  }
  if (extra === undefined) {
    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
  }
  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
  var val = borderBoxValue || cssBoxValue;
  if (extra === CONTENT_INDEX) {
    if (borderBoxValueOrIsBorderBox) {
      return val - getPBMWidth(elem, ['border', 'padding'], which, computedStyle);
    }
    return cssBoxValue;
  }
  if (borderBoxValueOrIsBorderBox) {
    var padding = extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which, computedStyle) : getPBMWidth(elem, ['margin'], which, computedStyle);
    return val + (extra === BORDER_INDEX ? 0 : padding);
  }
  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle);
}

var cssShow = {
  position: 'absolute',
  visibility: 'hidden',
  display: 'block'
};

// fix #119 : https://github.com/kissyteam/kissy/issues/119
function getWHIgnoreDisplay(elem) {
  var val = undefined;
  var args = arguments;
  // in case elem is window
  // elem.offsetWidth === undefined
  if (elem.offsetWidth !== 0) {
    val = getWH.apply(undefined, args);
  } else {
    swap(elem, cssShow, function () {
      val = getWH.apply(undefined, args);
    });
  }
  return val;
}

function css(el, name, v) {
  var value = v;
  if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
    for (var i in name) {
      if (name.hasOwnProperty(i)) {
        css(el, i, name[i]);
      }
    }
    return undefined;
  }
  if (typeof value !== 'undefined') {
    if (typeof value === 'number') {
      value += 'px';
    }
    el.style[name] = value;
    return undefined;
  }
  return getComputedStyleX(el, name);
}

each(['width', 'height'], function (name) {
  var first = name.charAt(0).toUpperCase() + name.slice(1);
  domUtils['outer' + first] = function (el, includeMargin) {
    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
  };
  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];

  domUtils[name] = function (elem, val) {
    if (val !== undefined) {
      if (elem) {
        var computedStyle = getComputedStyleX(elem);
        var isBorderBox = isBorderBoxFn(elem);
        if (isBorderBox) {
          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
        }
        return css(elem, name, val);
      }
      return undefined;
    }
    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
  };
});

// 设置 elem 相对 elem.ownerDocument 的坐标
function setOffset(elem, offset) {
  // set position first, in-case top/left are set even on static elem
  if (css(elem, 'position') === 'static') {
    elem.style.position = 'relative';
  }

  var old = getOffset(elem);
  var ret = {};
  var current = undefined;
  var key = undefined;

  for (key in offset) {
    if (offset.hasOwnProperty(key)) {
      current = parseFloat(css(elem, key)) || 0;
      ret[key] = current + offset[key] - old[key];
    }
  }
  css(elem, ret);
}

module.exports = _extends({
  getWindow: function getWindow(node) {
    var doc = node.ownerDocument || node;
    return doc.defaultView || doc.parentWindow;
  },
  offset: function offset(el, value) {
    if (typeof value !== 'undefined') {
      setOffset(el, value);
    } else {
      return getOffset(el);
    }
  },

  isWindow: isWindow,
  each: each,
  css: css,
  clone: function clone(obj) {
    var ret = {};
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        ret[i] = obj[i];
      }
    }
    var overflow = obj.overflow;
    if (overflow) {
      for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
          ret.overflow[i] = obj.overflow[i];
        }
      }
    }
    return ret;
  },
  scrollLeft: function scrollLeft(w, v) {
    if (isWindow(w)) {
      if (v === undefined) {
        return getScrollLeft(w);
      }
      window.scrollTo(v, getScrollTop(w));
    } else {
      if (v === undefined) {
        return w.scrollLeft;
      }
      w.scrollLeft = v;
    }
  },
  scrollTop: function scrollTop(w, v) {
    if (isWindow(w)) {
      if (v === undefined) {
        return getScrollTop(w);
      }
      window.scrollTo(getScrollLeft(w), v);
    } else {
      if (v === undefined) {
        return w.scrollTop;
      }
      w.scrollTop = v;
    }
  },

  viewportWidth: 0,
  viewportHeight: 0
}, domUtils);

/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var link = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"
}));
/* harmony default export */ __webpack_exports__["a"] = (link);


/***/ }),
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var blockDefault = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M19 8h-1V6h-5v2h-2V6H6v2H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm.5 10c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5v-8c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v8z"
}));
/* harmony default export */ __webpack_exports__["a"] = (blockDefault);


/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var keyboardReturn = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M16 4h2v9H7v3l-5-4 5-4v3h9V4z"
}));
/* harmony default export */ __webpack_exports__["a"] = (keyboardReturn);


/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var upload = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M18.5 15v3.5H13V6.7l4.5 4.1 1-1.1-6.2-5.8-5.8 5.8 1 1.1 4-4v11.7h-6V15H4v5h16v-5z"
}));
/* harmony default export */ __webpack_exports__["a"] = (upload);


/***/ }),
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Redux dispatch multiple actions
 */

function multi(_ref) {
  var dispatch = _ref.dispatch;

  return function (next) {
    return function (action) {
      return Array.isArray(action) ? action.filter(Boolean).map(dispatch) : next(action);
    };
  };
}

/**
 * Exports
 */

exports.default = multi;

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*istanbul ignore start*/


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.diffChars = diffChars;
exports.characterDiff = void 0;

/*istanbul ignore end*/
var
/*istanbul ignore start*/
_base = _interopRequireDefault(__webpack_require__(297))
/*istanbul ignore end*/
;

/*istanbul ignore start*/ function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*istanbul ignore end*/
var characterDiff = new
/*istanbul ignore start*/
_base
/*istanbul ignore end*/
.
/*istanbul ignore start*/
default
/*istanbul ignore end*/
();

/*istanbul ignore start*/
exports.characterDiff = characterDiff;

/*istanbul ignore end*/
function diffChars(oldStr, newStr, options) {
  return characterDiff.diff(oldStr, newStr, options);
}


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/



exports.match = matchQuery;
exports.parse = parseQuery;

// -----------------------------------------------------------------------------

var RE_MEDIA_QUERY     = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,
    RE_MQ_EXPRESSION   = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,
    RE_MQ_FEATURE      = /^(?:(min|max)-)?(.+)/,
    RE_LENGTH_UNIT     = /(em|rem|px|cm|mm|in|pt|pc)?$/,
    RE_RESOLUTION_UNIT = /(dpi|dpcm|dppx)?$/;

function matchQuery(mediaQuery, values) {
    return parseQuery(mediaQuery).some(function (query) {
        var inverse = query.inverse;

        // Either the parsed or specified `type` is "all", or the types must be
        // equal for a match.
        var typeMatch = query.type === 'all' || values.type === query.type;

        // Quit early when `type` doesn't match, but take "not" into account.
        if ((typeMatch && inverse) || !(typeMatch || inverse)) {
            return false;
        }

        var expressionsMatch = query.expressions.every(function (expression) {
            var feature  = expression.feature,
                modifier = expression.modifier,
                expValue = expression.value,
                value    = values[feature];

            // Missing or falsy values don't match.
            if (!value) { return false; }

            switch (feature) {
                case 'orientation':
                case 'scan':
                    return value.toLowerCase() === expValue.toLowerCase();

                case 'width':
                case 'height':
                case 'device-width':
                case 'device-height':
                    expValue = toPx(expValue);
                    value    = toPx(value);
                    break;

                case 'resolution':
                    expValue = toDpi(expValue);
                    value    = toDpi(value);
                    break;

                case 'aspect-ratio':
                case 'device-aspect-ratio':
                case /* Deprecated */ 'device-pixel-ratio':
                    expValue = toDecimal(expValue);
                    value    = toDecimal(value);
                    break;

                case 'grid':
                case 'color':
                case 'color-index':
                case 'monochrome':
                    expValue = parseInt(expValue, 10) || 1;
                    value    = parseInt(value, 10) || 0;
                    break;
            }

            switch (modifier) {
                case 'min': return value >= expValue;
                case 'max': return value <= expValue;
                default   : return value === expValue;
            }
        });

        return (expressionsMatch && !inverse) || (!expressionsMatch && inverse);
    });
}

function parseQuery(mediaQuery) {
    return mediaQuery.split(',').map(function (query) {
        query = query.trim();

        var captures    = query.match(RE_MEDIA_QUERY),
            modifier    = captures[1],
            type        = captures[2],
            expressions = captures[3] || '',
            parsed      = {};

        parsed.inverse = !!modifier && modifier.toLowerCase() === 'not';
        parsed.type    = type ? type.toLowerCase() : 'all';

        // Split expressions into a list.
        expressions = expressions.match(/\([^\)]+\)/g) || [];

        parsed.expressions = expressions.map(function (expression) {
            var captures = expression.match(RE_MQ_EXPRESSION),
                feature  = captures[1].toLowerCase().match(RE_MQ_FEATURE);

            return {
                modifier: feature[1],
                feature : feature[2],
                value   : captures[2]
            };
        });

        return parsed;
    });
}

// -- Utilities ----------------------------------------------------------------

function toDecimal(ratio) {
    var decimal = Number(ratio),
        numbers;

    if (!decimal) {
        numbers = ratio.match(/^(\d+)\s*\/\s*(\d+)$/);
        decimal = numbers[1] / numbers[2];
    }

    return decimal;
}

function toDpi(resolution) {
    var value = parseFloat(resolution),
        units = String(resolution).match(RE_RESOLUTION_UNIT)[1];

    switch (units) {
        case 'dpcm': return value / 2.54;
        case 'dppx': return value * 96;
        default    : return value;
    }
}

function toPx(length) {
    var value = parseFloat(length),
        units = String(length).match(RE_LENGTH_UNIT)[1];

    switch (units) {
        case 'em' : return value * 16;
        case 'rem': return value * 16;
        case 'cm' : return value * 96 / 2.54;
        case 'mm' : return value * 96 / 2.54 / 10;
        case 'in' : return value * 96;
        case 'pt' : return value * 72;
        case 'pc' : return value * 72 / 12;
        default   : return value;
    }
}


/***/ }),
/* 266 */
/***/ (function(module, exports) {

var traverse = module.exports = function (obj) {
    return new Traverse(obj);
};

function Traverse (obj) {
    this.value = obj;
}

Traverse.prototype.get = function (ps) {
    var node = this.value;
    for (var i = 0; i < ps.length; i ++) {
        var key = ps[i];
        if (!node || !hasOwnProperty.call(node, key)) {
            node = undefined;
            break;
        }
        node = node[key];
    }
    return node;
};

Traverse.prototype.has = function (ps) {
    var node = this.value;
    for (var i = 0; i < ps.length; i ++) {
        var key = ps[i];
        if (!node || !hasOwnProperty.call(node, key)) {
            return false;
        }
        node = node[key];
    }
    return true;
};

Traverse.prototype.set = function (ps, value) {
    var node = this.value;
    for (var i = 0; i < ps.length - 1; i ++) {
        var key = ps[i];
        if (!hasOwnProperty.call(node, key)) node[key] = {};
        node = node[key];
    }
    node[ps[i]] = value;
    return value;
};

Traverse.prototype.map = function (cb) {
    return walk(this.value, cb, true);
};

Traverse.prototype.forEach = function (cb) {
    this.value = walk(this.value, cb, false);
    return this.value;
};

Traverse.prototype.reduce = function (cb, init) {
    var skip = arguments.length === 1;
    var acc = skip ? this.value : init;
    this.forEach(function (x) {
        if (!this.isRoot || !skip) {
            acc = cb.call(this, acc, x);
        }
    });
    return acc;
};

Traverse.prototype.paths = function () {
    var acc = [];
    this.forEach(function (x) {
        acc.push(this.path); 
    });
    return acc;
};

Traverse.prototype.nodes = function () {
    var acc = [];
    this.forEach(function (x) {
        acc.push(this.node);
    });
    return acc;
};

Traverse.prototype.clone = function () {
    var parents = [], nodes = [];
    
    return (function clone (src) {
        for (var i = 0; i < parents.length; i++) {
            if (parents[i] === src) {
                return nodes[i];
            }
        }
        
        if (typeof src === 'object' && src !== null) {
            var dst = copy(src);
            
            parents.push(src);
            nodes.push(dst);
            
            forEach(objectKeys(src), function (key) {
                dst[key] = clone(src[key]);
            });
            
            parents.pop();
            nodes.pop();
            return dst;
        }
        else {
            return src;
        }
    })(this.value);
};

function walk (root, cb, immutable) {
    var path = [];
    var parents = [];
    var alive = true;
    
    return (function walker (node_) {
        var node = immutable ? copy(node_) : node_;
        var modifiers = {};
        
        var keepGoing = true;
        
        var state = {
            node : node,
            node_ : node_,
            path : [].concat(path),
            parent : parents[parents.length - 1],
            parents : parents,
            key : path.slice(-1)[0],
            isRoot : path.length === 0,
            level : path.length,
            circular : null,
            update : function (x, stopHere) {
                if (!state.isRoot) {
                    state.parent.node[state.key] = x;
                }
                state.node = x;
                if (stopHere) keepGoing = false;
            },
            'delete' : function (stopHere) {
                delete state.parent.node[state.key];
                if (stopHere) keepGoing = false;
            },
            remove : function (stopHere) {
                if (isArray(state.parent.node)) {
                    state.parent.node.splice(state.key, 1);
                }
                else {
                    delete state.parent.node[state.key];
                }
                if (stopHere) keepGoing = false;
            },
            keys : null,
            before : function (f) { modifiers.before = f },
            after : function (f) { modifiers.after = f },
            pre : function (f) { modifiers.pre = f },
            post : function (f) { modifiers.post = f },
            stop : function () { alive = false },
            block : function () { keepGoing = false }
        };
        
        if (!alive) return state;
        
        function updateState() {
            if (typeof state.node === 'object' && state.node !== null) {
                if (!state.keys || state.node_ !== state.node) {
                    state.keys = objectKeys(state.node)
                }
                
                state.isLeaf = state.keys.length == 0;
                
                for (var i = 0; i < parents.length; i++) {
                    if (parents[i].node_ === node_) {
                        state.circular = parents[i];
                        break;
                    }
                }
            }
            else {
                state.isLeaf = true;
                state.keys = null;
            }
            
            state.notLeaf = !state.isLeaf;
            state.notRoot = !state.isRoot;
        }
        
        updateState();
        
        // use return values to update if defined
        var ret = cb.call(state, state.node);
        if (ret !== undefined && state.update) state.update(ret);
        
        if (modifiers.before) modifiers.before.call(state, state.node);
        
        if (!keepGoing) return state;
        
        if (typeof state.node == 'object'
        && state.node !== null && !state.circular) {
            parents.push(state);
            
            updateState();
            
            forEach(state.keys, function (key, i) {
                path.push(key);
                
                if (modifiers.pre) modifiers.pre.call(state, state.node[key], key);
                
                var child = walker(state.node[key]);
                if (immutable && hasOwnProperty.call(state.node, key)) {
                    state.node[key] = child.node;
                }
                
                child.isLast = i == state.keys.length - 1;
                child.isFirst = i == 0;
                
                if (modifiers.post) modifiers.post.call(state, child);
                
                path.pop();
            });
            parents.pop();
        }
        
        if (modifiers.after) modifiers.after.call(state, state.node);
        
        return state;
    })(root).node;
}

function copy (src) {
    if (typeof src === 'object' && src !== null) {
        var dst;
        
        if (isArray(src)) {
            dst = [];
        }
        else if (isDate(src)) {
            dst = new Date(src.getTime ? src.getTime() : src);
        }
        else if (isRegExp(src)) {
            dst = new RegExp(src);
        }
        else if (isError(src)) {
            dst = { message: src.message };
        }
        else if (isBoolean(src)) {
            dst = new Boolean(src);
        }
        else if (isNumber(src)) {
            dst = new Number(src);
        }
        else if (isString(src)) {
            dst = new String(src);
        }
        else if (Object.create && Object.getPrototypeOf) {
            dst = Object.create(Object.getPrototypeOf(src));
        }
        else if (src.constructor === Object) {
            dst = {};
        }
        else {
            var proto =
                (src.constructor && src.constructor.prototype)
                || src.__proto__
                || {}
            ;
            var T = function () {};
            T.prototype = proto;
            dst = new T;
        }
        
        forEach(objectKeys(src), function (key) {
            dst[key] = src[key];
        });
        return dst;
    }
    else return src;
}

var objectKeys = Object.keys || function keys (obj) {
    var res = [];
    for (var key in obj) res.push(key)
    return res;
};

function toS (obj) { return Object.prototype.toString.call(obj) }
function isDate (obj) { return toS(obj) === '[object Date]' }
function isRegExp (obj) { return toS(obj) === '[object RegExp]' }
function isError (obj) { return toS(obj) === '[object Error]' }
function isBoolean (obj) { return toS(obj) === '[object Boolean]' }
function isNumber (obj) { return toS(obj) === '[object Number]' }
function isString (obj) { return toS(obj) === '[object String]' }

var isArray = Array.isArray || function isArray (xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
};

var forEach = function (xs, fn) {
    if (xs.forEach) return xs.forEach(fn)
    else for (var i = 0; i < xs.length; i++) {
        fn(xs[i], i, xs);
    }
};

forEach(objectKeys(Traverse.prototype), function (key) {
    traverse[key] = function (obj) {
        var args = [].slice.call(arguments, 1);
        var t = new Traverse(obj);
        return t[key].apply(t, args);
    };
});

var hasOwnProperty = Object.hasOwnProperty || function (obj, key) {
    return key in obj;
};


/***/ }),
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var alignLeft = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M4 19.8h8.9v-1.5H4v1.5zm8.9-15.6H4v1.5h8.9V4.2zm-8.9 7v1.5h16v-1.5H4z"
}));
/* harmony default export */ __webpack_exports__["a"] = (alignLeft);


/***/ }),
/* 288 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var alignCenter = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M16.4 4.2H7.6v1.5h8.9V4.2zM4 11.2v1.5h16v-1.5H4zm3.6 8.6h8.9v-1.5H7.6v1.5z"
}));
/* harmony default export */ __webpack_exports__["a"] = (alignCenter);


/***/ }),
/* 289 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var alignRight = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M11.1 19.8H20v-1.5h-8.9v1.5zm0-15.6v1.5H20V4.2h-8.9zM4 12.8h16v-1.5H4v1.5z"
}));
/* harmony default export */ __webpack_exports__["a"] = (alignRight);


/***/ }),
/* 290 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var plus = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z"
}));
/* harmony default export */ __webpack_exports__["a"] = (plus);


/***/ }),
/* 291 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var search = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M13.5 6C10.5 6 8 8.5 8 11.5c0 1.1.3 2.1.9 3l-3.4 3 1 1.1 3.4-2.9c1 .9 2.2 1.4 3.6 1.4 3 0 5.5-2.5 5.5-5.5C19 8.5 16.5 6 13.5 6zm0 9.5c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"
}));
/* harmony default export */ __webpack_exports__["a"] = (search);


/***/ }),
/* 292 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var chevronRight = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z"
}));
/* harmony default export */ __webpack_exports__["a"] = (chevronRight);


/***/ }),
/* 293 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var chevronLeft = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M14.6 7l-1.2-1L8 12l5.4 6 1.2-1-4.6-5z"
}));
/* harmony default export */ __webpack_exports__["a"] = (chevronLeft);


/***/ }),
/* 294 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var chevronUp = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"
}));
/* harmony default export */ __webpack_exports__["a"] = (chevronUp);


/***/ }),
/* 295 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var chevronDown = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"
}));
/* harmony default export */ __webpack_exports__["a"] = (chevronDown);


/***/ }),
/* 296 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var moreVertical = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M13 19h-2v-2h2v2zm0-6h-2v-2h2v2zm0-6h-2V5h2v2z"
}));
/* harmony default export */ __webpack_exports__["a"] = (moreVertical);


/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*istanbul ignore start*/


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Diff;

/*istanbul ignore end*/
function Diff() {}

Diff.prototype = {
  /*istanbul ignore start*/

  /*istanbul ignore end*/
  diff: function diff(oldString, newString) {
    /*istanbul ignore start*/
    var
    /*istanbul ignore end*/
    options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var callback = options.callback;

    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    this.options = options;
    var self = this;

    function done(value) {
      if (callback) {
        setTimeout(function () {
          callback(undefined, value);
        }, 0);
        return true;
      } else {
        return value;
      }
    } // Allow subclasses to massage the input prior to running


    oldString = this.castInput(oldString);
    newString = this.castInput(newString);
    oldString = this.removeEmpty(this.tokenize(oldString));
    newString = this.removeEmpty(this.tokenize(newString));
    var newLen = newString.length,
        oldLen = oldString.length;
    var editLength = 1;
    var maxEditLength = newLen + oldLen;
    var bestPath = [{
      newPos: -1,
      components: []
    }]; // Seed editLength = 0, i.e. the content starts with the same values

    var oldPos = this.extractCommon(bestPath[0], newString, oldString, 0);

    if (bestPath[0].newPos + 1 >= newLen && oldPos + 1 >= oldLen) {
      // Identity per the equality and tokenizer
      return done([{
        value: this.join(newString),
        count: newString.length
      }]);
    } // Main worker method. checks all permutations of a given edit length for acceptance.


    function execEditLength() {
      for (var diagonalPath = -1 * editLength; diagonalPath <= editLength; diagonalPath += 2) {
        var basePath =
        /*istanbul ignore start*/
        void 0
        /*istanbul ignore end*/
        ;

        var addPath = bestPath[diagonalPath - 1],
            removePath = bestPath[diagonalPath + 1],
            _oldPos = (removePath ? removePath.newPos : 0) - diagonalPath;

        if (addPath) {
          // No one else is going to attempt to use this value, clear it
          bestPath[diagonalPath - 1] = undefined;
        }

        var canAdd = addPath && addPath.newPos + 1 < newLen,
            canRemove = removePath && 0 <= _oldPos && _oldPos < oldLen;

        if (!canAdd && !canRemove) {
          // If this path is a terminal then prune
          bestPath[diagonalPath] = undefined;
          continue;
        } // Select the diagonal that we want to branch from. We select the prior
        // path whose position in the new string is the farthest from the origin
        // and does not pass the bounds of the diff graph


        if (!canAdd || canRemove && addPath.newPos < removePath.newPos) {
          basePath = clonePath(removePath);
          self.pushComponent(basePath.components, undefined, true);
        } else {
          basePath = addPath; // No need to clone, we've pulled it from the list

          basePath.newPos++;
          self.pushComponent(basePath.components, true, undefined);
        }

        _oldPos = self.extractCommon(basePath, newString, oldString, diagonalPath); // If we have hit the end of both strings, then we are done

        if (basePath.newPos + 1 >= newLen && _oldPos + 1 >= oldLen) {
          return done(buildValues(self, basePath.components, newString, oldString, self.useLongestToken));
        } else {
          // Otherwise track this path as a potential candidate and continue.
          bestPath[diagonalPath] = basePath;
        }
      }

      editLength++;
    } // Performs the length of edit iteration. Is a bit fugly as this has to support the
    // sync and async mode which is never fun. Loops over execEditLength until a value
    // is produced.


    if (callback) {
      (function exec() {
        setTimeout(function () {
          // This should not happen, but we want to be safe.

          /* istanbul ignore next */
          if (editLength > maxEditLength) {
            return callback();
          }

          if (!execEditLength()) {
            exec();
          }
        }, 0);
      })();
    } else {
      while (editLength <= maxEditLength) {
        var ret = execEditLength();

        if (ret) {
          return ret;
        }
      }
    }
  },

  /*istanbul ignore start*/

  /*istanbul ignore end*/
  pushComponent: function pushComponent(components, added, removed) {
    var last = components[components.length - 1];

    if (last && last.added === added && last.removed === removed) {
      // We need to clone here as the component clone operation is just
      // as shallow array clone
      components[components.length - 1] = {
        count: last.count + 1,
        added: added,
        removed: removed
      };
    } else {
      components.push({
        count: 1,
        added: added,
        removed: removed
      });
    }
  },

  /*istanbul ignore start*/

  /*istanbul ignore end*/
  extractCommon: function extractCommon(basePath, newString, oldString, diagonalPath) {
    var newLen = newString.length,
        oldLen = oldString.length,
        newPos = basePath.newPos,
        oldPos = newPos - diagonalPath,
        commonCount = 0;

    while (newPos + 1 < newLen && oldPos + 1 < oldLen && this.equals(newString[newPos + 1], oldString[oldPos + 1])) {
      newPos++;
      oldPos++;
      commonCount++;
    }

    if (commonCount) {
      basePath.components.push({
        count: commonCount
      });
    }

    basePath.newPos = newPos;
    return oldPos;
  },

  /*istanbul ignore start*/

  /*istanbul ignore end*/
  equals: function equals(left, right) {
    if (this.options.comparator) {
      return this.options.comparator(left, right);
    } else {
      return left === right || this.options.ignoreCase && left.toLowerCase() === right.toLowerCase();
    }
  },

  /*istanbul ignore start*/

  /*istanbul ignore end*/
  removeEmpty: function removeEmpty(array) {
    var ret = [];

    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
        ret.push(array[i]);
      }
    }

    return ret;
  },

  /*istanbul ignore start*/

  /*istanbul ignore end*/
  castInput: function castInput(value) {
    return value;
  },

  /*istanbul ignore start*/

  /*istanbul ignore end*/
  tokenize: function tokenize(value) {
    return value.split('');
  },

  /*istanbul ignore start*/

  /*istanbul ignore end*/
  join: function join(chars) {
    return chars.join('');
  }
};

function buildValues(diff, components, newString, oldString, useLongestToken) {
  var componentPos = 0,
      componentLen = components.length,
      newPos = 0,
      oldPos = 0;

  for (; componentPos < componentLen; componentPos++) {
    var component = components[componentPos];

    if (!component.removed) {
      if (!component.added && useLongestToken) {
        var value = newString.slice(newPos, newPos + component.count);
        value = value.map(function (value, i) {
          var oldValue = oldString[oldPos + i];
          return oldValue.length > value.length ? oldValue : value;
        });
        component.value = diff.join(value);
      } else {
        component.value = diff.join(newString.slice(newPos, newPos + component.count));
      }

      newPos += component.count; // Common case

      if (!component.added) {
        oldPos += component.count;
      }
    } else {
      component.value = diff.join(oldString.slice(oldPos, oldPos + component.count));
      oldPos += component.count; // Reverse add and remove so removes are output first to match common convention
      // The diffing algorithm is tied to add then remove output and this is the simplest
      // route to get the desired output with minimal overhead.

      if (componentPos && components[componentPos - 1].added) {
        var tmp = components[componentPos - 1];
        components[componentPos - 1] = components[componentPos];
        components[componentPos] = tmp;
      }
    }
  } // Special case handle for when one terminal is ignored (i.e. whitespace).
  // For this case we merge the terminal into the prior string and drop the change.
  // This is only available for string mode.


  var lastComponent = components[componentLen - 1];

  if (componentLen > 1 && typeof lastComponent.value === 'string' && (lastComponent.added || lastComponent.removed) && diff.equals('', lastComponent.value)) {
    components[componentLen - 2].value += lastComponent.value;
    components.pop();
  }

  return components;
}

function clonePath(path) {
  return {
    newPos: path.newPos,
    components: path.components.slice(0)
  };
}


/***/ }),
/* 298 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var layout = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M2 2h5v11H2V2zm6 0h5v5H8V2zm6 0h4v16h-4V2zM8 8h5v5H8V8zm-6 6h11v4H2v-4z"
}));
/* harmony default export */ __webpack_exports__["a"] = (layout);


/***/ }),
/* 299 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var pencil = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M13.89 3.39l2.71 2.72c.46.46.42 1.24.03 1.64l-8.01 8.02-5.56 1.16 1.16-5.58s7.6-7.63 7.99-8.03c.39-.39 1.22-.39 1.68.07zm-2.73 2.79l-5.59 5.61 1.11 1.11 5.54-5.65zm-2.97 8.23l5.58-5.6-1.07-1.08-5.59 5.6zM13.89 3.39l2.71 2.72c.46.46.42 1.24.03 1.64l-8.01 8.02-5.56 1.16 1.16-5.58s7.6-7.63 7.99-8.03c.39-.39 1.22-.39 1.68.07zm-2.73 2.79l-5.59 5.61 1.11 1.11 5.54-5.65zm-2.97 8.23l5.58-5.6-1.07-1.08-5.59 5.6z"
}));
/* harmony default export */ __webpack_exports__["a"] = (pencil);


/***/ }),
/* 300 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var edit = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M20.1 5.1L16.9 2 6.2 12.7l-1.3 4.4 4.5-1.3L20.1 5.1zM4 20.8h8v-1.5H4v1.5z"
}));
/* harmony default export */ __webpack_exports__["a"] = (edit);


/***/ }),
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "__experimentalAlignmentHookSettingsProvider", function() { return /* reexport */ AlignmentHookSettingsProvider; });
__webpack_require__.d(__webpack_exports__, "getColorClassName", function() { return /* reexport */ getColorClassName; });
__webpack_require__.d(__webpack_exports__, "getColorObjectByAttributeValues", function() { return /* reexport */ utils_getColorObjectByAttributeValues; });
__webpack_require__.d(__webpack_exports__, "getColorObjectByColorValue", function() { return /* reexport */ utils_getColorObjectByColorValue; });
__webpack_require__.d(__webpack_exports__, "createCustomColorsHOC", function() { return /* reexport */ createCustomColorsHOC; });
__webpack_require__.d(__webpack_exports__, "withColors", function() { return /* reexport */ withColors; });
__webpack_require__.d(__webpack_exports__, "__experimentalUseColors", function() { return /* reexport */ __experimentalUseColors; });
__webpack_require__.d(__webpack_exports__, "__experimentalGetGradientClass", function() { return /* reexport */ __experimentalGetGradientClass; });
__webpack_require__.d(__webpack_exports__, "getGradientValueBySlug", function() { return /* reexport */ getGradientValueBySlug; });
__webpack_require__.d(__webpack_exports__, "__experimentalGetGradientObjectByGradientValue", function() { return /* reexport */ __experimentalGetGradientObjectByGradientValue; });
__webpack_require__.d(__webpack_exports__, "getGradientSlugByValue", function() { return /* reexport */ getGradientSlugByValue; });
__webpack_require__.d(__webpack_exports__, "__experimentalUseGradient", function() { return /* reexport */ __experimentalUseGradient; });
__webpack_require__.d(__webpack_exports__, "getFontSize", function() { return /* reexport */ utils_getFontSize; });
__webpack_require__.d(__webpack_exports__, "getFontSizeClass", function() { return /* reexport */ getFontSizeClass; });
__webpack_require__.d(__webpack_exports__, "getFontSizeObjectByValue", function() { return /* reexport */ getFontSizeObjectByValue; });
__webpack_require__.d(__webpack_exports__, "FontSizePicker", function() { return /* reexport */ font_size_picker; });
__webpack_require__.d(__webpack_exports__, "withFontSizes", function() { return /* reexport */ with_font_sizes; });
__webpack_require__.d(__webpack_exports__, "AlignmentToolbar", function() { return /* reexport */ alignment_toolbar; });
__webpack_require__.d(__webpack_exports__, "Autocomplete", function() { return /* reexport */ autocomplete; });
__webpack_require__.d(__webpack_exports__, "BlockAlignmentToolbar", function() { return /* reexport */ block_alignment_toolbar; });
__webpack_require__.d(__webpack_exports__, "__experimentalBlockAlignmentMatrixToolbar", function() { return /* reexport */ block_alignment_matrix_toolbar; });
__webpack_require__.d(__webpack_exports__, "BlockBreadcrumb", function() { return /* reexport */ block_breadcrumb; });
__webpack_require__.d(__webpack_exports__, "BlockContextProvider", function() { return /* reexport */ BlockContextProvider; });
__webpack_require__.d(__webpack_exports__, "BlockControls", function() { return /* reexport */ block_controls; });
__webpack_require__.d(__webpack_exports__, "BlockColorsStyleSelector", function() { return /* reexport */ color_style_selector; });
__webpack_require__.d(__webpack_exports__, "BlockEdit", function() { return /* reexport */ block_edit_BlockEdit; });
__webpack_require__.d(__webpack_exports__, "useBlockEditContext", function() { return /* reexport */ useBlockEditContext; });
__webpack_require__.d(__webpack_exports__, "BlockFormatControls", function() { return /* reexport */ block_format_controls; });
__webpack_require__.d(__webpack_exports__, "BlockIcon", function() { return /* reexport */ BlockIcon; });
__webpack_require__.d(__webpack_exports__, "BlockNavigationDropdown", function() { return /* reexport */ dropdown; });
__webpack_require__.d(__webpack_exports__, "__experimentalBlockNavigationBlockFill", function() { return /* reexport */ block_slot_BlockNavigationBlockFill; });
__webpack_require__.d(__webpack_exports__, "__experimentalBlockNavigationEditor", function() { return /* reexport */ BlockNavigationEditor; });
__webpack_require__.d(__webpack_exports__, "__experimentalBlockNavigationTree", function() { return /* reexport */ BlockNavigationTree; });
__webpack_require__.d(__webpack_exports__, "__experimentalBlockVariationPicker", function() { return /* reexport */ block_variation_picker; });
__webpack_require__.d(__webpack_exports__, "BlockVerticalAlignmentToolbar", function() { return /* reexport */ block_vertical_alignment_toolbar; });
__webpack_require__.d(__webpack_exports__, "ButtonBlockerAppender", function() { return /* reexport */ button_block_appender; });
__webpack_require__.d(__webpack_exports__, "ColorPalette", function() { return /* reexport */ color_palette; });
__webpack_require__.d(__webpack_exports__, "ColorPaletteControl", function() { return /* reexport */ ColorPaletteControl; });
__webpack_require__.d(__webpack_exports__, "ContrastChecker", function() { return /* reexport */ contrast_checker; });
__webpack_require__.d(__webpack_exports__, "__experimentalGradientPicker", function() { return /* reexport */ gradient_picker; });
__webpack_require__.d(__webpack_exports__, "__experimentalGradientPickerControl", function() { return /* reexport */ GradientPickerControl; });
__webpack_require__.d(__webpack_exports__, "__experimentalGradientPickerPanel", function() { return /* reexport */ GradientPanel; });
__webpack_require__.d(__webpack_exports__, "__experimentalColorGradientControl", function() { return /* reexport */ control; });
__webpack_require__.d(__webpack_exports__, "__experimentalPanelColorGradientSettings", function() { return /* reexport */ panel_color_gradient_settings; });
__webpack_require__.d(__webpack_exports__, "__experimentalImageSizeControl", function() { return /* reexport */ ImageSizeControl; });
__webpack_require__.d(__webpack_exports__, "InnerBlocks", function() { return /* reexport */ inner_blocks; });
__webpack_require__.d(__webpack_exports__, "InspectorAdvancedControls", function() { return /* reexport */ inspector_advanced_controls; });
__webpack_require__.d(__webpack_exports__, "InspectorControls", function() { return /* reexport */ inspector_controls; });
__webpack_require__.d(__webpack_exports__, "__experimentalLinkControl", function() { return /* reexport */ link_control; });
__webpack_require__.d(__webpack_exports__, "__experimentalLineHeightControl", function() { return /* reexport */ LineHeightControl; });
__webpack_require__.d(__webpack_exports__, "MediaReplaceFlow", function() { return /* reexport */ media_replace_flow; });
__webpack_require__.d(__webpack_exports__, "MediaPlaceholder", function() { return /* reexport */ media_placeholder; });
__webpack_require__.d(__webpack_exports__, "MediaUpload", function() { return /* reexport */ media_upload; });
__webpack_require__.d(__webpack_exports__, "MediaUploadCheck", function() { return /* reexport */ check; });
__webpack_require__.d(__webpack_exports__, "PanelColorSettings", function() { return /* reexport */ panel_color_settings; });
__webpack_require__.d(__webpack_exports__, "PlainText", function() { return /* reexport */ plain_text; });
__webpack_require__.d(__webpack_exports__, "__experimentalResponsiveBlockControl", function() { return /* reexport */ responsive_block_control; });
__webpack_require__.d(__webpack_exports__, "RichText", function() { return /* reexport */ rich_text; });
__webpack_require__.d(__webpack_exports__, "RichTextShortcut", function() { return /* reexport */ RichTextShortcut; });
__webpack_require__.d(__webpack_exports__, "RichTextToolbarButton", function() { return /* reexport */ RichTextToolbarButton; });
__webpack_require__.d(__webpack_exports__, "__unstableRichTextInputEvent", function() { return /* reexport */ input_event_unstableRichTextInputEvent; });
__webpack_require__.d(__webpack_exports__, "ToolSelector", function() { return /* reexport */ tool_selector; });
__webpack_require__.d(__webpack_exports__, "__experimentalUnitControl", function() { return /* reexport */ UnitControl; });
__webpack_require__.d(__webpack_exports__, "URLInput", function() { return /* reexport */ url_input; });
__webpack_require__.d(__webpack_exports__, "URLInputButton", function() { return /* reexport */ url_input_button; });
__webpack_require__.d(__webpack_exports__, "URLPopover", function() { return /* reexport */ url_popover; });
__webpack_require__.d(__webpack_exports__, "__experimentalImageURLInputUI", function() { return /* reexport */ image_url_input_ui_ImageURLInputUI; });
__webpack_require__.d(__webpack_exports__, "withColorContext", function() { return /* reexport */ with_color_context; });
__webpack_require__.d(__webpack_exports__, "__experimentalBlockSettingsMenuFirstItem", function() { return /* reexport */ block_settings_menu_first_item; });
__webpack_require__.d(__webpack_exports__, "__experimentalInserterMenuExtension", function() { return /* reexport */ inserter_menu_extension; });
__webpack_require__.d(__webpack_exports__, "__experimentalPreviewOptions", function() { return /* reexport */ PreviewOptions; });
__webpack_require__.d(__webpack_exports__, "__experimentalUseResizeCanvas", function() { return /* reexport */ useResizeCanvas; });
__webpack_require__.d(__webpack_exports__, "BlockInspector", function() { return /* reexport */ block_inspector; });
__webpack_require__.d(__webpack_exports__, "BlockList", function() { return /* reexport */ block_list; });
__webpack_require__.d(__webpack_exports__, "__experimentalBlock", function() { return /* reexport */ Block; });
__webpack_require__.d(__webpack_exports__, "BlockMover", function() { return /* reexport */ block_mover; });
__webpack_require__.d(__webpack_exports__, "BlockPreview", function() { return /* reexport */ block_preview; });
__webpack_require__.d(__webpack_exports__, "BlockSelectionClearer", function() { return /* reexport */ block_selection_clearer; });
__webpack_require__.d(__webpack_exports__, "BlockSettingsMenu", function() { return /* reexport */ block_settings_menu; });
__webpack_require__.d(__webpack_exports__, "BlockSettingsMenuControls", function() { return /* reexport */ block_settings_menu_controls; });
__webpack_require__.d(__webpack_exports__, "BlockTitle", function() { return /* reexport */ BlockTitle; });
__webpack_require__.d(__webpack_exports__, "BlockToolbar", function() { return /* reexport */ BlockToolbar; });
__webpack_require__.d(__webpack_exports__, "CopyHandler", function() { return /* reexport */ copy_handler; });
__webpack_require__.d(__webpack_exports__, "DefaultBlockAppender", function() { return /* reexport */ default_block_appender; });
__webpack_require__.d(__webpack_exports__, "__unstableEditorStyles", function() { return /* reexport */ editor_styles; });
__webpack_require__.d(__webpack_exports__, "Inserter", function() { return /* reexport */ inserter; });
__webpack_require__.d(__webpack_exports__, "__experimentalLibrary", function() { return /* reexport */ library; });
__webpack_require__.d(__webpack_exports__, "__experimentalSearchForm", function() { return /* reexport */ search_form; });
__webpack_require__.d(__webpack_exports__, "BlockEditorKeyboardShortcuts", function() { return /* reexport */ keyboard_shortcuts; });
__webpack_require__.d(__webpack_exports__, "MultiSelectScrollIntoView", function() { return /* reexport */ MultiSelectScrollIntoView; });
__webpack_require__.d(__webpack_exports__, "NavigableToolbar", function() { return /* reexport */ navigable_toolbar; });
__webpack_require__.d(__webpack_exports__, "ObserveTyping", function() { return /* reexport */ observe_typing; });
__webpack_require__.d(__webpack_exports__, "PreserveScrollInReorder", function() { return /* reexport */ PreserveScrollInReorder; });
__webpack_require__.d(__webpack_exports__, "SkipToSelectedBlock", function() { return /* reexport */ skip_to_selected_block; });
__webpack_require__.d(__webpack_exports__, "Typewriter", function() { return /* reexport */ typewriter; });
__webpack_require__.d(__webpack_exports__, "Warning", function() { return /* reexport */ warning; });
__webpack_require__.d(__webpack_exports__, "WritingFlow", function() { return /* reexport */ WritingFlow; });
__webpack_require__.d(__webpack_exports__, "BlockEditorProvider", function() { return /* reexport */ provider; });
__webpack_require__.d(__webpack_exports__, "__experimentalUseSimulatedMediaQuery", function() { return /* reexport */ useSimulatedMediaQuery; });
__webpack_require__.d(__webpack_exports__, "__experimentalUseEditorFeature", function() { return /* reexport */ useEditorFeature; });
__webpack_require__.d(__webpack_exports__, "transformStyles", function() { return /* reexport */ transform_styles; });
__webpack_require__.d(__webpack_exports__, "storeConfig", function() { return /* reexport */ storeConfig; });
__webpack_require__.d(__webpack_exports__, "SETTINGS_DEFAULTS", function() { return /* reexport */ SETTINGS_DEFAULTS; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-editor/build-module/store/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "resetBlocks", function() { return actions_resetBlocks; });
__webpack_require__.d(actions_namespaceObject, "resetSelection", function() { return actions_resetSelection; });
__webpack_require__.d(actions_namespaceObject, "receiveBlocks", function() { return receiveBlocks; });
__webpack_require__.d(actions_namespaceObject, "updateBlockAttributes", function() { return actions_updateBlockAttributes; });
__webpack_require__.d(actions_namespaceObject, "updateBlock", function() { return actions_updateBlock; });
__webpack_require__.d(actions_namespaceObject, "selectBlock", function() { return actions_selectBlock; });
__webpack_require__.d(actions_namespaceObject, "selectPreviousBlock", function() { return selectPreviousBlock; });
__webpack_require__.d(actions_namespaceObject, "selectNextBlock", function() { return selectNextBlock; });
__webpack_require__.d(actions_namespaceObject, "startMultiSelect", function() { return actions_startMultiSelect; });
__webpack_require__.d(actions_namespaceObject, "stopMultiSelect", function() { return actions_stopMultiSelect; });
__webpack_require__.d(actions_namespaceObject, "multiSelect", function() { return actions_multiSelect; });
__webpack_require__.d(actions_namespaceObject, "clearSelectedBlock", function() { return actions_clearSelectedBlock; });
__webpack_require__.d(actions_namespaceObject, "toggleSelection", function() { return actions_toggleSelection; });
__webpack_require__.d(actions_namespaceObject, "replaceBlocks", function() { return actions_replaceBlocks; });
__webpack_require__.d(actions_namespaceObject, "replaceBlock", function() { return replaceBlock; });
__webpack_require__.d(actions_namespaceObject, "moveBlocksDown", function() { return actions_moveBlocksDown; });
__webpack_require__.d(actions_namespaceObject, "moveBlocksUp", function() { return actions_moveBlocksUp; });
__webpack_require__.d(actions_namespaceObject, "moveBlocksToPosition", function() { return actions_moveBlocksToPosition; });
__webpack_require__.d(actions_namespaceObject, "moveBlockToPosition", function() { return actions_moveBlockToPosition; });
__webpack_require__.d(actions_namespaceObject, "insertBlock", function() { return actions_insertBlock; });
__webpack_require__.d(actions_namespaceObject, "insertBlocks", function() { return actions_insertBlocks; });
__webpack_require__.d(actions_namespaceObject, "showInsertionPoint", function() { return actions_showInsertionPoint; });
__webpack_require__.d(actions_namespaceObject, "hideInsertionPoint", function() { return actions_hideInsertionPoint; });
__webpack_require__.d(actions_namespaceObject, "setTemplateValidity", function() { return setTemplateValidity; });
__webpack_require__.d(actions_namespaceObject, "synchronizeTemplate", function() { return synchronizeTemplate; });
__webpack_require__.d(actions_namespaceObject, "mergeBlocks", function() { return actions_mergeBlocks; });
__webpack_require__.d(actions_namespaceObject, "removeBlocks", function() { return actions_removeBlocks; });
__webpack_require__.d(actions_namespaceObject, "removeBlock", function() { return actions_removeBlock; });
__webpack_require__.d(actions_namespaceObject, "replaceInnerBlocks", function() { return actions_replaceInnerBlocks; });
__webpack_require__.d(actions_namespaceObject, "toggleBlockMode", function() { return toggleBlockMode; });
__webpack_require__.d(actions_namespaceObject, "startTyping", function() { return actions_startTyping; });
__webpack_require__.d(actions_namespaceObject, "stopTyping", function() { return actions_stopTyping; });
__webpack_require__.d(actions_namespaceObject, "startDraggingBlocks", function() { return actions_startDraggingBlocks; });
__webpack_require__.d(actions_namespaceObject, "stopDraggingBlocks", function() { return actions_stopDraggingBlocks; });
__webpack_require__.d(actions_namespaceObject, "enterFormattedText", function() { return actions_enterFormattedText; });
__webpack_require__.d(actions_namespaceObject, "exitFormattedText", function() { return actions_exitFormattedText; });
__webpack_require__.d(actions_namespaceObject, "selectionChange", function() { return actions_selectionChange; });
__webpack_require__.d(actions_namespaceObject, "insertDefaultBlock", function() { return actions_insertDefaultBlock; });
__webpack_require__.d(actions_namespaceObject, "updateBlockListSettings", function() { return actions_updateBlockListSettings; });
__webpack_require__.d(actions_namespaceObject, "updateSettings", function() { return actions_updateSettings; });
__webpack_require__.d(actions_namespaceObject, "__unstableSaveReusableBlock", function() { return __unstableSaveReusableBlock; });
__webpack_require__.d(actions_namespaceObject, "__unstableMarkLastChangeAsPersistent", function() { return actions_unstableMarkLastChangeAsPersistent; });
__webpack_require__.d(actions_namespaceObject, "__unstableMarkNextChangeAsNotPersistent", function() { return actions_unstableMarkNextChangeAsNotPersistent; });
__webpack_require__.d(actions_namespaceObject, "__unstableMarkAutomaticChange", function() { return actions_unstableMarkAutomaticChange; });
__webpack_require__.d(actions_namespaceObject, "setNavigationMode", function() { return actions_setNavigationMode; });
__webpack_require__.d(actions_namespaceObject, "setBlockMovingClientId", function() { return actions_setBlockMovingClientId; });
__webpack_require__.d(actions_namespaceObject, "duplicateBlocks", function() { return actions_duplicateBlocks; });
__webpack_require__.d(actions_namespaceObject, "insertBeforeBlock", function() { return actions_insertBeforeBlock; });
__webpack_require__.d(actions_namespaceObject, "insertAfterBlock", function() { return actions_insertAfterBlock; });
__webpack_require__.d(actions_namespaceObject, "toggleBlockHighlight", function() { return actions_toggleBlockHighlight; });
__webpack_require__.d(actions_namespaceObject, "flashBlock", function() { return actions_flashBlock; });
__webpack_require__.d(actions_namespaceObject, "setHasControlledInnerBlocks", function() { return actions_setHasControlledInnerBlocks; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-editor/build-module/store/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "getBlockName", function() { return selectors_getBlockName; });
__webpack_require__.d(selectors_namespaceObject, "isBlockValid", function() { return selectors_isBlockValid; });
__webpack_require__.d(selectors_namespaceObject, "getBlockAttributes", function() { return getBlockAttributes; });
__webpack_require__.d(selectors_namespaceObject, "getBlock", function() { return selectors_getBlock; });
__webpack_require__.d(selectors_namespaceObject, "__unstableGetBlockWithoutInnerBlocks", function() { return selectors_unstableGetBlockWithoutInnerBlocks; });
__webpack_require__.d(selectors_namespaceObject, "getBlocks", function() { return selectors_getBlocks; });
__webpack_require__.d(selectors_namespaceObject, "getClientIdsOfDescendants", function() { return selectors_getClientIdsOfDescendants; });
__webpack_require__.d(selectors_namespaceObject, "getClientIdsWithDescendants", function() { return getClientIdsWithDescendants; });
__webpack_require__.d(selectors_namespaceObject, "getGlobalBlockCount", function() { return getGlobalBlockCount; });
__webpack_require__.d(selectors_namespaceObject, "getBlocksByClientId", function() { return selectors_getBlocksByClientId; });
__webpack_require__.d(selectors_namespaceObject, "getBlockCount", function() { return selectors_getBlockCount; });
__webpack_require__.d(selectors_namespaceObject, "getSelectionStart", function() { return selectors_getSelectionStart; });
__webpack_require__.d(selectors_namespaceObject, "getSelectionEnd", function() { return selectors_getSelectionEnd; });
__webpack_require__.d(selectors_namespaceObject, "getBlockSelectionStart", function() { return getBlockSelectionStart; });
__webpack_require__.d(selectors_namespaceObject, "getBlockSelectionEnd", function() { return selectors_getBlockSelectionEnd; });
__webpack_require__.d(selectors_namespaceObject, "getSelectedBlockCount", function() { return selectors_getSelectedBlockCount; });
__webpack_require__.d(selectors_namespaceObject, "hasSelectedBlock", function() { return hasSelectedBlock; });
__webpack_require__.d(selectors_namespaceObject, "getSelectedBlockClientId", function() { return selectors_getSelectedBlockClientId; });
__webpack_require__.d(selectors_namespaceObject, "getSelectedBlock", function() { return selectors_getSelectedBlock; });
__webpack_require__.d(selectors_namespaceObject, "getBlockRootClientId", function() { return selectors_getBlockRootClientId; });
__webpack_require__.d(selectors_namespaceObject, "getBlockParents", function() { return selectors_getBlockParents; });
__webpack_require__.d(selectors_namespaceObject, "getBlockParentsByBlockName", function() { return getBlockParentsByBlockName; });
__webpack_require__.d(selectors_namespaceObject, "getBlockHierarchyRootClientId", function() { return getBlockHierarchyRootClientId; });
__webpack_require__.d(selectors_namespaceObject, "getLowestCommonAncestorWithSelectedBlock", function() { return getLowestCommonAncestorWithSelectedBlock; });
__webpack_require__.d(selectors_namespaceObject, "getAdjacentBlockClientId", function() { return getAdjacentBlockClientId; });
__webpack_require__.d(selectors_namespaceObject, "getPreviousBlockClientId", function() { return getPreviousBlockClientId; });
__webpack_require__.d(selectors_namespaceObject, "getNextBlockClientId", function() { return getNextBlockClientId; });
__webpack_require__.d(selectors_namespaceObject, "getSelectedBlocksInitialCaretPosition", function() { return getSelectedBlocksInitialCaretPosition; });
__webpack_require__.d(selectors_namespaceObject, "getSelectedBlockClientIds", function() { return selectors_getSelectedBlockClientIds; });
__webpack_require__.d(selectors_namespaceObject, "getMultiSelectedBlockClientIds", function() { return getMultiSelectedBlockClientIds; });
__webpack_require__.d(selectors_namespaceObject, "getMultiSelectedBlocks", function() { return getMultiSelectedBlocks; });
__webpack_require__.d(selectors_namespaceObject, "getFirstMultiSelectedBlockClientId", function() { return selectors_getFirstMultiSelectedBlockClientId; });
__webpack_require__.d(selectors_namespaceObject, "getLastMultiSelectedBlockClientId", function() { return getLastMultiSelectedBlockClientId; });
__webpack_require__.d(selectors_namespaceObject, "isFirstMultiSelectedBlock", function() { return isFirstMultiSelectedBlock; });
__webpack_require__.d(selectors_namespaceObject, "isBlockMultiSelected", function() { return isBlockMultiSelected; });
__webpack_require__.d(selectors_namespaceObject, "isAncestorMultiSelected", function() { return isAncestorMultiSelected; });
__webpack_require__.d(selectors_namespaceObject, "getMultiSelectedBlocksStartClientId", function() { return getMultiSelectedBlocksStartClientId; });
__webpack_require__.d(selectors_namespaceObject, "getMultiSelectedBlocksEndClientId", function() { return getMultiSelectedBlocksEndClientId; });
__webpack_require__.d(selectors_namespaceObject, "getBlockOrder", function() { return selectors_getBlockOrder; });
__webpack_require__.d(selectors_namespaceObject, "getBlockIndex", function() { return selectors_getBlockIndex; });
__webpack_require__.d(selectors_namespaceObject, "isBlockSelected", function() { return isBlockSelected; });
__webpack_require__.d(selectors_namespaceObject, "hasSelectedInnerBlock", function() { return hasSelectedInnerBlock; });
__webpack_require__.d(selectors_namespaceObject, "isBlockWithinSelection", function() { return isBlockWithinSelection; });
__webpack_require__.d(selectors_namespaceObject, "hasMultiSelection", function() { return selectors_hasMultiSelection; });
__webpack_require__.d(selectors_namespaceObject, "isMultiSelecting", function() { return selectors_isMultiSelecting; });
__webpack_require__.d(selectors_namespaceObject, "isSelectionEnabled", function() { return selectors_isSelectionEnabled; });
__webpack_require__.d(selectors_namespaceObject, "getBlockMode", function() { return selectors_getBlockMode; });
__webpack_require__.d(selectors_namespaceObject, "isTyping", function() { return selectors_isTyping; });
__webpack_require__.d(selectors_namespaceObject, "isDraggingBlocks", function() { return selectors_isDraggingBlocks; });
__webpack_require__.d(selectors_namespaceObject, "isCaretWithinFormattedText", function() { return selectors_isCaretWithinFormattedText; });
__webpack_require__.d(selectors_namespaceObject, "getBlockInsertionPoint", function() { return getBlockInsertionPoint; });
__webpack_require__.d(selectors_namespaceObject, "isBlockInsertionPointVisible", function() { return isBlockInsertionPointVisible; });
__webpack_require__.d(selectors_namespaceObject, "isValidTemplate", function() { return isValidTemplate; });
__webpack_require__.d(selectors_namespaceObject, "getTemplate", function() { return getTemplate; });
__webpack_require__.d(selectors_namespaceObject, "getTemplateLock", function() { return selectors_getTemplateLock; });
__webpack_require__.d(selectors_namespaceObject, "canInsertBlockType", function() { return selectors_canInsertBlockType; });
__webpack_require__.d(selectors_namespaceObject, "canInsertBlocks", function() { return selectors_canInsertBlocks; });
__webpack_require__.d(selectors_namespaceObject, "getInserterItems", function() { return selectors_getInserterItems; });
__webpack_require__.d(selectors_namespaceObject, "hasInserterItems", function() { return selectors_hasInserterItems; });
__webpack_require__.d(selectors_namespaceObject, "__experimentalGetAllowedBlocks", function() { return selectors_experimentalGetAllowedBlocks; });
__webpack_require__.d(selectors_namespaceObject, "getBlockListSettings", function() { return selectors_getBlockListSettings; });
__webpack_require__.d(selectors_namespaceObject, "getSettings", function() { return selectors_getSettings; });
__webpack_require__.d(selectors_namespaceObject, "isLastBlockChangePersistent", function() { return isLastBlockChangePersistent; });
__webpack_require__.d(selectors_namespaceObject, "__experimentalGetBlockListSettingsForBlocks", function() { return selectors_experimentalGetBlockListSettingsForBlocks; });
__webpack_require__.d(selectors_namespaceObject, "__experimentalGetParsedReusableBlock", function() { return __experimentalGetParsedReusableBlock; });
__webpack_require__.d(selectors_namespaceObject, "__unstableIsLastBlockChangeIgnored", function() { return __unstableIsLastBlockChangeIgnored; });
__webpack_require__.d(selectors_namespaceObject, "__experimentalGetLastBlockAttributeChanges", function() { return __experimentalGetLastBlockAttributeChanges; });
__webpack_require__.d(selectors_namespaceObject, "isNavigationMode", function() { return selectors_isNavigationMode; });
__webpack_require__.d(selectors_namespaceObject, "hasBlockMovingClientId", function() { return selectors_hasBlockMovingClientId; });
__webpack_require__.d(selectors_namespaceObject, "didAutomaticChange", function() { return selectors_didAutomaticChange; });
__webpack_require__.d(selectors_namespaceObject, "isBlockHighlighted", function() { return isBlockHighlighted; });
__webpack_require__.d(selectors_namespaceObject, "areInnerBlocksControlled", function() { return areInnerBlocksControlled; });

// EXTERNAL MODULE: external {"this":["wp","blocks"]}
var external_this_wp_blocks_ = __webpack_require__(10);

// EXTERNAL MODULE: external {"this":["wp","richText"]}
var external_this_wp_richText_ = __webpack_require__(25);

// EXTERNAL MODULE: external {"this":["wp","viewport"]}
var external_this_wp_viewport_ = __webpack_require__(81);

// EXTERNAL MODULE: external {"this":["wp","keyboardShortcuts"]}
var external_this_wp_keyboardShortcuts_ = __webpack_require__(52);

// EXTERNAL MODULE: external {"this":["wp","notices"]}
var external_this_wp_notices_ = __webpack_require__(100);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(5);

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(11);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: external {"this":"lodash"}
var external_this_lodash_ = __webpack_require__(2);

// EXTERNAL MODULE: external {"this":["wp","compose"]}
var external_this_wp_compose_ = __webpack_require__(9);

// EXTERNAL MODULE: external {"this":["wp","hooks"]}
var external_this_wp_hooks_ = __webpack_require__(32);

// EXTERNAL MODULE: external {"this":["wp","data"]}
var external_this_wp_data_ = __webpack_require__(4);

// EXTERNAL MODULE: external {"this":["wp","components"]}
var external_this_wp_components_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-edit/context.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


var Context = Object(external_this_wp_element_["createContext"])({
  name: '',
  isSelected: false,
  focusedElement: null,
  setFocusedElement: external_this_lodash_["noop"],
  clientId: null
});
var Provider = Context.Provider;

/**
 * A hook that returns the block edit context.
 *
 * @return {Object} Block edit context
 */

function useBlockEditContext() {
  return Object(external_this_wp_element_["useContext"])(Context);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/use-display-block-controls/index.js
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


function useDisplayBlockControls() {
  var _useBlockEditContext = useBlockEditContext(),
      isSelected = _useBlockEditContext.isSelected,
      clientId = _useBlockEditContext.clientId,
      name = _useBlockEditContext.name;

  var isFirstAndSameTypeMultiSelected = Object(external_this_wp_data_["useSelect"])(function (select) {
    // Don't bother checking, see OR statement below.
    if (isSelected) {
      return;
    }

    var _select = select('core/block-editor'),
        getBlockName = _select.getBlockName,
        isFirstMultiSelectedBlock = _select.isFirstMultiSelectedBlock,
        getMultiSelectedBlockClientIds = _select.getMultiSelectedBlockClientIds;

    if (!isFirstMultiSelectedBlock(clientId)) {
      return false;
    }

    return getMultiSelectedBlockClientIds().every(function (id) {
      return getBlockName(id) === name;
    });
  }, [clientId, isSelected, name]);
  return isSelected || isFirstAndSameTypeMultiSelected;
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-editor/build-module/components/block-controls/index.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



var _createSlotFill = Object(external_this_wp_components_["createSlotFill"])('BlockControls'),
    Fill = _createSlotFill.Fill,
    Slot = _createSlotFill.Slot;

function BlockControlsSlot(props) {
  var accessibleToolbarState = Object(external_this_wp_element_["useContext"])(external_this_wp_components_["__experimentalToolbarContext"]);
  return Object(external_this_wp_element_["createElement"])(Slot, Object(esm_extends["a" /* default */])({}, props, {
    fillProps: accessibleToolbarState
  }));
}

function BlockControlsFill(_ref) {
  var controls = _ref.controls,
      children = _ref.children;

  if (!useDisplayBlockControls()) {
    return null;
  }

  return Object(external_this_wp_element_["createElement"])(Fill, null, function (fillProps) {
    // Children passed to BlockControlsFill will not have access to any
    // React Context whose Provider is part of the BlockControlsSlot tree.
    // So we re-create the Provider in this subtree.
    var value = !Object(external_this_lodash_["isEmpty"])(fillProps) ? fillProps : null;
    return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["__experimentalToolbarContext"].Provider, {
      value: value
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["ToolbarGroup"], {
      controls: controls
    }), children);
  });
}

var BlockControls = BlockControlsFill;
BlockControls.Slot = BlockControlsSlot;
/* harmony default export */ var block_controls = (BlockControls);

// EXTERNAL MODULE: external {"this":["wp","i18n"]}
var external_this_wp_i18n_ = __webpack_require__(1);

// EXTERNAL MODULE: external {"this":["wp","primitives"]}
var external_this_wp_primitives_ = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/position-left.js


/**
 * WordPress dependencies
 */

var positionLeft = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M4 9v6h14V9H4zm8-4.8H4v1.5h8V4.2zM4 19.8h8v-1.5H4v1.5z"
}));
/* harmony default export */ var position_left = (positionLeft);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/position-center.js


/**
 * WordPress dependencies
 */

var positionCenter = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
  d: "M5 15h14V9H5v6zm0 4.8h14v-1.5H5v1.5zM5 4.2v1.5h14V4.2H5z"
}));
/* harmony default export */ var position_center = (positionCenter);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/position-right.js


/**
 * WordPress dependencies
 */

var positionRight = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "