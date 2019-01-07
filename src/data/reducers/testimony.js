import {
  LOADING_TESTIMONY,
  SUCCESS_TESTIMONY,
  ERROR_TESTIMONY
} from 'data/actions/testimony';

const initialState = {
  loading: false,
  loaded: false,
  testimonies: []
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOADING_TESTIMONY:
      return {
        ...state,
        loading: true,
        loaded: false
      };
    case SUCCESS_TESTIMONY:
      return {
        ...state,
        loading: false,
        loaded: true,
        testimonies: action.payload
      };
    case ERROR_TESTIMONY:
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
