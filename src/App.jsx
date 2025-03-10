import React from 'react'
import Home from './Home.jsx'
import Navbar from '../src/Components/Navbar.jsx'
import About from './About.jsx'

import {  createBrowserRouter , RouterProvider } from 'react-router-dom'
const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element : <><Navbar/><Home/></>
    },
    {
      path:'/About',
      element : <><Navbar/><About/></>
    }
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App