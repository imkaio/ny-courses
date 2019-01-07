import { combineReducers } from 'redux';

import content from './content';
import menu from './menu';
import display from './display';
import packages from './packages';
import blog from './blog';
import footer from './footer';
import modal from './modal';
import contact from './contact';
import staticPage from './static-page';
import testimony from './testimony';

export default combineReducers({
  content,
  menu,
  display,
  packages,
  blog,
  footer,
  modal,
  contact,
  staticPage,
  testimony
});
