'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWorkflowDefinitionList = getWorkflowDefinitionList;
exports.getWorkflowDefinitionDetail = getWorkflowDefinitionDetail;

var _Loader = require('./Loader');

function getWorkflowDefinitionList(fileData) {
  return (0, _Loader.get)(fileData).then(function (response) {
    var workflowDefinition = [];
    for (var key in response) {
      workflowDefinition.push({ key: response[key].key, version: response[key].version, id: key });
    }
    return workflowDefinition;
  }).catch(function (error) {
    return error;
  });
}

function getWorkflowDefinitionDetail(fileData, id) {
  return (0, _Loader.get)(fileData).then(function (response) {
    return response[id];
  }).catch(function (error) {
    return error;
  });
}

exports.default = {
  getWorkflowDefinitionList: getWorkflowDefinitionList,
  getWorkflowDefinitionDetail: getWorkflowDefinitionDetail
};