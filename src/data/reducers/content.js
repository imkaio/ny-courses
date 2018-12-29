import {
  LOADING_CONTENT,
  SUCCESS_CONTENT,
  ERROR_CONTENT
} from '../actions/content';

const initialState = {
  loading: false,
  loaded: false,
  payload: {}
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOADING_CONTENT:
      return {
        ...state,
        loading: true,
        loaded: false
      };
    case SUCCESS_CONTENT:
      return {
        ...state,
        loading: false,
        loaded: true,
        payload: action.payload
      };
    case ERROR_CONTENT:
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
