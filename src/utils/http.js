import axios from 'axios';
import { getToken } from './token';

const http = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0',
  timeout : 5000
})

http.interceptors.request.use((config)=>{
  const token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
},(error)=>{
  return Promise.reject(error);
})

http.interceptors.response.use((response)=>{
  return response.data
},(error)=>{
  return Promise.reject(error)
})

export {http}

// axios.interceptors.request.use(function (config) {
//   return config;
// }, function (error) {
//   return Promise.reject(error);
// });

// axios.interceptors.response.use(function (response) {
//   return response;
// }, function (error) {
//   return Promise.reject(error);
// });