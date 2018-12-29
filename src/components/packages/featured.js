import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Consumer } from '../../client/context';

class FeaturedPackages extends Component {
  static propTypes = {
    loaded: PropTypes.bool,
    getPackages: PropTypes.func,
    payload: PropTypes.array
  }

  componentDidMount() {
    return !this.props.loaded && this.props.getPackages();
  }

  transformToHour(ms) {
    const seconds = 60;
    const minutes = 60;

    return ms / seconds / minutes;
  }

  render() {
    return (
      <Consumer>
        {content => (
          <section className="featured-packages">
            <div className="container">
              <h1 className="featured-packages__title">{content.PACOTES}</h1>

              <div className="row featured-packages__items">
                {this.props.payload.map(item => (
                  <article className="col-xs-4" key={item.id}>
                    <Link className="featured-packages__item" to={`/pacotes/${item.id}`}>
                      <div className="featured-packages__item-info">
                        <h1 className="featured-packages__item-title">{item.title}</h1>
                        <h2 className="featured-packages__item-description">{item.description}</h2>
                        <span className="featured-packages__item-time">{item.weeklyDuration} {content.SEMANAS_DE_CURSO}</span>
                        <span className="featured-packages__item-time">{this.transformToHour(item.hourlyDuration)} {content.HORAS_SEMANAIS}</span>

                        <button className="featured-packages__item-button">{content.ORCAMENTO}</button>
                      </div>

                      <img className="featured-packages__item-image" src={item.image} alt={item.title} />
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
      </Consumer>
    );
  }
}

export default FeaturedPackages;
