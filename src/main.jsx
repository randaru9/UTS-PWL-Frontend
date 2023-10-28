import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import AddProductPage from './pages/addProduct'
import ProductPage from './pages/productPage'
import EditProductPage from './pages/editProduct'
import Home from './pages/home'



const router = createBrowserRouter([
  {
    path: "/",
    element:<Home />
  },
  {
    path: "/product",
    element:<ProductPage />
  },
  {
    path: "/add",
    element:<AddProductPage />
  },
  {
    path: "/edit",
    element:<EditProductPage />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
