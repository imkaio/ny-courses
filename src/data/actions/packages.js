import ApiClient from '../services/api';

export const LOADING_PACKAGES = 'packages/LOADING_PACKAGES';
export const SUCCESS_PACKAGES = 'packages/SUCCESS_PACKAGES';
export const ERROR_PACKAGES = 'packages/ERROR_PACKAGES';

const loadingPackages = () => ({
  type: LOADING_PACKAGES
});

const successPackages = (payload = {}) => ({
  type: SUCCESS_PACKAGES,
  payload
});

const errorPackages = (error = {}) => ({
  type: ERROR_PACKAGES,
  error
});

export default () => (dispatch) => {
  dispatch(loadingPackages());

  return ApiClient.getPackages()
    .then(response => dispatch(successPackages(response)))
    .catch(error => dispatch(errorPackages(error)));
};
