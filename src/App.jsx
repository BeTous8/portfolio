import { useState, useEffect } from 'react'
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import ProjectSection from './components/ProjectSection.jsx';
import  Contact from './components/Contact.jsx';
import ContactInfo from './components/ContactInfo.jsx';
import Footer from './components/Footer.jsx';
import { initScrollAnimations } from './utils/scrollAnimations.js';
import './App.css'

function App() {
  const [showContactInfo, setShowContactInfo] = useState(false);
  
  useEffect(() => {
        initScrollAnimations();
    }, []);

  return (
    
    <div className='app'>
      <div className='landing-page'>
        <Header />
        <Hero />
      </div>
      <About />
      <ProjectSection />
      {!showContactInfo ? (  
        <Contact handleContactClick={() => setShowContactInfo(true)} />
      ) : (
        <ContactInfo />
      )}
      <Footer />      
  </div> 
    
  )
}

export default App
