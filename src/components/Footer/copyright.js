import './Footer.css';
import {AiOutlineCopyrightCircle} from 'react-icons/ai';

function Copyright() {
    return(
        <div class="copyright">
            <AiOutlineCopyrightCircle size='18px'/>
            copyright | @2023 by <span>DharshiB</span> | All Rights Deserved
        </div>
    );
}

export default Copyright;