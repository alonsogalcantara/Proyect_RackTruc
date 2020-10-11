import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

//src
import LoginUsuario from './Componentes/loginUsuario';
import mainAdmin from "./Componentes/mainAdmin";
import detallesCamionero from "./Componentes/detallesCamionero";
import detallesCamion from "./Componentes/detallesCamion";
import registrarUsuario from "./Componentes/registrarUsuario";

//pages-Login
import Login from './Componentes/pages/Login/Login';

export default function App() {
  return (
    <div>
      <Login />
    </div>
    /*<BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/mainAdmin" component={mainAdmin} />
        <Route exact path="/detallesCamionero" component={detallesCamionero} />
        <Route exact path="/detallesCamion" component={detallesCamion} />
        <Route exact path="/registrarUsuario" component={registrarUsuario} />
      </Switch>
    </BrowserRouter>*/
  );
}