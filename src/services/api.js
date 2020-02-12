import axios from 'axios';

const api = axios.create({
  //for android
  baseURL: 'http://localhost:3333',
  //with IP for ios on device
  // baseURL: 'http://xxxxxxx.x.x:3333',
});

export default api;
