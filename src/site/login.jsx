import React from "react";
import {reduxForm,Field} from "redux-form";
import { connect } from "react-redux";
import {authThunk,loginThunk} from "./State/auth";





const LoginForm = (props) => {
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={props.handleSubmit}>
      <div><Field component={"input"} name={"email"} placeholder={"Email"}/></div>
      <div><Field component={"input"} name={"password"} placeholder={"Password"}/></div>
      <div><Field component={"input"} name={"remember"} type={"checkbox"}/> Remember me</div>
      

<div><button type={"submit"}>Send</button></div>
      </form>
      
    </div>
  );
};


const LoginReduxForm = reduxForm({
  form: "Login"
})(LoginForm);




const Login = (props)=>{
props.authThunk()
  const dataForm=(data)=>{
      console.log(data);
      props.loginThunk(data.email,data.password,data.remember)
  };
  return (
    <div>
      <LoginReduxForm onSubmit={dataForm}/>
      <div>My id:{props.id}</div>
    <div>My Email:{props.email}</div>
    <div>My Login:{props.login}</div>
    </div>
  );
  }




     


const mapStateToProps = (store)=>({
  id:store.auth.id,
  email:store.auth.email,
  login:store.auth.login,
})





export default connect(mapStateToProps,{authThunk,loginThunk})(Login);
