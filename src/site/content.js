import React from "react";
import s from "./content.module.css";
import Posts from "./Posts/post";
import { NavLink } from "react-router-dom";
import Status from "./statusComponent";
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

  const newPost = React.createRef();
  let addPosts = () => {
    props.addPosts();
  };
  let setTexts = () => {
    let text = newPost.current.value;
    props.setTexts(text);
  };
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

        <div className={s.posts} class="col-md-8">
          <div className="form-group green-border-focus">
            <label for="exampleFormControlTextarea5">New Post</label>

            <textarea
              ref={newPost}
              className="form-control"
              id="exampleFormControlTextarea5"
              rows="3"
              onChange={setTexts}
              value={props.text}
            />
          </div>
          <div className={s.button}>
            <button
              type="button"
              onClick={addPosts}
              className="btn btn-success"
            >
              Add
            </button>
          </div>

          {array}
        </div>
      </div>
    </div>
  );
};
export default Content;
