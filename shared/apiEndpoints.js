import apiHost from '../config/development.json';

const endPoints = {
  GET_WORKFLOW_DEFINITION_LIST: '/workflow-definition/',
};

export default Object.keys(endPoints).reduce((a, b) => {
  a[b] = `${apiHost}${endPoints[b]}`;
  return a;
}, {});
