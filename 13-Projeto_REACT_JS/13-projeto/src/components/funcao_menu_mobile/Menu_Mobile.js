import React from 'react';
import './Style.css';
import { BsGrid } from 'react-icons/bs'


function Menu_click(){
    var menu_mobile = document.getElementById('menu-mobile');
    if(menu_mobile.classList.contains('hide')){
        menu_mobile.classList.add('show');
        menu_mobile.classList.remove('hide');
    }else{
        menu_mobile.classList.add('hide');
        menu_mobile.classList.remove('show');
    }
}





export default class Menu_Mobile extends React.Component{
    

        
    render() {
        return(
            <div>
            <BsGrid size={35} onClick={Menu_click} className='icon-mobile'/>
            <div id='menu-mobile' className='menu-mobile hide'>
                <ul id='mobile-wrap' className='mobile-wrap'>
                   <li><a href="#">Sobre</a></li> 
                   <li><a href="#">Depoimentos</a></li>
                   <li><a href="#">Baixar Agora!</a></li>
                </ul>
            </div>
            </div>
        )
    }
}
