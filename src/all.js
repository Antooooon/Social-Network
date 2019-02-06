import React from "react";
import classes from "./all.module.css";
import Header from './site/header';
import Menu from './site/menu';
import Content from './site/content';
import Footer from './site/footer';
import Mesenger from './site/mesenger';
import Music from './site/music';
import News from './site/news';
import Photo from './site/photo';
import Settings from './site/settings';
import {BrowserRouter,Route} from "react-router-dom";


export default class All extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        
        return (
            <BrowserRouter>

            
        <div className={classes.conteiner}>


            <div className={classes.header}>
                <Header />
            </div>
            <div className={classes.menu}>
                <Menu friends={this.props.friends} />
            </div> 
             <div className={classes.content}>
                <Route path='/mesenger' render={()=> <Mesenger  mess={this.props.mess} addMessage={this.props.addMessage} setMessage={this.props.setMessage} vlaueMessage={this.props.vlaueMessage} />} />
            
            <Route path='/content' render={()=><Content posts={this.props.posts} addPost={this.props.addPost}  setText={this.props.setText}  text={this.props.text} />} />
            
            <Route path='/music' component={Music} />
            <Route path='/photo' component={Photo} />
            <Route path='/news' component={News} />
            <Route path='/settings' component={Settings} />
            </div>
          
            <div className={classes.footer}>
                <Footer />
            </div>
            {/* <div> 
             <Mesenger/>
            </div> */}


        </div>
         </BrowserRouter>)
    }
}