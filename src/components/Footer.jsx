import React from 'react';
import './Footer.css';
import { FaGithub, FaBookOpen, FaComments, FaUsers } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo">
            {/* Replace with your logo or a placeholder */}
            <div className="logo">
            <h1>GRecruit</h1>
            </div>
          </div>
          <p>© 2024 GRecruit. Open-source for everyone.</p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>Product</h4>
            <ul>
              <li><a href="#features">Features Overview</a></li>
              <li><a href="#all-in-one">GRecruit All-in-One</a></li>
              <li><a href="#integrations">Integrations</a></li>
              <li><a href="#analytics">Analytics</a></li>
              <li><a href="#pricing">Open-Source Benefits</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Community</h4>
            <ul>
              <li><a href="https://github.com/yourusername/grecruit" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a></li>
              <li><a href="#community-forum"><FaComments /> Community Forum</a></li>
              <li><a href="#contributors"><FaUsers /> Contributors</a></li>
              <li><a href="#meetups">Meetups</a></li>
              <li><a href="#newsletter">Newsletter</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <li><a href="#documentation"><FaBookOpen /> Documentation</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#support">Support</a></li>
              <li><a href="#roadmap">Roadmap</a></li>
              <li><a href="#terms">Terms & Policies</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
