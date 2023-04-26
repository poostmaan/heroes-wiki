// Codigo propio y necesario
import React from 'react'
import  { createRoot } from 'react-dom/client' 

// Codigo de terceros
import { BrowserRouter as Router } from 'react-router-dom'

// Mi codigo
import { HeroesApp } from './HeroesApp';
import './index.css'

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename={"/heroes-wiki"}>
      <HeroesApp />
    </Router>
  </React.StrictMode>
)
