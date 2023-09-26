import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Donationdetails from './Components/Donationdetails/Donationdetails';
import Donationlish from './Components/DonationList/Donationlish';
import Statistics from './Components/Statistics/Statistics';
import { DonationProvider } from './Components/Donationdetails/Donationdetails'; // Import the DonationProvider

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header></Header>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/donation/:id',
        element: <Donationdetails></Donationdetails>,
        loader: () => fetch('donate.json'),
      },
      {
        path: '/donations',
        element: <Donationlish></Donationlish>,
        loader: () => fetch('donate.json'),
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DonationProvider> 
      <RouterProvider router={router}></RouterProvider>
    </DonationProvider>
  </React.StrictMode>
);
