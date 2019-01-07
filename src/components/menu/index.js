import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
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

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleScroll = () => {
    const width = window.innerWidth;
    if (width >= 1024) return null;

    const { isOpen } = this.state;
    const html = document.querySelector('html');

    if (isOpen) {
      html.style.overflowY = 'hidden';
    } else {
      html.style.overflowY = '';
    }
  }

  handleResize = () => {
    const html = document.querySelector('html');
    const width = window.innerWidth;

    if (width >= 1024) {
      html.style.overflowY = '';
    }

    if (width < 1024 && this.state.isOpen) {
      html.style.overflowY = 'hidden';
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
            </nav>

            <Modal />
          </Fragment>
        )}
      </Consumer>
    );
  }
}

export default Menu;
