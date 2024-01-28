import { api } from "../../index";
import { loginApi } from "./loginInstance";
import jwt_decode from 'jwt-decode';

  function getLoggedUser() {
    return new Promise(resolve => {
      const token = localStorage.getItem("token");
      resolve(token);
    });
  }
  
  async function login (user: { email: string; password: string }) {
    try {
      const data  = loginApi.post(`/users/login`, user)
 
      const result = await data;
      const token = result.data;
      const authUser:any = jwt_decode(token.token);
      const username = authUser.preferred_username;
      console.log("USUARIO", authUser)
      localStorage.setItem('username', username);
    
      console.log(token);
      localStorage.setItem('token', JSON.stringify(token) );
    } catch (error) {
      throw error; 
    }
  }

  export default {
    login,
    getLoggedUser
  };
  



