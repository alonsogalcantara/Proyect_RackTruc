import React from 'react';
import './index.css';
import HeaderPagina from './Componentes/headerPagina'
import RegistrarUsuario from './Componentes/registrarUsuario';

export default function App() {
  return (
    <div>
      <HeaderPagina/>
     <RegistrarUsuario/>
    </div>
  );
}