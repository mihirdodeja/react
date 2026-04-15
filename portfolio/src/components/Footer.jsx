import { socialLinks } from '../data';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>Mihir<span>.</span></h3>
          <p>Full Stack Developer building modern web applications.</p>
        </div>
        
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Connect</h4>
          <div className="social-icons">
            {socialLinks.map((link) => (
              <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className="social-icon">
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Mihir. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
