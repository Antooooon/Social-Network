import {combineReducers,createStore,applyMiddleware} from "redux";
import postReducer from './postReducer';
import messageReducer from './messageReducer';
import sidebarReducer from './sidebarReducer';
import misicReducer from "./musicReducer";
import friendsReducer from "./friendsReduser";
import loginReducer from "./loginReducer";
import thunkMiddleWare from "redux-thunk";
import authReducer from "./auth";
import {reducer as formReducer} from "redux-form";

let rootReducer = combineReducers({
    postPage:postReducer,
    messagePage:messageReducer,
    sideBar:sidebarReducer,
    musicPage:misicReducer,
    friends:friendsReducer,
    login:loginReducer,
    auth:authReducer,
    form:formReducer,
    
});
let store = createStore(rootReducer,applyMiddleware(thunkMiddleWare));
export default store;