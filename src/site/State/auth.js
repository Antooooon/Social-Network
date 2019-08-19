import React from "react";
import {useApi} from "../../api";
export const dataLogin=(id,email,login)=>({type:setDataLogin,id,email,login})
export const setAuth=(email,password,rememberMe)=>({type:setLoginAuth,email,password,rememberMe})
const setDataLogin = "SET_DATA";
const setLoginAuth = "SET_LOGIN"
let initialState = {
    id:"",
    email:"",
    login:"",
    password:"",
    rememberMe:"",

}
let authResucer = (state = initialState,action)=>{
    switch(action.type){
        case setDataLogin:{
            return{
                ...state,
                id:action.id,
                email:action.email,
                login:action.login

            }
        };
        case setLoginAuth :{
            return{
                ...state,
                email:action.email,
                password:action.password,
                rememberMe:action.rememberMe
            }
        };
        default: return state;
    }
}
export const authThunk=()=>{
return(dispatch)=>{
    useApi.dataApiLogin().then(data =>{
        if(data.resultCode != 0){
            dispatch(dataLogin("Регайся Чувачок","Регайся Чувачок","Регайся Чувачок"))
        }else{
            dispatch(dataLogin(data.data.id,data.data.email,data.data.login))
        }
        
    })
}
}
export const loginThunk=(email,password,rememberMe)=>{
    return(dispatch)=>{
useApi.authApiLogin(email,password,rememberMe)
    }
}
export default authResucer;