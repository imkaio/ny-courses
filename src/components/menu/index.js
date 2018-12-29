import React from 'react';
import PropTypes from 'prop-types';
import Isvg from 'react-inlinesvg';
import { Link } from 'react-router-dom';
import { Consumer } from '../../client/context';

const Menu = ({ items }) => (
  <Consumer>
    {content => (
      <nav className="menu">
        <ul className="menu__items">
          {items.map(item => (
            <li key={item.language}>
              <Link className="menu__item" to={item.path}>{content[item.language]}</Link>
            </li>
          ))}
        </ul>

        <button className="menu__modal-button">{content.MENU_ORCAMENTO}</button>
        <Isvg className="menu__search" src="/images/icon-search.svg" />
      </nav>
    )}
  </Consumer>
);

Menu.propTypes = {
  items: PropTypes.array
};

export default Menu;
