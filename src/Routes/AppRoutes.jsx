import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from '../components/FooterApp/Footer';
import { Home } from '../pages/dashboard/Home/Home';
import { Region } from '../pages/dashboard/continents/Region';
import { NavbarApp } from '../components/NavbarApp/NavbarApp';



export const AppRoutes = () => {

  const [scroll, setScroll] = useState(false);

  return (
    <BrowserRouter>
        <NavbarApp scroll={scroll} />
        <Routes>
          <Route path='/' element={<Home setScroll={setScroll} />} />
          <Route path='/region/:region' element={<Region />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

