import React from 'react'

class registrarUsuario extends React.Component{

    render(){
        return <div className = "form-style-5" >
                <form>
                    <fieldset>
                        <legend><span className="number">1</span>Registrar usuario</legend>
                        <input type="text" value={this.state.value} onChange={this.handleChange} name="Nombre" placeholder="Nombre" />
                        <input type="text" name="App" placeholder="Apellido Paterno" />
                        <input type="text" name="Apm" placeholder="Apellido Materno" />
                        <input type="text" name="CURP" placeholder="CURP" />
                        <input type="text" name="RFC" placeholder="RFC" />
                        <input type="email" name="CorreE" placeholder="Correo electr&oacute;nico" />
                        <input type="text" name="TeleC" placeholder="Tel&eacute;fono celular" />
                        <input type="date" name="FechNa" placeholder="Fecha de nacimiento" />
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