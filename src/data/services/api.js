import axios from 'axios';
import { stringify } from 'query-string';

export const fetch = axios.create({
  baseURL: `https://api.airtable.com/v0/${process.env.APP_ID}`,
  headers: { Authorization: `Bearer ${process.env.API_TOKEN}` }
});

export default {
  getContent: (language = 'pt_BR') => {
    const table = '/Idioma';
    const query = stringify({
      fields: ['ID', language]
    });

    return fetch(`${table}?${query}`)
      .then(({ data }) => data.records.reduce((accumulator, { fields }) => ({
        ...accumulator,
        [fields.ID]: fields[language]
      }), {}));
  },
  getDisplay: () => {
    const table = '/Display';
    const query = stringify({
      'sort[0][field]': 'Ordem',
      'sort[0][direction]': 'asc',
      filterByFormula: 'Ativo',
      fields: ['ID', 'Titulo', 'Descricao', 'Imagem']
    });

    return fetch(`${table}?${query}`)
      .then(({ data }) => data.records.map(record => ({
        id: record.id,
        title: record.fields.Titulo,
        description: record.fields.Descricao,
        image: record.fields.Imagem[0]?.url
      })));
  },
  getPackages: () => {
    const table = '/Pacotes';
    const query = stringify({
      filterByFormula: 'Ativo'
    });

    return fetch(`${table}?${query}`)
      .then(({ data }) => data.records.map(record => ({
        id: record.id,
        title: record.fields.Titulo,
        description: record.fields.Descricao,
        image: record.fields.Imagem && record.fields.Imagem[0]?.url,
        hourlyDuration: record.fields.DuracaoSemanal,
        weeklyDuration: record.fields.DuracaoEmSemanas
      })));
  },
  getPackage: (id) => {
    const table = `/Pacotes/${id}`;

    return fetch(table)
      .then(({ data }) => ({
        id: data.id,
        type: data.fields.Tipo,
        title: data.fields.Titulo,
        description: data.fields.Descricao,
        destiny: data.fields.Destino,
        image: data.fields.Imagem && data.fields.Imagem[0]?.url,
        hourlyDuration: data.fields.DuracaoSemanal,
        weeklyDuration: data.fields.DuracaoEmSemanas,
        lodgingDuration: data.fields.DuracaoHospedagem,
        lodgingPlaces: data.fields.HospedagemLocal,
        price: data.fields.Preco,
        language: data.fields.Idioma,
        included: data.fields.Inclui,
        notIncluded: data.fields.NaoInclui,
        related: data.fields.Relacionados,
        text: data.fields.Texto
      }));
  },
  getBlogPosts: () => {
    const table = '/Blog';
    const query = stringify({
      'sort[0][field]': 'DataPublicacao',
      'sort[0][direction]': 'asc',
      filterByFormula: 'Ativo',
      fields: ['ID', 'Destaque', 'Titulo', 'Texto', 'Imagens', 'Autor', 'Publicador', 'DataPublicacao', 'Categorias', 'Descricao']
    });

    return fetch(`${table}?${query}`)
      .then(({ data }) => data.records.map(record => ({
        id: record.id,
        highlight: record.fields.Destaque,
        title: record.fields.Titulo,
        text: record.fields.Texto,
        image: record.fields.Imagens && record.fields.Imagens[0]?.url,
        author: record.fields.Autor,
        publisher: record.fields.Publicador,
        date: record.fields.DataPublicacao,
        category: record.fields.Categoria,
        description: record.fields.Descricao
      })));
  },
  getPost: (id) => {
    const table = `/Blog/${id}`;

    return fetch(table)
      .then(({ data }) => ({
        id: data.id,
        title: data.fields.Titulo,
        description: data.fields.Descricao,
        text: data.fields.Texto,
        images: data.fields.Imagens.map(image => image.url),
        author: data.fields.Autor,
        publisher: data.fields.Publicador,
        date: data.fields.DataPublicacao,
        categories: data.fields.Categorias,
        related: data.fields.Relacionados
      }));
  },
  postModal: (data) => {
    const body = new FormData();
    Object.entries(data).forEach(([key, value]) => body.append(key, value));

    return axios({
      data: body,
      method: 'POST',
      url: `${process.env.SITE_URL}/functions/form.php`,
      config: { headers: { 'Content-Type': 'multipart/form-data' } }
    });
  }
};
