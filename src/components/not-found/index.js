import React from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from 'app/client/context';

const NotFound = () => (
  <Consumer>
    {content => (
      <section className="not-found">
        <div className="container">
          <h1 className="not-found__title">{content.PAGINA_NAO_ENCONTRADA}</h1>
          <h2 className="not-found__description">{content.PAGINA_NAO_ENCONTRADA_DESCRICAO}</h2>

          <Link className="not-found__link" to="/">{content.PAGINA_NAO_ENCONTRADA_LINK}</Link>
        </div>
      </section>
    )}
  </Consumer>
);

export default NotFound;
