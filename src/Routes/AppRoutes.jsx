import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import { NavbarApp } from '../components/NavbarApp/NavbarApp';
import { Footer } from '../components/FooterApp/Footer';
import { Home } from '../pages/dashboard/Home/Home';
import { Region } from '../pages/continents/Asia/Region';

export const AppRoutes = () => {

  return (
    <BrowserRouter>
        <NavbarApp />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/region/:region' element={<Region />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

