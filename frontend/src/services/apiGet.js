import axios from 'axios';

const URL = process.env.REACT_APP_API_URI || 'http://localhost:3001'

const fetchAPI = axios.create({
  baseURL: URL,
  timeout: 1000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

const taskApi = async (method, endpoint, body) => fetchAPI
  .request({ method, url: endpoint, data: body })
    .then(({ status, data }) => ({ status, data }));

export default taskApi;