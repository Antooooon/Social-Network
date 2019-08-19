import React from 'react';
import {
  addMessage,
  setMessage
} from "./State/messageReducer";
import Mesenger from "./mesenger";
import { connect } from "react-redux";
import {hocComponent} from '../site/hoc/hoc';
import {compose} from "redux";



class testtComp extends React.Component{




  

  render(){
  
    return(
      <div>
        <Mesenger {...this.props}/>
      </div>
    )
  }
}




const MapStateToProps = store => {
  return {
    mess: store.messagePage,
    vlaueMessage: store.messagePage.newText,
    isAuth:store.login.auth,
  };
};

export default compose(
   connect(
    MapStateToProps,{
      addMessage,setMessage
    }
  ),
  hocComponent,
  )(testtComp);