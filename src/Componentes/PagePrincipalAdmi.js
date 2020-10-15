import React from 'react'
import registrarUsuario from './registrarUsuario';

class PagePrincipalAdmi extends React.Component {
  constructor() {

  
      super(); 
      this.state = {
        name: "",
        label: {
           
        }, 
      };

      this.PageAdmi = this.PageAdmi.bind(this);      
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
          <div className="Buscar">
            <img
            style={{ height: 35, width: 40 }}
              hspace="30"
          />
            <button type= "button" id="Busqueda" onClick={this.clickBuscar}>
            BUSQUEDA 
            </button>
            <div className = "Menu">                 
            <input type="button" value="Nuevo usuario" />
            <input type="button" value="Ver usuario"/>
            <input type="button" value="Ver Camiones"/>
            <input type="button" value="Ver Ventas"/>    
            </div>        
          </div>  
      </from>
      </div>        
    );   
  }
}

export default PagePrincipalAdmi; 