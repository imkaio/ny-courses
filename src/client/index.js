import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { isDev } from 'app/utils/conditions';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Routes from 'containers/content';

const Client = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={Routes} />
    </Router>
  </Provider>
);

Client.propTypes = {
  store: PropTypes.object.isRequired
};

export default isDev ? hot(module)(Client) : Client;
