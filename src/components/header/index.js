import React from 'react';
import Menu from '../../containers/menu';
import { Link } from 'react-router-dom';
import { Consumer } from '../../client/context';

const Header = () => (
  <Consumer>
    {content => (
      <header className="header">
        <div className="container">
          <div className="header__info-bar">
            <div className="header__phone">
              {content.HEADER_TELEFONE}
            </div>
            <div className="header__language">
              <button className="header__language-button">BR</button>
              <button className="header__language-button">EN</button>
            </div>
          </div>
        </div>

        <div className="header__main">
          <div className="container">
            <div className="row">
              <div className="col-xs-2">
                <h1>
                  <Link className="header__title" to="/">{content.MINHA_NOVA_YORK}</Link>
                </h1>
              </div>

              <div className="col-xs-4 col-xs-offset-5">
                <Menu />
              </div>
            </div>
          </div>
        </div>
      </header>
    )}
  </Consumer>
);

export default Header;
