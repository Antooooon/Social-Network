import Menu from "./menu";
import { connect } from 'react-redux';



const mapStateToProps = (store)=>{
    return{
        friends:store.sideBar.friendsAva,
    }
};

        
    

const MenuContent = connect(mapStateToProps,{})(Menu);
export default MenuContent;