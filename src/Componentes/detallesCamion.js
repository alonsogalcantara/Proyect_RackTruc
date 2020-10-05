import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import '../style.css'

//recibe datos camionero
function RdatosCamion(Camiones, Marcas, Placas, Modelos, Capacidad) {
  return {Camiones, Marcas, Placas, Modelos, Capacidad};
}

//tabla con datos Camionero
const DCamion = [
  RdatosCamion("2 Ejes", "nissan", "asn1928w", "H1N1J", "10 T"),
];

//recibe datos de el camion
function RdatosLogistica(Partidas, Destinos, Tiempo) {
  return {Partidas, Destinos, Tiempo};
}

//tabla con datos de el Camion
const DCamionLogistica = [
  RdatosLogistica("Puebla", "Mexico", "2hr")];


class detallesCamion extends React.Component{

    render(){
        return <div className = "form-style-5" >
                <form>
        <fieldset>
          <legend>
            <span className="number">1</span>Información camión
          </legend>
          <legend style={{ margin: 10}}>
            <center>Caracteristicas del camión</center>
          </legend>
         
          <div className="detallesCamion">
          
            <img
              src="https://okdiario.com/img/motor/2016/03/Camion.jpg"
              style={{ height: 100, width: 100 }}
              alt="Imagen camion"
            />

            <Table width="10px" height="5px" border="3px">
              <TableHead>
                <TableRow>
                  <TableCell width="10" height="5">
                    CAMIONES
                  </TableCell>
                  <TableCell width="10" height="5" align="center">
                    MARCA&nbsp;
                  </TableCell>
                  <TableCell width="10" height="5" align="center">
                    PLACAS&nbsp;
                  </TableCell>
                  <TableCell width="10" height="5" align="center">
                    MODELO&nbsp;
                  </TableCell>
                   <TableCell width="10" height="5" align="center">
                    CAPACIDAD&nbsp;
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody width="10px">
                {DCamion.map((row) => (
                  <TableRow key={row.Camion}>
                    <TableCell component="th" scope="row">
                      {row.Camiones}
                    </TableCell>
                    <TableCell width="10" height="5" align="left">
                      {row.Marcas}
                    </TableCell>
                    <TableCell width="10" height="5" align="center">
                      {row.Placas}
                    </TableCell>
                    <TableCell width="10" height="5" align="left">
                      {row.Modelos}
                    </TableCell>
                    <TableCell width="10" height="5" align="left">
                      {row.Capacidad}
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
                  <TableCell>RUTAS (REALIZADAS)</TableCell>
                  <TableCell align="center">PARTIDA&nbsp;</TableCell>
                  <TableCell align="center">DESTINO&nbsp;</TableCell>
                  <TableCell align="center">TIEMPO&nbsp;</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {DCamionLogistica.map((row) => (
                  <TableRow key={row.Nombre}>
                    <TableCell component="th" scope="row">
                      {row.Nombre}
                    </TableCell>
                    <TableCell align="center">{row.Partidas}</TableCell>
                    <TableCell align="center">{row.Destinos}</TableCell>
                    <TableCell align="center">{row.Tiempo}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </fieldset>

          <div className="butonsDetalles">
            <input
              type="button"
              className="botonDetalles"
              id="detalle"
              value="Editar camión"
            />
            <input
              type="button"
              className="botonDetalles"
              id="elimina"
              value="Eliminar camión"
            />
          </div>
        </fieldset>
      </form>
        </div>
    }
}


export default detallesCamion;