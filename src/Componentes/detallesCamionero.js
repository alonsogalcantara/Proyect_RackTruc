import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import "../Styles/Camionero.css";

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
    <div className="Estilo_Camion">
      <form>
        <fieldset>

          <legend style={{ margin: 10 }}>
            <span className="number">1</span>Informaci&oacute;n camionero
          </legend>

            <img
              type="img"
              id="Img_No1"
              src="https://media.istockphoto.com/vectors/ethnic-diversity-group-of-people-drawing-vector-id888882708"
              alt="Imagen camion"
              width="100"
              height="100"
              align="center"
            /> 

            <div className="Tbl_Camionero">

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
          
          <legend style={{ margin: 10 }}>
            <span className="number">2</span>Camionero
          </legend>

          <div className="Tbl_Camionero">

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

          <div className="Grupo_Botones">
            <input
              type="button"
              className="Boton_Detalles"
              id="Detalles"
              value="Ventas"
              onClick={clickVentas}
            />
            <input
              type="button"
              className="Boton_Editar"
              id="Editar"
              value="Editar usuario"
              onClick={clickEditarUsuario}
            />
            <input
              type="button"
              className="Boton_Eliminar"
              id="Eliminar"
              value="Eliminar usuario"
              onClick={clickEliminarUsuario}
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
}
