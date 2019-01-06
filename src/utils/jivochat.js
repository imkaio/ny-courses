/* eslint-disable no-unused-vars */
window.jivo_onLoadCallback = () => {
  const jivo = document.createElement('div');
  jivo.setAttribute('id', 'jivo_custom_widget');
  jivo.classList.add('jivo__widget');
  jivo.innerHTML = '<span class="jivo__content">...</span>';

  document.body.appendChild(jivo);

  jivo.addEventListener('click', () => window.jivo_api.open());

  if (window.jivo_config.chat_mode === 'online') {
    jivo.classList.add('jivo--online');
  }
};

window.jivo_onOpen = () => {
  const jivo = document.getElementById('jivo_custom_widget');
  if (jivo) jivo.classList.remove('jivo--online');
};

window.jivo_onClose = () => {
  const jivo = document.getElementById('jivo_custom_widget');
  if (jivo && window.jivo_config.chat_mode === 'online') jivo.classList.add('jivo--online');
};
