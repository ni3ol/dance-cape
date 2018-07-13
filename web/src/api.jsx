import axios from 'axios';
import config from 'web/config.jsx'

const instance = axios.create({
  baseURL: config.API_ENDPOINT,
  headers: { 'Content-Type': 'application/json' },
  transformRequest: data => JSON.stringify(data),
});

export default instance;
