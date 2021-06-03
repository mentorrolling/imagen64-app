import React, { useState } from "react";

import { Form } from "react-bootstrap"; //traigo de react-bootstrap el Form

function App() {
  const [state, setstate] = useState(""); //Estado donde guardaré la imagen

  //Cuando cambia el elemento del form
  const handleChange = async (e) => {
    const img = e.target.files[0]; //obtengo el archivo
    const base64 = await getBase64(img); //Uso funcion que transforma a base64 la imagen como es una promesa espero que se resuelva
    setstate(base64); //guardo en el estado la imagen
    console.log(base64); //muestro en consola
  };

  //Funcion que transforma la imagen de la compu en base64 para se almacenada
  function getBase64(img) {
    //recibo la imagen
    //retorno una promesa que usa FileReader
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.addEventListener("load", () => resolve(reader.result)); //detecta cambio en el file
      reader.readAsDataURL(img); //convierte imagen
    });
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <div className="text-center mb-2">
            {state.length > 0 ? (
              <img
                className="imagenAvatar"
                src={state}
                title="Título de la imágen"
                alt="img"
              />
            ) : (
              <span>Elija una imágen</span>
            )}
          </div>
          <div className="text-center">
            <Form>
              <Form.Group>
                <Form.File
                  id="exampleFormControlFile1"
                  accept="image/png, .png .jpeg, .jpg, image/gif"
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
