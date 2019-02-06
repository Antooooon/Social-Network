import React from 'react';
import ReactDOM from 'react-dom';
import All from '.././all.js';

export let ready = (Func,addPost,setText,addMessage,setMessage)=>{
    ReactDOM.render(<All posts={Func.postPage.arrPosts} setMessage={setMessage} vlaueMessage={Func.messagePage.newText}  mess={Func.messagePage} friends ={Func.friendsPage} addPost={addPost} addMessage={addMessage} setText={setText} text={Func.postPage.newText} />, document.getElementById('root'));


}
