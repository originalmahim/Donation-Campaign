import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Donationdetails from './Components/Donationdetails/Donationdetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/donation/:id",
        element: <Donationdetails></Donationdetails>,
        loader: () => fetch('../public/donate.json')
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}></RouterProvider>
  </React.StrictMode>,
)
