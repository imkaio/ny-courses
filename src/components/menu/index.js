import React from 'react';
import PropTypes from 'prop-types';
import Isvg from 'react-inlinesvg';
import { Link } from 'react-router-dom';
import { Consumer } from 'app/client/context';
import Modal from 'containers/modal';

const Menu = ({ items, createModal }) => (
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

        <button onClick={createModal} className="menu__modal-button">{content.MENU_ORCAMENTO}</button>
        <Isvg className="menu__search" src="/images/icon-search.svg" />

        <Modal />
      </nav>
    )}
  </Consumer>
);

Menu.propTypes = {
  items: PropTypes.array,
  openModal: PropTypes.bool,
  createModal: PropTypes.func
};

export default Menu;
