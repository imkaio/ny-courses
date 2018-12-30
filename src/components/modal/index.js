import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormField from 'components/form-field';
import { Consumer } from 'app/client/context';

class Modal extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    toggleModal: PropTypes.func,
    submitModal: PropTypes.func,
    success: PropTypes.bool
  }

  fields = [
    { placeholder: 'NOME_COMPLETO', required: true, name: 'name' },
    { placeholder: 'TELEFONE_DDD', required: true, name: 'phone', type: 'tel' },
    { placeholder: 'EMAIL', required: true, name: 'email', type: 'email' },
    { placeholder: 'CURSO_DESEJADO', name: 'course', options: ['Curso 01', 'Curso 02'], select: true },
    { placeholder: 'COMENTARIOS', name: 'message', textarea: true }
  ]

  state = {
    name: '',
    phone: '',
    email: '',
    course: '',
    message: ''
  }

  componentDidUpdate(prevProps) {
    const html = document.querySelector('html');

    if (prevProps?.isOpen && !this.props?.isOpen) {
      html.style.overflowY = ''; // eslint-disable-line react/prop-types
    }

    if (!prevProps?.isOpen && this.props?.isOpen) {
      html.style.overflowY = 'hidden'; // eslint-disable-line react/prop-types
    }
  }

  submitModal = (e) => {
    e.preventDefault();
    this.props.submitModal(this.state);
  }

  handleChange = name => (e) => {
    this.setState({ [name]: e.currentTarget.value });
  }

  handleClose = force => (e) => {
    if (force || e.target.classList.contains('modal')) {
      this.props.toggleModal();
    }
  }

  render() {
    return (
      <Consumer>
        {content => (
          <div className={`modal ${!this.props.isOpen ? 'modal--hide' : ''}`} onClick={this.handleClose()}>
            {!this.props.success ? (
              <form className="modal__form" onSubmit={this.submitModal}>
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
                <button className="modal__button">{content.SOLICITAR_ORCAMENTO}</button>
              </form>
            ) : (
              <div className="modal__form">
                <span className="modal__success">{content.MODAL_ENVIADO}</span>
                <span className="modal__success-description">{content.MODAL_ENVIADO_DESCRICAO}</span>
                <button className="modal__button" onClick={this.handleClose(true)}>{content.MODAL_FECHAR}</button>
              </div>
            )}
          </div>
        )}
      </Consumer>
    );
  }
}


export default Modal;
