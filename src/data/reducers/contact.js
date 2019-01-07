import {
  LOADING_CONTACT,
  SUCCESS_CONTACT,
  ERROR_CONTACT
} from 'data/actions/contact';

const initialState = {
  loading: false,
  loaded: false
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOADING_CONTACT:
      return {
        ...state,
        loading: true,
        loaded: false
      };
    case SUCCESS_CONTACT:
      return {
        ...state,
        loading: false,
        loaded: true,
        success: true
      };
    case ERROR_CONTACT:
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
