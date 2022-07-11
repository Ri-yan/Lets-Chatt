import L from './Register.module.css';
import { useState } from 'react';

const Register=({handleSignin,initialstate,onSubmitButton,form,setForm})=>{

    const handleChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    
    return(
        <div>
        <form onSubmit={onSubmitButton} className={L.Login}>
            <div className={L.title}>
            Let's Chatt Register 
            </div>
            <div className={L.section}>
            <div className={L.nametab}>
                <div className={L.inputlable}>
                    <label htmlFor="">First Name</label>
                    <input 
                    name='f_name'
                    className={L.input} 
                    required  type="text"
                    placeholder='First name'
                    onChange={handleChange}
                    />
                </div>
                <div className={L.inputlable}>
                    <label htmlFor="">Last Name</label>
                    <input 
                    name='l_name'
                    className={L.input}  
                    required  type="text" 
                    placeholder='Last name'
                    onChange={handleChange}
                    />
                </div>
            </div>
            <div className={L.inputlable}>
                <label htmlFor="">Enter Email</label>
                <input                     
                name='email'
                className={L.input}  
                type="email" 
                required 
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" 
                placeholder='Email'
                onChange={handleChange}
                />
            </div>
            <div className={L.inputlable}>
                <label htmlFor="">Enter Password</label>
                <input 
                name='password'
                className={L.input} 
                type="password"  
                required 
                placeholder='Password'
                onChange={handleChange}
                />
            </div>
            <input className={L.submitbutton} type="submit" value='Continue to Chatt'/>
            <label htmlFor="">Already a member?  <span onClick={handleSignin}>   Login</span></label>
        </div>
        </form>
        </div>
    );
}
export default Register;