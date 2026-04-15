import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        About <span>Me</span>
      </motion.h2>

      <div className="about-container">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3>Get to know me!</h3>
          <p>
            I am a highly motivated <strong>Full Stack Developer</strong>and I have interned at Yellow Panther.
            I have a deep passion for learning new technologies and building end-to-end web applications that
            are robust, scalable, and visually appealing.
          </p>
          <p>
            Whether it's crafting a pixel-perfect UI with React, or designing robust database schemas with MySQL and MongoDB,
            I enjoy problem-solving and turning complex requirements into simple, elegant code.
          </p>
          <p>
            My goal is to continuously grow my skills, contribute to impactful projects, and eventually step into a
            leadership tech role where I can guide software architecture. When I'm not coding, you can find me exploring
            new tech trends or working on personal side projects.
          </p>
        </motion.div>

        <motion.div
          className="about-highlights glass"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="highlight-item">
            <h4>Location</h4>
            <p>Ahmedabad, Gujarat</p>
          </div>
          <div className="highlight-item">
            <h4>Education</h4>
            <p>Bachelor of Computer Applications</p>
          </div>
          <div className="highlight-item">
            <h4>Focus</h4>
            <p>Full Stack Developer</p>
          </div>
          <div className="highlight-item">
            <h4>Interests</h4>
            <p>Frontend,Backend,Prompt Engineering,Web3, AI Integrations, Open Source</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
