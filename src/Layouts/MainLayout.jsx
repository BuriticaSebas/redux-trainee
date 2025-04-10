import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'


const MainLayout = () => {
  return (
   <>
   <header><Navbar></Navbar></header>
   <main><Outlet></Outlet></main>
   <footer><Footer></Footer></footer>
   </>
  )
}

export default MainLayout