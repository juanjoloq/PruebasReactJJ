import React from "react";
import PaginaLayout from "./PaginaLayout";

function FormularioX() {
  return (
    <PaginaLayout>
        <div
      className="container mt-4"
      style={{ maxWidth: "500px" }}
    >
      <form className="border p-4 rounded">
        <div className="mb-3">
          <label htmlFor="Nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            name="Nombre"
            id="Nombre"
            className="form-control"
            placeholder="Ingrese su nombre"
          />
          <span className="text-danger"></span>
        </div>

        <div className="mb-3">
          <label htmlFor="Correo" className="form-label">
            Correo
          </label>
          <input
            type="email"
            id="Correo"
            name="Correo"
            className="form-control"
            placeholder="ejemplo@correo.com"
          />
          <span className="text-danger"></span>
        </div>

        <div className="mb-3">
          <label htmlFor="Mensaje" className="form-label">
            Mensaje
          </label>
          <textarea
            name="Mensaje"
            id="Mensaje"
            className="form-control"
            rows="4"
            placeholder="Escribe tu mensaje aquí"
          ></textarea>
          <span className="text-danger"></span>
        </div>

        {/* Botón centrado */}
        <div className="text-center">
          <button type="submit" className="btn btn-dark px-5 text-light">
            Enviar
          </button>
        </div>
      </form>
    </div>
    </PaginaLayout>
  );
}

export default FormularioX;
