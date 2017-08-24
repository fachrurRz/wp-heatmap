'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _WorkflowDefinitionDetailConstant = require('../constant/WorkflowDefinitionDetailConstant');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  loading: true
};

exports.default = (0, _defineProperty3.default)({}, _WorkflowDefinitionDetailConstant.STATE_NAME, function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _WorkflowDefinitionDetailConstant.FETCH_DATA_START:
      {
        return (0, _extends3.default)({}, state, {
          loading: true
        });
      }
    case _WorkflowDefinitionDetailConstant.FETCH_DATA_SUCCESS:
      {
        return (0, _extends3.default)({}, state, {
          loading: false,
          data: (0, _extends3.default)({}, state.data, {
            workflowDefinition: action.payload.data
          })
        });
      }
    case _WorkflowDefinitionDetailConstant.FETCH_DATA_FAILED:
      {
        return (0, _extends3.default)({}, state, {
          loading: false,
          data: action.payload.error
        });
      }
    default:
      {
        return state;
      }
  }
});