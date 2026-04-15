import { motion } from 'framer-motion';
import { education } from '../data';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        My <span>Education</span>
      </motion.h2>

      <div className="education-grid">
        {education.map((edu, index) => (
          <motion.div 
            className="education-card glass"
            key={edu.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3>{edu.degree}</h3>
            <h4>{edu.college}</h4>
            <span className="edu-year">{edu.year}</span>
            {edu.achievements && (
              <ul className="edu-achievements">
                {edu.achievements.map((achieve, i) => (
                  <li key={i}>🏆 {achieve}</li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
