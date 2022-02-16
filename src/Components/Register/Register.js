import React from 'react';
import L from './Register.module.css';
import { Link} from "react-router-dom";


const Register=()=>{
    const onClickButton=(event)=> {
        event.preventDefault();
      }
    return(
        <div>
        <form onSubmit={onClickButton} className={L.Login}>
            <div className={L.title}>
            <Link to='/Lets-Chatt/chats'> Let's Chatt Register </Link>
            </div>
            <div className={L.section}>
            <div className={L.error_tab}>This is an error message</div>
            <div className={L.nametab}>
                <div className={L.inputlable}>
                    <label htmlFor="">First Name</label>
                    <input className={L.input}  required  type="text" placeholder='First name'/>
                </div>
                <div className={L.inputlable}>
                    <label htmlFor="">Last Name</label>
                    <input className={L.input}  required  type="text" placeholder='Last name'/>
                </div>
            </div>
            <div className={L.inputlable}>
                <label htmlFor="">Enter Email</label>
                <input className={L.input}  type="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder='Email'/>
            </div>
            <div className={L.inputlable}>
                <label htmlFor="">Enter Password</label>
                <input className={L.input} type="password"  required placeholder='Password'/>
               {/* <img  className={L.eye} src={eye} alt="" /> */}
            </div>
            <input className={L.submitbutton} type="submit" value='Continue to Chatt'/>
            <label htmlFor="">Already a member?  <Link to='/Lets-Chatt/login'><span>   Login</span></Link></label>
        </div>
        </form>
        </div>
    );
}
export default Register;