import Hero from '../image/hero.jpg'
import  AppStore from '../image/appstore.png'
import GooglePlay from '../image/googleplay.png'

function Topo(){
    return (
        <section className="topo">
            <div className="center">
                <div className="texto-topo">
                    <h2>Desafie seus amigos nesse multiplayer repleto de aventuras.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et tempor augue. Nam nec ligula magna. Praesent facilisis, mauris sed consectetur ornare, dui lorem posuere arcu, id lobortis risus orci vel urna. Maecenas fermentum porttitor mi a dictum. Fusce aliquet</p>
                    <div className='mobile-app'>
                        <a href="#"><img src={AppStore}/></a>
                        <a href="#"><img src={GooglePlay}/></a>
                    </div>
                </div>{/*texto-topo*/}

                <div className="img-topo">
                    <img src={Hero}/>
                </div>{/*IMG_TOPO*/}

            </div>{/*CENTER*/}
        </section>//Topo
    )
}
export default Topo;