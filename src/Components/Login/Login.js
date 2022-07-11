import { useState } from 'react';
import L from './Login.module.css';

const Login=({handleSignin,initialstate,onSubmitButton,form,setForm})=>{

    const handleChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
   
    return(
        <form onSubmit={onSubmitButton} className={L.Login}>
            <div className={L.title}>
                Let's Chatt Login
            </div>
            <div className={L.section}>
            <div className={L.inputlable}>
                <label htmlFor="">Email Address</label>
                <input 
                    name='email'
                    onChange={handleChange}
                    className={L.input} 
                    type="email"
                    required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" 
                    placeholder='Enter your email'
                />
            </div>
            <div className={L.inputlable}>
                <label htmlFor="">Password</label>
                <input 
                name='password'
                onChange={handleChange}
                className={L.input} 
                type="password" 
                required 
                placeholder='Enter your password'
                />
            </div>
                <input className={L.submitbutton} type="submit" value='Continue to Chatt'/>
            <label  htmlFor="">Not Yet signed up? <span onClick={handleSignin}> Signup now</span></label>
        </div>
        </form>
        
    );
}
export default Login;