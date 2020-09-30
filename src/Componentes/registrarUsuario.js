import React from 'react'

class registrarUsuario extends React.Component{
    render(){
        return <div>
            <div>
                <h1>REGISTRAR USUARIO</h1>
            </div>

            <form action="">
                <div>
                    <input type="text" placeholder="Nombre" id="nombre" />
                </div>

                <div>
                    <input type="text" placeholder="Apellido Paterno" id="ap"/>
                </div>

                <div>
                    <input type="text" placeholder="Apellido Materno" id="am"/>
                </div>
                
                <div>
                    <input type="text" placeholder="CURP" id="curp"/>
                </div>

                <div>
                    <input type="text" placeholder="RFC" id="ap"/>
                </div>

                <div>
                    <input type="text" placeholder="Telefono celular" id="ap"/>
                </div>

                <div>
                    <input type="text" placeholder="Fecha de nacimiento" id="ap"/>
                </div>

                <div>
                    <input type="email" placeholder="E-mail" id="correo" />
                </div>
                <button type="email">Enviar</button>
            </form>
        </div>
    }
}

export default registrarUsuario;