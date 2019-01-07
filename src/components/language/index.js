import React from 'react';
import PropTypes from 'prop-types';

const Language = (props) => {
  const languages = [
    { language: 'pt_BR', label: 'PT' },
    { language: 'en_US', label: 'EN' }
  ];

  const changeLanguage = lang => () => {
    return lang !== props.language && props.getContent(lang);
  };

  return (
    <div className="language">
      {languages.map(lang => (
        <button
          key={lang.language}
          className="language-button"
          onClick={changeLanguage(lang.language)}
        >{lang.label}</button>
      ))}
    </div>
  );
};

Language.propTypes = {
  language: PropTypes.string,
  getContent: PropTypes.func
};

export default Language;
