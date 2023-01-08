import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Estimator from './pages/Estimator';
import Service from './pages/Service';
import Portfolio from './pages/Portfolio';
import Login from './pages/login';
import Navigation from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <Router>
        <div>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/shop" element={<Shop/>} />
            <Route path="/Estimator" element={<Estimator/>} />
            <Route path="/service" element={<Service/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
