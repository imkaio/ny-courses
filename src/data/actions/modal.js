import ApiClient from 'data/services/api';

export const TOGGLE_MODAL = 'modal/TOGGLE_MODAL';

export const toggleModal = () => ({
  type: TOGGLE_MODAL
});

export const LOADING_MODAL = 'modal/LOADING_MODAL';
export const SUCCESS_MODAL = 'modal/SUCCESS_MODAL';
export const ERROR_MODAL = 'modal/ERROR_MODAL';

const loadingModal = () => ({
  type: LOADING_MODAL
});

const successModal = () => ({
  type: SUCCESS_MODAL
});

const errorModal = error => ({
  type: ERROR_MODAL,
  error
});

export default data => (dispatch) => {
  dispatch(loadingModal());

  return ApiClient.postModal(data)
    .then(() => dispatch(successModal()))
    .catch(error => dispatch(errorModal(error)));
};
