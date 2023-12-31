import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { inject } from '@vercel/analytics';

    inject();
    
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>

        <App />    
    </Router>

  </React.StrictMode>,
)
