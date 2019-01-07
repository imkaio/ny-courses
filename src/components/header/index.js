import React from 'react';
import Menu from 'containers/menu';
import Isvg from 'react-inlinesvg';
import Language from 'components/language';
import HeaderHour from 'components/header/hour';
import { Link } from 'react-router-dom';
import { Consumer } from 'app/client/context';

const Header = () => (
  <Consumer>
    {content => (
      <header className="header">
        <div className="container">
          <div className="header__info-bar">
            <div className="header__info-bar--left">
              <div className="header__social">
                <Isvg className="header__social-icon" src="/images/icon-whatsapp.svg" />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="header__social-label"
                  href={`https://api.whatsapp.com/send?phone=${content.WHATSAPP_NUMERO}`}
                >{content.HEADER_TELEFONE}</a>
              </div>

              <a className="header__social" href={content.FACEBOOK_URL} rel="noopener noreferrer" target="_blank">
                <Isvg className="header__social-icon" src="/images/icon-facebook.svg" />
                <span className="header__social-label">{content.FACEBOOK}</span>
              </a>

              <a className="header__social" href={content.INSTAGRAM_URL} rel="noopener noreferrer" target="_blank">
                <Isvg className="header__social-icon" src="/images/icon-instagram.svg" />
                <span className="header__social-label">{content.INSTAGRAM}</span>
              </a>
            </div>

            <div className="header__info-bar--right">
              <HeaderHour />
              <Language />
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

              <div className="col-xs-6 col-xs-offset-4">
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
