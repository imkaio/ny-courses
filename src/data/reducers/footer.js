const initialState = {
  items: [
    {
      language: 'RODAPE_CONHECA',
      path: '/sobre',
      children: [
        { language: 'RODAPE_QUEM_SOMOS', path: '#quem-somos' },
        { language: 'RODAPE_COMO_FUNCIONA', path: '#como-funciona' }
      ]
    },
    {
      language: 'RODAPE_AJUDA',
      path: '/ajuda',
      children: [
        { language: 'RODAPE_ACOMODACAO', path: '#acomodacao' },
        { language: 'RODAPE_HOTEIS', path: '#hoteis' },
        { language: 'RODAPE_PASSAGENS', path: '#passagens-areas' },
        { language: 'RODAPE_CURSOS', path: '#cursos' }
      ]
    },
    {
      language: 'RODAPE_VIAJE',
      path: '/viaje',
      children: [
        { language: 'RODAPE_DUVIDAS', path: '#tire-suas-duvidas' },
        { language: 'RODAPE_POLITICA_PRIVACIDADE', path: '#politica-privacidade' },
        { language: 'RODAPE_TERMOS_USO', path: '#termos-uso' }
      ]
    }
  ]
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};
