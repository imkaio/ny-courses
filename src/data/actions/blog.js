import ApiClient from '../services/api';

export const LOADING_BLOG_POSTS = 'blog/LOADING_BLOG_POSTS';
export const SUCCESS_BLOG_POSTS = 'blog/SUCCESS_BLOG_POSTS';
export const ERROR_BLOG_POSTS = 'blog/ERROR_BLOG_POSTS';

const loadingBlogPosts = () => ({
  type: LOADING_BLOG_POSTS
});

const successBlogPosts = (payload = {}) => ({
  type: SUCCESS_BLOG_POSTS,
  payload
});

const errorBlogPosts = (error = {}) => ({
  type: ERROR_BLOG_POSTS,
  error
});

export default () => (dispatch) => {
  dispatch(loadingBlogPosts());

  return ApiClient.getBlogPosts()
    .then(response => dispatch(successBlogPosts(response)))
    .catch(error => dispatch(errorBlogPosts(error)));
};
