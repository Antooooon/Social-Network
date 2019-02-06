import React from 'react';
import s from './header.module.css'

export default class Header extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div className={s.header}>

                <div className={s.logo}>
                    <img src={require('../img/socialNetwork.png')} />


                <div className={s.reg}>
                <button type="button" className="btn btn-secondary" data-toggle="tooltip" data-placement="left" title="Tooltip on left">
 Rigister
</button>
               
                    
                    </div>
                <div className={s.sign}>
                <button type="button" className="btn btn-secondary" data-toggle="tooltip" data-placement="left" title="Tooltip on left">
 Sign In
</button>
     
                </div>

 </div>
            </div>
        )
    }
}