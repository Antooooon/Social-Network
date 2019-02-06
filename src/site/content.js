import React from 'react';
import s from './content.module.css';
import Posts from './Posts/post'

const Content = (props)=>{
    let array = props.posts.map((item,index)=>{
        return(
            <div>
                <Posts name={item.name} data={item.data} like={item.like} 
                ava={item.ava} post1={item.post1} likeImg={item.likeImg} />
            </div>
        )
    })

    const newPost = React.createRef();
    let addPost = ()=>{
        let text = newPost.current.value;
        props.addPost();
        
    }
    let setText = ()=>{
        props.setText(newPost.current.value);
       
    }
    return (
        <div className={s.content}>
            <div className={s.fon}>
                <div className={s.ava}>
                    <img src={require('../img/ava.jpg')} />
                </div>

            </div>

            <div className={s.next}>

                <div className={s.name}>
                    Anton Kliachonak
        </div>


                <hr className={s.hr} />


                <div class="col-md-3" className={s.about} >
                    <div className={s.introduction}>
                        Introduction
</div>
                    <hr className={s.hr1} />
                    <div className={s.saboutData}>
                        <div className={s.pol}>Pol:</div>
                        <div className={s.age}>Age:</div>
                        <div className={s.country}>Country:</div>
                        <div className={s.city}>City:</div>
                        <div className={s.brithday}>Brithday:</div>
                    </div>

                </div>


                <div className={s.posts} class="col-md-8">



                    <div className="form-group green-border-focus">
                        <label for="exampleFormControlTextarea5">New Post</label>
                        
                        <textarea ref={newPost} className="form-control" id="exampleFormControlTextarea5" rows="3"   onChange={setText} value={props.text}></textarea>
                    </div>
                    <div className={s.button}>
                        <button type="button" onClick={addPost} className="btn btn-success">Add</button>
                    </div>

                        {array}
                   




                </div>
            </div>



        </div>
    )
}
      export default Content;
