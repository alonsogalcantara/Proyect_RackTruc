import React from "react";
import { useAlert } from "react-alert";
import "../Styles/style.css";
import { withRouter } from "react-router-dom";

const AlertButton = (props) => {
  const alert = useAlert();

  return (
    <input
      type="button"
      className="button"
      value="Registrar"
      onClick={(e) => {
        e.preventDefault();
        alert.show("Nuevo usuario registrado");
        props.history.push('/mainAdmin');
      }}
    />
  );
};

export default withRouter(AlertButton);
