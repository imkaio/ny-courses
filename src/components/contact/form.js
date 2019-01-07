import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormField from 'components/form-field';
import { Consumer } from 'app/client/context';

class ContactForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    success: PropTypes.bool
  }

  fields = [
    { placeholder: 'NOME_COMPLETO', required: true, name: 'name' },
    { placeholder: 'TELEFONE_DDD', required: true, name: 'phone', type: 'tel' },
    { placeholder: 'EMAIL', required: true, name: 'email', type: 'email' },
    { placeholder: 'COMENTARIOS', name: 'message', textarea: true }
  ]

  state = {
    name: '',
    phone: '',
    email: '',
    message: ''
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.success && this.props.success) {
      this.setState(() => ({
        name: '',
        phone: '',
        email: '',
        message: ''
      }));
    }
  }

  handleChange = name => (e) => {
    this.setState({ [name]: e.currentTarget.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state);
  }

  render() {
    return (
      <Consumer>
        {content => (
          <form className="contact__form" onSubmit={this.handleSubmit}>
            {this.fields.map(field => (
              <FormField
                {...field}
                id={field.name}
                key={field.name}
                value={this.state[field.name]}
                placeholder={content[field.placeholder]}
                onChange={this.handleChange(field.name)}
              />
            ))}
            <button type="submit" className="contact__form-button">{content.SOLICITAR_ORCAMENTO}</button>
          </form>
        )}
      </Consumer>
    );
  }
}

export default ContactForm;
