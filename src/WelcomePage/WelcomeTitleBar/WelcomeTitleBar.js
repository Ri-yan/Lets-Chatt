import WT from './WelcomeTitleBar.module.css';
import { Link} from "react-router-dom";

const WelcomeTitleBar=()=>{
    return(
        <div className={WT.Titlebar}>
           <Link to='/Lets-Chatt/'> <div className={WT.title}>
            Let's Chatt
            </div></Link>
        </div>
    );
}
export default WelcomeTitleBar;