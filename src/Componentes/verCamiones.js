import React from "react";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import "../Styles/verCamiones.css";
import HeaderPagina from "./headerPagina";
function clickAccederInformacion() {
    console.log("==================================================");
    console.log("Diste click en Acceder a la Informacion del Camión");
    console.log("==================================================");
  }


class verCamiones extends React.Component{
    render(){
    return <div className = "detailStyle" >
      <div>
          <HeaderPagina/>
          </div>
        <form> 

          
         
            <fieldset>
              <legend>
                <span className="number">1</span>Camiones
              </legend>
              

            <div>
            <Table width="10px" height="5px" border="3px">
              <TableHead>
                <TableRow>
                  <TableCell width="10" height="5" align = "center">
                    MODELO 1
                  </TableCell>
                  <TableCell width="10" height="5" align="center">
                    MODELO 2
                  </TableCell>
                  <TableCell width="10" height="5" align="center">
                    MODELO 3
                  </TableCell>
                  <TableCell width="10" height="5" align="center">
                    MODELO 4
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody width="10px"> 
              </TableBody>
            </Table>
          </div>

          <div>
              <Table width="10px" height="5px" border="3px">
                <TableHead>
                  <TableRow>
                    <TableCell width="10" height="5" align="center">
                    <img
                        src="https://okdiario.com/img/motor/2016/03/Camion.jpg"
                        style={{ height: 100, width: 100 }}
                        alt="Imagen camion"
                    />
                    <input
                        type="button"
                        className="botonInformacion"
                        id="informacion"
                        value="Información"
                        onClick={clickAccederInformacion}
                    />
                    </TableCell>
                    <TableCell width="10" height="5" align="center">
                    <img
                        src="https://okdiario.com/img/motor/2016/03/Camion.jpg"
                        style={{ height: 100, width: 100 }}
                        alt="Imagen camion"
                    />
                    <input
                        type="button"
                        className="botonInformacion"
                        id="informacion"
                        value="Información"
                        onClick={clickAccederInformacion}
                    />
                    </TableCell>
                    <TableCell width="10" height="5" align="center">
                    <img
                        src="https://okdiario.com/img/motor/2016/03/Camion.jpg"
                        style={{ height: 100, width: 100 }}
                        alt="Imagen camion"
                    />
                    <input
                        type="button"
                        className="botonInformacion"
                        id="informacion"
                        value="Información"
                        onClick={clickAccederInformacion}
                    />
                    </TableCell>
                    <TableCell width="10" height="5" align="center">
                    <img
                        src="https://okdiario.com/img/motor/2016/03/Camion.jpg"
                        style={{ height: 100, width: 100 }}
                        alt="Imagen camion"
                    />
                    <input
                        type="button"
                        className="botonInformacion"
                        id="informacion"
                        value="Información"
                        onClick={clickAccederInformacion}
                    />
                    </TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </div>
            <div className="top-element-formatting">  {" "} <span className="second-word-formatting"> - </span> </div> 
            <div>
            <Table width="10px" height="5px" border="3px">
              <TableHead>
                <TableRow>
                  <TableCell width="10" height="5" align="center">
                    MODELO 5
                  </TableCell>
                  <TableCell width="10" height="5" align="center">
                    MODELO 6
                  </TableCell>
                  <TableCell width="10" height="5" align="center">
                    MODELO 7
                  </TableCell>
                  <TableCell width="10" height="5" align="center">
                    MODELO 8
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody width="10px"> 
              </TableBody>
            </Table>
          </div>


            <div>
              <Table width="10px" height="5px" border="3px">
                <TableHead>
                  <TableRow>
                    <TableCell width="10" height="5" align="center">
                    <img
                        src="https://okdiario.com/img/motor/2016/03/Camion.jpg"
                        style={{ height: 100, width: 100 }}
                        alt="Imagen camion"
                    />
                    <input
                        type="button"
                        className="botonInformacion"
                        id="informacion"
                        value="Información"
                        onClick={clickAccederInformacion}
                    />
                    </TableCell>
                    <TableCell width="10" height="5" align="center">
                    <img
                        src="https://okdiario.com/img/motor/2016/03/Camion.jpg"
                        style={{ height: 100, width: 100 }}
                        alt="Imagen camion"
                    />
                    <input
                        type="button"
                        className="botonInformacion"
                        id="informacion"
                        value="Información"
                        onClick={clickAccederInformacion}
                    />
                    </TableCell>
                    <TableCell width="10" height="5" align="center">
                    <img
                        src="https://okdiario.com/img/motor/2016/03/Camion.jpg"
                        style={{ height: 100, width: 100 }}
                        alt="Imagen camion"
                    />
                    <input
                        type="button"
                        className="botonInformacion"
                        id="informacion"
                        value="Información"
                        onClick={clickAccederInformacion}
                    />
                    </TableCell>
                    <TableCell width="10" height="5" align="center">
                    <img
                        src="https://okdiario.com/img/motor/2016/03/Camion.jpg"
                        style={{ height: 100, width: 100 }}
                        alt="Imagen camion"
                    />
                    <input
                        type="button"
                        className="botonInformacion"
                        id="informacion"
                        value="Información"
                        onClick={clickAccederInformacion}
                    />
                    </TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </div>
            </fieldset>
        </form>
     </div>
    }
}
export default verCamiones;
