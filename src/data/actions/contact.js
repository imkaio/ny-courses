import ApiClient from 'data/services/api';

export const LOADING_CONTACT = 'contact/LOADING_CONTACT';
export const SUCCESS_CONTACT = 'contact/SUCCESS_CONTACT';
export const ERROR_CONTACT = 'contact/ERROR_CONTACT';

const loadingContact = () => ({
  type: LOADING_CONTACT
});

const successContact = () => ({
  type: SUCCESS_CONTACT
});

const errorContact = error => ({
  type: ERROR_CONTACT,
  error
});

export default data => (dispatch) => {
  dispatch(loadingContact());

  return ApiClient.postContact(data)
    .then(() => dispatch(successContact()))
    .catch(error => dispatch(errorContact(error)));
};
