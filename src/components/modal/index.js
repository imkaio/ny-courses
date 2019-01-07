import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormField from 'components/form-field';
import { Consumer } from 'app/client/context';

class Modal extends Component {
  static propTypes = {
    id: PropTypes.string,
    isOpen: PropTypes.bool,
    packages: PropTypes.array,
    toggleModal: PropTypes.func,
    submitModal: PropTypes.func,
    success: PropTypes.bool
  }

  fields = [
    { placeholder: 'NOME_COMPLETO', required: true, name: 'name' },
    { placeholder: 'TELEFONE_DDD', required: true, name: 'phone', type: 'tel' },
    { placeholder: 'EMAIL', required: true, name: 'email', type: 'email' },
    { placeholder: 'CURSO_DESEJADO', name: 'course', select: true },
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

    if (!prevProps.success && this.props.success) {
      this.setState(() => ({
        name: '',
        phone: '',
        email: '',
        course: '',
        message: ''
      }));
    }
  }

  submitModal = (e) => {
    e.preventDefault();

    if (this.state.course) {
      this.setState((state) => {
        const selectedCourse = this.props.packages.find(course => course.value === state.course);
        const course = `${selectedCourse.text} Semanas de Curso`;
        return { course };
      });
    }

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
            <div className="modal__close" onClick={this.handleClose(true)} />

            {!this.props.success ? (
              <form className="modal__form" onSubmit={this.submitModal}>
                {this.fields.map(field => (
                  <FormField
                    {...field}
                    id={field.name}
                    key={field.name}
                    options={this.props.packages.map(item => ({
                      ...item, text: `${item.text} ${content.SEMANAS_DE_CURSO}`
                    }))}
                    value={this.state[field.name]}
                    placeholder={content[field.placeholder]}
                    onChange={this.handleChange(field.name)}
                    selected={this.props.id}
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
