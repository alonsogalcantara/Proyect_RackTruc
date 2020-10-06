import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import "../Camionero.css";

function clickVentas(){
  console.log('====================================');
  console.log('Diste click en ventas!');
  console.log('====================================');
}

function clickEditarUsuario() {
  console.log("====================================");
  console.log("Diste click en editar usuario!");
  console.log("====================================");
}

function clickEliminarUsuario() {
  console.log("====================================");
  console.log("Diste click en eliminar usuario!");
  console.log("====================================");
}

//recibe datos camionero
function RdatosCamionero(Nombre, Apellidos, Edad, Direccion, Clave) {
  return { Nombre, Apellidos, Edad, Direccion, Clave };
}

//tabla con datos Camionero
const DCamionero = [
  RdatosCamionero("Roberto", "Hernandez", 32, "homero 1003", 1),
];

//recibe datos de el camion
function RdatosCamion(Camion, Marca, Placas, Licencia) {
  return { Camion, Marca, Placas, Licencia };
}

//tabla con datos de el Camion
const DCamion = [RdatosCamion("trailer", "nissan", "1knsi1", 10273)];

//exportamos la funcion para que pueda ser usada en la clase APP
export default function DatosCamionero() {
  return (
    <div className="detailStyle">
      <form>
        <fieldset>
          <legend>
            <span className="number">1</span>Informaci&oacute; camionero
          </legend>

          <div className="detallesCamionero">
            <img
              src="https://okdiario.com/img/motor/2016/03/Camion.jpg"
              style={{ height: 100, width: 100 }}
              alt="Imagen camion"
            />

            <div>
              <Table width="10px" height="5px" border="3px">
                <TableHead>
                  <TableRow>
                    <TableCell width="10" height="5">
                      CAMION
                    </TableCell>
                    <TableCell width="10" height="5" align="center">
                      MARCA&nbsp;
                    </TableCell>
                    <TableCell width="10" height="5" align="center">
                      PLACAS&nbsp;
                    </TableCell>
                    <TableCell width="10" height="5" align="center">
                      LICENCIA DE CONDUCIR&nbsp;
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody width="10px">
                  {DCamion.map((row) => (
                    <TableRow key={row.Camion}>
                      <TableCell component="th" scope="row">
                        {row.Camion}
                      </TableCell>
                      <TableCell width="10" height="5" align="left">
                        {row.Marca}
                      </TableCell>
                      <TableCell width="10" height="5" align="center">
                        {row.Placas}
                      </TableCell>
                      <TableCell width="10" height="5" align="left">
                        {row.Licencia}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          <legend style={{ margin: 10 }}>
            <span className="number">2</span>Camionero
          </legend>

          <div>
            <Table width="10px" height="5px" border="3px">
              <TableHead>
                <TableRow>
                  <TableCell width="10" height="5">
                    NOMBRE
                  </TableCell>
                  <TableCell width="10" height="5" align="center">
                    APELLIDOS&nbsp;
                  </TableCell>
                  <TableCell width="10" height="5" align="center">
                    EDAD&nbsp;
                  </TableCell>
                  <TableCell width="10" height="5" align="center">
                    DIRECCION&nbsp;
                  </TableCell>
                  <TableCell width="10" height="5" align="center">
                    CLAVE&nbsp;
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody width="10px">
                {DCamionero.map((row) => (
                  <TableRow key={row.Nombre}>
                    <TableCell component="th" scope="row">
                      {row.Nombre}
                    </TableCell>
                    <TableCell width="10" height="5" align="left">
                      {row.Apellidos}
                    </TableCell>
                    <TableCell width="10" height="5" align="center">
                      {row.Edad}
                    </TableCell>
                    <TableCell width="10" height="5" align="left">
                      {row.Direccion}
                    </TableCell>
                    <TableCell width="10" height="5" align="center">
                      {row.Clave}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <fieldset>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>NOMBRE (TRABAJO REALIZADO)</TableCell>
                  <TableCell align="center">EDAD&nbsp;</TableCell>
                  <TableCell align="center">ALIAS&nbsp;</TableCell>
                  <TableCell align="center">EMPLEADO&nbsp;</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {DCamionero.map((row) => (
                  <TableRow key={row.Nombre}>
                    <TableCell component="th" scope="row">
                      {row.Nombre}
                    </TableCell>
                    <TableCell align="center">{row.Edad}</TableCell>
                    <TableCell align="center">{row.Alias}</TableCell>
                    <TableCell align="center">{row.Empleado}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </fieldset>

          <div className="butonsDetalles">
            <input
              type="button"
              className="botonDetalles"
              id="venta"
              value="Ventas"
              onClick={clickVentas}
            />
            <input
              type="button"
              className="botonDetalles"
              id="detalle"
              value="Editar usuario"
              onClick={clickEditarUsuario}
            />
            <input
              type="button"
              className="botonDetalles"
              id="elimina"
              value="Eliminar usuario"
              onClick={clickEliminarUsuario}
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
}
