import React from 'react';
import './HowItWorks.css';
import { FaUsers, FaBuilding, FaShieldAlt } from 'react-icons/fa';

function HowItWorks() {
  return (
    <section className="how-it-works-section">
      <div className="container">
        <h2>How It Works</h2>
        <div className="how-grid">
          <div className="how-card">
            <FaUsers className="how-icon" />
            <h3>Step 1: Register Your Company</h3>
            <p>Sign up to create a company profile and start posting job listings.</p>
          </div>
          <div className="how-card">
            <FaBuilding className="how-icon" />
            <h3>Step 2: Post Your Jobs</h3>
            <p>Use our dashboard to add, edit, or remove job opportunities.</p>
          </div>
          <div className="how-card">
            <FaShieldAlt className="how-icon" />
            <h3>Step 3: Receive Applications</h3>
            <p>Get applications directly from candidates, no accounts needed.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
