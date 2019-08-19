import React from "react";
let initialState = {
    friendsAva: [
        <a href="#"><img src={require('../../img/ava1.jpg')} /></a>,
        <a href="#"><img src={require('../../img/ava2.jpg')} /></a>,
        <a href="#"><img src={require('../../img/ava3.jpg')} /></a>,
        <a href="#"><img src={require('../../img/ava4.jpg')} /></a>,
        , <a href="#"><img src={require('../../img/ava5.jpg')} /></a>,
        <a href="#"><img src={require('../../img/ava6.jpg')} /></a>,
    ]
};
let sidebarReducer = (state = initialState)=>{
        return state;
}
export default sidebarReducer;