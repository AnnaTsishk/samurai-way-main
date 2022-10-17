import React from 'react';
import cl from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props)=> {
    return(
        <div>
        <div>My posts</div>
        <div>
            <textarea></textarea>
        </div>
        <div>
            <button>Add post</button>
        </div>
        <div className={cl.posts}>
            <Post message="Hi, how are you?" likesCount="5" />
            <Post message= "It's my first post" likesCount="2"/>
            <Post message= "Yo!" likesCount="3"/>
       </div>
    </div>)
}
export default MyPosts;