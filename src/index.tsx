import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import Login from './pages/Login/Login'
import Produto from './pages/Produto/Produto';

ReactDOM.render(
  <React.StrictMode>
    <Produto />
  </React.StrictMode>,
  document.getElementById('root')
);
