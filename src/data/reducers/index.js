import { combineReducers } from 'redux';

import content from './content';
import menu from './menu';
import display from './display';

export default combineReducers({
  content,
  menu,
  display
});
