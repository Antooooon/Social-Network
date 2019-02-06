import React from 'react';
import {ready} from '../render';

const Func = {
    postPage: {
        arrPosts: [
            { name: "Anton Kliachonak", data: "10 junary 2019", like: 25, ava: <img src={require('../../img/ava.jpg')} />, post1: <img src={require('../../img/post1.jpg')} />, likeImg: <img src={require('../../img/like.png')} /> },
            { name: "Anton Kliachonak", data: "14 junary 2019", like: 21, ava: <img src={require('../../img/ava.jpg')} />, post1: <img src={require('../../img/post2.jpg')} />, likeImg: <img src={require('../../img/like.png')} /> },
            { name: "Anton Kliachonak", data: "18 junary 2019", like: 37, ava: <img src={require('../../img/ava.jpg')} />, post1: <img src={require('../../img/post3.jpg')} />, likeImg: <img src={require('../../img/like.png')} /> },
        ],
        newText:""
    },
    messagePage: {
        objName: [{ name: 'Kirill', id: 1, ava: 'ava1' },
        { name: 'Yana', id: 2, ava: 'ava2' },
        { name: 'Anton', id: 3, ava: 'ava3' },
        { name: 'Jenya', id: 4, ava: 'ava4' },
        { name: 'Kristina', id: 5, ava: 'ava5' },
        { name: 'Alex', id: 6, ava: 'ava6' },
        ],
        objMess: [
            { mes: "Hello" },
            { mes: "How are you" },
            { mes: "I am fine" },
            { mes: "How you???" },
        ],
        newText:""
    },
    friendsPage: {
        friendsAva: [
            <a href="#"><img src={require('../../img/ava1.jpg')} /></a>,
            <a href="#"><img src={require('../../img/ava2.jpg')} /></a>,
            <a href="#"><img src={require('../../img/ava3.jpg')} /></a>,
            <a href="#"><img src={require('../../img/ava4.jpg')} /></a>,
            , <a href="#"><img src={require('../../img/ava5.jpg')} /></a>,
            <a href="#"><img src={require('../../img/ava6.jpg')} /></a>,
        ]
    }

}
export let addPost = () => {

    let obj = {
        name: "Anton Kliachonak",
        data: "10 junary 2019",
        like: 0,
        ava: <img src={require('../../img/ava.jpg')} />,
        post1: Func.postPage.newText,
        likeImg: <img src={require('../../img/like.png')} />
    }
    Func.postPage.arrPosts.push(obj)
    Func.postPage.newText = "";
    ready(Func,addPost,setText,addMessage,setMessage);
}
export let setText = (text)=>{
    Func.postPage.newText = text;
    ready(Func,addPost,setText,addMessage,setMessage);
}
export let addMessage = ()=>{
    let obj = {
        mes:Func.messagePage.newText,
    }
    Func.messagePage.objMess.push(obj);
    Func.messagePage.newText = "";
    ready(Func,addPost,setText,addMessage,setMessage);
}
export let setMessage = (text)=>{
    Func.messagePage.newText = text;
    ready(Func,addPost,setText,addMessage,setMessage);
}
export default Func;