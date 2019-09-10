import React from "react";
import {reduxForm,Field} from "redux-form";
import { connect } from "react-redux";
import {authThunk,loginThunk,exitThunk} from "./State/auth";
import {Input} from "../FormsControl/poleForms"
import { required,maxLengthCreator } from "../FormsControl/validators";
import styles from "../FormsControl/FormControls.module.css";



const maxLength10 = maxLengthCreator(20);
const LoginForm = (props) => {
  
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={props.handleSubmit}>
      <div><Field component={Input} validate={[required,maxLength10]}  name={"email"} placeholder={"Email"}/></div>
      <div><Field component={Input} validate={[required,maxLength10]}  name={"password"} placeholder={"Password"}/></div>
      <div><Field component={Input} name={"remember"} type={"checkbox"}/> Remember me</div>
     {props.error && <div className={styles.stopSubmit}>{props.error}</div>} 

<div><button type={"submit"}>Send</button></div>
      </form>
    </div>
  );
};


const LoginReduxForm = reduxForm({
  form: "Login"
})(LoginForm);



class Login extends React.Component{
constructor(props){
  super(props);
  this.state = {
email:"",
password:"",
remeber:"",
exit:"",
  }
  this.dataForm = this.dataForm.bind(this)
  this.kryf = this.kryf.bind(this)

}
dataForm=(data)=>{

      this.setState({
        email:data.email,
        password:data.password,
        remeber:data.remember,
        exit:false,
            })
    
     
     this.props.loginThunk(data.email,
      data.password,data.remember)
  };
  kryf=()=>{
   this.props.exitThunk();
   this.setState({
    exit:true
        })

   this.props.authThunk();

  };
  render(){
   
    return (
      <div>
        <LoginReduxForm {...this.props}  onSubmit={this.dataForm}/>
        {(this.props.id)?<button type={"submit"} 
        onClick={this.kryf}>Exit</button>:"stopSubmit"}
        {this.props.authThunk()}
        
        <div>My id:{this.props.id}</div>
      <div>My Email:{this.props.email}</div>
      <div>My Login:{this.props.login}</div>
      <div>{this.props.loginID}</div>
      </div>
    );
  } }

const mapStateToProps = (store)=>({
  id:store.auth.id,
  email:store.auth.email,
  login:store.auth.login,
  loginID:store.auth.loginID,
  messageError:store.auth.messageError,
})


export default connect(mapStateToProps,{authThunk,loginThunk,exitThunk})(Login);
