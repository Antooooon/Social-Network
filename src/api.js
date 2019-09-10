import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "4228db99-c695-486a-8c8b-853db5660b0a"
  }
});

export const useApi = {
  getAut() {
    return instance.get(`auth/me`).then(response => {
      return response.data;
    })
  },

  getProfile(id) {
    return instance.get(`/profile/${id}`).then(response => {
      return response.data;
    })
  },
  getUnfollow(id) {
    return instance.delete(`follow/${id}`).then(response => {
      return response.data;
    })
  },
  getfollow(id) {
    return instance.post(`follow/${id}`).then(response => {
      return response.data;
    })
  },

  setUsers(){
    return instance.get(`users?page=1`).then(response => {
      return response.data;
    })
  },
  setUsers1(par1){
    return instance.get(`users?page=${par1}`).then(response => {
      return response.data;
    });
  },
contentConteiner(userId){
  return instance.get(`profile/${userId}`).then(response=>{
    return response.data;
  })
},
getStatus(userId){
  return instance.get(`profile/status/${userId}`).then(response=>{
    return response.data;
  })
},
setStatus(textStatus){
  return instance.put(`profile/status`,{status:textStatus})
  .then(response=>{
    return response.data;
  })
},
dataApiLogin(){
  return instance.get(`/auth/me`).then(response=>{
    return response.data;
  })
},
authApiLogin(email,password,rememberMe){
  return instance.post(`/auth/login`,{email:email,password:password,rememberMe:rememberMe})
  .then(response=>{
    return response.data;
  })
},
deleteApiLogin(){
  return instance.delete(`/auth/login`).then(response=>{
    return response.data;
  })
}
};
