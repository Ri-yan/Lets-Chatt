import React from 'react';
import L from './Register.module.css';
import { Link} from "react-router-dom";


const Register=()=>{
    return(
        <div className={L.Login}>
            <div className={L.title}>
                Let's Chatt Login
            </div>
            <div className={L.section}>
            <div className={L.inputlable}>
                <label htmlFor="">Email Address</label>
                <input className={L.input} type="text" placeholder='Enter your email'/>
            </div>
            <div className={L.inputlable}>
                <label htmlFor="">Password</label>
                <input className={L.input} type="password" placeholder='Enter your password'/>
            </div>
            <input className={L.submitbutton} type="submit" value='Continue to Chatt'/>
            <label htmlFor="">Not Yet signed up? <span><Link to='/chatt/login'> Signup now</Link></span></label>
        </div>
        </div>
    );
}
export default Register;