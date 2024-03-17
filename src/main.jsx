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
import TeamPage from './components/OurTeam/TeamPage';
import BecomeDonor from './components/Donors/BecomeDonor';
import AuthProviders from './providers/AuthProviders.jsx';


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
        path: "/faq",
        element: <Faq></Faq>
      },
      {
        path: "/team",
        element: <TeamPage></TeamPage>
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
        path: "/Become_a_Donor",
        element: <BecomeDonor></BecomeDonor>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
