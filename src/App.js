
import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import { path } from "./utils/contant"
import { Home, Menu, Locations, Franchising, AboutUs, Careers, News} from "./container/public"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const App = () => {
  return (
      <div>
        <div style={{ zIndex: 1000, position: 'relative' }}>
        <Navbar/>
        </div>
        <Routes>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.MENU} element={<Menu />} />
          <Route path={path.LOCATION} element={<Locations />} />
          <Route path={path.FRANCH} element={<Franchising />} />
          <Route path={path.ABTUS} element={<AboutUs />} />
          <Route path={path.CAREER} element={<Careers />} />
          <Route path={path.NEWS} element={<News />} />

        </Routes>
        <Footer/>
        </div>
  );
};

export default App;
