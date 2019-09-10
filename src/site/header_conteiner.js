import React from "react";
import Header from "./header";
import { connect } from "react-redux";
import {loginThunk } from "./State/loginReducer";

class HeaderConteiner extends React.Component {
  componentDidMount() {
    this.props.loginThunk(this.props.id);
  }

  render() {
    return <Header {...this.props} />;
  }
}

let MapStateToProps = store => {
  return {
    id: store.login.id,
    email: store.login.email,
    login: store.login.login,
    auth: store.auth.isAuth,
    photo: store.login.photo
  };
};

let Friendes = connect(
  MapStateToProps,
  { loginThunk}
)(HeaderConteiner);
export default Friendes;
