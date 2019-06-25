import axios from 'axios';

export const AppApi = axios.create({
  baseURL: 'http://localhost:3333',
});

export const ViaCepApi = axios.create({
  baseURL: 'https://viacep.com.br',
});
