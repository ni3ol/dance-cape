import axios from 'axios';

const instance = axios.create({
  baseURL: config.API_ENDPOINT,
  headers: { 'Content-Type': 'application/json' },
  transformRequest: data => JSON.stringify(data),
});

export default instance;
