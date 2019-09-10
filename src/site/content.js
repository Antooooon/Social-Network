import React from "react";
import s from "./content.module.css";
import Posts from "./Posts/post";
import { NavLink } from "react-router-dom";
import Status from "./statusComponent";
import {Field,reduxForm} from "redux-form";
const Content = props => {
  let array = props.posts.map(item => {
    return (
      <div>
        <Posts
          name={item.name}
          data={item.data}
          like={item.like}
          ava={item.ava}
          post1={item.post1}
          likeImg={item.likeImg}
        />
      </div>
    );
  });

  const dataForm = (data)=>{
    props.addPosts(data.newPost)
  }

  let names = "";
  if (!props.profile.fullName) {
    names = "Anton Kliachonak";
  } else {
    names = props.profile.fullName;
  }
  return (
    <div className={s.content}>
      <div className={s.fon}>
        <div className={s.ava}>
          <img src={props.photos.large} />
        </div>
      </div>

      <div className={s.next}>
        <div className={s.name}>{names}</div>

        <hr className={s.hr} />
        <div>
          <Status status={props.status}  setStatusAC={props.setStatusAC}/>
        
        </div>

        <div class="col-md-3" className={s.about}>
          <div className={s.introduction}>Introduction</div>
          <hr className={s.hr1} />
          <div className={s.saboutData}>
            <div className={s.pol}>Pol:</div>
            <div className={s.age}>Age:</div>
            <div className={s.country}>Country:</div>
            <div className={s.city}>City:</div>
            <div className={s.brithday}>
              Social:
              <NavLink to={`${props.contacts.vk}`}>{props.contacts.vk}</NavLink>
            </div>
            <div className={s.brithday}>About:{props.profile.aboutMe}</div>
          </div>
        </div>

       <PostReduxForm onSubmit={dataForm} />

       <div className={s.posts} class="col-md-8">
       {array}
       </div>
      </div>
    </div>
  );
};
export default Content;


const postForm = (props)=>{
  return(
    <form onSubmit={props.handleSubmit}>
    <div className={s.posts} class="col-md-8">
              <div className="form-group green-border-focus">
                <label for="exampleFormControlTextarea5">New Post</label>
      <Field  id="exampleFormControlTextarea5"    rows="3"
      className="form-control" component ="textarea" name="newPost" />
              </div>
              <div className={s.button}>
               <button className="btn btn-success" type={"submit"}>Send</button>
              </div> 
             
            </div>
      </form>
  )
}
const PostReduxForm = reduxForm(
  {form:"post"}
)(postForm);
