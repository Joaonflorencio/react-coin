import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Coin = () => {
  const { id } = useParams(); // Obtiene el ID de la URL
  const [coin, setCoin] = useState(null); // Estado para almacenar la información de la criptomoneda

  useEffect(() => {
    // Función para obtener la información de la criptomoneda desde la API
    const fetchCoinData = async () => {
      try {
        const response = await fetch(`https://api.coincap.io/v2/assets/${id}`);
        const data = await response.json();
        setCoin(data.data); // Actualiza el estado con los datos de la criptomoneda
      } catch (error) {
        console.error("Error fetching coin data:", error);
      }
    };

    fetchCoinData(); // Llama a la función al montar el componente y cuando el ID cambia
  }, [id]); // Dependencia: el ID de la criptomoneda

  // Verifica si aún se están cargando los datos
  if (!coin) {
    return <div>Loading...</div>; // Puedes personalizar este mensaje de carga
  }

  // Renderiza la información de la criptomoneda
  return (
    <div>
      <h2>{coin.name} ({coin.symbol})</h2>
      <p>Price: ${coin.priceUsd}</p>
      <p>Rank: {coin.rank}</p>
      <p>Market Cap: ${coin.marketCapUsd}</p>
      <p>Volume (24Hr): ${coin.volumeUsd24Hr}</p>
      <p>Change (24Hr): {coin.changePercent24Hr}%</p>
      {/* Puedes añadir más detalles según prefieras */}
    </div>
  );
};

export default Coin;