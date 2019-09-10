import React from "react";
import { useApi } from "../../api";
export const setAuthUserData = (email, id, login) => ({
  type: SETUSERDATA,
  data: { email, id, login }
});
export const setAboutProfile = photos => ({
  type: SETUSERPHOTO,
  photos
});

const SETUSERDATA = "USER_ID";
const SETUSERPHOTO = "USER_PHOTO";

let initialState = {
  email: null,
  id: null,
  login: null,
  photo: "",
 
};

let loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETUSERDATA: {
      return {
        ...state,
        email: action.data.email,
        login: action.data.login,
        id: action.data.id,
       
      };
    }
    case SETUSERPHOTO: {
      return {
        ...state,
        photo: action.photos
      };
    }
  

    default:
      return state;
  }
};

export const loginThunk = kid => {
  return dispatch => {
    useApi.getAut().then(data => {
      let { email, id, login } = data.data;
      dispatch(setAuthUserData(email, id, login));
      useApi.getProfile(kid).then(data => {
        dispatch(setAboutProfile(data.photos));
      });
    });
  };
};

export default loginReducer;
