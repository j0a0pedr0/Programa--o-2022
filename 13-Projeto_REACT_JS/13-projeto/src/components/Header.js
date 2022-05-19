
import Logo from '../../src/image/logo.png';
import '.././App.css';
import Menu from './funcao_menu_mobile/Menu';
import Menu_Mobile from './funcao_menu_mobile/Menu_Mobile';
function Header(){
    return(
        <div className="header">
           <div className="center">
              <header onClick={()=>{
                var w = window.screen.width;
                console.log(w)
              }}>
                <div className="logo">
                  <a herf="#"><img src={Logo}/></a>
                </div>
                <Menu/>
                <Menu_Mobile/>
                <div className='clear'></div>
              </header>


          </div>
        
        </div>
    )
}

export default Header;