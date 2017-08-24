import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILED,
  FETCH_DATA_START,
} from '../constant/DataAggregateConstant';

import { getWorkflowDefinitionList } from '../loader/DataAggregateLoader';

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

export function getListData(url) {
  return dispatch => {
    dispatch(fetchDataStart());
    getWorkflowDefinitionList(url)
      .then(data => {
        dispatch(fetchDataSuccess(data));
      })
      .catch(err => {
        dispatch(fetchDataFailed(err));
        throw err;
      });
  };
}

