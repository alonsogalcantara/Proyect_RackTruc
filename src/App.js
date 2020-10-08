import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

//src
import LoginUsuario from './Componentes/loginUsuario';
import detallesCamionero from "./Componentes/detallesCamionero";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginUsuario} />
        <Route exact path="/detallesCamionero" component={detallesCamionero} />
      </Switch>
    </BrowserRouter>
  );
}