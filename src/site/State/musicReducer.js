import React from "react";
export let texta = (texts)=>({type:song,textSong:texts});
export let songs = ()=>({type:addsong});
const song = "SONG"
const addsong = "ADD_SONG"
let initialState = {
   playlist: [
       "Maks Korsh","Zveri","Story Of The_Year",
   ],
   newText:"",
};
let musicReducer = (state = initialState,action)=>{
 switch (action.type){
     case  addsong:
     let newSong = state.newText;
     return{
         ...state,
         playlist:[...state.playlist,newSong],
         newText:"",
     }

     case song:
     return{
        ...state,
        newText:action.textSong
    };

   default: return state;
}
}
export default musicReducer;
