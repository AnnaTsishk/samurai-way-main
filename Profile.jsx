import React from 'react';
import cl from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";


const Profile = ()=> {
    return <div className={cl.content}>
        <div>
            <img src= 'https://biosfera92.ru/images/stati/ecology.JPG'/>
        </div>
        <div>ava+description</div>
        <MyPosts />
        </div>
}
export default Profile;