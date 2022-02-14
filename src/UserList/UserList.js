import React from 'react';
import U from './UserList.module.css';
import { Link} from "react-router-dom";
import User from '.././User/User';

const UserList=()=>{
    return(
        <div className={U.userlist}>
            <Link to='/chatt/chat'><User/></Link>
            <Link to='/chatt/chat'><User/></Link>
            <Link to='/chatt/chat'><User/></Link>
            <User/>

        </div>
    );
}
export default UserList;