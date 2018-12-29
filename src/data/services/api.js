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
        type: record.fields.Tipo,
        title: record.fields.Titulo,
        description: record.fields.Descricao,
        destiny: record.fields.Destino,
        image: record.fields.Imagem[0]?.url,
        hourlyDuration: record.fields.DuracaoSemanal,
        weeklyDuration: record.fields.DuracaoEmSemanas,
        lodgingDuration: record.fields.DuracaoHospedagem,
        lodgingPlaces: record.fields.HospedagemLocal,
        price: record.fields.Preco,
        language: record.fields.Idioma,
        included: record.fields.Inclui,
        notIncluded: record.fields.NaoInclui
      })));
  },
  getBlogPosts: () => {
    const table = '/Blog';
    const query = stringify({
      'sort[0][field]': 'DataPublicacao',
      'sort[0][direction]': 'asc',
      filterByFormula: 'Ativo',
      fields: ['ID', 'Destaque', 'Titulo', 'Texto', 'Imagens', 'Autor', 'Publicador', 'DataPublicacao', 'Categoria', 'Descricao']
    });

    return fetch(`${table}?${query}`)
      .then(({ data }) => data.records.map(record => ({
        id: record.id,
        highlight: record.fields.Destaque,
        title: record.fields.Titulo,
        text: record.fields.Texto,
        images: record.fields.Imagens.map(image => image.url),
        author: record.fields.Autor,
        publisher: record.fields.Publicador,
        date: record.fields.DataPublicacao,
        category: record.fields.Categoria,
        description: record.fields.Descricao
      })));
  }
};
