import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      className="project-card glass"
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        
        <div className="project-tech">
          {project.techStack.map((tech, index) => (
            <span key={index} className="tech-pill">{tech}</span>
          ))}
        </div>

        <ul className="project-features">
          {project.features.map((feature, index) => (
            <li key={index}>▹ {feature}</li>
          ))}
        </ul>

        <div className="project-links">
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="icon-link">
            <FaGithub size={20} /> Code
          </a>
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="icon-link primary-link">
            <FaExternalLinkAlt size={16} /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
