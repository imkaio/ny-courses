import { connect } from 'react-redux';
import Modal from 'components/modal';
import postModal, { toggleModal } from 'data/actions/modal';

export default connect(
  ({ modal, packages }) => ({
    ...modal,
    packages: packages.payload.map(item => ({
      value: item.id,
      text: `${item.title} - ${item.weeklyDuration}`
    }))
  }),
  dispatch => ({
    submitModal: data => dispatch(postModal(data)),
    toggleModal: () => dispatch(toggleModal())
  })
)(Modal);
