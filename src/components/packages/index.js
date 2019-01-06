import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Consumer } from 'app/client/context';
import { transformToHour } from 'app/utils/functions';

class Packages extends Component {
  static propTypes = {
    packages: PropTypes.array,
    getPackages: PropTypes.func,
    openModal: PropTypes.func,
    loading: PropTypes.bool
  }

  componentDidMount() {
    return !this.props.packages?.length && this.props.getPackages();
  }

  handleModal = id => (e) => {
    e.preventDefault();
    this.props.openModal(id);
  }

  render() {
    return (
      <Consumer>
        {content => (
          <section className="packages">
            <div className="container">
              <h1 className="packages__title">{content.PACOTES}</h1>

              <div className="row">
                {!this.props.packages?.length && !this.props.loading ? (
                  <span className="col-xs-12 packages__no-packages">{content.SEM_PACOTES}</span>
                ) : this.props.packages.map(item => (
                  <article className="col-xs-12 col-md-4" key={item.id}>
                    <Link className="package__item" to={`/pacotes/${item.id}`}>
                      <div className="package__item-info">
                        <h1 className="package__item-title">{item.title}</h1>
                        <h2 className="package__item-description">{item.description}</h2>
                        <span className="featured-packages__item-time">{item.weeklyDuration} {content.SEMANAS_DE_CURSO}</span>
                        <span className="featured-packages__item-time">{transformToHour(item.hourlyDuration)} {content.HORAS_SEMANAIS}</span>

                        <button className="blog__post-button" onClick={this.handleModal(item.id)}>{content.ORCAMENTO}</button>
                      </div>

                      {item.image && (
                        <img className="blog__post-image" src={item.image} alt={item.title} />
                      )}
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

export default Packages;
