import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILED,
  STATE_NAME,
} from '../constant/DataAggregateConstant';

const initialState = {
  loading: true,
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
            dataAggregate: action.payload.data,
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
