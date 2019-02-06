import React from 'react'
import s from './post.module.css'

export default class Post extends React.Component {
    constructor(props) {
        super();
       
    }
    render(){
        return(
            <div className={s.post}>
            <div className={s.miniAva}>
            {this.props.ava}
            </div>
            <div className={s.miniName}>
            {this.props.name}
        </div>
            <div className={s.seen}>
            {this.props.data}
        </div>
            <hr className={s.hr1} />

            <div className={s.postImg}>
            {this.props.post1}
            </div>

            <div className={s.like}>
                <button type="button" class="btn btn-link">{this.props.likeImg}</button>

            </div>
            <div className={s.countLike}>
                {this.props.like}
        </div>
        </div>
        )
    }
}