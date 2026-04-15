import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp } from 'react-icons/fa';
import { socialLinks } from '../data';
import avatarImg from '../assets/avatar.png';
import './Hero.css';
import resume from '../../src/assets/mihir.pdf'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          Hi, I am <span>Mihir Dodeja</span>
        </motion.h1>

        <motion.h2
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
        >
          I'm a {' '}
          <span className="typewriter-text">
            <Typewriter
              words={['Full Stack Developer', 'React Enthusiast', 'Problem Solver']}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </motion.h2>

        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
        >
          Building scalable, modern, and engaging web experiences from frontend to backend.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
        >
          {socialLinks.map((link) => (
            <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              {link.icon} {link.platform}
            </a>
          ))}
          <a href={resume} download className="btn btn-primary">
            📄 Resume
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero-image"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
      >
        <div className="image-container">
          <div className="orbit-ring"></div>

          <div className="skill-wrapper icon-1"><FaReact /></div>
          <div className="skill-wrapper icon-2"><FaJs /></div>
          <div className="skill-wrapper icon-3"><FaHtml5 /></div>
          <div className="skill-wrapper icon-4"><FaCss3Alt /></div>
          <div className="skill-wrapper icon-5"><FaNodeJs /></div>
          <div className="skill-wrapper icon-6"><FaPhp /></div>

          <motion.div
            className="image-wrapper"
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          >
            <img src={avatarImg} alt="Mihir Profile" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
