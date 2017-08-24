import { get } from './Loader';

export function getWorkflowDefinitionList(fileData) {
  return get(fileData)
    .then(response => {
      const workflowDefinition = [];
      for (const key in response) {
        workflowDefinition.push({ key: response[key].key, version: response[key].version, id: key });
      }
      return workflowDefinition;
    })
    .catch(error => {
      return error;
    });
}

export function getWorkflowDefinitionDetail(fileData, id) {
  return get(fileData)
    .then(response => {
      return response[id];
    })
    .catch(error => {
      return error;
    });
}

export default {
  getWorkflowDefinitionList,
  getWorkflowDefinitionDetail,
};
