import heroImage from '../assets/IMG_4830.PNG'
import React from 'react';
import {SocialMedia} from './SocialMedia.jsx';

export default function Hero () {
    return (
        <div id='home' className="hero">
            <div className="hero-image">
                <img src={heroImage} alt="Hero" />
            </div>
            <div className="hero-content">
                <h1>I'm Ben</h1>
                <p>A passionate web developer learning through hands-on projects</p>
                <a href="#contact" className="hire-me-btn">Hire Me</a>
                <SocialMedia />

            </div>
            

            
        </div>
    );
}