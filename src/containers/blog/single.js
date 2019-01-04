import { connect } from 'react-redux';
import SingleBlog from 'components/blog/single';
import fetchBlogPosts, { fetchPost } from 'data/actions/blog';

export default connect(
  ({ blog }) => ({
    loading: blog.loading,
    loaded: blog.loaded,
    post: blog.post,
    error: blog.error,
    related: blog.posts
  }),
  dispatch => ({
    getPost: id => dispatch(fetchPost(id)),
    getBlogPosts: () => dispatch(fetchBlogPosts())
  })
)(SingleBlog);
