import React from 'react';
import s from './menu.module.css';
import { NavLink } from 'react-router-dom';

const Menu =(props)=>{
   
        let friends = props.friends.map((item)=>{return(<div className={s.someFriends}>{item}</div>)

    })
        return (
            <div>
                <nav className={s.nav}>
                    <img className={s.icon} src={require('../img/home.png')} /> <div> <NavLink to="/content">Home</NavLink></div>
                    <img className={s.icon} src={require('../img/message.png')} /> <div><NavLink to="/mesenger">Message</NavLink></div>
                    <img className={s.icon} src={require('../img/music.png')} /><div> <NavLink to="/music">Music</NavLink></div>
                    <img className={s.icon} src={require('../img/photo.png')} />  <div> <NavLink to="/photo">Photo</NavLink></div>
                    <img className={s.icon} src={require('../img/news.png')} /> <div> <NavLink to="/news">News</NavLink></div>
                    <img className={s.icon} src={require('../img/news.png')} /> <div> <NavLink to="/friends">Friends</NavLink></div>
                    <img className={s.icon} src={require('../img/news.png')} /> <div> <NavLink to="/login">Login</NavLink></div>

                    <br /> <br /><br />
                    <img className={s.icon} src={require('../img/settings.png')} /> <div> <NavLink to="/settings">Settings</NavLink></div>
                    <br /> <br /><br />
                    <div className={s.friends}>
                        Friends

                        <div className={s.iconFriends}>
                        
                        {friends}
                        </div>
                </div>
                </nav>
            </div>
        )
    
}
export default Menu;
   
  