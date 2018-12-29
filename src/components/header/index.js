import React from 'react';
import Menu from 'containers/menu';
import Isvg from 'react-inlinesvg';
import { Link } from 'react-router-dom';
import { Consumer } from 'app/client/context';

const Header = () => (
  <Consumer>
    {content => (
      <header className="header">
        <div className="container">
          <div className="header__info-bar">
            <div className="header__info-bar--left">
              <div className="header__phone">
                {content.HEADER_TELEFONE}
              </div>

              <a className="header__social" href={content.WHATSAPP_URL} rel="noopener noreferrer" target="_blank">
                <Isvg className="header__social-icon" src="/images/icon-whatsapp.svg" />
                <span className="header__social-label">{content.WHATSAPP}</span>
              </a>

              <a className="header__social" href={content.INSTAGRAM_URL} rel="noopener noreferrer" target="_blank">
                <Isvg className="header__social-icon" src="/images/icon-instagram.svg" />
                <span className="header__social-label">{content.INSTAGRAM}</span>
              </a>
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
