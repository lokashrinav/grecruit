import React from 'react';
import { FaGithub, FaBookOpen, FaComments, FaUsers } from 'react-icons/fa';
import styled from 'styled-components';

// Styled Components
const FooterWrapper = styled.footer`
  padding: 60px 20px;
  background: #0a74da; /* Solid blue */
  color: white;
  font-size: 0.9rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  .logo{
    h1 {
      font-size: 1.8rem;
      margin: 0;
      color: white;
    }
  }
`;

const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  width: 100%;
  max-width: 1000px;
  margin-top: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack columns vertically on smaller screens */
    gap: 20px;
    text-align: center;
  }
`;

const FooterColumn = styled.div`
  margin-top: 20px;
  text-align: left;

  h4 {
    font-size: 1.2rem;
    margin-bottom: 15px;
    color: #ff7a59; /* Highlighted color for section headers */
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 10px;
  }

  a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: color 0.3s;
    display: flex;
    align-items: center;
    gap: 8px;

    &:hover {
      color: #ff7a59;
    }
  }

`
const pWhite = styled.p`
  color: white;
`

;

// Footer Component
function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <FooterTop>
          <FooterLogo>
            {/* Replace with your logo or a placeholder */}
            <div className="logo">
              <h1>GRecruit</h1>
            </div>
          </FooterLogo>
          <pWhite>© 2024 GRecruit. Open-source for everyone.</pWhite>
        </FooterTop>
        <FooterLinks>
          <FooterColumn>
            <h4>Product</h4>
            <ul>
              <li><a href="#features">Features Overview</a></li>
              <li><a href="#all-in-one">GRecruit All-in-One</a></li>
              <li><a href="#integrations">Integrations</a></li>
              <li><a href="#analytics">Analytics</a></li>
              <li><a href="#pricing">Open-Source Benefits</a></li>
            </ul>
          </FooterColumn>
          <FooterColumn>
            <h4>Community</h4>
            <ul>
              <li>
                <a href="https://github.com/yourusername/grecruit" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> GitHub
                </a>
              </li>
              <li><a href="#community-forum"><FaComments /> Community Forum</a></li>
              <li><a href="#contributors"><FaUsers /> Contributors</a></li>
              <li><a href="#meetups">Meetups</a></li>
              <li><a href="#newsletter">Newsletter</a></li>
            </ul>
          </FooterColumn>
          <FooterColumn>
            <h4>Resources</h4>
            <ul>
              <li><a href="#documentation"><FaBookOpen /> Documentation</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#support">Support</a></li>
              <li><a href="#roadmap">Roadmap</a></li>
              <li><a href="#terms">Terms & Policies</a></li>
            </ul>
          </FooterColumn>
        </FooterLinks>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
