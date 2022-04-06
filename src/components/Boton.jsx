import React from "react";
import '../stylesheet/Boton.css';

// Sintaxis de desetructuracion cuando sustituimos Props por {} y el nombre de la propiedad que queremos invocar. Se usa como un parametro variable. 
function Boton({ texto, esBotonDeClick, manejarClick }){
  return (
    <button
    // Asignar clase al elemento de forma dinamica con el Operador Ternario
    className={ esBotonDeClick ? 'boton-click' : 'boton-reiniciar' }
    onClick={ manejarClick }
    >
      {texto}
    </button>
  )
}

export default Boton;