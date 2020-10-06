import React, { useState } from 'react';
import '../style.css'

const Label = ({ text }) => {
    return (
        <div>
            <label> {text} </label>
        </div>
    )
};

const Input = ({ atribute, handleChange, param }) => {
    return(
        <div>
            <input 
            id={atribute.id}
            name={atribute.name}
            placeholder={atribute.placeholder}
            type={atribute.type}
            onChange={ (e) => handleChange(e.target.name, e.target.value)}
            className='regular-style'
            />
        </div>
    )
};

const Title = () => {
    return (
        <div className="form-style-5">
        <legend>
            <span className="number"></span>Iniciar sesión
        </legend>
        </div>
    )
};



const LoginUsuario = () => {
    const [ user, setUser ] = useState('');
    const [ password, setPassword ] = useState('');

    function handleChange(name, value){
        if (name == 'usuario'){
            setUser(value)
        }else {
            setPassword(value)
        }
    }

    function handleSumbit(){
        let account = { user, password }
        if(account) {
            console.log('account', account)
        }
    }

    return (
        <div className="login-container">
            <Title />
            <Label text='Usuario'/>
            <Input 
            atribute={{
                id: 'usuario',
                name: 'usuario',
                type: 'text',
                placeholder: 'Ingrese nombre de usuario'
            }}
            handleChange={handleChange}
            />
            <Label text='Contraseña'/>
            <Input 
            atribute={{
                id: 'contraseña',
                name: 'contraseña',
                type: 'password',
                placeholder: 'Ingrese su contraseña'
            }}
            handleChange={handleChange}
            />
            <button onClick={handleSumbit}>
                Aceptar
            </button>
        </div>
    )   
};

export default LoginUsuario;