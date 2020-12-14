import api from '../api/axios'

// const getAll = () => {
//   return api.get('/Content')
// }

// const get = id => {
//   return api.get(`/Content/${id}`)
// }

const create = data => {
  return api.post('/', data)
}

const signup = data => {
  return api.post('/signup', data)
}

// const update = (id, data) => {
//   return api.put(`/Content/${id}`, data)
// }

// const remove = id => {
//   return api.delete(`/Content/${id}`)
// }

// const removeAll = () => {
//   return api.delete('/Content')
// }

// const findByTitle = title => {
//   return api.get(`/Content?title=${title}`)
// }

export default {
  // getAll,
  // get,
  create,
  signup
  // ,
  // update,
  // remove,
  // removeAll,
  // findByTitle
}
