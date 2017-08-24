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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _soyaNext = require('soya-next');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _WorkflowDashboardHeader = require('../components/WorkflowDashboardHeader/WorkflowDashboardHeader');

var _WorkflowDashboardHeader2 = _interopRequireDefault(_WorkflowDashboardHeader);

var _DetailPageSidebar = require('../components/DetailPageSideBar/DetailPageSidebar');

var _DetailPageSidebar2 = _interopRequireDefault(_DetailPageSidebar);

var _reactAutobind = require('react-autobind');

var _reactAutobind2 = _interopRequireDefault(_reactAutobind);

var _WorkflowDefinitionDetail = require('../containers/WorkflowDefinitionDetail/WorkflowDefinitionDetail');

var _WorkflowDefinitionDetail2 = _interopRequireDefault(_WorkflowDefinitionDetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/traveloka/Work/wp-heatmap/pages/details.js?entry';


var DetailsPage = function (_Component) {
  (0, _inherits3.default)(DetailsPage, _Component);

  function DetailsPage(props) {
    (0, _classCallCheck3.default)(this, DetailsPage);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DetailsPage.__proto__ || (0, _getPrototypeOf2.default)(DetailsPage)).call(this, props));

    var url = _this.props.url;
    (0, _reactAutobind2.default)(_this);
    _this.state = { workflowDefinitionId: url.query.id, dateTime: url.query.dateTime };
    return _this;
  }

  (0, _createClass3.default)(DetailsPage, [{
    key: 'render',
    value: function render() {
      if (!this.state.workflowDefinitionId) {
        return _react2.default.createElement(_DetailPageSidebar2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          }
        }, _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        }, _react2.default.createElement(_head2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        }, _react2.default.createElement('link', { rel: 'shortcut icon', href: '/static/favicon.ico', __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        }), _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        })), _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        }, _react2.default.createElement('p', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        }, 'Detail Not Found'))));
      }
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement('link', { rel: 'shortcut icon', href: '/static/favicon.ico', __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      })), _react2.default.createElement(_WorkflowDashboardHeader2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }), _react2.default.createElement(_WorkflowDefinitionDetail2.default, { workflowDefinitionId: this.state.workflowDefinitionId, dateTime: this.state.dateTime, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }));
    }
  }]);

  return DetailsPage;
}(_react.Component);

DetailsPage.propTypes = {
  url: _propTypes2.default.object
};

exports.default = (0, _soyaNext.createPage)()(DetailsPage);