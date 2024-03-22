import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
     
      <ul>
                <li>
          <Link to="/">Home</Link> {/* Enlace a la página principal */}
        </li>
        <li>
          <Link to="/favorites">Favorites</Link> {/* Enlace a los favoritos */}
        </li>
       
      </ul>
    </nav>
  );
};

export default Navbar;