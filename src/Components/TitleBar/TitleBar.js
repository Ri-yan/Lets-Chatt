import React, { useState } from 'react';
import T from './TitleBar.module.css';
import icon from '../../Icons/search3.svg'
import cross from '../../Icons/cross2.svg'
import person from '../../Icons/person.svg'
import { useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';
// import { Link} from "react-router-dom";
const cookies= new Cookies;
const Titlebar=()=>{
    const [showbar,setshowbar]=useState(false);
    const ShowBar=()=>{
        if(showbar===false)
        setshowbar(true);
        else
        setshowbar(false);
    }

    const [query,setQuery]=useState('');
    const [loading,setLoading]=useState(true);
    const getChannels=async(text)=>{
        try {
            //
        } catch (error) {
            setQuery('')
        }
    }
    const onSearch=(event)=>{
        event.preventDefault();
        setLoading(true);
        setQuery(event.target.value);
        getChannels(event.target.value);
    }
    const logout=()=>{
        cookies.remove('token');        
        cookies.remove('userId');
        cookies.remove('f_name');
        cookies.remove('l_name');
        cookies.remove('email');
        cookies.remove('hashedPassword');
        
        window.location.reload();
    }
    return(
        
        <div className={T.Titlebar}>
           <div className={T.title}>
            Let's Chatt
            </div>
            <img onClick={()=>ShowBar()} className={showbar?`${T.cancel}`:`${T.cancel_active}`} src={cross} alt="" />
            <input value={query}
            onChange={onSearch}
             placeholder='search for contacts' className={showbar?`${T.searchbar}`:`${T.active}`} type="search" />
            <img onClick={()=>logout()} className={T.login} src={person} alt="" />
            <img onClick={()=>ShowBar()} className={T.search} src={icon} alt="" />
        </div>
    );
}
export default Titlebar;