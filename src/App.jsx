import { useState } from 'react'
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ProjectSection from './components/ProjectSection.jsx';
import  Contact from './components/Contact.jsx';
import ContactInfo from './components/ContactInfo.jsx';
import Footer from './components/Footer.jsx';
import './App.css'

function App() {
  const [showContactPage, setShowContactPage] = useState(false);
  
  

  return (
    
    <div className='app'>
      {!showContactPage ? (
        <>
          <div className='landing-page'>
            <Header />
            <Hero />
          </div>
          <ProjectSection />
          <Contact handleContactClick={() => setShowContactPage(true)}/>
          <Footer />
        </>
    
      ) : (
        <>
        <div className='landing-page'>
          <Header />
          <ContactInfo />
          <Footer />
        </div>
          
        </>
         
      )}

  </div> 
    
  )
}

export default App
