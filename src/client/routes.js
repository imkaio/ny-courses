import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'app/client/context';
import { animateScroll } from 'react-scroll';
import PropTypes from 'prop-types';
import Header from 'components/header';
import Footer from 'containers/footer';
import Home from 'components/home';
import Packages from 'containers/packages';
import SinglePackages from 'containers/packages/single';
import Blog from 'containers/blog';
import SingleBlog from 'containers/blog/single';
import Contact from 'components/contact';
import StaticPage from 'containers/static-page';

class Routes extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    payload: PropTypes.object,
    getContent: PropTypes.func,
    location: PropTypes.object
  }

  componentDidMount() {
    this.props.getContent();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location?.pathname !== this.props?.location?.pathname) {
      animateScroll.scrollTo(0, { smooth: true, duration: 610 });
    }
  }

  render() {
    return Object.keys(this.props.payload).length ? (
      <Provider value={this.props.payload}>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:static" component={StaticPage} />
          <Route exact path="/pacotes" component={Packages} />
          <Route path="/pacotes/:id" component={SinglePackages} />
          <Route exact path="/blog" component={Blog} />
          <Route path="/blog/:id" component={SingleBlog} />
          <Route path="/contato" component={Contact} />
        </Switch>

        <Footer />
      </Provider>
    ) : (
      <h1>Loading</h1>
    );
  }
}

export default Routes;
