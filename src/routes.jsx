import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import Coin from './pages/coin.jsx';
import Favorites from './pages/favorites.jsx';


const AppRoutes = () => {
  return (
    <Routes> {/* Aquí defines las rutas */}
      <Route path="/" element={<Home />} /> {/* Ruta para la página principal */}
      <Route path="/coin/:id" element={<Coin />} /> {/* Ruta para la página de detalles de la criptomoneda */}
      <Route path="/favorites" element={<Favorites />} /> {/* Ruta para la página de criptomonedas favoritas (Bonus) */}
      
    </Routes>
  );
};

export default AppRoutes;