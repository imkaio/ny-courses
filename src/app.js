import React from 'react';
import { render } from 'react-dom';
import store from 'data/store';
import Content from './containers/content';
import './styles/main.scss';

const App = () => (
  <Content store={store} />
);

render(<App />, document.getElementById('app'));
