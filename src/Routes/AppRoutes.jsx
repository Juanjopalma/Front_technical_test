import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Row } from 'react-bootstrap';
// import { NavbarApp } from '../components/NavbarApp/NavbarApp';
import { Footer } from '../components/FooterApp/Footer';
// import { Home } from '../pages/dashboard/Home/Home';
import { Region } from '../pages/dashboard/continents/Region';
import { Prueba } from '../pages/dashboard/Home/Prueba';
import { NavbarPrueba } from '../components/NavbarApp/NavbarPrueba';


export const AppRoutes = () => {

  return (
    <BrowserRouter>
        {/* <NavbarApp /> */}
        <NavbarPrueba />
        <Routes>
          <Route path='/' element={<Prueba />} />
          <Route path='/region/:region' element={<Region />} />
        </Routes>
        {/* <Footer /> */}
    </BrowserRouter>
  )
}

