import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

//src
import LoginUsuario from './Componentes/loginUsuario';
import mainAdmin from "./Componentes/mainAdmin";
import detallesCamionero from "./Componentes/detallesCamionero";
import detallesCamion from "./Componentes/detallesCamion";
import registrarUsuario from "./Componentes/registrarUsuario";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginUsuario} />
        <Route exact path="/mainAdmin" component={mainAdmin} />
        <Route exact path="/detallesCamionero" component={detallesCamionero} />
        <Route exact path="/detallesCamion" component={detallesCamion} />
        <Route exact path="/registrarUsuario" component={registrarUsuario} />
      </Switch>
    </BrowserRouter>
  );
}