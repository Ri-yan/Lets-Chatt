import React from 'react';
import L from './Login.module.css';
import { Link} from "react-router-dom";
// import eye from '../Icons/eye.svg';

const Login=()=>{
    return(
        <div className={L.Login}>
            <div className={L.title}>
                Let's Chatt Register
            </div>
            <div className={L.section}>
            <div className={L.error_tab}>This is an error message</div>
            <div className={L.nametab}>
                <div className={L.inputlable}>
                    <label htmlFor="">First Name</label>
                    <input className={L.input} type="text" placeholder='First name'/>
                </div>
                <div className={L.inputlable}>
                    <label htmlFor="">Last Name</label>
                    <input className={L.input} type="text" placeholder='Last name'/>
                </div>
            </div>
            <div className={L.inputlable}>
                <label htmlFor="">Enter Email</label>
                <input className={L.input} type="text" placeholder='Email'/>
            </div>
            <div className={L.inputlable}>
                <label htmlFor="">Enter Password</label>
                <input className={L.input} type="password" placeholder='Password'/>
               {/* <img  className={L.eye} src={eye} alt="" /> */}
            </div>
            <Link to='/chatt/chats'><input className={L.submitbutton} type="submit" value='Continue to Chatt'/></Link>
            <label htmlFor="">Already a member?  <Link to='/chatt/register'><span>   Login</span></Link></label>
        </div>
        </div>
    );
}
export default Login;