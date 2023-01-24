import './App.css';
import './estilos/boton.css';
import './estilos/pantalla.css';
import './estilos/clear.css';

import logo from './imagenes/gato.png';

import Boton from './componentes/boton.js';
import Pantalla from './componentes/pantalla.js';
import BotonClear from './componentes/clear.js';

import { useState } from 'react';
import { evaluate} from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = val => {
    setInput(input + val);
  };

  const calculate = () => {
    if(input){
      setInput(evaluate(input));
    }
    else{
      alert('No hay ningun input');
    }
  };

  return (
    <div className="App">
      <div className='personal-logo-container'>
        <img
          src={logo}
          className='personal-logo'
          alt='logo personal'></img>
      </div>
      <div className='container-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClick={addInput}>1</Boton>
          <Boton manejarClick={addInput}>2</Boton>
          <Boton manejarClick={addInput}>3</Boton>
          <Boton manejarClick={addInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={addInput}>4</Boton>
          <Boton manejarClick={addInput}>5</Boton>
          <Boton manejarClick={addInput}>6</Boton>
          <Boton manejarClick={addInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={addInput}>7</Boton>
          <Boton manejarClick={addInput}>8</Boton>
          <Boton manejarClick={addInput}>9</Boton>
          <Boton manejarClick={addInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calculate}>=</Boton>
          <Boton manejarClick={addInput}>0</Boton>
          <Boton manejarClick={addInput}>.</Boton>
          <Boton manejarClick={addInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
