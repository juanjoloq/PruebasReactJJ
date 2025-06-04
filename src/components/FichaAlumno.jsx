import React from "react";
import PaginaLayout from "./PaginaLayout";

function FichaAlumno({ nombre, programa, ficha, jornada }) {
  return (
    <PaginaLayout>
        <div className="table-responsive mt-4">
      <table className="table table-bordered table-striped table-hover text-center">
        <thead className="table-primary">
          <tr>
            <th>Nombre</th>
            <th>Programa</th>
            <th>Ficha</th>
            <th>Jornada</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{nombre}</td>
            <td>{programa}</td>
            <td>{ficha}</td>
            <td>{jornada}</td>
          </tr>
        </tbody>
      </table>
    </div>
    </PaginaLayout>
  );
}

export default FichaAlumno;
