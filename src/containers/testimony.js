import { connect } from 'react-redux';
import Testimony from 'components/testimony';
import fetchTestimony from 'data/actions/testimony';

export default connect(
  ({ testimony }) => testimony,
  dispatch => ({
    getTestimony: () => dispatch(fetchTestimony())
  })
)(Testimony);
