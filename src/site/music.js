import React from 'react';

    const Music = (props)=>{
let music = props.playlist.map((item)=>{return(<div>{item}</div>)    })

const newText = React.createRef();
let addSong = ()=>{
    props.songs()
}
let addText = ()=>{
    let text = newText.current.value;
    props.texta(text)
}
return(
    <div>
    <textarea ref={newText} onChange={addText} value={props.text} ></textarea>
    <button type="button"  className="btn btn-success" onClick={addSong}>Success</button>

{music}
       </div>
   
)
    }
    export default Music;