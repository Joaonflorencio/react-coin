import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx'; // Importa el componente principal App.jsx
import './styles.css'; // Importa mi estilos globales

// Encuentra el elemento root en tu HTML
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router> {/* Envuelve la aplicación en el Router */}
      <App /> {/* Renderiza el componente App */}
    </Router>
  </React.StrictMode>
);