import './App.css';
import freeCodeCampmLogo from './img/FreeCodeCamp_logo.svg.png';
import Boton from './components/Boton.jsx';
import Contador from './components/Contador.jsx';
//Hook con useState
import { useState } from 'react'

function App() {

  // Uso del hook de useState
  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks (numClicks+ 1); 
  };

  const reiniciarContador = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
        className='freecodecamp-logo'
        src={freeCodeCampmLogo} 
        alt="Logo de freeCodeCamp" />
      </div>

      <div className='contenedor-principal'>

        <Contador 
        // Variable del estado del componente que es pasado como un prop
          numClicks= {numClicks}
        />

        <Boton 
          texto='Click'
          esBotonDeClick={true} 
          manejarClick={ manejarClick } 
        />

        <Boton 
          texto='Reiniciar'
          esBotonDeClick={false} 
          manejarClick={ reiniciarContador }
        />

      </div>
    </div>
  );
}

export default App;
