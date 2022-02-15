import React from 'react';
import L from './Login.module.css';
import { Link} from "react-router-dom";
// import eye from '../Icons/eye.svg';

const Login=()=>{
   const onClickButton=(event)=> {
        event.preventDefault();
      }
    return(
        <form onSubmit={onClickButton} className={L.Login}>
            <div className={L.title}>
            <Link to='/Lets-Chatt/chats'>
                Let's Chatt Login
            </Link>
            </div>
            <div className={L.section}>
            <div className={L.inputlable}>
                <label htmlFor="">Email Address</label>
                <input  className={L.input} type="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder='Enter your email'/>
            </div>
            <div className={L.inputlable}>
                <label htmlFor="">Password</label>
                <input className={L.input} type="password" required placeholder='Enter your password'/>
            </div>
                <input className={L.submitbutton} type="submit" value='Continue to Chatt'/>
            <label htmlFor="">Not Yet signed up? <span><Link to='/Lets-Chatt/register'> Signup now</Link></span></label>
        </div>
        </form>
        
    );
}
export default Login;