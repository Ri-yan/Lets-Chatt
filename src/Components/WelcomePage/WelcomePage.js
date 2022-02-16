import React from 'react';
import W from './WelcomePage.module.css';
import { Link} from "react-router-dom";

const WelcomePage=()=>{
    return(
        <div className={W.WelcomePage}>
            <h1> Hello there! Welcome to Let's Chatt</h1>
            <Link to='/Lets-Chatt/login'>
                <input className={W.input} type="button"  value='Enter'/>
            </Link>
        </div>
    );
}
export default WelcomePage;