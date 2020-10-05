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
      <div className="barraBuscadora">
        <form>
          <div class="field" id="searchform">
            <img style={{ height: 30, width: 30 }} hspace="25" />
            <input
              type="text"
              id="Busqueda"
              placeholder=""
              style={{ height: 20, width: 300 }}
            />{" "}
            <button type="button" id="Buscar">
              BUSCAR
            </button>
            <text>ID</text>
            <text>/</text>
            <text>Nombre</text>
            <text>/</text>
            <text>Fecha</text>
          </div>{" "}
          <script
            class="cssdeck"
            src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.8.0/jquery.min.js"
          ></script>
        </form>
      </div>
    );
  }
}

export default HeaderPagina;
