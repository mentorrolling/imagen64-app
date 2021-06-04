import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const UserPage = () => {
  const history = useHistory();
  const [state, setState] = useState("");

  useEffect(() => {
    const base = localStorage.getItem("usuario");

    if (base.length === 0) {
      setTimeout(() => {
        history.push("/");
      }, 2000);
    } else {
      setState(JSON.parse(localStorage.getItem("usuario")));
    }
  }, []);

  const deslogueo = () => {
    localStorage.setItem("usuario", "");
    history.push("/");
  };

  return (
    <div className="container">
      {state !== "" ? (
        <>
          <div className="row">
            <div className="col">
              <h1>
                <small onClick={deslogueo}>🔚</small>
                Bienvenido <small>{state.nombre}</small>
              </h1>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 offset-md-3 text-center">
              <img className="imagenAvatar" src={state.img} alt="" />
              <h3>{state.usuario}</h3>
              <h4>{state.email}</h4>
            </div>
          </div>
        </>
      ) : (
        <div className="col">
          <div className="alert alert-danger" role="alert">
            No se encuentra logueado
          </div>
        </div>
      )}
    </div>
  );
};

export default UserPage;
