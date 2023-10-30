import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './views/HomePage/HomePage';
import LandingPage from './views/LandingPage/LandingPage';
import DetailPage from './views/DetailPage/DetailPage';
import FormPage from './views/FormPage/FormPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/pokemon/:id" element={<DetailPage />} />
          <Route path="/create" element={<FormPage />} />
          {/* Puedes agregar más rutas según sea necesario */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
