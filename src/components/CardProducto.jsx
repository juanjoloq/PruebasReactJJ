import React from "react";
import PaginaLayout from "./PaginaLayout";

function Card({ nombreP, Precio, descripcion, imagen }) {
  return (
    <PaginaLayout>
            <div className="d-flex justify-content-center mt-5"> 
      <section className="card" style={{ width: "18rem" }}>
        <img
          src={imagen}
          alt={nombreP}
          className="card-img-top mx-auto mt-3 rounded-circle"
          style={{ width: "70%", objectFit: "contain" }} 
        />
        <div className="card-body text-center">
          <h2 className="card-title">{nombreP}</h2>
          <p className="card-text">{descripcion}</p>
          <p className="card-text">
            <strong>Precio:</strong> {Precio}
          </p>
        </div>
      </section>
    </div>
    </PaginaLayout>
  );
}

export default Card;
