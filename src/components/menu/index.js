import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Isvg from 'react-inlinesvg';
import { Link } from 'react-router-dom';
import { Consumer } from 'app/client/context';
import Modal from 'containers/modal';

class Menu extends Component {
  static propTypes = {
    items: PropTypes.array,
    openModal: PropTypes.bool,
    createModal: PropTypes.func
  }

  state = {
    isOpen: false
  }

  handleScroll = () => {
    const { isOpen } = this.state;
    const html = document.querySelector('html');

    if (isOpen) {
      html.style.overflowY = 'hidden';
    } else {
      html.style.overflowY = '';
    }
  }

  toggleMenu = () => {
    this.setState(state => ({ isOpen: !state.isOpen }), this.handleScroll);
  }

  render() {
    const { items, createModal } = this.props;

    return (
      <Consumer>
        {content => (
          <Fragment>
            <div className="menu__button-wrapper">
              <span className={`menu__button ${this.state.isOpen ? 'menu__button--active' : ''}`} onClick={this.toggleMenu} />
            </div>

            <nav className={`menu ${this.state.isOpen ? 'menu--open' : ''}`}>
              <ul className="menu__items">
                {items.map(item => (
                  <li key={item.language}>
                    <Link onClick={this.toggleMenu} className="menu__item" to={item.path}>{content[item.language]}</Link>
                  </li>
                ))}
              </ul>

              <button onClick={createModal} className="menu__modal-button">{content.MENU_ORCAMENTO}</button>
              <Isvg className="menu__search" src="/images/icon-search.svg" />

              <Modal />
            </nav>
          </Fragment>
        )}
      </Consumer>
    );
  }
}

export default Menu;
