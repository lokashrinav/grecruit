import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About GRecruit</h2>
            <p>
              GRecruit simplifies the hiring process by enabling companies to post jobs
              and candidates to apply effortlessly, without the need for complicated workflows.
              Focus on finding the right fit instead of dealing with cluttered interfaces.
            </p>
          </div>
          <div className="about-image">
            <img
              src="https://via.placeholder.com/500x300"
              alt="Dashboard Preview"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
