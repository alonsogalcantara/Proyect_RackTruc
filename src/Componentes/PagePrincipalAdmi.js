import React from 'react'
import registrarUsuario from './registrarUsuario';

class PagePrincipalAdmi extends React.Component {
  constructor() {

  
			var buscar = [
				"Camiones",
				"Usuarios",
				"Carreteras",
				"Cargas",
			];

		 	var pal = document.getElementById("buscar-pal").value;
		 	var tam = pal.length;
		 	for(indice in buscar){
				var nombre = buscar[indice];
				var str = nombre.substring(0,tam);
				if(pal.length <= nombre.length && pal.length != 0 && nombre.length != 0){
					if(pal.toLowerCase() == str.toLowerCase()){
						var node = document.createElement("LI");
						var textnode = document.createTextNode(preguntas[indice]);
						node.appendChild(textnode);
						document.getElementById("demo").appendChild(node);
					} else {
            alert('no')
          }
				}
			}
    
   
    return <div className = 'form-style=5'>
    <from>
          <input type="button" value="Nuevo usuario" />
          <input type="button" value="Ver usuario"/>
          <input type="button" value="Ver Camiones"/>
          <input type="button" value="Ver Ventas"/>

        


      </from>
    </div> 

    var imagenes = ['logo192.png','logo512'], 
      cont = 0; 

    function carrousel(contenedor){
      contenedor.addEventListener('click', e =>{
        let trasero = contenedor.querySelector('.trasero'),
            delantero = contenedor.querySelector('.delantero'), 
            img = contenedor.querySelector('img'), 
            tgt = e.target; 

        if(tgt == trasero){
          if(cont > 0){
            img.src = imagenes[cont -1];  
            cont--; 
          }else{
            img.src = imagenes[imagenes.length - 1]; 
            cont = imagenes.length -1; 
          }
        }else if(tgt == delantero){
          if(cont < imagenes.length -1){
            img.src = imagenes[cont *1]; 
            cont++; 
          }else{
            img.src = imagenes[0]; 
            cont = imagenes.length - 1
          }
          
        }


      });
    }
      
    document.addEventListener("DOMContentLoaded", () => {
      let contenedor = document.querySelector('.contenedor'); 
      carrousel(contenedor); 
      
    });
   }
    

  }
export default PagePrincipalAdmi; 