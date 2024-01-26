import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import { NavbarApp } from '../components/NavbarApp/NavbarApp';
import { Footer } from '../components/FooterApp/Footer';
import { Home } from '../pages/dashboard/Home/Home';

export const AppRoutes = () => {

  return (
    <BrowserRouter>
        <NavbarApp />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/asia' element={<Asia />} />
          <Route path='/africa' element={<Africa />} />
          <Route path='/southamerica' element={<SouthAmerica />} />
          <Route path='/northamerica' element={<NorthAmerica />} />
          <Route path='/europe' element={<Europe />} />
          <Route path='/antartica' element={<Antarctica />} />
          <Route path='/oceania' element={<Oceania />} /> */}
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}
