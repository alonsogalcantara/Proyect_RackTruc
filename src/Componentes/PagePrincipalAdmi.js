import React from 'react';
import "../Styles/style.css";

class PagePrincipalAdmi extends React.Component {
  constructor() {

      super(); 
      this.state = {
        name: "",
        label: {
           
        }, 
      };

      this.PageAdmi = this.namePageAdmi.bind(this);      
    }		

    clickBuscar(event){
    const item = { name: event.target.value };
    console.log("Que desea buscar " + item);
    }

    namePageAdmi(event){
      this.setState({name: event.target.value}); 
    }
    
   render() {
    return(
      <div className="Buscador">
        <from>
          <fieldset>
          <div className="Buscar">
            <img
            style={{ height: 35, width: 40 }}
              hspace="30"
              alt="Logo empresa"
            />
            <input
              type="text"
              id="Busqueda"
              placeholder="Buscar..."
              style={{ height: 20, width: 300 }}
              name={this.state.name}
              onChange={this.namePageAdmi}
            />
            <button type= "button" id="Busqueda" onClick={this.clickBuscar}>
            BUSQUEDA 
            </button>

            <div className = "Detallesbutons"> 
              <input
                type="button"
                className="DetallesBoton"
                id="nuevo_usuario"
                value="Nuevo Usuario"
              />    
              <input
                type="button"
                className="DetallesBoton"
                id="ver_usuario"
                value="Ver Usuario"
              />        
              <input
                type="button"
                className="DetallesBoton"
                id="ver_camiones"
                value="Ver Camiones"
              />      
              <input
                type="button"
                className="DetallesBoton"
                id="ver_ventas"
                value="Ver Ventas"
              />     
            </div>        
          </div>  
          </fieldset>
      </from>
      </div>        
    );   
  }
}

export default PagePrincipalAdmi; 