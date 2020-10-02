import React, {Component} from 'react';


class detallesCamionero extends Component{
   constructor(props){
    super(props);
    this.state={
      detalles:[
	        'Nombre: ',
	        'Apellidos: ',
	        'Edad: '
	      ]
	    }
	  }

	render (){
		return(
	      <form>
	        <input 
	          onChange={(ev)=>{
	            this.SyncEmailChanges(ev.target.value)
	          }}
	          type="Email" 
	          value={this.state.email} 
	          placeholder="Email"/> 

	        <input 
	          onChange={(ev)=>{
	            this.SyncPasswordChanges(ev.target.value)
	          }}
	          type="Password" 
	          value={this.state.password} 
	          placeholder="*****"/> 

	        <div>
	          <input 
	          onClick={this.submitForm}
	          type="Submit" placeholder="Login"/>  
	        </div>

	      </form>
    	)
	  }
}

export default detallesCamionero;