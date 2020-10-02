import React from 'react'

class registrarUsuario extends React.Component{

     constructor(props) {
         super(props);
         this.state = {
             form: {
                 name: {
                     value: ''
                 },
                 app: {
                     value: ''
                 },
                 apm: {
                     value: ''
                 },
                 curp: {
                     value: ''
                 },
                 rfc: {
                     value: ''
                 },
                 email: {
                     value: ''
                 },
                 telec: {
                     value: ''
                 },
                 fechan: {
                     value: ''
                 }
             }
         };

         this.formHandler = this.formHandler.bind(this);
     }

     formHandler(event) {
         const { name, value } = event.target;

         this.setState((state, props) => ({
             form: {
                 ...state.form,
                 [name]: {
                     ...state.form[name],
                     value
                 }
             }
         }));
     }

    render(){
        return <div className = "form-style-5" >
                <form value={this.state.form} onChange={this.formHandler}>
                    <fieldset>
                        <legend><span className="number">1</span>Registrar usuario</legend>
                        <input type="text" name="name" placeholder="Nombre" />
                        <input type="text" name="app" placeholder="Apellido Paterno" />
                        <input type="text" name="apm" placeholder="Apellido Materno" />
                        <input type="text" name="curp" placeholder="CURP" />
                        <input type="text" name="rfc" placeholder="RFC" />
                        <input type="email" name="email" placeholder="Correo electr&oacute;nico" />
                        <input type="text" name="telec" placeholder="Tel&eacute;fono celular" />
                        <input type="date" name="fechan" placeholder="Fecha de nacimiento" />
                        
                        <p>Elige un archivo</p>
                        <label className="file">
                            <input type="file" className="custom-file-input" name="adjunto" accept=".pdf, .jpg, .png" multiple />
                            <span className="file-custom"></span>
                        </label>
                        
                        <label htmlFor="Tipo de usuario" > <h2>Tipo de usuario </h2></label >
                        <select id="tipoUsuario" name="tipoUsuario">
                            <optgroup>
                                <option value="fishkeeping">Administrador</option>
                                <option value="reading">Transportista</option>
                                <option value="boxing">Vendedor</option>
                            </optgroup>

                        </select>      
                    </fieldset>

                    <fieldset>
                        <legend><span className="number">2</span>Informacion adicional</legend>
                        <textarea name="caracter" placeholder="Caracter&iacute;sticas"></textarea>
                    </fieldset>

                    <input type="button" value="Aceptar" />
                    <input type="button" className="button-cancelar" value="Cancelar"/>
                </form>
        </div>
    }
}

export default registrarUsuario;