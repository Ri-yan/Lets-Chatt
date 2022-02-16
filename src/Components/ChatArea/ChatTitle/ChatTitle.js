import { Link} from "react-router-dom";
import CT from './ChatTitle.module.css';
import arrow from '../../../Icons/arrow-left.svg'
import profile from '../../../Png/profile_img.png';

const ChatTitle=()=>{
    return(
        <div className={CT.ChatTitle}>
            <div className={CT.title}>
            <Link to='/Lets-Chatt/chats'><img className={CT.back} src={arrow} alt="back" /></Link>
               <img className={CT.profile} src={profile} alt="profileimg" />
               <div className={CT.detail}>
                   <span>User Name</span>
                   <p>Online</p>
               </div>
            </div>
        </div>
    );
}
export default ChatTitle;