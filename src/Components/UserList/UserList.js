import React from 'react';
import U from './UserList.module.css';
import { Link} from "react-router-dom";
import User from '.././User/User';

const UserList=({children,error=false,loading,type})=>{
    if(error){
        return type ==='team' ?(<div className={U.userlist}>
            <p>errrrrrr</p>
            </div>):null
    }
    if(loading){
        return(
            <div className={U.userlist}>
            <p>loding....</p>

        </div>
        )
    }
    return(
        <div className={U.userlist}>
            <User/>
            <User/>
            <User/>
            <User/>

        </div>
    );
}
export default UserList;