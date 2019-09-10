import React from "react";
import Image from "../../../img/loading.png";

class  Preloader  extends React.Component{
    render(){
        return(
            <div>
         <img style={{ width: 100 }} src={Image} />
            </div>
        )
    }

}
export default Preloader;