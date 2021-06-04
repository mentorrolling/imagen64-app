import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  // let usuarioDB = {};
  const [usuariosDB, setUsuariosDB] = useState([]);

  const [datos, setDatos] = useState({
    usuario: "",
    password: "",
  });

  useEffect(() => {
    setUsuariosDB(JSON.parse(localStorage.getItem("usuarios")) || []);
    // let base = localStorage.getItem("usuario");
    // if (base) {
    //   setUsuarioDB(JSON.parse(localStorage.getItem("usuario")));
    // }
  }, []);

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validarDatos(datos);
    // let valido = validarDatos(datos);
    // console.log(valido);
    // if (valido.ok) {
    //   history.push("/user");
    // } else {
    setDatos({
      usuario: "",
      password: "",
    });
    // }
  };

  const validarDatos = (datos) => {
    let validarUser = usuariosDB.find((usuario) => {
      return usuario.usuario === datos.usuario;
    });
    if (validarUser) {
      if (validarUser.password === datos.password) {
        localStorage.setItem("usuario", JSON.stringify(validarUser));
        history.push("/user");
      } else {
        console.log("Usuario o contraseña incorrectos");
      }
    } else {
      console.log("Usuario o contraseña incorrectos");
    }

    // let validar = {
    //   ok: null,
    //   message: "",
    // };

    // return validar;
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Pantalla de Login</h1>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Usuario</label>
              <input
                type="text"
                className="form-control"
                name="usuario"
                value={datos.usuario}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={datos.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Iniciar
            </button>
          </form>
          <div className="text-center mt-3">
            <p>
              Si no tienes cuenta puedes registrarte{" "}
              <Link to="/registro">aquí</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
