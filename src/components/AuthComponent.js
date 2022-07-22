const { getToken } = require("@/utils");
const { Navigate } = require("react-router-dom");
// import { getToken } from '@/utils'
// import { Navigate } from 'react-router-dom'

function AuthComponent({items}) {
  const isToken = getToken()
  if(isToken){
    return <>{items}</>
  }else{
    return <Navigate to='/login' replace />
  }
}

export {
  AuthComponent
}