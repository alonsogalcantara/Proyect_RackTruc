import React from 'react';
import './index.css';
import DetallesCamionero from './Componentes/detallesCamionero';
import RegistrarUsuario from './Componentes/registrarUsuario';

export default function App() {
  return (
    <div>
     <RegistrarUsuario/>
     <DetallesCamionero/>
    </div>
  );
}