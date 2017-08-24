import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILED,
  FETCH_DATA_START,
} from '../constant/WorkflowDefinitionDetailConstant';

import { getWorkflowDefinitionDetail } from '../loader/DataAggregateLoader';


export function fetchDataStart() {
  return {
    type: FETCH_DATA_START,
  };
}

export function fetchDataSuccess(data) {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: {
      data,
    },
  };
}

export function fetchDataFailed(error) {
  return {
    type: FETCH_DATA_FAILED,
    payload: {
      error,
    },
  };
}

export function getDetailData(fileData, id) {
  return dispatch => {
    dispatch(fetchDataStart());
    getWorkflowDefinitionDetail(fileData, id)
      .then(data => {
        dispatch(fetchDataSuccess(data));
      })
      .catch(err => {
        console.log(err);
      });
  };
}
