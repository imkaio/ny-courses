import {
  LOADING_MODAL,
  SUCCESS_MODAL,
  ERROR_MODAL,
  TOGGLE_MODAL
} from 'data/actions/modal';

const initialState = {
  loading: false,
  loaded: false,
  isOpen: false
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOADING_MODAL:
      return {
        ...state,
        loading: true,
        loaded: false,
        id: undefined
      };
    case SUCCESS_MODAL:
      return {
        ...state,
        loading: false,
        loaded: true,
        success: true
      };
    case ERROR_MODAL:
      return {
        ...state,
        loading: false,
        loaded: true,
        error: action.error
      };
    case TOGGLE_MODAL:
      return {
        ...state,
        id: action.id,
        success: false,
        isOpen: !state.isOpen
      };
    default:
      return state;
  }
};
