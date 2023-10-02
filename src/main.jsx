import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import React from 'react';
import Header from './components/Header/Header.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
