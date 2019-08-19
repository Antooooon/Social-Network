import Music from "./music";
import {songs,texta} from "./State/musicReducer";
import {connect} from "react-redux";
import {hocComponent} from '../site/hoc/hoc';
import { compose } from "redux";
const MapStateToProps = (state)=>{
    return{
 playlist:state.musicPage.playlist,
 text:state.musicPage.newText,
    }
}
export default compose (
    connect(MapStateToProps,{songs,texta}),
    hocComponent)(Music);
