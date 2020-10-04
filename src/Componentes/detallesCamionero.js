import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

//recibe datos
function createData(Nombre, Apellidos, Edad, Direccion, Clave) {
  return { Nombre, Apellidos, Edad, Direccion, Clave };
}

//tabla con datos
const rows = [createData("Roberto", "Hernandez", 32, "homero 1003", 1)];

//exportamos la funcion para que pueda ser usada en la clase APP
export default function DatosCamionero() {
  return (
    <form>
      <fieldset>
        <div className="detallesCamionero">
          <img
            src="https://okdiario.com/img/motor/2016/03/Camion.jpg"
            style={{ height: 120, width: 120 }}
          />
        </div>
        <h2>CAMIONERO</h2>
        <legend>
          <span></span>INFORMACION DEL CAMIONERO
        </legend>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>NOMBRE</TableCell>
              <TableCell align="center">APELLIDOS&nbsp;</TableCell>
              <TableCell align="center">EDAD&nbsp;</TableCell>
              <TableCell align="center">DIRECCION&nbsp;</TableCell>
              <TableCell align="center">CLAVE&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.Nombre}
                </TableCell>
                <TableCell align="center">{row.Apellidos}</TableCell>
                <TableCell align="center">{row.Edad}</TableCell>
                <TableCell align="center">{row.Direccion}</TableCell>
                <TableCell align="center">{row.Clave}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

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
              {rows.map((row) => (
                <TableRow key={row.name}>
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
      </fieldset>
    </form>
  );
}
