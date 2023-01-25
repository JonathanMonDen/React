import React from 'react';
import '../estilos/Header.css';
import { Button } from './Button';

export function Header() {
    return (
        <header>
            <div className='Logo'>
                Logo
            </div>
           
            <div className='Enlaces'>
                <Button>Hola que tal</Button>
                <Button>Hola que tal</Button>
                <Button>Hola que tal</Button>
            </div>

        </header>
    );
}
