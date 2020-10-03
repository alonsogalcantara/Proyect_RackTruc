import React from 'react'

//Extras
//import validate from "../helpers/validation";

class registrarUsuario extends React.Component{

     constructor(props) {
         super(props);
         this.state = {
             form: {
                 name: {
                     value: '',
                     name: 'name',
                     placeholder: "Nombre..."
                 },
                 app: {
                     value: '',
                     name: 'app',
                     placeholder: "Apellido Paterno..."
                 },
                 apm: {
                     value: '',
                         name: 'apm',
                         placeholder: "Apellido Materno..."
                 },
                 curp: {
                     value: '',
                         name: 'curp',
                         placeholder: "CURP..."
                 },
                 rfc: {
                     value: '',
                         name: 'rfc',
                         placeholder: "RFC..."
                 },
                 email: {
                     value: '',
                         name: 'email',
                         placeholder: "Correo electrónico..."
                 },
                 telec: {
                    value: '',
                    name: 'telec',
                    placeholder: "Teléfono..",
                    valid: 0,
                    touched: 0,
                    validationRules: {
                        isRequired: true,
                        minLength: 5,
                        onlyNumbers: true
                    }
                 },
                 fechan: {
                     value: '',
                         name: 'fechan',
                         placeholder: "Fecha de nacimiento.."
                 }
            },

            type: {
                name: "tipoUsuario",
                options: [
                    { value: "", displayValue: "Elige un usuario..." },
                    { value: "ADM", displayValue: "Adminitrador" },
                    { value: "CHO", displayValue: "Chofer" },
                    { value: "VTS", displayValue: "Ventas" }
                ]
            }
        }

         this.formHandler = this.formHandler.bind(this);
     }

     formHandler(event) {
         const { name, value } = event.target;
         //const valid = validate(value, this.state.form.validationRules);
         //const touched = 1;

         this.setState((state, props) => ({
             form: {
                 ...state.form,
                 [name]: {
                     ...state.form[name], value
                 }
             }
         }));
     }

    render(){
        return <div className = "form-style-5" >
                <form value={this.state.form} onChange={this.formHandler}>
                    <fieldset>
                        <legend><span className="number">1</span>Registrar usuario</legend>
                        <input type="text" name={this.state.form.name.name} placeholder={this.state.form.name.placeholder} />
                        <input type="text" name={this.state.form.app.name} placeholder={this.state.form.app.placeholder} />
                        <input type="text" name={this.state.form.apm.name} placeholder={this.state.form.apm.placeholder} />
                        <input type="text" name={this.state.form.curp.name} placeholder={this.state.form.curp.placeholder} />
                        <input type="text" name={this.state.form.rfc.name} placeholder={this.state.form.rfc.placeholder} />
                        <input type="email" name={this.state.form.email.name} placeholder={this.state.form.email.placeholder} />
                        <input type="text" name={this.state.form.telec.name} placeholder={this.state.form.telec.placeholder} />
                        <input type="date" name={this.state.form.fechan.name} placeholder={this.state.form.fechan.placeholder} />

                        <label htmlFor="Tipo de usuario" > <h2>Tipo de usuario </h2></label >
                        <select 
                            name={this.state.type.name}
                            onChange={this.formHandler}
                            options={this.state.type.options}>
                            <optgroup>
                                <option value="">Selecciona una opcion...</option>
                                <option value="admin">Administrador</option>
                                <option value="transportista">Transportista</option>
                                <option value="vendedor">Vendedor</option>
                            </optgroup>
                        </select>  
                        
                        <p>Elige un archivo</p>
                        <label className="file">
                            <input type="file" className="custom-file-input" name="adjunto" accept=".pdf, .jpg, .png" multiple />
                            <span className="file-custom"></span>
                        </label>
                     
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