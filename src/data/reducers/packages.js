import {
  LOADING_PACKAGES,
  SUCCESS_PACKAGES,
  ERROR_PACKAGES
} from '../actions/packages';

const initialState = {
  loading: false,
  loaded: false,
  payload: []
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOADING_PACKAGES:
      return {
        ...state,
        loading: true,
        loaded: false
      };
    case SUCCESS_PACKAGES:
      return {
        ...state,
        loading: false,
        loaded: true,
        payload: action.payload
      };
    case ERROR_PACKAGES:
      return {
        ...state,
        loading: false,
        loaded: true,
        error: action.error
      };
    default:
      return state;
  }
};
