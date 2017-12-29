'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @method hostname
 * @param {string} uri - a url
 * @return {string} hostname
 *
 * Example:
 *   input => "https://runkit.com/vygaio/utils"
 *   output =>
 */

// TODO format, lint and write unit tests
var hostname = function hostname() {
  var uri = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  try {
    return new _url2.default.parse(uri).hostname.split(".")[0];
  } catch (e) {
    return uri;
  }
};

/**
 * @method domain
 * @param {string} uri - a url
 * @return {string} domain
 *
 * Example:
 *   input => "https://runkit.com/vygaio/utils"
 *   output => "runkit.com"
 */

var domain = function domain() {
  var uri = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  try {
    return new _url2.default.parse(uri).hostname;
  } catch (e) {
    return "";
  }
};
/**
 * @method url
  */

var url = function url() {
  var uri = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  try {
    return new _url2.default.parse(uri);
  } catch (e) {
    return "";
  }
};

/**
 * Capitalize Each Word in string
 * @method titleCase
 * @param {string}
 * @return {string}
 *
 * Example:
 *   input => "hello world"
 *   output => "Hello World"
 */
var titleCase = function titleCase() {
  var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return s.split(' ').map(function (w) {
    return w.charAt(0).toUpperCase() + w.slice(1);
  }).join(' ');
};

// titleCase(words)

/**
 * Capitalize Each Word in string
 * @method TitleCase
 * @param {string} s - input string
 * @param {string} f - search for substring
 * @param {string} r - replace substring
 * @return {string}
 *
 */

var replaceAll = function replaceAll() {
  var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var f = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  return s.replace(new RegExp(f.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), r);
};

// replaceAll(words,"o","@")//=>repaces all o's
// replaceAll(words,"o")//=>remove all o's


/**
 * This method is like _.get except you pass in a list of paths of the property to resolve and this will return the first result.
 * @method TitleCase
 * @param object (Object): The object to query.
 * @param path (Array|string): The path of the property to resolve.
 * @param [defaultValue] (*): The value returned for undefined resolved values.
 * @return (*): Returns the resolved value.
 *
 */
var getFirstOf = function getFirstOf() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var arrOfPropNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var defaultValue = arguments[2];
  return arrOfPropNames.map(function (o) {
    return _lodash2.default.get(obj, o);
  }).filter(function (x) {
    return x;
  })[0] || defaultValue;
};

//OBJECTS

var removeFalsy = function removeFalsy(o) {
  return _lodash2.default.each(o, function (v, k) {
    if (!v) delete o[k];
  });
};

//ARRAYS

var toObject = function toObject(input) {
  var obj = {};
  Object.keys(input).map(function (o) {
    return obj[o] = input[o];
  });
  return obj;
};

var make = function make() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var val = args.shift();
  args.map(function (arg) {
    return val = arg(val);
  });
  return val;
};

// export {
_lodash2.default.mixin({
  //STR
  hostname: hostname,
  domain: domain,
  titleCase: titleCase,
  replaceAll: replaceAll,
  //OBJ
  removeFalsy: removeFalsy,
  getFirstOf: getFirstOf,
  //ARRAY
  toObject: toObject,
  //UTIL
  make: make
});
// }


exports.default = _lodash2.default;