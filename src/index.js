import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import UserApp from "./components/UserApp";
// import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <UserApp />
  </React.StrictMode>,
  document.getElementById("root")
);
