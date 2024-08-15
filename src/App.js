import React from 'react'
import "./App.css"
import NavBar from './NavBar/NavBar'
import HeroSection from './HeroSection/HeroSection'
import Skills from './Skills/Skills'
import AboutMe from './AboutMe/AboutMe'
import Project from './Projects/Project'
import ContactMe from './ContactMe/ContactMe'
import Footer from './Footer/Footer'
import { BrowserRouter } from 'react-router-dom'



const App = () => {
  


  return (
    <BrowserRouter>
    <div><NavBar/>
     <HeroSection/>
     <Skills/>
     <AboutMe/>
     <Project/>
     <ContactMe/>
     <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App