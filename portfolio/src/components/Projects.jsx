import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filters = ['All', 'React', 'PHP', 'Full Stack'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        My <span>Projects</span>
      </motion.h2>

      <div className="filter-container">
        {filters.map(f => (
          <button 
            key={f} 
            className={`filter-btn ${filter === f ? 'active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="projects-grid">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>

    </section>
  );
};

export default Projects;
