import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Home from './Components/Home/Home';
import Donation from './Components/Donation/Donation';
import Statistics from './Components/Statistics/Statistics';
import DonationDetails from './Components/DonationDetails/DonationDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element:<Home></Home>,
      },
      {
        path: '/donation',
        element:<Donation></Donation>,
        loader: () => fetch('./people.json')
      },
      {
        path: '/statistics',
        element:<Statistics></Statistics>
      },
      {
        path: '/donations/:id',
        element:<DonationDetails></DonationDetails>,
        loader: () => fetch('./people.json')
      },
     
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
