import React from "react";
import { useApi } from "../../api";
export const folows = userId => ({ type: folow, user: userId });
export const unfollow = userId => ({ type: unfolow, user: userId });
export const setUsers = user => ({ type: users, people: user });
export const setTotal = total => ({ type: count, total });
export const usersCount = count => ({ type: userCount, count });
export const pagesCount = pages => ({ type: page, pages });
export const pageLoading = val => ({ type: preload, val });
export const buttonID = (isfetching, id) => ({ type: butID, isfetching, id });

const users = "USERS";

const preload = "PRELOAD";

const page = "PAGE";

const userCount = "USERS_COUNT";

const count = "COUNT";

const folow = "FOLOW";

const unfolow = "UNFOLOW";

const butID = "BUTTON";

let initialState = {
  friend: [],

  totalCount: 0,

  userCount: 0,

  pageUser: 0,

  isPreloading: false,

  isButtonId: []
};

let friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case folow: {
      return {
        ...state,
        friend: state.friend.map(u => {
          if (u.id === action.user) {
            return { ...u, add: true };
          }
          return u;
        })
      };
    }
    case unfolow: {
      return {
        ...state,
        friend: state.friend.map(u => {
          if (u.id === action.user) {
            return { ...u, add: false };
          }
          return u;
        })
      };
    }
    case users: {
      return { ...state, friend: action.people };
    }
    case page: {
      return { ...state, pageUser: action.pages };
    }

    case count: {
      return { ...state, totalCount: action.total };
    }

    case preload: {
      return { ...state, isPreloading: action.val };
    }
    case userCount: {
      return { ...state, userCount: action.count };
    }
    case butID: {
      return {
        ...state,
        isButtonId: action.isfetching
          ? [...state.isButtonId, action.id]
          : state.isButtonId.filter(id => id != action.id)
      };
    }
    default:
      return state;
  }
};
export const getUsers = par => {
  return dispatch => {
    dispatch(pageLoading(true));
    useApi.setUsers().then(data => {
      dispatch(pageLoading(false));
      dispatch(setUsers(data.items));
      dispatch(setTotal(data.totalCount));
      dispatch(usersCount(data.items.length));
      par();
    });
  };
};

export const getUsers2 = sob => {
  return dispatch => {
    dispatch(pageLoading(true));
    dispatch(pagesCount(sob));
    useApi.setUsers1(sob).then(data => {
      dispatch(setUsers(data.items));
      dispatch(pageLoading(false));
    });
  };
};
export const unfollowThank = userId => {
  return dispatch => {
    dispatch(buttonID(true, userId));
    useApi.getUnfollow(userId).then(data => {
      if (data.resultCode == 0) {
        dispatch(unfollow(userId));
      }
      dispatch(buttonID(false, userId));
    });
  };
};
export const followThank = userId => {
  return dispatch => {
    dispatch(buttonID(true, userId));
    useApi.getfollow(userId).then(data => {
      if (data.resultCode == 0) {
        dispatch(folows(userId));
      }
      dispatch(buttonID(false, userId));
    });
  };
};

export default friendsReducer;
