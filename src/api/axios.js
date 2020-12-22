import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://192.168.1.5:8081/api',
  headers: { 'Content-type': 'application/json' }
})

export default api
