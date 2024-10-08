import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import './index.css';
import App from './App';
import Cursos from './Cursos';
import Nosotros from './Nosotros';
import Galeria from './Galeria';

const router = createBrowserRouter([

  {
    path: '/',
    element: <App />
  },
  {
    path: '/cursos',
    element: <Cursos />
  },
  {
    path: '/nosotros',
    element: <Nosotros />
  },
  {
    path: '/galeria',
    element: <Galeria />
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();