import React from "react";
import '../headerStyle.css'

//import lupa from "https://img.lovepik.com/element/40019/4439.png_300.png";
class HeaderPagina extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      label: {
        nombre: "Funalito",
        id: "007",
        fecha: "",
      },
    };

    this.nameHandler = this.nameHandler.bind(this);
  }

  getDate() {
    var tempDate = new Date();
    var date =
      tempDate.getFullYear() +
      "-" +
      (tempDate.getMonth() + 1) +
      "-" +
      tempDate.getDate();
    return date;
  }

  clickBuscar(event) {
    const item = { name: event.target.value };
    console.log("Clickeaste en buscar " + item);
  }

  nameHandler(event) {
    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <div className="barraBuscadora">
        <form>
          <div className="field" id="searchform">
            <img
              style={{ height: 30, width: 30 }}
              hspace="25"
              alt="Logo empresa"
            />
            <input
              type="text"
              id="Busqueda"
              placeholder="Buscar..."
              style={{ height: 20, width: 300 }}
              name={this.state.name}
              onChange={this.nameHandler}
            />
            <button type="button" id="Buscar" onClick={this.clickBuscar}>
              BUSCAR
            </button>
            <div>
              <label className="lblNombre" htmlFor="">
                Nombre: {this.state.label.nombre}
              </label>
              <br />
              <label htmlFor="">ID: {this.state.label.id}</label>
              <br />
              <label htmlFor="" id="date">
                Fecha: {this.state.label.fecha + this.getDate()}
              </label>
            </div>
          </div>
          <script
            className="cssdeck"
            src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.8.0/jquery.min.js"
          ></script>
        </form>
      </div>
    );
  }
}

export default HeaderPagina;
