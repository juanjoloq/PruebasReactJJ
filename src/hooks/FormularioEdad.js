import React, { useState } from "react";

function FormularioEdad() {
    const [edad, setEdad] = useState()
    const [nombre, setNombre] = useState("")
    return (
        <div className="border border-2 border-dark p-4">
            <div className="d-flex justify-content-center ">
                <input
                    className="form-control w-25"
                    type="text"
                    placeholder="Escribe tu nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <input
                    className="form-control w-25"
                    type="number"
                    placeholder="Escribe tu Edad"
                    value={edad}
                    onChange={(e) => setEdad(e.target.value)}
                />
            </div>
            <div className="mt-5 p-3 bg-light border rounded text-center" >
                <p className="mb-0 fs-5">Hola {nombre}</p>
                {
                edad >= 18 ? (
                    <span>Tu eres mayor de edad, {nombre}</span>
                ) : (
                    <span>Tu eres menor de edad, {nombre}</span>
                )
                }
            </div>
        </div>
    )
}


export default FormularioEdad