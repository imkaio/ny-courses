import { connect } from 'react-redux';
import Routes from 'app/client/routes';
import fetchContent from 'data/actions/content';

export default connect(
  ({ content }) => content,
  dispatch => ({
    getContent: () => dispatch(fetchContent())
  })
)(Routes);
