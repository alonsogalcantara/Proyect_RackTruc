import React from 'react'
import {Link} from 'react-router-dom'

class mainAdmin extends React.Component{
    render (){
        return (
          <div>
            Hola
            <ul>
              <li>
                <Link to="/detallesCamionero">Detalles camionero</Link>
              </li>
              <li>
                <Link to="/detallesCamion">Detalles camion</Link>
              </li>
              <li>
                <Link to="/registrarUsuario">Registrar usuario</Link>
              </li>
              <li>
                <Link to="/PagePrincipalAdmi">Administrador</Link>
              </li>
            </ul>
          </div>
        );
    }
}

export default mainAdmin;