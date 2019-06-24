import axios from 'axios';

export default axios.create({
  base_URL: 'http://localhost:3333',
});

export const ViaCepApi = axios.create({
  base_URL: 'https://viacep.com.br',
});
