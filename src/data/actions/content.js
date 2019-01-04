import ApiClient from 'data/services/api';

export const LOADING_CONTENT = 'content/LOADING_CONTENT';
export const SUCCESS_CONTENT = 'content/SUCCESS_CONTENT';
export const ERROR_CONTENT = 'content/ERROR_CONTENT';

const loadingContent = (lang = 'pt_BR') => ({
  type: LOADING_CONTENT,
  default: lang
});

const successContent = (payload = {}) => ({
  type: SUCCESS_CONTENT,
  payload
});

const errorContent = (error = {}) => ({
  type: ERROR_CONTENT,
  error
});

export default language => (dispatch) => {
  dispatch(loadingContent(language));

  return ApiClient.getContent()
    .then(response => dispatch(successContent(response)))
    .catch(error => dispatch(errorContent(error)));
};
