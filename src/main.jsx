import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// main.jsx est le point d'entrée de notre application. C'est le fichier qui est exécuté en premier lorsqu'on lance notre application.
// ReactDOM.createRoot(document.getElementById('root')).render() permet de rendre notre application dans le fichier index.html.
// <React.StrictMode> est un composant qui permet de détecter les problèmes potentiels dans notre application.
// <App /> est le composant principal de notre application qui contient le composant BrowserRouter qui permet de gérer les routes de notre application.