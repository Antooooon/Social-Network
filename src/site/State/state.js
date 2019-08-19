import React from 'react';
import postReducer from './postReducer';
import messageReducer from './messageReducer';
let ready = ()=>{
console.log("State changed")
}
let Store = {
    func :{
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
    
    },
    addPost (){
        
        let obj = {
            name: "Anton Kliachonak",
            data: "10 junary 2019",
            like: 0,
            ava: <img src={require('../../img/ava.jpg')} />,
        

            post1: Store.func.postPage.newText,
            likeImg: <img src={require('../../img/like.png')} />
        }
        Store.func.postPage.arrPosts.push(obj)
        Store.func.postPage.newText = "";
        ready(this.func,this.addPost,this.setText,this.addMessage,this.setMessage);
    },

setText (text){
    Store.func.postPage.newText = text;
    ready(this.func,this.addPost,this.setText,this.addMessage,this.setMessage);
},
 addMessage(){
    let obj = {
        mes:Store.func.messagePage.newText,
    }
    Store.func.messagePage.objMess.push(obj);
    Store.func.messagePage.newText = "";
    ready(this.func,this.addPost,this.setText,this.addMessage,this.setMessage);
},
setMessage (text){
    Store.func.messagePage.newText = text;
    ready(this.func,this.addPost,this.setText,this.addMessage,this.setMessage);
},
dispatch(action){
    postReducer(Store.func.postPage,action);
    messageReducer( Store.func.messagePage,action);
    ready(this.func,this.addPost,this.setText,this.addMessage,this.setMessage);
   
},

subscriber(sta){
    ready = sta ;
}


};

export default Store;
