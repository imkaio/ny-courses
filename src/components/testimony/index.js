import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Isvg from 'react-inlinesvg';
import { Consumer } from 'app/client/context';

class Testimony extends Component {
  static propTypes = {
    testimonies: PropTypes.array,
    getTestimony: PropTypes.func
  }

  state = {
    active: 0
  }

  componentDidMount() {
    return !this.props.testimonies.length && this.props.getTestimony();
  }

  handleNavigation = isNext => () => {
    if (isNext) {
      return this.setState(state => ({
        active: state.active + 1 < this.props.testimonies.length
          ? state.active + 1
          : 0
      }));
    }

    return this.setState(state => ({
      active: state.active <= 0
        ? this.props.testimonies.length - 1
        : state.active - 1
    }));
  }

  render() {
    return (
      <Consumer>
        {content => (
          <section className="testimony">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-md-6 col-md-offset-2">
                  <h1 className="testimony__title">{content.DEPOIMENTOS}</h1>
                </div>

                <div className="col-xs-10 col-md-7 col-md-offset-2">
                  {this.props.testimonies.map((item, index) => (
                    <li className={cn('testimony__item', this.state.active === index && 'testimony__item--active')} key={item.id}>
                      <p className="testimony__item-paragraph">{item.text}</p>
                      <h2 className="testimony__item-title">{item.name}</h2>
                    </li>
                  ))}
                </div>

                <div className="col-xs-2">
                  <div className="testimony__arrow testimony__arrow--left" onClick={this.handleNavigation(false)}>
                    <Isvg className="testimony__arrow-icon" src="/images/icon-arrow.svg" />
                  </div>

                  <div className="testimony__arrow testimony__arrow--right" onClick={this.handleNavigation(true)}>
                    <Isvg className="testimony__arrow-icon" src="/images/icon-arrow.svg" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </Consumer>
    );
  }
}

export default Testimony;
