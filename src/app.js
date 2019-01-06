import React from 'react';
import { render } from 'react-dom';
import store from 'data/store';
import Client from 'app/client';
import 'app/utils/jivochat';
import './styles/main.scss';

const App = () => (
  <Client store={store} />
);

render(<App />, document.getElementById('app'));
