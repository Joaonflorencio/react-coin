import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      {/* El contenedor principal de tu barra de navegación */}
      <ul>
        {/* Lista de enlaces. Puedes estilizarla como prefieras */}
        <li>
          <Link to="/">Home</Link> {/* Enlace a la página principal */}
        </li>
        <li>
          <Link to="/favorites">Favorites</Link> {/* Enlace a tus favoritos */}
        </li>
        {/* Puedes agregar más enlaces según necesites */}
      </ul>
    </nav>
  );
};

export default Navbar;