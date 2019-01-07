import React from 'react';
import Display from 'containers/display';
import FeaturedPackages from 'containers/packages/featured';
import FeaturedBlog from 'containers/blog/featured';
import Testimony from 'containers/testimony';
import { Link } from 'react-router-dom';
import { Consumer } from 'app/client/context';

const Home = () => {
  const cards = ['PASSEIOS', 'ROTEIROS', 'ACOMODACOES'];

  return (
    <Consumer>
      {content => (
        <div className="home">
          <Display />

          <div className="home__cards container">
            <div className="row">
              {cards.map(card => (
                <div className="col-xs-12 col-md-4" key={card}>
                  <Link className="home__card" to={content[`${card}_LINK`]}>
                    <span className="home__card-title">{content[card]}</span>
                    <span className="home__card-description">{content[`${card}_DESCRICAO`]}</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <FeaturedPackages />
          <Testimony />
          <FeaturedBlog />
        </div>
      )}
    </Consumer>
  );
};

export default Home;
