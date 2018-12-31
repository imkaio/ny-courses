import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Isvg from 'react-inlinesvg';
import { Consumer } from '../../client/context';

class Display extends Component {
  static propTypes = {
    getItems: PropTypes.func,
    payload: PropTypes.array
  }

  componentDidMount() {
    this.props.getItems();
  }

  handleNavigation = isNext => () => {
    if (isNext) {
      return this.setState(state => ({
        active: state.active + 1 < this.props.payload.length
          ? state.active + 1
          : 0
      }));
    }

    return this.setState(state => ({
      active: state.active <= 0
        ? this.props.payload.length - 1
        : state.active - 1
    }));
  }

  state = {
    active: 0
  }

  render() {
    return (
      <Consumer>
        {content => (
          <section className="display container">
            <div className="row">
              <div className="col-xs-4">
                <div className="display__info">
                  <h1 className="display__info-title">{content.PACOTES_PROMOCIONAIS}</h1>
                  <h2 className="display__info-description">{content.CONFERIR_PACOTES}</h2>
                </div>
              </div>

              <div className="col-xs-8">
                {this.props.payload.map((item, index) => (
                  <article className={`display__item ${index === this.state.active ? 'display__item--active' : ''}`} key={item.id}>
                    <div className="display__item-wrapper">
                      {item.image && (
                        <Fragment>
                          <div className="display__item-overlay" />
                          <img className="display__item-image" src={item.image} alt={item.title} />
                        </Fragment>
                      )}
                    </div>
                    <h1 className="display__item-title">{item.title}</h1>
                    <h2 className="display__item-description">{item.description}</h2>
                  </article>
                ))}
              </div>
            </div>

            <div className="display__arrows">
              <button className="display__arrow display__arrow--left" onClick={this.handleNavigation(false)}>
                <Isvg className="display__arrow-icon" src="/images/icon-arrow.svg" />
              </button>

              <button className="display__arrow display__arrow--right" onClick={this.handleNavigation(true)}>
                <Isvg className="display__arrow-icon" src="/images/icon-arrow.svg" />
              </button>
            </div>
          </section>
        )}
      </Consumer>
    );
  }
}

export default Display;
