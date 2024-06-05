import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import { Route, Routes } from 'react-router-dom'
import Main from './components/Main.jsx'

function App() {
  return(
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>

    </>
  );
}

export default App
