import React, { useState } from "react";

function ContadorDeCaracteres() {
    const [texto, setTexto] = useState("")
    return (
        <div className="border border-2 border-dark">
            <div className="d-flex justify-content-center mt-4">
                <textarea
                className="form-control w-25"
                placeholder="Mensaje"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                />
            </div>

            <div className="mt-5 p-3 bg-light border rounded text-center">
                <span>Cantidad de caracteres: {texto.length}</span>
                <br></br>
            {
                texto.length > 100 ? (
                    <span>Supero los 100 caracteres</span>
                ) : (
                    <span></span>
                )
            }
            </div>
        </div>
    )
}

export default ContadorDeCaracteres