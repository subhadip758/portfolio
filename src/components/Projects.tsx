import { FiGithub, FiExternalLink } from "react-icons/fi";
import "./styles/Projects.css";

const projectsData = [
  {
    title: "CirculoMetrix-AI",
    description: "An AI-powered tool or application for advanced metrics and analysis.",
    technologies: ["Python", "AI", "Machine Learning"],
    github: "https://github.com/subhadip758/CirculoMetrix-AI",
    deploy: "https://circulometrix-ai.vercel.app/",
  },
  {
    title: "CityGPT",
    description: "Let Your City Speak, Feel, and Tell Its Story through this AI interface.",
    technologies: ["Python", "OpenAI", "Web"],
    github: "https://github.com/subhadip758/CityGPT",
    deploy: "https://citygpt.vercel.app/",
  },
  {
    title: "Phishing Email Detector",
    description: "A machine learning model deployed to detect and prevent phishing emails.",
    technologies: ["Python", "NLP", "Scikit-Learn"],
    github: "https://github.com/subhadip758/Phishing_Email_Detector",
    deploy: "https://phishing-email-detector-psi.vercel.app/",
  },
  {
    title: "SecureID",
    description: "A secure identification platform utilizing modern web technologies for robust access control.",
    technologies: ["TypeScript", "React", "Node.js"],
    github: "https://github.com/subhadip758/SecureID",
    deploy: "https://secureid-5f8u.onrender.com/",
  },
  {
    title: "DSMS",
    description: "Database and System Management Solution for handling complex data architectures.",
    technologies: ["System Design", "Database", "Backend"],
    github: "https://github.com/subhadip758/DSMS-",
    deploy: "", // No deploy link for this one
  },
];

const Projects = () => {
  return (
    <div className="projects-section" id="projects">
      <div className="projects-container section-container">
        <h2>
          Featured <span>Projects</span>
        </h2>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                      aria-label="GitHub Repository"
                      data-cursor="disable"
                    >
                      <FiGithub />
                    </a>
                  )}
                  {project.deploy && (
                    <a
                      href={project.deploy}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                      aria-label="Live Deployment"
                      data-cursor="disable"
                    >
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              </div>
              <div className="project-description">
                <p>{project.description}</p>
              </div>
              <div className="project-tech-list">
                {project.technologies.map((tech, techIndex) => (
                  <span className="project-tech-item" key={techIndex}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
