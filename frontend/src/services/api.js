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

const apiMethod = async (method, endpoint, body) => fetchAPI
  .request({ method, url: endpoint, data: body })
  .then(({ status, data }) => ({ status, data }));

/*
const getPerson = async () => axios.get(`${URL}/person`)
const postPerson = async (data) => axios.post(`${URL}/person`, data)
const putPerson = async (id, changes) => axios.put(`${URL}/person/${id}`, changes)
const deletePerson = async (id) => axios.delete(`${URL}/person/${id}`)
*/

export default apiMethod;