import React from "react";
import {statusThunk} from "./postReducer";
export const initiapAppAC = () => ({
    type: initialAPP,
    
  });

const initialAPP = "APP_READY";

const initialState = {
    isInitialApp:null,
};

let appReducer = (state = initialState,action)=>{
    switch(action.type){
        case initialAPP:{
            return{
                ...state,
                isInitialApp:true,

            }
        };
        default: return state;
    }
}

export const initialThunk = ()=>{
    return(dispatch)=>{
let promise = dispatch(statusThunk())
Promise.all([promise]).
        then(()=>{
        dispatch(initiapAppAC())
    })
   
    }
    
}
export default appReducer;