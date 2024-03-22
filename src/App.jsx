import React from 'react';
import Navbar from './components/navbar.jsx';
import AppRoutes from './routes.jsx'; // Importa AppRoutes

const App = () => {
  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  );
};

export default App;