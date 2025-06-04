import React from "react";
import NavBar from "./BarraNavegacion";


function PaginaLayout({children}) {
    return (
        <section>
            <div >
                <NavBar />
            </div>
            <div>
                <main>
                    {children}
                </main>
            </div>
        </section>
    )
}

export default PaginaLayout