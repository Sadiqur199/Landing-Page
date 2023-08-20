import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import Resume from './Pages/Resume/Resume.jsx';
import Skill from './Pages/Skill/Skill.jsx';
import Portfolio from './Pages/Portfolio/Portfolio.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import Main from './layout/Main.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Main></Main>,
    children:[
      {
        path: "/",
        element:  <Home></Home>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/resume',
        element:<Resume></Resume>
      },
      {
        path:'/skill',
        element:<Skill></Skill>
      },
      {
        path:'/portfolio',
        element:<Portfolio></Portfolio>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
