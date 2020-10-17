import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

//src
import LoginUsuario from './Componentes/loginUsuario';
import mainAdmin from "./Componentes/mainAdmin";
import detallesCamionero from "./Componentes/detallesCamionero";
import detallesCamion from "./Componentes/detallesCamion";
import registrarUsuario from "./Componentes/registrarUsuario";
import verCamiones from "./Componentes/verCamiones";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginUsuario} />
        <Route exact path="/mainAdmin" component={mainAdmin} />
        <Route exact path="/detallesCamionero" component={detallesCamionero} />
        <Route exact path="/detallesCamion" component={detallesCamion} />
        <Route exact path="/registrarUsuario" component={registrarUsuario} />
        <Route exact path="/verCamiones" component={verCamiones}/>
      </Switch>
    </BrowserRouter>
  );
}