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

var _WorkflowDashboardHeaderModule = require('./WorkflowDashboardHeader.module.css');

var _WorkflowDashboardHeaderModule2 = _interopRequireDefault(_WorkflowDashboardHeaderModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/traveloka/Work/wp-heatmap/components/WorkflowDashboardHeader/WorkflowDashboardHeader.js';


var WorkflowDashboardHeader = function (_Component) {
  (0, _inherits3.default)(WorkflowDashboardHeader, _Component);

  function WorkflowDashboardHeader(props) {
    (0, _classCallCheck3.default)(this, WorkflowDashboardHeader);

    return (0, _possibleConstructorReturn3.default)(this, (WorkflowDashboardHeader.__proto__ || (0, _getPrototypeOf2.default)(WorkflowDashboardHeader)).call(this, props));
  }

  (0, _createClass3.default)(WorkflowDashboardHeader, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_style2.default, {
        styles: [{
          __hash: _WorkflowDashboardHeaderModule2.default.__hash,
          __css: _WorkflowDashboardHeaderModule2.default.__css
        }]
      }, _react2.default.createElement(_semanticUiReact.Menu, { inverted: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement(_semanticUiReact.Menu.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement('h3', { className: _WorkflowDashboardHeaderModule2.default.title, __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, 'WP Heatmap'))));
    }
  }]);

  return WorkflowDashboardHeader;
}(_react.Component);

exports.default = WorkflowDashboardHeader;