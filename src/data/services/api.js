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
  }
};
