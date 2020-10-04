import React from "react";
import { useAlert } from "react-alert";

const AlertButton = () => {
    
  const alert = useAlert();

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        alert.show("Oh look, an alert!");
      }}
    >
      Show Alert
    </button>
  );
};

export default AlertButton;
