import React from 'react';
import './Features.css';
import { FaBuilding, FaUserCheck, FaCodeBranch } from 'react-icons/fa';

function Features() {
  return (
    <section className="features-section">
      <div className="container">
        <h2>Why Choose GRecruit</h2>
        <div className="features-grid">
          <div className="feature-card">
            <FaBuilding className="feature-icon" />
            <h3>Easy Job Management</h3>
            <p>Manage job postings effortlessly with our intuitive dashboard.</p>
          </div>
          <div className="feature-card">
            <FaUserCheck className="feature-icon" />
            <h3>Absolutely Free</h3>
            <p>Completely free to use, modify, and distribute for all.</p>
          </div>
          <div className="feature-card">
            <FaCodeBranch className="feature-icon" />
            <h3>Open-Source Freedom</h3>
            <p>Completely customizable and free to use, supported by a community.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
