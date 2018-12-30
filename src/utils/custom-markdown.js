import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

const CustomMarkdown = (props) => {
  const returnMarkdown = (tag, a) => ({ children, ...rest }) => {
    if (!['paragraph', 'strong', 'heading', 'blockquote', 'link', 'list', 'listItem'].includes(tag)) {
      throw new TypeError('Invalid tag prop provided! Accepted values are `paragraph`, `strong`, `heading`, `blockquote`, `link`, `list` or `listItem`');
    }

    if (props.renderers[tag]) {
      return props.renderers[tag]({ children });
    }

    switch (tag) {
      case 'list':
        return <ul className={props.classes.list}>{children}</ul>;
      case 'listItem':
        return <li className={props.classes.listItem}>{children}</li>;
      case 'link':
        return <a className={props.classes.link} href={rest.href}>{children}</a>;
      case 'blockquote':
        return <blockquote className={props.classes.blockquote}>{children}</blockquote>;
      case 'heading':
        return [
          null,
          <h1 className={props.classes.heading} key="0">{children}</h1>,
          <h2 className={props.classes.heading} key="1">{children}</h2>,
          <h3 className={props.classes.heading} key="2">{children}</h3>,
          <h4 className={props.classes.heading} key="3">{children}</h4>,
          <h5 className={props.classes.heading} key="4">{children}</h5>,
          <h6 className={props.classes.heading} key="5">{children}</h6>
        ][rest.level] || <h1 className={props.classes.heading}>{children}</h1>;
      case 'strong':
        return <strong className={props.classes.strong}>{children}</strong>;
      default:
        return <p className={props.classes.paragraph}>{children}</p>;
    }
  };

  return (
    <ReactMarkdown
      source={props.source}
      className={props.className}
      renderers={{
        paragraph: returnMarkdown('paragraph'),
        strong: returnMarkdown('strong'),
        heading: returnMarkdown('heading'),
        blockquote: returnMarkdown('blockquote'),
        link: returnMarkdown('link'),
        list: returnMarkdown('list'),
        listItem: returnMarkdown('listItem')
      }}
    />
  );
};

CustomMarkdown.defaultProps = {
  source: '',
  classes: {},
  renderers: {},
  className: ''
};

CustomMarkdown.propTypes = {
  source: PropTypes.string.isRequired,
  classes: PropTypes.object,
  renderers: PropTypes.object,
  onClick: PropTypes.func,
  className: PropTypes.string
};

export default CustomMarkdown;
