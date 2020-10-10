import React from "react";
import HeaderPagina from "./Componentes/headerPagina";
//import RegistrarUsuario from './Componentes/registrarUsuario';
//import DetallesCamionero from './Componentes/detallesCamionero';
import DetallesCamion from './Componentes/detallesCamion';
export default function App() {
	return (
		<div>
			<HeaderPagina />
			<DetallesCamion/>
		</div>
	);
}
