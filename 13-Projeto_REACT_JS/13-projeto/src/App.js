
import './App.css';
import Header from './components/Header';
import Topo from './components/Topo';
import Depoimentos from './components/Depoimentos';
import Sobre from './components/Sobre';
import Galeria from './components/Galeria';
import Lojas_app from './components/Lojas_app';
import Footer from './components/Footer.js'



function App() {
  return (
    <div className="App">
          <Header />
          <Topo/>
          <Depoimentos/>
          <Sobre/>
          <Galeria/>
          <Lojas_app/>
          <Footer/>
    </div>
  );
}

export default App;
