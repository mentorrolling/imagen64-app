import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import FormBase64 from "./FormBase64";
import FormUser from "./FormUser";
const UserApp = () => {
  const history = useHistory();
  const [state, setstate] = useState("");
  const [usuarios, setUsuarios] = useState([]);

  const [formValues, setFormValues] = useState({
    nombre: "",
    usuario: "",
    email: "",
    password: "",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx_7XSeoV5uoxiFIbSEg9QT-YT7TFqgvuxag&usqp=CAU",
  });

  useEffect(() => {
    if (state) {
      setFormValues({
        ...formValues,
        img: state,
      });
    }
  }, [state]);

  useEffect(() => {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }, [usuarios]);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(usuarios);
    setUsuarios([...usuarios, formValues]);

    resetForm();
    history.push("/");
  };

  const resetForm = () => {
    setFormValues({
      nombre: "",
      usuario: "",
      email: "",
      password: "",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx_7XSeoV5uoxiFIbSEg9QT-YT7TFqgvuxag&usqp=CAU",
    });
    setstate("");
  };

  return (
    <div className="container mb-3">
      <div className="row">
        <div className="col">
          <h1>
            <small>
              <Link to="/" className="text-decoration-none">
                🔙
              </Link>
            </small>
            Registro <small>Usuario</small>
          </h1>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 offset-md-3 text-center mb-2">
          <img className="imagenAvatar" src={formValues.img} alt="avatar" />
          <FormBase64 setstate={setstate} />
        </div>
        <div className="col-md-4">
          <FormUser
            formValues={formValues}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default UserApp;
