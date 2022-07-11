import WT from './WelcomeTitleBar.module.css';
import { Link} from "react-router-dom";

const WelcomeTitleBar=()=>{
    return(
        <div className={WT.Titlebar}>
           <div className={WT.title}>
            Let's Chatt
            </div>
        </div>
    );
}
export default WelcomeTitleBar;