import React, { useState } from "react";

function ContadorDeClicks() {
    const [clicks, setClicks] = useState(0)
    return (
            <div className="border border-2 border-dark">
                <button className="btn btn-dark m-2" onClick={() => setClicks(clicks + 1)}>Click Me</button>
            {
                clicks % 5 === 0 && clicks !== 0 ? (
                    <span>Esta cantidad de clicks es múltiplo de 5: {clicks}</span>
                ) : (
                    <span>La cantidad de clicks es {clicks}</span>
                )
            }
            </div>
    )
}

export default ContadorDeClicks