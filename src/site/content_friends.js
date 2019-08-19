import React from "react";
import {
  folows,
  unfollow,
  getUsers2,
  buttonID,
  getUsers,
  unfollowThank,
  followThank,
} from "./State/friendsReduser";
import { connect } from "react-redux";
import Friend from "./friends";
import Image from "./../img/loading.png";
class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: []
    };
    this.total = this.total.bind(this);
    this.refreh = this.refreh.bind(this);
  }
  componentDidMount() {
    this.props.getUsers(this.total);
  }

  total() {
    let pages = Math.ceil(this.props.total / this.props.count) + 1;
    for (let i = 1; i < pages; i++) {
      let arr = [...this.state.array];
      arr.push(i);
      this.setState({ array: arr });
    }
  }
  refreh(e) {
    let sob = e.target.textContent;
    this.props.getUsers2(sob)
  }

  render() {
    return (
      <div>
        <div>
          {" "}
          {this.props.preload ? (
            <div>
              <img style={{ width: 100 }} src={Image} />
            </div>
          ) : (
            <div>
              <Friend
                array={this.state.array}
                refreh={this.refreh}
                users={this.props.users}
                unfollow={this.props.unfollow}
                folows={this.props.folows}
                buttonId={this.props.buttonID}
                butId={this.props.butId}
                unfollowThank={this.props.unfollowThank}
                followThank={this.props.followThank}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}
let MapStateToProps = store => {
  return {
    users: store.friends.friend,
    total: store.friends.totalCount,
    count: store.friends.userCount,
    page: store.friends.pageUser,
    preload: store.friends.isPreloading,
    butId:store.friends.isButtonId,
  };
};

let Friendes = connect(
  MapStateToProps,
  {
    folows,
    unfollow,
    buttonID,
    getUsers,
    getUsers2,
    unfollowThank,
    followThank
  }
)(Friends);
export default Friendes;
