import React from "react";
import '../headerStyle.css'

//import lupa from "https://img.lovepik.com/element/40019/4439.png_300.png";
class HeaderPagina extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };

    this.nameHandler = this.nameHandler.bind(this);
  }

  nameHandler(event) {
    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <div className="header-style">
        <form>
          <div id="searchform">
            <img
              style={{ height: 50, width: 50 }}
              hspace="25"
              alt="Logo empresa"
            />
            <input
              type="text"
              id="Busqueda"
              placeholder=""
              style={{ height: 20, width: 300 }}
            />
            <button type="button" id="Buscar">
              BUSCAR
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default HeaderPagina;
