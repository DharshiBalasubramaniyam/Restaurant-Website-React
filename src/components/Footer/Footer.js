import './Footer.css';
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillFacebook} from 'react-icons/ai';
import {AiFillYoutube} from 'react-icons/ai';
import {AiFillPhone} from 'react-icons/ai';
import {MdEmail} from 'react-icons/md';
import Copyright from './copyright';

function Footer() {
    return(
        <>
            <footer>
                <div class="footer-box">
                    <h1>Follow Us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>Libero, quidem.</p>
                    <div>
                        <a href="#"><AiFillInstagram size='25px' style={{marginRight:'10px'}}/></a>
                        <a href="#"><AiFillFacebook size='25px'style={{marginRight:'10px'}}/></a>
                        <a href="#"><AiFillYoutube size='25px' style={{marginRight:'10px'}}/></a>
                    </div>
                </div>
                <div class="footer-box">
                    <h1>Need Help?</h1>
                    <p>Lorem ipsum dolor sit.</p>
                    <a href="#"><AiFillPhone style={{marginRight:'7px'}}/>+87 123456789</a>
                    <a href="#"><AiFillPhone style={{marginRight:'7px'}}/>+87 987654321</a>
                    <a href="#"><MdEmail style={{marginRight:'7px'}}/>olivebranch@gmail.com</a>
                </div>
                <div class="footer-box">
                    <h1>Locations</h1>
                    <a href="#">Colombo</a>
                    <a href="#">Galle</a>
                    <a href="#">Hatton</a>
                    <a href="#">Jaffna</a>
                </div>
                <div class="footer-box">
                    <h1>Quick Links</h1>
                    <a href="#">Sign In</a>
                    <a href="#">Reviews</a>
                    <a href="#">Contact</a>
                    <a href="#">Location</a>
                </div>
            </footer>
            <Copyright/>
        </>

    );
}

export default Footer;