import ApiClient from 'data/services/api';

export const LOADING_STATIC = 'static/LOADING_STATIC';
export const SUCCESS_STATIC = 'static/SUCCESS_STATIC';
export const ERROR_STATIC = 'static/ERROR_STATIC';

const loadingStatic = () => ({
  type: LOADING_STATIC
});

const successStatic = (payload = {}) => ({
  type: SUCCESS_STATIC,
  payload
});

const errorStatic = (error = {}) => ({
  type: ERROR_STATIC,
  error
});

export default staticId => (dispatch) => {
  dispatch(loadingStatic());

  return ApiClient.getStatic(staticId)
    .then(response => dispatch(successStatic(response)))
    .catch(error => dispatch(errorStatic(error)));
};
