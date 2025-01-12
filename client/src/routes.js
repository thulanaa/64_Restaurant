// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Reservations from './pages/Reservations';
import Promo from './pages/Promo';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Define routes using the `element` prop */}
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/Reservations" element={<Reservations />} />
        <Route path="/Promo" element={<Promo />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />




      </Routes>
    </Router>
  );
};

export default AppRoutes;
