import axios from 'axios';

const URL_DOCKER = process.env.REACT_APP_API_URI || 'http://localhost:3001'
const URL = `${URL_DOCKER}/people`

const getAll = async () => {
  const info = await axios.get(URL);
  return info.data;
}

const create = async (data) => axios.post(URL, data);
const edit = async (id, data) => axios.put(`${URL}/${id}`, data)
const remove = async (id) => axios.delete(`${URL}/${id}`)

export { getAll, create, edit, remove };