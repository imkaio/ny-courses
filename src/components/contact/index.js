import React from 'react';
import Isvg from 'react-inlinesvg';
import ContactForm from 'containers/contact';
import { Consumer } from 'app/client/context';

const Contact = () => (
  <Consumer>
    {content => (
      <section className="contact">
        <div className="container">

          <div className="row">
            <div className="col-xs-12 col-md-5">
              <h1 className="contact__title">{content.CONTATO}</h1>
              <p className="contact__description">{content.CONTATO_DESCRICAO}</p>

              <h2 className="contact__social-title">{content.REDES_SOCIAIS}</h2>
              <ul>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__social-item"
                    alt={content.INSTAGRAM}
                    href={content.INSTAGRAM_URL}
                  >
                    <Isvg className="contact__social-icon" src="/images/icon-instagram.svg" />
                    <span className="contact__social-label">{content.INSTAGRAM}</span>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__social-item"
                    alt={content.FACEBOOK}
                    href={content.FACEBOOK_URL}
                  >
                    <Isvg className="contact__social-icon" src="/images/icon-facebook.svg" />
                    <span className="contact__social-label">{content.FACEBOOK}</span>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__social-item"
                    alt={content.WHATSAPP}
                    href={`https://api.whatsapp.com/send?phone=${content.WHATSAPP_NUMERO}`}
                  >
                    <Isvg className="contact__social-icon" src="/images/icon-whatsapp.svg" />
                    <span className="contact__social-label">{content.WHATSAPP}</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-xs-12 col-md-6 col-md-offset-1">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    )}
  </Consumer>
);

export default Contact;
