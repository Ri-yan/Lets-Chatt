import React, { useState } from 'react';
import T from './TitleBar.module.css';
import icon from '../Icons/search3.svg'
import cross from '../Icons/cross2.svg'
import person from '../Icons/person.svg'
import { Link} from "react-router-dom";

const Titlebar=()=>{
    const [showbar,setshowbar]=useState(false);
    const ShowBar=()=>{
        if(showbar===false)
        setshowbar(true);
        else
        setshowbar(false);
    }
    return(
        <div className={T.Titlebar}>
           <Link to='/chatt/'> <div className={T.title}>
            Let's Chatt
            </div></Link>
            <img onClick={()=>ShowBar()} className={showbar?`${T.cancel}`:`${T.cancel_active}`} src={cross} alt="" />
            <input placeholder='search for contacts' className={showbar?`${T.searchbar}`:`${T.active}`} type="search" />
            <Link to='/chatt/login'><img className={T.login} src={person} alt="" /></Link>
            <img onClick={()=>ShowBar()} className={T.search} src={icon} alt="" />
        </div>
    );
}
export default Titlebar;