import React from "react";
import { connect } from "react-redux";
import Content from "./content";
import { withRouter } from "react-router-dom";
import {
  addPosts,
  postThunk,
  statusThunk,
  setStatusThunk,
} from "./State/postReducer";
import { hocComponent } from "../site/hoc/hoc";
import { compose } from "redux";
import { getPosts } from "./State/Selectors/selector";

class Conteiner extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    
    if (!userId) {
      
      userId = 1247;
    }
    this.props.postThunk(userId);
    this.props.statusThunk(userId);
  }

  render() {
    return (
      <div>
        <Content {...this.props} status={this.props.status} 
        setStatusAC={this.props.setStatusThunk} />
      </div>
    );
  }

}
let mapStateToProps = store => ({
  profile: store.postPage.profile,
  posts: getPosts(store),
  text: store.postPage.newText,
  photos: store.postPage.photos,
  contacts: store.postPage.contacts,
  isAuth: store.login.auth,
  status: store.postPage.status
});

export default compose(
  connect(
    mapStateToProps,
    { postThunk, addPosts, statusThunk,setStatusThunk }
  ),
  hocComponent,
  withRouter
)(Conteiner);
