import React from 'react';
import s from './mesenger.module.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Component = (props) => {
    let porpsId = "/mesenger/" + props.id;

    return (

        <div>
            <NavLink  to={porpsId}><img src={require("../img/" + props.avatar + ".jpg")}></img>{props.name}</NavLink>
        </div>
    )
}
Component.PropTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number,
    avatar: PropTypes.string,
    key: PropTypes.number,


}
Component.defaultProps = {
    name: "Please enter your name",


}


const Mess = (props) => {
    return (
        <div>
            <li>{props.message}</li>

        </div>
    )
}




const Mesenger = (props)=>{
    
    const newMessage = React.createRef();
    let addMessage = ()=>{
    props.addMessage();
    }
    let setMessage = ()=>{
        let text = newMessage.current.value;
        props.setMessage(text)
    }

            
                
                return(
                
                        <div className={s.allMesenger}>
                            <div className={s.mesengers}>
                                <div className={s.names}>
                                    {props.mess.objName.map((item, i) => {
                                        return (<Component key={i} name={item.name}  avatar={item.ava} id={item.id} />)
            
                                    })}
            
                                </div>
                                <div className={s.mesanger}>
            
                                    {props.mess.objMess.map((item, i) => { return (<Mess key={i} message={item.mes} />) })}
                                </div>
            
                                <div clasnewMessagesName={s.dialogs}>
                                    <div className="form-group">
                                        
                                        <textarea ref={newMessage} value={props.vlaueMessage} onChange={setMessage} className="form-control rounded-0" id="exampleFormControlTextarea2" rows="3"></textarea>
                                        <button type="button"  className="btn btn-success" onClick={addMessage}>Success</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
            
            
                }
            
    


   
export default  Mesenger;