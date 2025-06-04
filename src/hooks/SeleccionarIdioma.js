import React, { useState } from "react";

function SeleccionarIdioma() {
    const [idioma, setIdioma] = useState("Español")
    return (
        <div className="border border-2 border-dark">
            <button className="btn btn-dark m-2" onClick={() => setIdioma("Español")}>Español</button>
            <button className="btn btn-dark m-2" onClick={() => setIdioma("Ingles")}>Ingles</button>
            <button className="btn btn-dark m-2" onClick={() => setIdioma("Frances")}>Frances</button>
            {
            idioma === "Español" ? (
                <span>Texto en español</span>
            ) : idioma === "Ingles" ? (
                <span>This text is in English</span>
            ) : idioma === "Frances" ? (
                <span>Texte en français</span>
            ) : (
                <span>Idioma no reconocido</span>
            )
            }

        </div>
    )
}


export default SeleccionarIdioma