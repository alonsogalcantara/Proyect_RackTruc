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
          <div id="searchform">
            <img
              style={{ height: 50, width: 50 }}
              hspace="25"
              alt="Logo empresa"
            />
            <div className="flexsearch">
              <div className="flexsearch--wrapper">
                <form className="flexsearch--form">
                  <div className="flexsearch--input-wrapper">
                    <input className="flexsearch--input" type="search" placeholder="Buscar" />
                  </div>
                  <input className="flexsearch--submit" type="submit" value="&#10140;"/>
                </form>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default HeaderPagina;
