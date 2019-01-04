import React from 'react';
import Isvg from 'react-inlinesvg';
import Display from 'containers/display';
import FeaturedPackages from 'containers/packages/featured';
import FeaturedBlog from 'containers/blog/featured';
import { Link } from 'react-router-dom';
import { Consumer } from 'app/client/context';

const Home = () => {
  const cards = ['PASSEIOS', 'ROTEIROS', 'ACOMODACOES'];
  const advantages = [
    { icon: 'cash', language: 'VANTAGEM_01' },
    { icon: 'comfort', language: 'VANTAGEM_02' },
    { icon: 'knowledge', language: 'VANTAGEM_03' }
  ];

  return (
    <Consumer>
      {content => (
        <div className="home">
          <Display />

          <div className="home__cards container">
            <div className="row">
              {cards.map(card => (
                <div className="col-xs-12 col-md-4" key={card}>
                  <Link className="home__card" to="/">
                    <span className="home__card-title">{content[card]}</span>
                    <span className="home__card-description">{content[`${card}_DESCRICAO`]}</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <FeaturedPackages />

          <section className="home__advantages">
            <div className="container">
              <h1 className="home__advantages-title">{content.VANTAGENS}</h1>

              <div className="row">
                {advantages.map((advantage, index) => (
                  <div className={`col-xs-10 col-xs-offset-1 col-md-2 ${!index ? 'col-md-offset-3' : ''}`} key={advantage.language}>
                    <div className="home__advantage-icon-wrapper">
                      <Isvg className="home__advantage-icon" src={`/images/icon-${advantage.icon}.svg`} />
                    </div>
                    <span className="home__advantage-title">{content[advantage.language]}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <FeaturedBlog />
        </div>
      )}
    </Consumer>
  );
};

export default Home;
