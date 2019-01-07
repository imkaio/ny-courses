import { connect } from 'react-redux';
import Contact from 'components/contact/form';
import postContact from 'data/actions/contact';

export default connect(
  ({ contact }) => contact,
  dispatch => ({
    handleSubmit: data => dispatch(postContact(data))
  })
)(Contact);
