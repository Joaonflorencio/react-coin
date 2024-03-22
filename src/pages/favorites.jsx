import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Función para obtener los favoritos del localStorage y los detalles de cada uno desde la API
    const fetchFavoritesData = async () => {
      const storedFavorites = localStorage.getItem('favorites');
      const favoritesIds = storedFavorites ? JSON.parse(storedFavorites) : [];

      const promises = favoritesIds.map(id =>
        fetch(`https://api.coincap.io/v2/assets/${id}`).then(response => response.json())
      );

      const results = await Promise.all(promises);
      const favoriteCoins = results.map(result => result.data);
      setFavorites(favoriteCoins); // Actualiza el estado con los datos de las criptomonedas favoritas
    };

    fetchFavoritesData();
  }, []); // Este efecto se ejecuta solo una vez cuando el componente se monta

  if (favorites.length === 0) {
    return <div>No tienes criptomonedas favoritas.</div>;
  }

  return (
    <div>
      <h2>Mis Criptomonedas Favoritas</h2>
      <ul>
        {favorites.map(coin => (
          <li key={coin.id}>
            <Link to={`/coin/${coin.id}`}>{coin.name}</Link> - Precio: ${coin.priceUsd}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;