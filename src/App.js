import React from 'react'
import "./App.css"
import NavBar from './NavBar/NavBar'
import HeroSection from './HeroSection/HeroSection'
import Skills from './Skills/Skills'
import AboutMe from './AboutMe/AboutMe'
import Project from './Projects/Project'



const App = () => {
  


  return (
    <div><NavBar/>
     <HeroSection/>
     <Skills/>
     <AboutMe/>
     <Project/>
    
    </div>
  )
}

export default App