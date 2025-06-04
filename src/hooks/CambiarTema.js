import React, { useState } from "react";
import PaginaLayout from "../components/PaginaLayout"

function CambiarTema() {
    const [color, setColor] = useState('white')
    return (
        <PaginaLayout>
        <div className="border border-2 border-dark" style={{background: color, padding: "1em"}}>
            <h3 style={{color: color === "white" ? "black" : "white"}}>{color}</h3>
            <button className="btn btn-dark m-2" onClick={() => setColor('black')}>Modo Oscuro</button>
            <button className="btn btn-light border border-1 m-2" onClick={() => setColor('white')}>Modo claro</button>

            <p style={{color: color === "white" ? "black" : "white"}}>
                Este es el mega diper ultra diferente tema 
            </p>
        </div>
        </PaginaLayout>
    )
}

export default CambiarTema

