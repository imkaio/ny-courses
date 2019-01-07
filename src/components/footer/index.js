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
                    <Link className="footer__item-child" to={`${item.path}${child.path}`}>{content[child.language]}</Link>
                  </li>
                ))}
              </ul>
            ))}

            <div className="col-xs-12 col-md-4 col-md-offset-1">
              <span className="footer__item footer__item--social">{content.SIGA_FACEBOOK}</span>
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMNY.Intercambio%2F&tabs&width=340&height=214&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="340"
                height="214"
                scrolling="no"
                frameBorder="0"
                allow="encrypted-media"
              />
            </div>
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
