import { stopSubmit } from "redux-form";
import { useApi } from "../../api";

export const dataLogin=(id,email,login)=>({type:setDataLogin,id,email,login})
export const setAuth=(id)=>({type:setLoginAuth,id})
export const exitAC=(error)=>({type:exitLoginAC,error})
export const exitUser = () => ({
    type: isAuthExit,
    
  });
  export const trueIsAUTH = () => ({
    type: isAuthTrue,
    
  });
const setDataLogin = "SET_DATA";
const setLoginAuth = "SET_LOGIN";
const exitLoginAC = "EXIT_LOGIN";
const isAuthExit = "EXIT_IS_AUTH";
const isAuthTrue = "TRUE_IS_AUTH";
let initialState = {
    id:"",
    email:"",
    login:"",
loginID:"",
messageError:"",
isAuth:"",

}

let authResucer = (state = initialState,action)=>{
    switch(action.type){
        case setDataLogin:{
            return{
                ...state,
                id:action.id,
                email:action.email,
                login:action.login,
                isAuth:true,

            }
        };
        case setLoginAuth :{
            return{
                ...state,
                loginID:action.id,
                
            }
        };
        case exitLoginAC :{
            return{
                ...state,
                messageError:action.error,
                
            }
        };
        case isAuthExit : {
            return{
              ...state,
              isAuth:false
            }
          };
          case isAuthTrue : {
            return{
              ...state,
              isAuth:true
            }
          };
        default: return state;
    }
}
export const authThunk=()=>{
return(dispatch)=>{
     useApi.dataApiLogin().then(data =>{
        if(data.resultCode != 0){
            dispatch(dataLogin("","Регайся Чувачок","Регайся Чувачок"))
            dispatch(exitUser())
        }else{
            dispatch(trueIsAUTH())
            dispatch(dataLogin(data.data.id,data.data.email,data.data.login))
        }
        
    })
}
}
export const loginThunk=(email,password,rememberMe)=>{
    return(dispatch)=>{
useApi.authApiLogin(email,password,rememberMe).then(data=>{
    if(data.resultCode === 0){
        dispatch(setAuth(data.data.userId))
        dispatch(trueIsAUTH())

    }else{
        let messageError = data.messages.length>0?data.messages[0]:"SomeError";
        dispatch(stopSubmit("Login",{_error:messageError}))
    }
    
})

    }
}

export const exitThunk=()=>{
    return(dispatch)=>{
        useApi.deleteApiLogin().then(data=>{
            if(data.resultCode !=0){
                dispatch(exitAC(data.messages))
                dispatch(exitUser())
            }
        })
    }
}
export default authResucer;