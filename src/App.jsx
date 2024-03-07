import React from 'react'
import { Routes, Route, NavLink } from "react-router-dom";

import { Home } from './pages'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
