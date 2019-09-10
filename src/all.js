import React from "react";
import classes from "./all.module.css";
import Header from './site/header_conteiner';
import Menu from './site/content_menu';
import Conteiner from './site/content_conteiner';
import Footer from './site/footer';
import Mesenger from './site/content_mesenger';
import Music from './site/content_music';
import News from './site/news';
import Login from './site/login.jsx';
import Photo from './site/photo';
import Settings from './site/settings';
import Friends from './site/content_friends';
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import {initialThunk} from "./site/State/appReducer";
import Preloader from "./site/hoc/Preloader/preloader";

class All extends React.Component{
    
    componentDidMount(){
        this.props.initialThunk()
        
    }
    render(){
        
        if(!this.props.isInitial){
            return <Preloader />
        }
        return (
            <BrowserRouter>
    
    
                <div className={classes.conteiner}>
    
    
                    <div className={classes.header}>
                        <Header />
                    </div>
                    <div className={classes.menu}>
                        <Menu />
                    </div>
                    <div className={classes.content}>
                        <Route path='/mesenger' render={() => <Mesenger />} />
    
                        <Route path='/content/:userId?' render={() => <Conteiner />} />
                        <Route path='/friends' render={()=><Friends />}/>
                        <Route path='/login' render={()=><Login />}/>
                        <Route path='/music' component={Music} />
                        <Route path='/photo' component={Photo} />
                        <Route path='/news' component={News} />
                        <Route path='/settings' component={Settings} />
                    </div>
    
                    <div className={classes.footer}>
                        <Footer />
                    </div>
    
    
    
                </div>
            </BrowserRouter>)
    }
    }
    let mapStateToProps = (store)=>({
isInitial:store.app.isInitialApp
    })
    
export default connect(mapStateToProps,{initialThunk})(All);

