import React from 'react';
import Us from './User.module.css';
// import { Link} from "react-router-dom";
import Pimg from '../../Png/profile_img.png';

const User=()=>{
    return(
        <div className={Us.content}>
            <img src={Pimg} alt="" />
            <div className={Us.details}>
                <span>User Name</span>
                <p>this is test message</p>
            </div>
            <input type="radio" checked />
        </div>
    );
}
export default User;