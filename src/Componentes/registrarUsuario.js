import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { withRouter } from "react-router-dom";

//Extras
import AlertButton from "../helpers/alertButton";

class registrarUsuario extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: {
          value: "",
          name: "name",
          placeholder: "Nombre...",
        },
        app: {
          value: "",
          name: "app",
          placeholder: "Apellido Paterno...",
        },
        apm: {
          value: "",
          name: "apm",
          placeholder: "Apellido Materno...",
        },
        curp: {
          value: "",
          name: "curp",
          placeholder: "CURP...",
        },
        rfc: {
          value: "",
          name: "rfc",
          placeholder: "RFC...",
        },
        email: {
          value: "",
          name: "email",
          placeholder: "Correo electrónico...",
        },
        telec: {
          value: "",
          name: "telec",
          placeholder: "Teléfono..",
          valid: 0,
          touched: 0,
          validationRules: {
            isRequired: true,
            minLength: 5,
            onlyNumbers: true,
          },
        },
        fechan: {
          value: "",
          name: "fechan",
          placeholder: "Fecha de nacimiento..",
        },
      },

      type: {
        name: "tipoUsuario",
        options: [
          { value: "", displayValue: "Elige un usuario..." },
          { value: "ADM", displayValue: "Adminitrador" },
          { value: "CHO", displayValue: "Chofer" },
          { value: "VTS", displayValue: "Ventas" },
        ],
      },
    };

    this.formHandler = this.formHandler.bind(this);
  }

  onChangeHandler = (event) => {
    var file = event.target.files[0];
    console.log(file);
    console.log(this.validateSize(event));
    if (this.validateSize(event)) {
      console.log(file);
      // if return true allow to setState
      this.setState({
        selectedFile: file,
      });
    }
  };

  fileUploadHandler = () => {
    const data = new FormData();
    console.log(this.state.selectedFile);
    data.append("file", this.state.selectedFile);
    console.log(data);
    axios
      .post("http://localhost:8010/api/v1/upload", data)
      .then((res) => {
        // then print response status
        toast.success("upload success");
      })
      .catch((err) => {
        // then print response status
        toast.error("upload fail");
      });
  };

  validateSize = (event) => {
    let file = event.target.files[0];
    let size = 30000;
    let err = "";
    console.log(file.size);

    if (file.size > size) {
      err = file.type + "is too large, please pick a smaller file\n";
      toast.error(err);
    }
    else if (!file) {
      err = file.type + "There is no file founded\n";
      toast.error(err);
    }
    
    return true;
  };

  toHome(path){
    this.props.history.push(path);
  }

  /**
   * form
   */
  formHandler(event) {
    const { name, value } = event.target;
    //const valid = validate(value, this.state.form.validationRules);
    //const touched = 1;

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

  render() {
    return (
      <div className="form-style-5">
        <form value={this.state.form} onChange={this.formHandler}>
          <fieldset>
            <legend>
              <span className="number">1</span>Registrar usuario
            </legend>
            <input
              type="text"
              name={this.state.form.name.name}
              placeholder={this.state.form.name.placeholder}
            />
            <input
              type="text"
              name={this.state.form.app.name}
              placeholder={this.state.form.app.placeholder}
            />
            <input
              type="text"
              name={this.state.form.apm.name}
              placeholder={this.state.form.apm.placeholder}
            />
            <input
              type="text"
              name={this.state.form.curp.name}
              placeholder={this.state.form.curp.placeholder}
            />
            <input
              type="text"
              name={this.state.form.rfc.name}
              placeholder={this.state.form.rfc.placeholder}
            />
            <input
              type="email"
              name={this.state.form.email.name}
              placeholder={this.state.form.email.placeholder}
            />
            <input
              type="text"
              name={this.state.form.telec.name}
              placeholder={this.state.form.telec.placeholder}
            />
            <input
              type="date"
              name={this.state.form.fechan.name}
              placeholder={this.state.form.fechan.placeholder}
            />

            <label htmlFor="Tipo de usuario">
              {" "}
              <h2>Tipo de usuario </h2>
            </label>
            <select
              name={this.state.type.name}
              onChange={this.formHandler}
              options={this.state.type.options}
            >
              <optgroup>
                <option value="">Selecciona una opcion...</option>
                <option value="admin">Administrador</option>
                <option value="transportista">Transportista</option>
                <option value="vendedor">Vendedor</option>
              </optgroup>
            </select>

            <p>Elige un archivo</p>
            <label className="file">
              <input
                type="file"
                className="custom-file-input"
                name="adjunto"
                accept=".pdf, .jpg, .png"
                onChange={this.onChangeHandler}
              />
            </label>
          </fieldset>
          <AlertButton />
          <input
            type="button"
            className="button-cancelar"
            value="Cancelar"
            onClick={() => {
              this.props.history.push('/mainAdmin');
              ;
            }}
          />
        </form>
      </div>
    );
  }
}

export default withRouter(registrarUsuario);
