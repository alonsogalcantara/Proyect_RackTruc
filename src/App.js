import React from 'react';

import { BrowserRouter, Switch, Route } from "react-router-dom";

//src
import LoginUsuario from './Componentes/loginUsuario';
import detallesCamionero from './Componentes/detallesCamionero';
import PagePrincipalAdmi from './Componentes/PagePrincipalAdmi';


export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginUsuario} />
        <Route exact path="/detallesCamionero" component={detallesCamionero} />
        <Route exact path="/PagePrincipalAdmi"component={PagePrincipalAdmi} />
      </Switch>
    </BrowserRouter>

  );
}