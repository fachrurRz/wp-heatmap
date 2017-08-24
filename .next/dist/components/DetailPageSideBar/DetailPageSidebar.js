'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-modules/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _reactAutobind = require('react-autobind');

var _reactAutobind2 = _interopRequireDefault(_reactAutobind);

var _DetailPageSideBarModule = require('./DetailPageSideBar.module.css');

var _DetailPageSideBarModule2 = _interopRequireDefault(_DetailPageSideBarModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/traveloka/Work/wp-heatmap/components/DetailPageSideBar/DetailPageSidebar.js';


var DetailPageSidebar = function (_Component) {
  (0, _inherits3.default)(DetailPageSidebar, _Component);

  function DetailPageSidebar(props) {
    (0, _classCallCheck3.default)(this, DetailPageSidebar);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DetailPageSidebar.__proto__ || (0, _getPrototypeOf2.default)(DetailPageSidebar)).call(this, props));

    (0, _reactAutobind2.default)(_this);
    _this.state = { visible: false };
    return _this;
  }

  (0, _createClass3.default)(DetailPageSidebar, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_style2.default, {
        styles: [{
          __hash: _DetailPageSideBarModule2.default.__hash,
          __css: _DetailPageSideBarModule2.default.__css
        }]
      }, _react2.default.createElement(_semanticUiReact.Sidebar.Pushable, { as: _semanticUiReact.Segment, className: _DetailPageSideBarModule2.default.body, __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement(_semanticUiReact.Sidebar, { as: _semanticUiReact.Menu, animation: 'push', width: 'wide', visible: this.state.visible, icon: 'labeled', vertical: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }), _react2.default.createElement(_semanticUiReact.Sidebar.Pusher, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, { basic: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, this.props.children))));
    }
  }]);

  return DetailPageSidebar;
}(_react.Component);

exports.default = DetailPageSidebar;