import { Box } from '@mui/system'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ExerciseDetail from './Pages/ExerciseDetail'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import './App.css'

const App = () => {
  return (
    <Box width="400px" sx={{ xl: '1488px' }} >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App
