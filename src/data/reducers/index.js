import { combineReducers } from 'redux';

import content from './content';
import menu from './menu';
import display from './display';
import packages from './packages';
import blog from './blog';
import footer from './footer';

export default combineReducers({
  content,
  menu,
  display,
  packages,
  blog,
  footer
});
