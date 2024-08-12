import React from 'react'
import "./App.css"
import NavBar from './NavBar/NavBar'
import HeroSection from './HeroSection/HeroSection'
import Skills from './Skills/Skills'
import AboutMe from './AboutMe/AboutMe'
import Project from './Projects/Project'
import ContactMe from './ContactMe/ContactMe'



const App = () => {
  


  return (
    <div><NavBar/>
     <HeroSection/>
     <Skills/>
     <AboutMe/>
     <Project/>
     <ContactMe/>
    </div>
  )
}

export default App