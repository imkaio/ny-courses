import { connect } from 'react-redux';
import Router from '../client/router';
import fetchContent from '../data/actions/content';

export default connect(
  ({ content }) => content,
  dispatch => ({
    getContent: () => dispatch(fetchContent())
  })
)(Router);
