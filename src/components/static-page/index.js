import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomMarkdown from 'app/utils/custom-markdown';
import NotFound from 'components/not-found';
import { Element, scroller } from 'react-scroll';

class StaticPage extends Component {
  static propTypes = {
    static: PropTypes.object,
    content: PropTypes.string,
    loaded: PropTypes.bool,
    match: PropTypes.object,
    loadStatic: PropTypes.func,
    params: PropTypes.object,
    location: PropTypes.object,
    hash: PropTypes.string
  }

  componentDidMount() {
    if (this.props.match.params.static !== this.props.static?.staticId) {
      this.props.loadStatic(this.props.match.params.static);
    }

    if (this.props.location.hash) {
      setTimeout(() => {
        scroller.scrollTo(this.props.location.hash, { smooth: true, duration: 610, offset: -200 });
      }, 1000);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.static !== prevProps.match.params.static) {
      this.props.loadStatic(this.props.match.params.static);
    }

    if (this.props.location.hash !== prevProps.location.hash) {
      scroller.scrollTo(this.props.location.hash, { smooth: true, duration: 610, offset: -200 });
    }
  }

  render() {
    if (this.props.loaded) {
      return this.props.loaded && this.props.static ? (
        <section className="static-page">
          <div className="container">
            <h1 className="static-page__title">{this.props.static?.title}</h1>

            <div className="row">
              <div className="col-xs-12 col-md-10">
                <CustomMarkdown
                  className="static-page__content"
                  source={this.props.static?.content}
                  classes={{
                    heading: 'static-page__heading',
                    paragraph: 'static-page__paragraph',
                    link: 'static-page__link',
                    blockquote: 'static-page__blockquote',
                    list: 'static-page__list',
                    listItem: 'static-page__item'
                  }}
                  renderers={{
                    heading: ({ children }) => (children[0].props.href ? (
                      <Element name={children[0].props.href}>
                        <h2 className="static-page__heading">{children}</h2>
                      </Element>
                    ) : (
                      <h2 className="static-page__heading">{children}</h2>
                    ))
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      ) : (
        <NotFound />
      );
    }

    return null;
  }
}

export default StaticPage;
