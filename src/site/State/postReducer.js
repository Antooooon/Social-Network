import React from 'react';
import {useApi} from "../../api";
export  const addPosts = (textPost) => ({type:addpost,textPost});
export const setAboutProfile = (userData) => ({type:profile,userData});
export const setPhotosProfile = (photos) => ({type:photo,photos});
export const setContactsProfile = (contacts) => ({type:contact,contacts});
export const getStatusAC = (status) => ({type:statusik,status});



const addpost = "ADD_POST";
const addposttext = "SET_TEXT";
const profile = "PROFILE";
const photo = "PHOTO";
const contact = "CONTACT";
const statusik = "STATUS";

let initialState =   {
    arrPosts: [
        { name: "Anton Kliachonak", data: "10 junary 2019", like: 25, ava: <img src={require('../../img/ava.jpg')} />, post1: <img src={require('../../img/post1.jpg')} />, likeImg: <img src={require('../../img/like.png')} /> },
        { name: "Anton Kliachonak", data: "14 junary 2019", like: 21, ava: <img src={require('../../img/ava.jpg')} />, post1: <img src={require('../../img/post2.jpg')} />, likeImg: <img src={require('../../img/like.png')} /> },
        { name: "Anton Kliachonak", data: "18 junary 2019", like: 37, ava: <img src={require('../../img/ava.jpg')} />, post1: <img src={require('../../img/post3.jpg')} />, likeImg: <img src={require('../../img/like.png')} /> },
    ],
    newText:"",
    profile:"",
    photos:"",
    contacts:"",
    status:"",
};
let postReducer = (state = initialState,action)=>{
    switch (action.type){
        case addpost:{
        let obj = {
            name: "Anton Kliachonak",
            data: "10 junary 2019",
            like: 0,
            ava: <img src={require('../../img/ava.jpg')} />,
            post1: action.textPost,
            likeImg: <img src={require('../../img/like.png')} />
        }
 
        return {
            ...state,
            arrPosts:[...state.arrPosts,obj],
            newText:""
        
        };
        
    }
  
    case photo:{
        return{
            ...state,
            photos:action.photos,
        };
       
   
    }
    case profile:{
        return{
            ...state,
            profile:action.userData,
        };
       
   
    }
    case contact:{
        return{
            ...state,
            contacts:action.contacts,
        };
       
       
   
    }
    case statusik:{
        return{
            ...state,
            status:action.status, 
    }
}
    
    default: return state;
    }
}


export const postThunk=(userId)=>{
    return (dispatch)=>{
        
                useApi.contentConteiner(userId)
                    .then(data => {
                        dispatch(setAboutProfile(data));
                        dispatch(setContactsProfile(data.contacts));
                        dispatch(setPhotosProfile(data.photos));
                        
                    })
        
            
    }
    }
 
    export const statusThunk=(userId)=>{
        return (dispatch)=>{
            
                    useApi.getStatus(userId)
                        .then(data => {
                            dispatch(getStatusAC(data));
                          
                            
                        })
            
                
        }
        }
        export const setStatusThunk=(textStatus)=>{
            return (dispatch)=>{
                useApi.setStatus(textStatus)
                .then(data =>{
                    dispatch(getStatusAC(textStatus));
                })
            }
        }

export default postReducer;