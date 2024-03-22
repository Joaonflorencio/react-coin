import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const response = await fetch('https://api.coincap.io/v2/assets');
        const data = await response.json();
        setCryptos(data.data); // Asume que la API devuelve un objeto con una propiedad 'data' que es un array de criptomonedas
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchCryptos();
  }, []); // El array vacío asegura que este efecto se ejecute solo una vez después del primer renderizado

  return (
    <div>
      <h1>Principales Criptomonedas</h1>
      <ul>
        {cryptos.map((crypto) => (
          <li key={crypto.id}>
            <Link to={`/coin/${crypto.id}`}>
              {crypto.rank}. {crypto.name} ({crypto.symbol}): ${crypto.priceUsd}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;