import React, {useState} from "react";
import {ProjectCard} from "./ProjectCard.jsx";

export default function ProjectSection() {
    const projects = [
        {
            id : 1,
            title: "Personal Library App",
            image : "/images/LibraryApp.png",
            alt: "Project One Image",
            description: "A digital library application that allows users to add, remove, and track their personal book collection. Features include marking books as read/unread and persistent data storage.",
            technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
            githubUrl: "https://github.com/BeTous8/Library.git",
            liveUrl: "https://betous8.github.io/Library/"
        },
        {
            id : 2,
            title: "Weather App",
            image : "/images/WeatherApp.png",
            alt: "Project Two Image",
            description: "A sleek, responsive weather application built with vanilla JavaScript that fetches real-time weather data from OpenWeatherMap API. Users can search for current conditions in any city worldwide.",
            technologies: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
            githubUrl: "https://github.com/BeTous8/Weather-App.git",
            liveUrl: "https://betous8.github.io/Weather-App/"
        },
        {   
            id : 3,
            title: "Memory Card Game",
            image : "/images/MemoryCardGame.png",
            alt: "Project Three Image",
            description: "A React-based memory game featuring random Pokemon cards fetched from an API. Test your memory by clicking on cards without repeating any!",
            technologies: ["React", "CSS", "JavaScript", "Vite"],
            githubUrl: "https://github.com/BeTous8/Memory-Card.git",
            liveUrl: "https://chimerical-profiterole-f636ac.netlify.app/"
        }
    ];
    

    

    return (
        <>
            <section className="project-section">
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