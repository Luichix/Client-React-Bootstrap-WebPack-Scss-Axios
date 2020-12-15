import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:8081/',
  headers: { 'Content-type': 'application/json' }
})

export default api
