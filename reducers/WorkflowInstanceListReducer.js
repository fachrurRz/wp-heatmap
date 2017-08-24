import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILED,
  STATE_NAME,
} from '../constant/WorkflowInstanceListConstant';

const initialState = {
  data: [
    {
      id: 0,
      wp_key: 11111,
      version: 0,
      start_time: '2016-04-04 08:00',
      end_time: '2016-04-05 08:00',
      status: true,
      variable: {
        input: 'aaaa',
        output: 'aaaa',
      },
    },
  ],
};

export default {
  [STATE_NAME](state = initialState, action) {
    switch (action.type) {
      case FETCH_DATA_START: {
        return {
          ...state,
          loading: true,
        };
      }
      case FETCH_DATA_SUCCESS: {
        return {
          ...state,
          loading: false,
          data: {
            ...state.data,
            workflowInstances: action.payload.data,
          },
        };
      }
      case FETCH_DATA_FAILED: {
        return {
          ...state,
          loading: false,
          data: action.payload.error,
        };
      }
      default: {
        return state;
      }
    }
  },
};
