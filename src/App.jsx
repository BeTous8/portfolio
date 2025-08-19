import { useState } from 'react'
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ProjectSection from './components/ProjectSection.jsx';
import Footer from './components/Footer.jsx';
import './App.css'

function App() {
  
  

  return (
    
    <div className='app'>
      <div className='landing-page'>
        <Header />
        <Hero />
      </div>
      <ProjectSection />
      {/* <Footer /> */}
    </div>
    
  )
}

export default App
