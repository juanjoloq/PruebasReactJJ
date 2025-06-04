import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Card from './components/CardProducto';
import FichaAlumno from './components/FichaAlumno';
import FormularioX from './components/FormularioContacto';
import NoticiaDestacada from './components/NoticiaDestacada';
import ResumenCurso from './components/ResumenCurso';
import CambiarTema from './hooks/CambiarTema';
import ContadorDeClicks from './hooks/ContadorDeClics';
import FormularioEdad from './hooks/FormularioEdad';
import SeleccionarIdioma from './hooks/SeleccionarIdioma';
import ContadorDeCaracteres from './hooks/ContadorDeCaracteres';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
              <Route path="/" element={<ResumenCurso 
                NombreCurso="ADSO"
                FechaInicio="2025-04-06"
                Instructor="Guillo"
              />}></Route>
              <Route path="/servicios" element={<Card 
                nombreP="BBNO" 
                imagen="https://unavatar.io/juanjoloq"
                Precio="10.000"
                descripcion="Consola ultimo modelo"
              />}></Route>
              <Route path="/acercade" element={<FichaAlumno
                nombre="Juan Jose"
                programa="ADSO"
                ficha="2959811"
                jornada="Mañana"
              />}></Route>
              <Route path="/contacto" element={<FormularioX />}></Route>
              <Route path='/noticia' element={<NoticiaDestacada 
                titulo="Se paso de caliente"
                contenido="QUEMADO HOMBRE MUERTO"
              />}></Route>
              <Route path='/useState' 
              element={
                <>
                  <CambiarTema />
                  <ContadorDeClicks /> 
                  <FormularioEdad />
                  <SeleccionarIdioma />
                  <ContadorDeCaracteres />
                </>
              }
              ></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
