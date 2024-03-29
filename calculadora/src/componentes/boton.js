import React from 'react';

function Boton(props){
    
    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    }
    
    return(
        <div className={`boton-container ${esOperador(props.children)? 'operador':''}`.trimEnd()}
        onClick={() => props.manejarClick(props.children)}>
            {props.children}
        </div>
    );
}

export default Boton;