import React from 'react';
import './index.css';
import headerPagina from './Componentes/headerPagina'
import RegistrarUsuario from './Componentes/registrarUsuario';

export default function App() {
  return (
    <div>
      <headerPagina/>
     <RegistrarUsuario/>
    </div>
  );
}