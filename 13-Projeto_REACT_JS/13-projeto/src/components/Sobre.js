import {FaUserFriends} from 'react-icons/fa';


function Sobre(){
    return (
        <section className="sobre">
            <div className="center">
                <div className="titulo-sobre">
                    <h2>Sobre</h2>
                </div>
                <div className="sobre-single">
                    <div className='sobre-icons'>
                        <FaUserFriends className='icons-sobre' size={30}/>
                    </div>
    
                    <div className="titulo-single">
                        <h3>Totalmente<br /> Multiplayer</h3>
                    </div>
                    <div className="sobre-conteudo">
                        <p>Divirta-se com seus amigos e veja quem é o melhor da rodada!</p>
                    </div>
                </div>

                <div className="sobre-single">
                    <div className='sobre-icons'>
                        <FaUserFriends className='icons-sobre' size={30}/>
                    </div>
    
                    <div className="titulo-single">
                        <h3>Totalmente<br /> Multiplayer</h3>
                    </div>
                    <div className="sobre-conteudo">
                        <p>Divirta-se com seus amigos e veja quem é o melhor da rodada!</p>
                    </div>
                </div>

                <div className="sobre-single">
                    <div className='sobre-icons'>
                        <FaUserFriends className='icons-sobre' size={30}/>
                    </div>
    
                    <div className="titulo-single">
                        <h3>Totalmente<br /> Multiplayer</h3>
                    </div>
                    <div className="sobre-conteudo">
                        <p>Divirta-se com seus amigos e veja quem é o melhor da rodada!</p>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Sobre;