import {
  LOADING_STATIC,
  SUCCESS_STATIC,
  ERROR_STATIC
} from 'data/actions/static-page';

const initialState = {
  loading: false,
  loaded: false
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOADING_STATIC:
      return {
        ...state,
        loading: true,
        loaded: false
      };
    case SUCCESS_STATIC:
      return {
        ...state,
        loading: false,
        loaded: true,
        static: action.payload,
        error: undefined
      };
    case ERROR_STATIC:
      return {
        ...state,
        loading: false,
        loaded: true,
        error: action.error,
        static: undefined
      };
    default:
      return state;
  }
};
