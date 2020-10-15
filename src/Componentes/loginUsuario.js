import React from "react";
import "../style.css";
import { withRouter } from "react-router-dom";

class LoginUsuario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        usuario: {
          id: "usuario",
          name: "usuario",
          type: "text",
          placeholder: "Ingrese nombre de usuario",
          value: "example",
        },
        password: {
          id: "password",
          name: "password",
          type: "text",
          placeholder: "Ingrese contraseña",
          value: "exmple",
        },
      },
    };
    this.formHandler = this.formHandler.bind(this);
    this.handleSumbit = this.handleSumbit.bind(this);
  }

  handleSumbit() {
    this.setState({ value: this.state.form.usuario.value });
    this.setState({ value: this.state.form.password.value });

    const usuari = this.state.form.usuario.value;
    const contra = this.state.form.password.value;

    if (usuari === "admin" && contra === "1234") {
      console.log("Logeado");
      this.nextPath("/detallesCamionero");
    } else {
      console.log("No logeado");
    }
  }

  /**
   * form
   */
  formHandler(event) {
    const { name, value } = event.target;

    this.setState((state, props) => ({
      form: {
        ...state.form,
        [name]: {
          ...state.form[name],
          value,
        },
      },
    }));
  }

  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <div className="login-container">
        <div className="form-style-5">
          <legend>
            <h1>Iniciar sesión</h1>
          </legend>
        </div>

        <form onChange={this.formHandler}>
          <label text="Usuario" />
          <input
            id={this.state.form.usuario.id}
            name={this.state.form.usuario.name}
            type={this.state.form.usuario.type}
            placeholder={this.state.form.usuario.placeholder}
          />
          <label text="Contraseña" />
          <input
            id={this.state.form.password.id}
            name={this.state.form.password.name}
            type={this.state.form.password.type}
            placeholder={this.state.form.password.placeholder}
          />
        </form>
        <button onClick={this.handleSumbit}>Aceptar</button>
      </div>
    );
  }
}

export default  withRouter(LoginUsuario);
