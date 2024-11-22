// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RenderOnly from './RenderOnly';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// קבלת הפרמטר edit מה-URL
const urlParams = new URLSearchParams(window.location.search);
const isEditMode = urlParams.get('edit') === 'true';

// טעינת הקומפוננט המתאים
root.render(
  <React.StrictMode>
    {isEditMode ? <App /> : <RenderOnly />}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
