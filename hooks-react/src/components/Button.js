import React from 'react'
import '../estilos/Button.css';

export function Button(props) {
    return (
        <button
            onClick={() => alert(`Esto es un alert del boton con texto: ${props.children}`)}
        >
            {props.children}
        </button>
    );
} 