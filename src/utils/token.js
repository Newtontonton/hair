//封装任何一个函数都要return返回值，不要用默认的undefined


const key = 'pc-key';

const setToken = (token)=>{
  return window.localStorage.setItem(key,token)
}
const getToken = ()=>{
  return window.localStorage.getItem(key)
}
const removeToken = (token)=>{
  return window.localStorage.removeItem(key,token)
}
export{
  setToken,
  getToken,
  removeToken
}