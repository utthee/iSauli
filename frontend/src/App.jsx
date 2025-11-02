import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import LandingPage from './pages/LandingPage.jsx';
import AccountOnboardingPage from './pages/AccountOnboardingPage.jsx';

function App() {

  return (
    <Router>
      <div className="main-content">
        <Navbar/>
        <div className="bg-gray-100 min-h-screen">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/account-onboarding" element={<AccountOnboardingPage/>} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
