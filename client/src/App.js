import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './views/LandingPage/LandingPage';
import HomePage from './views/HomePage/HomePage';
// import DetailPage from './views/DetailPage/DetailPage';
// import FormPage from './views/FormPage/FormPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        {/* <Route path="/pokemon/:id" element={<DetailPage />} /> */}
        {/* <Route path="/create" element={<FormPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
