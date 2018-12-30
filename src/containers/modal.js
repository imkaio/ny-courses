import { connect } from 'react-redux';
import Modal from 'components/modal';
import postModal, { toggleModal } from 'data/actions/modal';

export default connect(
  ({ modal }) => modal,
  dispatch => ({
    submitModal: data => dispatch(postModal(data)),
    toggleModal: () => dispatch(toggleModal())
  })
)(Modal);
