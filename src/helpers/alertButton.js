import React from "react";
import { useAlert } from "react-alert";
import '../style.css';

const AlertButton = () => {
    
  const alert = useAlert();

  return (
    <input
        type='button'
        className="button"
        value='Registrar'
        onClick={(e) => {
        e.preventDefault();
        alert.show("Nuevo usuario registrado");
        }}
    />
  );
};

export default AlertButton;
