import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILED,
  FETCH_DATA_START,
} from '../constant/WorkflowInstanceListConstant';

import { fetchList } from '../services/WorkflowInstanceService';

export function fetchDataStart() {
  return {
    type: FETCH_DATA_START,
  };
}

export function fetchDataSuccess(data) {
  console.log('success', data);
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

export function getListData(wp_key) {
  console.log(wp_key);
  return dispatch => {
    dispatch(fetchDataStart());
    fetchList(wp_key)
      .then(data => {
        dispatch(fetchDataSuccess(data));
      })
      .catch(err => {
        dispatch(fetchDataFailed(err));
        throw err;
      });
  };
}

