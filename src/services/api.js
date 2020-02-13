import axios from 'axios';

const api = axios.create({
  //for android
  baseURL: 'http://localhost:3333',
  // baseURL: 'https://gobarber.dideveloper.com',
  //IP for ios on device
  // baseURL: 'http://10.0.0.21:3333',
});

export default api;
