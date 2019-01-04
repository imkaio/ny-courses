import {
  LOADING_BLOG_POSTS,
  SUCCESS_BLOG_POSTS,
  ERROR_BLOG_POSTS,
  SUCCESS_POST
} from 'data/actions/blog';

const initialState = {
  loading: false,
  loaded: false,
  posts: [],
  post: {}
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
    case SUCCESS_POST:
      return {
        ...state,
        post: action.payload
      };
    default:
      return state;
  }
};
