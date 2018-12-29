import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { isDev } from 'app/utils/conditions';
import { Provider as ContentProvider } from 'app/client/context';
import Header from 'components/header';
import Footer from 'containers/footer';
import Home from 'components/home';

class CustomRouter extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    payload: PropTypes.object,
    getContent: PropTypes.func,
    store: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.props.getContent();
  }

  render() {
    return Object.keys(this.props.payload).length ? (
      <ContentProvider value={this.props.payload}>
        <Provider store={this.props.store}>
          <Router>
            <Fragment>
              <Header />
              <Route path="/" component={Home} />
              <Footer />
            </Fragment>
          </Router>
        </Provider>
      </ContentProvider>
    ) : (
      <h1>Loading</h1>
    );
  }
}

export default isDev ? hot(module)(CustomRouter) : CustomRouter;
