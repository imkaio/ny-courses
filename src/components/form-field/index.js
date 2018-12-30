import React from 'react';
import PropTypes from 'prop-types';

const FormField = ({
  select,
  options,
  textarea,
  type,
  name,
  placeholder,
  className,
  onChange,
  required,
  value
}) => (
  <fieldset className={className ? `${className} form-field` : 'form-field'}>
    {select && !textarea && (
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="form-field__item form-field--select"
      >
        {options.map(option => <option className="form-field__option" key={option} value={option}>{option}</option>)}
      </select>
    )}

    {textarea && !select && (
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="form-field__item form-field--textarea"
      />
    )}

    {!textarea && !select && (
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        type={type || 'text'}
        className="form-field__item"
      />
    )}

    {!select && (
      <label
        htmlFor={name}
        className={value ? 'form-field__label form-field__label--hide' : 'form-field__label'}
      >{placeholder}</label>
    )}
  </fieldset>
);

FormField.propTypes = {
  select: PropTypes.bool,
  options: PropTypes.array,
  textarea: PropTypes.bool,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  value: PropTypes.string
};

export default FormField;
