import {makeAutoObservable} from 'mobx';
import {http,setToken,getToken} from '@/utils';

class LoginStore{
  token = getToken()|| '';
  constructor(){
    makeAutoObservable(this)
  }
  //shoujihao suibian,246810
  getToken = async ({mobile,code})=>{
    const res =  await http.post('http://geek.itheima.net/v1_0/authorizations',{
      mobile,
      code
    })
    // console.log(res.data);
    this.token = res.data.token
    console.log(res.data);
    setToken(this.token)
    console.log(this);
  }
}
export default LoginStore