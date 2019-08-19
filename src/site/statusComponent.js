import React from "react";

export default  class statusComponent extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            set:false,
            status:"",
        }
this.setTrue.bind(this);
this.setFalse.bind(this);
this.setStatusText.bind(this);

    }
  
setTrue(){
    this.setState({
        set:true
    })
 
}
setFalse(){
    this.props.setStatusAC(this.state.status)
    this.setState({
        set:false,
       
    })
 
}
componentDidUpdate(prevProps,prevState){
    if(prevProps != this.props){
        this.setState({
            status:this.props.status,
        })
    }
let a = this.props;
let b = this.state;

}
setStatusText(event){
    this.setState({
        status:event.target.value,
    })

}
    render(){
    
        return(
          
            
            <div>
            {this.state.set === false?
                <div onClick={()=>{this.setTrue()}}>
 {this.state.status || "--------"}
            </div>:
            
            <div >
                <input onChange={(event)=>{this.setStatusText(event)}}  value={this.state.status} onBlur={(event)=>{{this.setFalse(event)}}} autoFocus={true}/>
            </div>
        }
        
            </div>
   
        )
    }
}
