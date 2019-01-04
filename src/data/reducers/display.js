import {
  LOADING_DISPLAY,
  SUCCESS_DISPLAY,
  ERROR_DISPLAY
} from 'data/actions/display';

const initialState = {
  loading: false,
  loaded: false,
  payload: []
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOADING_DISPLAY:
      return {
        ...state,
        loading: true,
        loaded: false
      };
    case SUCCESS_DISPLAY:
      return {
        ...state,
        loading: false,
        loaded: true,
        payload: action.payload
      };
    case ERROR_DISPLAY:
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
