import GooglePlay from '../image/googleplay.png';
import Appstore from '../image/appstore.png';
import { FaPlaystation } from 'react-icons/fa';
import { SiXbox } from "react-icons/si";
import { ImSteam2 } from "react-icons/im";
import Logo from '../../src/image/logo.png';

function Lojas_app(){
    return (
        <section className="lojas-app">
            <div className="center">
               <div className="texto-loja">
                    <div className="titulo-loja">
                        <h2>JOGUE EM QUALQUER PLATAFORMA</h2>
                        <div className="line"></div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et tempor augue. Nam nec ligula magna. Praesent facilisis, mauris sed consectetur ornare, dui lorem posuere arcu, id lobortis risus orci vel urna. Maecenas fermentum porttitor mi a dictum. Fusce aliquets</p>
                    <div className="icons-app">
                        <img src={GooglePlay}/>
                        <img src={Appstore}/>
                        <FaPlaystation className='img' size={50}/>
                        <SiXbox className='white img' size={50}/>
                        <ImSteam2 className='blue img' size={50}/>
                    </div>             
               </div>
               <div className="logo-loja">
                    <img src={Logo}/>
               </div> 
            </div>
        </section>
    )
}

export default Lojas_app;