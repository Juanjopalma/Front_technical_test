import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import { NavbarApp } from '../components/NavbarApp/NavbarApp';
import { Footer } from '../components/FooterApp/Footer';
import { Home } from '../pages/dashboard/Home/Home';
import { Asia } from '../pages/continents/Asia/Asia';
import { Africa } from '../pages/continents/Africa/Africa';
import { Antarctica } from '../pages/continents/Antarctica/Antarctica';
import { Europe } from '../pages/continents/Europe/Europe';
import { Oceania } from '../pages/continents/Oceania/Oceania';
import { Americas } from '../pages/continents/Americas/Americas';

export const AppRoutes = () => {

  return (
    <BrowserRouter>
        <NavbarApp />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/asia' element={<Asia />} />
          <Route path='/africa' element={<Africa />} /> 
          <Route path='/americas' element={<Americas />} />
          <Route path='/europe' element={<Europe />} />
          <Route path='/antarctica' element={<Antarctica />} />
          <Route path='/oceania' element={<Oceania />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}
