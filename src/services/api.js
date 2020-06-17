import axios from 'axios';

const url = {
  production: 'https://gobarber.dideveloper.com',
  development: 'http://localhost:3333/',
};

const api = axios.create({
  baseURL: url.production,
});

export default api;
