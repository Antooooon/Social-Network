import React from "react";
import s from "./mesenger.module.css";
import { NavLink } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import {Input} from "../FormsControl/poleForms"
import { required,maxLengthCreator } from "../FormsControl/validators";



const Component = props => {
  let porpsId = "/mesenger/" + props.id;

  return (
    <div>
      <NavLink to={porpsId}>
        <img src={require("../img/" + props.avatar + ".jpg")} />
        {props.name}
      </NavLink>
    </div>
  );
};

const Mess = props => {
  return (
    <div>
      <li>{props.message}</li>
    </div>
  );
};

const Mesenger = props => {
  const dataForm = data => {
    props.addMessage(data.mesageText);
  };
  return (
    <div className={s.allMesenger}>
      <div className={s.mesengers}>
        <div className={s.names}>
          {props.mess.objName.map((item, i) => {
            return (
              <Component
                key={i}
                name={item.name}
                avatar={item.ava}
                id={item.id}
              />
            );
          })}
        </div>
        <div className={s.mesanger}>
          {props.mess.objMess.map((item, i) => {
            return <Mess key={i} message={item.mes} />;
          })}
        </div>

        <MessageFormRedux onSubmit={dataForm} />
      </div>
    </div>
  );
};
export default Mesenger;
const max = maxLengthCreator(10);
const mesagerForm = props => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div clasnewMessagesName={s.dialogs}>
        <div className="form-group">
          <Field
            name="mesageText"
            component={Input}
            className="form-control rounded-0"
            rows="3"
            validate = {[required,max]}
          />
          <div>
            <button type={"submit"} className="btn btn-success">
              Send
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

const MessageFormRedux = reduxForm({ form: "message" })(mesagerForm);
