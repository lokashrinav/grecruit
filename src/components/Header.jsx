import React, { useState } from 'react';
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu for mobile devices
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <a href="/"><h1>GRecruit</h1></a>
          </div>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
              <a href="https://github.com/lokashrinav/grecruit" target="_blank" rel="noopener noreferrer" className="github-link">
                <FaGithub /> GitHub
              </a>
            </li>
            {/* Add the Login button here */}
            <li><a href="#login" className="login-btn">Login</a></li>
          </ul>
          <div className="menu-icon" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Empowering Recruitment, Open-Source Style</h1>
          <p>
            GRecruit is an open-source recruitment platform built to streamline your hiring process.
          </p>
          <div className="hero-buttons">
            <a href="#get-started" className="btn primary-btn">Get Started</a>
            <a href="https://github.com/lokashrinav/grecruit" target="_blank" rel="noopener noreferrer" className="btn primary-btn">View on GitHub</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
