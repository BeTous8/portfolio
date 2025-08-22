import React, { useState } from 'react';

export default function About() {
    const [isDetailsVisible, setIsDetailsVisible] = useState(false);
    return (
        <section id="about" className="about fade-in-element">
            <div className="about-content">
                <h2>About Me</h2>
                
                <div className="about-text">
                    <p>
                        I'm Benjamin Tousifar, a frontend developer with an engineering background who transitioned from data engineering to web development. With five years of coding experience and a passion for building beautiful, functional websites, I'm actively seeking a frontend developer position.
                    </p>
                    
                    <div className={`about-details ${isDetailsVisible ? 'expanded' : ''}`}>
                        <p>
                            What excites me most about web development is the art of putting pieces together—taking 
                            individual components, technologies, and ideas, then assembling them into something 
                            larger and meaningful that users can interact with. There's something deeply satisfying 
                            about solving complex problems through code and seeing your solutions come to life 
                            in the browser.
                        </p>
                        
                        <p>
                            My engineering background from UC San Diego gives me a solid foundation in problem-solving 
                            and systematic thinking, while my three years as a data engineer taught me the importance 
                            of clean, efficient code and working with complex systems.
                        </p>

                        <div className="skills-section">
                            <h3>What I Work With</h3>
                            <p>React, JavaScript, HTML5, CSS3, Git, Responsive Design</p>
                        </div>
                        
                        <p>
                            When I'm not coding, you'll find me watching movies, playing soccer, or diving 
                            into video games—all of which feed my appreciation for good user experiences and 
                            storytelling through digital mediums.
                        </p>
                        
                        <p>
                            I'm looking for a role where I can contribute to meaningful projects, collaborate 
                            with talented teams, and continue growing as a developer. Let's build something 
                            amazing together!
                        </p>
                    </div>
                       
                </div>
                <button className="about-toggle" onClick={() => setIsDetailsVisible(!isDetailsVisible)}>
                    {isDetailsVisible ? 'Show Less' : 'Full Story'}
                </button>
            </div>
        </section>
    );
}