import React from 'react';
import '../estilos/Textos.css'

export function Textos(props){
  return(
    <div className='div-textos'>
      <img
       className='img-textos'
       src={require(`../images/testimonio-${props.image}.png`)}
       alt={(`Imagen de ${props.name}`)}
      />

      <div className='div-text-textos'>
        <p className='name-textos'><strong>{props.name}</strong> en {props.pais}</p>
        <p className='exp-textos'><strong>{props.exp}</strong></p>
        <p className='texto-textos'>{props.texto}</p>
      </div>
    </div>
  ); 
} 
