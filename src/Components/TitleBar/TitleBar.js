import React, { useState } from 'react';
import T from './TitleBar.module.css';
import icon from '../../Icons/search3.svg'
import cross from '../../Icons/cross2.svg'
import person from '../../Icons/person.svg'
import { Link} from "react-router-dom";

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

    return(
        <div className={T.Titlebar}>
           <Link to='/Lets-Chatt/'> <div className={T.title}>
            Let's Chatt
            </div></Link>
            <img onClick={()=>ShowBar()} className={showbar?`${T.cancel}`:`${T.cancel_active}`} src={cross} alt="" />
            <input value={query}
            onChange={onSearch}
             placeholder='search for contacts' className={showbar?`${T.searchbar}`:`${T.active}`} type="search" />
            <Link to='/Lets-Chatt/login'><img className={T.login} src={person} alt="" /></Link>
            <img onClick={()=>ShowBar()} className={T.search} src={icon} alt="" />
        </div>
    );
}
export default Titlebar;