import ApiClient from 'data/services/api';

export const LOADING_TESTIMONY = 'testimony/LOADING_TESTIMONY';
export const SUCCESS_TESTIMONY = 'testimony/SUCCESS_TESTIMONY';
export const ERROR_TESTIMONY = 'testimony/ERROR_TESTIMONY';

const loadingTestimony = () => ({
  type: LOADING_TESTIMONY
});

const successTestimony = (payload = {}) => ({
  type: SUCCESS_TESTIMONY,
  payload
});

const errorTestimony = (error = {}) => ({
  type: ERROR_TESTIMONY,
  error
});

export default () => (dispatch) => {
  dispatch(loadingTestimony());

  return ApiClient.getTestimony()
    .then(response => dispatch(successTestimony(response)))
    .catch(error => dispatch(errorTestimony(error)));
};
