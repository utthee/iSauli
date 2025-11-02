import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';

import Navbar from './components/Navbar.jsx';
import LandingPage from './pages/LandingPage.jsx';

function App() {

  return (
    <div className="main-content">
      <Navbar/>
      <div className="bg-gray-100 min-h-screen">
        <LandingPage />
      </div>
    </div>
  )
}

export default App
