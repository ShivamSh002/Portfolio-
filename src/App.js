import React from 'react'
import "./App.css"
import NavBar from './NavBar/NavBar'
import HeroSection from './HeroSection/HeroSection'
import Skills from './Skills/Skills'

const App = () => {
  return (
    <div><NavBar/>
     <HeroSection/>
     <Skills/>
    </div>
  )
}

export default App