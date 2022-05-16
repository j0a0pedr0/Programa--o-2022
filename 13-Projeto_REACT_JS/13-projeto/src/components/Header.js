
import Logo from '../../src/image/logo.png';

function Header(){
    return(
        <div className="header">
           <div className="center">
              <header onClick={e => alert('ola mundo')} >
                <div className="logo">
                  <a herf="#"><img src={Logo}/></a>
                </div>
                <div className='menu'>
                    <a href='#'>Sobre</a>
                    <a href='#'>Depoimentos</a>
                    <a className='btn-cta' href='#'>Baixar Agora!</a>
                </div>
                <div className='clear'></div>
              </header>


          </div>
        
        </div>
    )
}

export default Header;