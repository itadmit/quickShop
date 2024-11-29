import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@measured/puck/puck.css'
import './index.css' // אם יש לך קובץ CSS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)