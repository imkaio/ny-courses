import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Consumer } from 'app/client/context';

const Footer = ({ items }) => (
  <Consumer>
    {content => (
      <footer className="footer">
        <div className="container">
          <div className="row">
            {items.map(item => (
              <ul className="col-xs-10 col-xs-offset-1 col-md-2 col-md-offset-0" key={item.language}>
                <li>
                  <Link className="footer__item" to={item.path}>{content[item.language]}</Link>
                </li>

                {item.children.map(child => (
                  <li key={child.language}>
                    <Link className="footer__item-child" to={child.path}>{content[child.language]}</Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </footer>
    )}
  </Consumer>
);

Footer.propTypes = {
  items: PropTypes.array
};

export default Footer;
