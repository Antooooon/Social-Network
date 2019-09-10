import React from "react";
import { connect } from "react-redux";
import {Redirect} from 'react-router-dom';
export const hocComponent = (Component)=>{
    class reactComponent extends React.Component{
        render(){
            if(this.props.isAuth === false) return <Redirect to='login'/>
            return <Component {...this.props}/>
        }
    }
    const mapStateToProps = (store)=>({
        isAuth:store.auth.isAuth,
    });
let connectComponet = connect(mapStateToProps)(reactComponent);
return connectComponet;
}