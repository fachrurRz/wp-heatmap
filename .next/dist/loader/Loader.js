'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function get(fileData) {
  return new _promise2.default(function (resolve, reject) {
    _jquery2.default.ajax({
      url: 'static/' + fileData,
      async: true
    }).done(function (data) {
      resolve(data);
    }).fail(function (err) {
      console.log(err);
      reject(err);
    });
  });
}