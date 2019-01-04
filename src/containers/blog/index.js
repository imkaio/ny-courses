import { connect } from 'react-redux';
import Blog from 'components/blog';
import fetchBlog from 'data/actions/blog';

export default connect(
  ({ blog }) => blog,
  dispatch => ({
    getPosts: () => dispatch(fetchBlog())
  })
)(Blog);
