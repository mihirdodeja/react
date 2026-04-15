import { motion } from 'framer-motion';
import { experience } from '../data';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        My <span>Experience</span>
      </motion.h2>

      <div className="timeline">
        {experience.map((exp, index) => (
          <motion.div 
            className="timeline-item" 
            key={exp.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content glass">
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <span className="timeline-duration">{exp.duration}</span>
              <p>{exp.description}</p>
              <div className="timeline-tech">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="tech-pill">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
