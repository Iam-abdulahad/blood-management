import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import React from 'react';
import Header from './components/Header/Header.jsx';
import Donors from './components/Donors/Donors.jsx';
import Faq from './components/FAQ/Faq.jsx';
import About from './components/About/About.jsx';
import Login from './components/Login/Login.jsx';
import SignUp from './components/Login/SignUp';
import Footer from './components/Footer/Footer';
import OurTeam from './components/OurTeam/OurTeam';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donors",
        element: <Donors></Donors>,
      },
      {
        path : "/faq",
        element: <Faq></Faq>
      },
      {
        path: "/team",
        element: <OurTeam></OurTeam>
      },
      {
        path: "/about_us",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/sign_up",
        element: <SignUp></SignUp>
      },
      {
        path: "/footer",
        element: <Footer></Footer>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
