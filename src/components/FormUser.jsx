import React from "react";

const FormUser = ({ formValues, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Nombre:</label>
        <input
          type="text"
          className="form-control"
          name="nombre"
          autoComplete="off"
          value={formValues.nombre}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Usuario:</label>
        <input
          type="text"
          className="form-control"
          name="usuario"
          autoComplete="off"
          value={formValues.usuario}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          className="form-control"
          name="email"
          autoComplete="off"
          value={formValues.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          className="form-control"
          name="password"
          autoComplete="off"
          value={formValues.password}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary btn-block">
        Submit
      </button>
    </form>
  );
};

export default FormUser;
