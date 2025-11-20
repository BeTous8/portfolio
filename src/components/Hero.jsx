import heroImage from '../assets/my new photo.png'
import React from 'react';
import {SocialMedia} from './SocialMedia.jsx';

export default function Hero () {
    return (
        <div id='home' className="hero">
            <div className="hero-image">
                <img src={heroImage} alt="Hero" />
            </div>
            <div className="hero-content">
                <p className="hero-greeting">Hi, my name is</p>
                <h1>Ben</h1>
                <h2 className="hero-subtitle">I build things for the web.</h2>
                <p className="hero-description">I'm a web developer specializing in building exceptional digital experiences. Currently focused on creating responsive, user-friendly applications with modern technologies like React and JavaScript.</p>
                <a href="#contact" className="hire-me-btn">Get In Touch</a>
                <SocialMedia />

            </div>
            

            
        </div>
    );
}