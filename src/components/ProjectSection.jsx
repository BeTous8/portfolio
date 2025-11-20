import React, {useState} from "react";
import {ProjectCard} from "./ProjectCard.jsx";

export default function ProjectSection() {
    const projects = [
        {
            id: 1,
            title: "Memora - Gift Registry Platform",
            image: "/images/gift-registry.png",
            alt: "Memora Gift Registry Application",
            description: "A collaborative gift registry platform that allows users to create wish lists, share them with friends and family, and enable group contributions to gift items. Features include multi-method authentication (Google OAuth, Email/Password, Phone OTP), real-time progress tracking, secure Stripe payment processing, and shareable event links.",
            technologies: ["Next.js", "React", "Supabase", "Stripe", "Tailwind CSS", "PostgreSQL"],
            githubUrl: "https://github.com/BeTous8/gift-registry.git",
            liveUrl: "https://memoraapp.netlify.app/"
        },
        {
            id: 2,
            title: "ModernShop - E-Commerce App",
            image: "/images/shopping-cart.png",
            alt: "ModernShop E-Commerce Application",
            description: "A modern, responsive e-commerce web application that enables users to browse products, manage shopping cart items, and view order summaries. Features include real-time cart updates, quantity controls, persistent state management via Context API, and seamless navigation with React Router.",
            technologies: ["React", "React Router", "Context API", "CSS Modules", "Vite", "FakeStore API"],
            githubUrl: "https://github.com/BeTous8/shopping-cart.git",
            liveUrl: "https://modernshop-react-demo.netlify.app"
        },
        {
            id : 3,
            title: "Personal Library App",
            image : "/images/LibraryApp.png",
            alt: "Project Two Image",
            description: "A digital library application that allows users to add, remove, and track their personal book collection. Features include marking books as read/unread and persistent data storage.",
            technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
            githubUrl: "https://github.com/BeTous8/Library.git",
            liveUrl: "https://betous8.github.io/Library/"
        },
        {
            id : 4,
            title: "Weather App",
            image : "/images/WeatherApp.png",
            alt: "Project Three Image",
            description: "A sleek, responsive weather application built with vanilla JavaScript that fetches real-time weather data from OpenWeatherMap API. Users can search for current conditions in any city worldwide.",
            technologies: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
            githubUrl: "https://github.com/BeTous8/Weather-App.git",
            liveUrl: "https://betous8.github.io/Weather-App/"
        },
        {
            id : 5,
            title: "Memory Card Game",
            image : "/images/MemoryCardGame.png",
            alt: "Project Four Image",
            description: "A React-based memory game featuring random Pokemon cards fetched from an API. Test your memory by clicking on cards without repeating any!",
            technologies: ["React", "CSS", "JavaScript", "Vite"],
            githubUrl: "https://github.com/BeTous8/Memory-Card.git",
            liveUrl: "https://chimerical-profiterole-f636ac.netlify.app/"
        }
    ];
    

    

    return (
        <>
            <section id="projects" className="project-section">
                <h2>Projects</h2>
                <div className="projects">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />      
                    ))}
                </div>
            </section>
        </>
        
    )

}