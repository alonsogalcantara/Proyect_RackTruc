import React from 'react';
import './style.css';
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from './serviceWorker';
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

ReactDOM.render(
  <AlertProvider template={AlertTemplate}>
    <App />
  </AlertProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
