const initialState = {
  items: [
    { language: 'MENU_INICIO', path: '/' },
    { language: 'MENU_PACOTES', path: '/pacotes' },
    { language: 'MENU_CONTATO', path: '/contato' },
    { language: 'MENU_BLOG', path: '/blog' }
  ]
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};
