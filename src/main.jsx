import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Home from './routers/Home';
import About from './routers/About';
import Missions from './routers/Missions';
import Projects from './routers/Projects';
import Teams from './routers/Teams';
import Splash from './routers/projects/Splash/Splash';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "missions",
        element: <Missions />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "team",
        element: <Teams />,
      },
      /* Projects Route */
      {
        path: "projects/splash",
        element: <Splash />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={123} />
  </React.StrictMode>
);