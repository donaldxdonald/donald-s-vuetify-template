import axios from 'axios'
import Message from '@/utils/message'

const instance = axios.create({
  baseURL: process.env.VUE_BASE_URL,
  timeout: 15000
})

instance.interceptors.request.use(config => {
  return config
}, error => {
  console.log(error)
  return Promise.reject(error)
})

instance.interceptors.response.use(res => {
  return res
}, error => {
  Message({
    message: error.message,
    color: 'error'
  })
  return Promise.reject(error)
})

export default instance
