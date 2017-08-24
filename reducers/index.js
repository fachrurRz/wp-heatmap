import { combineReducers } from 'redux';
import WorkflowDefinitionReducer from './WorkflowDefinitionListReducer';

const rootReducer = combineReducers({
  workflowDefinitions: WorkflowDefinitionReducer,
});

export default rootReducer;
