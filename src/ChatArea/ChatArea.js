import React from 'react';
import CA from './ChatArea.module.css';
import ChatTitle from './ChatTitle/ChatTitle';
import send from '../Icons/send.svg'
// import { CAink} from "react-router-dom";

const ChatArea=()=>{
    return(
        <div className={CA.ChatArea}>
            <ChatTitle/>
            <h1> chats will we there</h1>
            <form action="#" className={CA.typing_area}>
                <input type="text" placeholder='Type message here..' />
                <button><img src={send} alt="" /></button>
            </form>
        </div>
    );
}
export default ChatArea;