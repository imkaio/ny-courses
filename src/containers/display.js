import { connect } from 'react-redux';
import Display from '../components/display';
import fetchDisplay from '../data/actions/display';

export default connect(
  ({ display }) => display,
  dispatch => ({
    getItems: () => dispatch(fetchDisplay())
  })
)(Display);
