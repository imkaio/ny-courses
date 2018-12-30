import {
  LOADING_PACKAGES,
  SUCCESS_PACKAGES,
  ERROR_PACKAGES,
  SUCCESS_PACKAGE
} from 'data/actions/packages';

const initialState = {
  loading: false,
  loaded: false,
  payload: [],
  package: {}
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
    case SUCCESS_PACKAGE:
      return {
        ...state,
        loading: false,
        loaded: true,
        package: action.payload
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
