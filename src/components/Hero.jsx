import React from 'react';
import { motion } from 'framer-motion';
// ensure the image filename matches what you have in your folder
import heroImage from '../assets/my new photo.png'; 
import { SocialMedia } from './SocialMedia.jsx';

export default function Hero() {
    return (
        <div id='home' className="hero">
            
            {/* LEFT SIDE: The Image 
              Animation: Slides in from the LEFT (x: -100)
            */}
            <motion.div 
                className="hero-image"
                initial={{ opacity: 0, x: -100 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <img src={heroImage} alt="Hero" />
            </motion.div>

            {/* RIGHT SIDE: The Text Content 
              Animation: Slides in from the RIGHT (x: 100)
            */}
            <motion.div 
                className="hero-content"
                initial={{ opacity: 0, x: 100 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // Slight delay for style
            >
                <p className="hero-greeting">Hi, my name is</p>
                <h1>Ben</h1>
                <h2 className="hero-subtitle">I build things for the web.</h2>
                <p className="hero-description">
                    I'm a web developer specializing in building exceptional digital experiences. 
                    Currently focused on creating responsive, user-friendly applications with 
                    modern technologies like React and JavaScript.
                </p>
                <a href="#contact" className="hire-me-btn">Get In Touch</a>
                <SocialMedia />
            </motion.div>

        </div>
    );
}