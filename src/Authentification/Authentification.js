import React, { useState } from 'react'
import Cookies from 'universal-cookie';
import axios from 'axios';
import {Login,Register} from '../Components'
const Authentification=()=> {

  const [sign,setSign]=useState(false);
  const handleSignin=()=>{
    if(sign)
      setSign(false);
    else
    setSign(true);
  }
  const cookies = new Cookies();
  const initialstate={
    f_name:'',
    l_name:'',
    email:'',
    password:''
    }
    const [form,setForm]=useState(initialstate);

    const onSubmitButton=async(event)=> {
      event.preventDefault();
      const {l_name,email,password} = form;
      const URL='http://localhost:3001/auth';
      const {data:{token,userId,hashedPassword,f_name}}= await axios.post(`${URL}/${sign ?'signup':'login'}`,{
        f_name:form.f_name,l_name,password,email
      })

      cookies.set('token',token);
      cookies.set('f_name',f_name);
      cookies.set('l_name',l_name);
      cookies.set('email',email);
      cookies.set('userId',userId);
    
      cookies.set('password',hashedPassword);
     
      console.log(form)
      window.location.reload();
    }
  
  return (
    <div>
      {
      sign?
      <Register  initialstate={initialstate} form={form} setForm={setForm} onSubmitButton={onSubmitButton} handleSignin={handleSignin}/>
      :
      <Login initialstate={initialstate} form={form} setForm={setForm} onSubmitButton={onSubmitButton} handleSignin={handleSignin}/>
      }
    </div>
  )
}

export default Authentification