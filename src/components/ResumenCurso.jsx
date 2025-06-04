import React from "react";
import PaginaLayout from "./PaginaLayout";

function ResumenCurso({ NombreCurso, FechaInicio, Instructor }) {
    // Fecha actual
    const ahora = new Date();
    const inicio = new Date(FechaInicio);

    // Fecha de finalización (3 meses después)
    const fin = new Date(inicio);
    fin.setMonth(fin.getMonth() + 3);

    // Diferencia en milisegundos y luego a semanas
    const msRestantes = fin - ahora;
    const semanasRestantes = Math.max(0, Math.floor(msRestantes / (1000 * 60 * 60 * 24 * 7)));

    return (
        <PaginaLayout>
            <div className="d-flex justify-content-center align-items-center">
                <div className="card my-3" style={{ maxWidth: "400px", width: "100%" }}>
                    <div className="card-body">
                        <h5 className="card-title">{NombreCurso}</h5>
                        <p className="card-text"><strong>Duración:</strong> {semanasRestantes} semanas restantes</p>
                        <p className="card-text"><strong>Instructor:</strong> {Instructor}</p>
                    </div>
                </div>
            </div>
        </PaginaLayout>
    );
}

export default ResumenCurso;
