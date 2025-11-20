export function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <div className="project-image fade-in-top">
                <img src={project.image} alt={project.title} />
            </div>
            <div className="project-details fade-in-bottom">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="technologies">
                    {project.technologies.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>
                <div className="project-links">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
                </div>
            </div>
        </div>
    )
}