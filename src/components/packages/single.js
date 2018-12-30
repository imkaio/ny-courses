import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Consumer } from 'app/client/context';
import { transformToHour } from 'app/utils/functions';
import CustomMarkdown from 'app/utils/custom-markdown';

class SinglePackages extends Component {
  static propTypes = {
    loaded: PropTypes.bool,
    match: PropTypes.object,
    history: PropTypes.object,
    package: PropTypes.object,
    getSinglePackage: PropTypes.func,
    getPackages: PropTypes.func,
    payload: PropTypes.array,
    length: PropTypes.number,
    params: PropTypes.object,
    id: PropTypes.string
  }

  componentDidMount() {
    if (!this.props.match.params.id) return this.props.history.push('/pacotes');
    if (!this.props.payload.length) return this.props.getPackages();
    return this.props.getSinglePackage(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    const payloadLoaded = !prevProps.payload?.length && this.props.payload?.length;
    const routeChanged = prevProps.match.params.id !== this.props.match.params.id;

    if (payloadLoaded || (prevProps.package.id && routeChanged)) {
      this.props.getSinglePackage(this.props.match.params.id);
    }
  }

  render() {
    const { package: item, payload } = this.props;

    return (
      <Consumer>
        {content => (
          <section className="single-packages">
            <div className="container">
              <div className="single-packages__wrapper">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    title={item.title}
                    className="single-packages__image"
                  />
                )}
              </div>

              <div className="row">
                <div className="col-xs-4 col-xs-offset-1">
                  <div className="single-packages__sticky">
                    <div className="single-packages__info">
                      <h1 className="single-packages__title">{item.title}</h1>
                      <h2 className="single-packages__description">{item.description}</h2>

                      {item.hourlyDuration && (
                        <span className="single-packages__topic">{transformToHour(item.hourlyDuration)} {content.HORAS_SEMANAIS}</span>
                      )}
                      {item.weeklyDuration && (
                        <span className="single-packages__topic">{item.weeklyDuration} {content.SEMANAS_DE_CURSO}</span>
                      )}
                      {item.lodgingDuration && (
                        <span className="single-packages__topic">{item.lodgingDuration} {content.SEMANAS_DE_HOSPEDAGEM}</span>
                      )}
                      <button className="single-packages__button">{content.ORCAMENTO_RAPIDO}</button>
                    </div>

                    <div className="single-packages__blog">
                      <h3 className="single-packages__blog-title">{content.BLOG_CURSO}</h3>
                      <Link className="single-packages__blog-link" to="/blog">
                        <span className="single-packages__blog-label">{content.ACESSAR_BLOG}</span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-xs-6 col-xs-offset-1">
                  <CustomMarkdown
                    source={item.text}
                    className="single-packages__content"
                    classes={{
                      paragraph: 'single-packages__text',
                      strong: 'single-packages__text--strong'
                    }}
                  />

                  {item.included && (
                    <Fragment>
                      <h4 className="single-packages__list-title">{content.PACOTES_INCLUIDO}</h4>
                      <ul className="single-packages__list">
                        {item.included.map(item => (
                          <li className="single-packages__list-item" key={item}>{item}</li>
                        ))}
                      </ul>
                    </Fragment>
                  )}

                  {item.notIncluded && (
                    <Fragment>
                      <h4 className="single-packages__list-title">{content.PACOTES_NAO_INCLUIDO}</h4>
                      <ul className="single-packages__list">
                        {item.notIncluded.map(item => (
                          <li className="single-packages__list-item" key={item}>{item}</li>
                        ))}
                      </ul>
                    </Fragment>
                  )}

                  {item.destiny && (
                    <Fragment>
                      <h4 className="single-packages__list-title">{content.PACOTES_DESTINO} / {content.PACOTE_HOSPEDAGEM}</h4>
                      <p className="single-packages__list-item">{item.destiny} / {item.lodgingPlaces.join(', ')}</p>
                    </Fragment>
                  )}

                  {!!item.related?.length && !!payload?.length && (
                    <div className="single-packages__related">
                      <h2 className="single-packages__related-title">{content.OUTROS_PACOTES}</h2>
                      <div className="row">
                        {payload
                          .filter(payloadItem => item.related.includes(payloadItem.id))
                          .map(related => (
                            <article className="col-xs-6" key={related.id}>
                              <Link className="single-packages__item" to={`/pacotes/${related.id}`}>
                                <div className="single-packages__item-info">
                                  <h1 className="single-packages__item-title">{related.title}</h1>
                                  <h2 className="single-packages__item-description">{related.description}</h2>
                                  <span className="single-packages__item-time">{related.weeklyDuration} {content.SEMANAS_DE_CURSO}</span>
                                  <span className="single-packages__item-time">{transformToHour(related.hourlyDuration)} {content.HORAS_SEMANAIS}</span>

                                  <button className="single-packages__item-button">{content.ORCAMENTO}</button>
                                </div>

                                {related.image && (
                                  <img className="single-packages__item-image" src={related.image} alt={related.title} />
                                )}
                              </Link>
                            </article>
                          ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}
      </Consumer>
    );
  }
}

export default SinglePackages;

