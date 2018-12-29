import React from 'react';
import Display from '../../containers/display';
import { Link } from 'react-router-dom';
import { Consumer } from '../../client/context';

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
                <div className="col-xs-4" key={card}>
                  <Link className="home__card" to="/">
                    <span className="home__card-title">{content[card]}</span>
                    <span className="home__card-description">{content[`${card}_DESCRICAO`]}</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </Consumer>
  );
};

export default Home;
