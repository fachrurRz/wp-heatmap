'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchDataStart = fetchDataStart;
exports.fetchDataSuccess = fetchDataSuccess;
exports.fetchDataFailed = fetchDataFailed;
exports.getDetailData = getDetailData;

var _WorkflowDefinitionDetailConstant = require('../constant/WorkflowDefinitionDetailConstant');

var _DataAggregateLoader = require('../loader/DataAggregateLoader');

function fetchDataStart() {
  return {
    type: _WorkflowDefinitionDetailConstant.FETCH_DATA_START
  };
}

function fetchDataSuccess(data) {
  return {
    type: _WorkflowDefinitionDetailConstant.FETCH_DATA_SUCCESS,
    payload: {
      data: data
    }
  };
}

function fetchDataFailed(error) {
  return {
    type: _WorkflowDefinitionDetailConstant.FETCH_DATA_FAILED,
    payload: {
      error: error
    }
  };
}

function getDetailData(fileData, id) {
  return function (dispatch) {
    dispatch(fetchDataStart());
    (0, _DataAggregateLoader.getWorkflowDefinitionDetail)(fileData, id).then(function (data) {
      dispatch(fetchDataSuccess(data));
    }).catch(function (err) {
      console.log(err);
    });
  };
}