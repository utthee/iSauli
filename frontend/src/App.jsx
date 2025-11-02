import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';

import LandingPage from './pages/LandingPage.jsx'

function App() {

  return (
    <div className="bg-gray-100 min-h-screen">
      <LandingPage/>
    </div>
  )
}

export default App
