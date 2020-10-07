import React from 'react'

class registrarUsuario extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            app: '',
            apm: '',
            curp: '',
            rfc: '',
            email: '',
            telec: '',
            fechan: ''
        };

        this.nameHandler = this.nameHandler.bind(this);
        this.appHandler = this.appHandler.bind(this);
        this.apmHandler = this.apmHandler.bind(this);
        this.curpHandler = this.curpHandler.bind(this);
        this.rfcHandler = this.rfcHandler.bind(this);
        this.emailHandler = this.emailHandler.bind(this);
        this.telecHandler = this.telecHandler.bind(this);
        this.fechanHandler = this.fechanHandler.bind(this);
    }


    nameHandler(event) {
        this.setState({ name: event.target.value });
    }

    appHandler(event) {
        this.setState({ app: event.target.value });
    }

    apmHandler(event) {
        this.setState({ apm: event.target.value });
    }

    curpHandler(event) {
        this.setState({ curp: event.target.value });
    }

    rfcHandler(event) {
        this.setState({ rfc: event.target.value });
    }

    emailHandler(event) {
        this.setState({ email: event.target.value });
    }

    telecHandler(event) {
        this.setState({ telec: event.target.value });
    }

    fechanHandler(event) {
        this.setState({ fechan: event.target.value });
    }

    render(){
        return <div className = "form-style-5" >
                <form>
                    <fieldset>
                        <legend><span className="number">1</span>Registrar usuario</legend>
                        <input type="text" value={this.state.name} onChange={this.nameHandler} name="Nombre" placeholder="Nombre" />
                        <input type="text" value={this.state.app} onChange={this.appHandler} name="App" placeholder="Apellido Paterno" />
                        <input type="text" value={this.state.apm} onChange={this.apmHandler} name="Apm" placeholder="Apellido Materno" />
                        <input type="text" value={this.state.curp} onChange={this.curpHandler} name="CURP" placeholder="CURP" />
                        <input type="text" value={this.state.rfc} onChange={this.rfcHandler} name="RFC" placeholder="RFC" />
                        <input type="email" value={this.state.email} onChange={this.emailHandler} name="CorreE" placeholder="Correo electr&oacute;nico" />
                        <input type="text" value={this.state.telec} onChange={this.telecHandler} name="TeleC" placeholder="Tel&eacute;fono celular" />
                        <input type="date" value={this.state.fechan}  onChange={this.fechanHandler} name="FechNa" placeholder="Fecha de nacimiento" />

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
