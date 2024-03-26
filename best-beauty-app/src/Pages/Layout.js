import React from 'react';
import Navbar from '../Components/Navigationbar';
import Footer from '../Components/Footer';
import {Outlet} from 'react-router-dom'
// import Home from './Home_Page/Home';
// import Products from './Products_Page/Products';
// import DetailsPage from './Details_Page/DetailsPage';

export default function Layout() {
  return (
    <>
        <div className='container-md'>
            <Navbar/>
            <main>
              {/* <Home />
              <Products />
              <DetailsPage /> */}
              <Outlet/>
            </main>
        </div>
        <Footer/>
    </>
  )
}
