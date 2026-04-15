import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import resume from '../../src/assets/mihir.pdf'

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="navbar glass">
      <div className="nav-container">
        <a href="#home" className="nav-logo">
          Mihir<span>.</span>
        </a>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} onClick={() => setIsOpen(false)}>
                {link.name}
              </a>
            </li>
          ))}
          <li className="nav-actions-mobile">
            <button className="theme-toggle" onClick={toggleTheme}>
              {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
            <a href={resume} className="btn btn-primary" download onClick={() => setIsOpen(false)}>
              Resume
            </a>
          </li>
        </ul>

        <div className="nav-actions-desktop">
          <button className="theme-toggle" onClick={toggleTheme}>
            {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
          <a href="/resume.pdf" className="btn btn-primary" download>
            Resume
          </a>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
