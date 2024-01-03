import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Counter from '../components/Counter';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/counter" element={<Counter />} />
    </Routes>
  );
};

export default AppRoutes;
