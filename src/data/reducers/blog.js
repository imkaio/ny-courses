import {
  LOADING_BLOG_POSTS,
  SUCCESS_BLOG_POSTS,
  ERROR_BLOG_POSTS
} from '../actions/blog';

const initialState = {
  loading: false,
  loaded: false,
  posts: []
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOADING_BLOG_POSTS:
      return {
        ...state,
        loading: true,
        loaded: false
      };
    case SUCCESS_BLOG_POSTS:
      return {
        ...state,
        loading: false,
        loaded: true,
        posts: action.payload
      };
    case ERROR_BLOG_POSTS:
      return {
        ...state,
        loading: false,
        loaded: true,
        error: action.error
      };
    default:
      return state;
  }
};
