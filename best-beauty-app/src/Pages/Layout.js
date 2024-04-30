import React from 'react';
import Navbar from '../Components/Navigationbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <div className='container-md'>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  )
}
