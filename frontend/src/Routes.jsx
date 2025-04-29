import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Registrar from './Pages/Registrar';
import Ingresar from './Pages/Ingresar';  
import Nav from './components/Nav';
import Footer from './components/Footer';
import Cards from './components/Cards';

function AppRoutes() {
  console.log("Renderizando rutas");  

  return (
    <BrowserRouter>
      <div style={{ margin: 0, padding: 0, width: '100%', height: '100%' }}>
        <Routes>
          {/* Ruta para el Home */}
          <Route path="/" element={<Home />} />
          
          {/* Rutas para las páginas de registrar e ingresar */}
          <Route path="/registrar" element={<Registrar />} />
          <Route path="/ingresar" element={<Ingresar />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default AppRoutes;
