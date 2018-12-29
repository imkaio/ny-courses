import ApiClient from '../services/api';

export const LOADING_DISPLAY = 'display/LOADING_DISPLAY';
export const SUCCESS_DISPLAY = 'display/SUCCESS_DISPLAY';
export const ERROR_DISPLAY = 'display/ERROR_DISPLAY';

const loadingDisplay = () => ({
  type: LOADING_DISPLAY
});

const successDisplay = (payload = {}) => ({
  type: SUCCESS_DISPLAY,
  payload
});

const errorDisplay = (error = {}) => ({
  type: ERROR_DISPLAY,
  error
});

export default () => (dispatch) => {
  dispatch(loadingDisplay());

  return ApiClient.getDisplay()
    .then(response => dispatch(successDisplay(response)))
    .catch(error => dispatch(errorDisplay(error)));
};
