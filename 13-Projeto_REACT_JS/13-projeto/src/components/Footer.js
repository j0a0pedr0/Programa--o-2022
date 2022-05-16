import Logo from '../../src/image/logo.png';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs'
import {  BsInstagram  } from "react-icons/bs";

function Footer(){
    return (
        <footer>
            <div className="center">
                <div className="footer">
                    <img src={Logo}/>
                </div>
                <div className="footer">
                    <FaFacebookF className='img' size={25}/>
                    <BsInstagram className='img' size={25}/>
                    <BsTwitter className='img' size={25}/>
                </div>
                <div className="footer">
                    <p>Desenvolvido com coração em São Paulo</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;