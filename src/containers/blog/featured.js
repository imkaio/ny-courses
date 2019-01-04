import { connect } from 'react-redux';
import FeaturedBlog from 'components/blog/featured';
import fetchBlogPosts from 'data/actions/blog';

export default connect(
  ({ blog }) => ({
    ...blog,
    posts: blog.posts.slice(0, 2)
  }),
  dispatch => ({
    getBlogPosts: () => dispatch(fetchBlogPosts())
  })
)(FeaturedBlog);
