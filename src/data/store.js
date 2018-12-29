import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { isDev } from '../utils/conditions';
import thunk from 'redux-thunk';
import reducer from 'data/reducers';

export default createStore(
  reducer,
  isDev ? composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
);
