import { connect } from 'react-redux';
import Menu from 'components/menu';
import { toggleModal } from 'data/actions/modal';

export default connect(
  ({ menu }) => menu,
  dispatch => ({
    createModal: () => dispatch(toggleModal())
  })
)(Menu);
