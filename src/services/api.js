import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gobarber.dideveloper.com',
});

export default api;
