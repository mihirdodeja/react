import { motion } from 'framer-motion';
import { skills } from '../data';
import './Skills.css';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="skills">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        My <span>Skills</span>
      </motion.h2>

      <div className="skills-container">
        
        {/* Technical Skills */}
        <div className="skill-category">
          <h3 className="category-title">Technical Skills</h3>
          <motion.div 
            className="skills-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {skills.technical.map((skill, index) => (
              <motion.div key={index} className="skill-item glass" variants={itemVariants}>
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div 
                    className="skill-progress" 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tools and Others */}
        <div className="skills-sidebar">
          <div className="skill-category">
            <h3 className="category-title">Tools</h3>
            <motion.div 
              className="tags-container"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.tools.map((tool, index) => (
                 <motion.span key={index} className="skill-tag" variants={itemVariants}>
                   {tool.name}
                 </motion.span>
              ))}
            </motion.div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">Other Skills</h3>
            <motion.div 
              className="tags-container"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.other.map((item, index) => (
                 <motion.span key={index} className="skill-tag" variants={itemVariants}>
                   {item.name}
                 </motion.span>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
