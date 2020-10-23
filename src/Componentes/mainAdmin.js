import React from 'react';
import {Link} from 'react-router-dom';
import HeaderPagina from "./headerPagina";

class mainAdmin extends React.Component{
    render (){
        return (
          <div>
            <HeaderPagina />
            <ul>
              <li>
                <Link to="/detallesCamionero">Detalles camionero</Link>
              </li>
              <li>
                <Link to="/verCamiones">Ver camiones</Link>
              </li>
              <li>
                <Link to="/registrarUsuario">Registrar usuario</Link>
              </li>
            </ul>
          </div>
        );
    }
}

export default mainAdmin;