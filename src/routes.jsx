import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import Coin from './pages/coin.jsx';
import Favorites from './pages/favorites.jsx';
// Añade aquí más importaciones de páginas si las tienes

const AppRoutes = () => {
  return (
    <Routes> {/* Aquí defines tus rutas */}
      <Route path="/" element={<Home />} /> {/* Ruta para la página principal */}
      <Route path="/coin/:id" element={<Coin />} /> {/* Ruta para la página de detalles de la criptomoneda */}
      <Route path="/favorites" element={<Favorites />} /> {/* Ruta para la página de criptomonedas favoritas (Bonus) */}
      {/* Puedes añadir más rutas aquí según sea necesario */}
    </Routes>
  );
};

export default AppRoutes;