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

var _reactRedux = require('react-redux');

var _redux = require('soya-next/redux');

var _WorkflowDefinitionDetailReducer = require('../../reducers/WorkflowDefinitionDetailReducer');

var _WorkflowDefinitionDetailReducer2 = _interopRequireDefault(_WorkflowDefinitionDetailReducer);

var _redux2 = require('redux');

var _reactAutobind = require('react-autobind');

var _reactAutobind2 = _interopRequireDefault(_reactAutobind);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _WorkflowDefinitionDetailAction = require('../../actions/WorkflowDefinitionDetailAction');

var _semanticUiReact = require('semantic-ui-react');

var _LoadingBar = require('../../components/LoadingBar/LoadingBar');

var _LoadingBar2 = _interopRequireDefault(_LoadingBar);

var _WorkflowDiagram = require('../../components/WorkflowDiagram/WorkflowDiagram');

var _WorkflowDiagram2 = _interopRequireDefault(_WorkflowDiagram);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/traveloka/Work/wp-heatmap/containers/WorkflowDefinitionDetail/WorkflowDefinitionDetail.js';


var WorkflowDefinitionDetail = function (_React$Component) {
  (0, _inherits3.default)(WorkflowDefinitionDetail, _React$Component);

  function WorkflowDefinitionDetail(props) {
    (0, _classCallCheck3.default)(this, WorkflowDefinitionDetail);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WorkflowDefinitionDetail.__proto__ || (0, _getPrototypeOf2.default)(WorkflowDefinitionDetail)).call(this, props));

    _this.state = { workflowDefinitionId: props.workflowDefinitionId, dateTime: props.dateTime, pushDateTime: null };
    (0, _reactAutobind2.default)(_this);
    return _this;
  }

  (0, _createClass3.default)(WorkflowDefinitionDetail, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.getDetailData('AggregateData/agg.count.wdate7.json', this.state.workflowDefinitionId);
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event, data) {
      this.setState({ pushDateTime: data.value });
    }
  }, {
    key: 'handleChange1',
    value: function handleChange1(event) {
      this.setState({ text: event.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      var definition = this.props.workflowDefinition;
      if (definition.loading) {
        return _react2.default.createElement(_LoadingBar2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        });
      }
      var workflowDefinition = definition.data.workflowDefinition;
      var dateTimeList = [];
      for (var key in workflowDefinition) {
        if (key !== 'version' && key !== 'key') {
          dateTimeList.push({ key: key, value: key, text: key });
        }
      }
      var data = workflowDefinition[this.state.dateTime];
      var definitionData = { id: this.state.workflowDefinitionId, key: workflowDefinition.key, version: workflowDefinition.version };
      return _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 16, __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement(_semanticUiReact.List, { horizontal: true, divided: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement(_semanticUiReact.List.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement(_semanticUiReact.List.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement(_semanticUiReact.List.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, 'Id : ' + this.props.workflowDefinitionId))), _react2.default.createElement(_semanticUiReact.List.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement(_semanticUiReact.List.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement(_semanticUiReact.List.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, 'Key : ' + workflowDefinition.key))), _react2.default.createElement(_semanticUiReact.List.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement(_semanticUiReact.List.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement(_semanticUiReact.List.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, 'Version : ' + workflowDefinition.version)))), _react2.default.createElement(_semanticUiReact.Dropdown, { placeholder: 'State', search: true, selection: true, options: dateTimeList, onChange: this.handleChange, value: this.state.dateTime, __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      })))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 16, __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement(_WorkflowDiagram2.default, { workflowDefinition: definitionData, data: data, dateTime: this.state.dateTime, pushDateTime: this.state.pushDateTime, __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      })))));
    }
  }]);

  return WorkflowDefinitionDetail;
}(_react2.default.Component);

WorkflowDefinitionDetail.propTypes = {
  workflowDefinition: _propTypes2.default.object,
  workflowDefinitionKey: _propTypes2.default.string,
  getDetailData: _propTypes2.default.func
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    workflowDefinition: state.workflowDefinition
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getDetailData: function getDetailData(fileData, id) {
      dispatch((0, _WorkflowDefinitionDetailAction.getDetailData)(fileData, id));
    }
  };
};

exports.default = (0, _redux2.compose)((0, _redux.applyReducers)(_WorkflowDefinitionDetailReducer2.default), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps))(WorkflowDefinitionDetail);