import React, { useState } from 'react';
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

// Styled Components
const HeaderWrapper = styled.header`
  position: relative;
  background-color: #203c5c;
  color: white;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #203c5c;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 100;
  background: rgba(0, 0, 0, 0.6);
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const Logo = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: white;
  font-size: 1.8rem;
  transition: color 0.3s;
  margin-right: 20px;

  a {
    text-decoration: none; /* Styling for the <a> */
    h1 {
      margin: 0;
      font-size: 2rem; /* Styling specific to <h1> inside <a> */
      color: white;
    }
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 35px;
  list-style: none;
  margin: 0;
  padding: 30px;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 768px) {
    display: ${({ menuOpen }) => (menuOpen ? 'block' : 'none')}; /* Show or hide the menu */
    position: absolute;
    top: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.9);
    flex-direction: column;
    width: 200px;
    padding: 20px;
    border-radius: 10px;
    transition: transform 0.3s;
  }
`;

const NavItem = styled.li`
  margin: 0;

  a {
    color: #f0f0f0;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 500;
    transition: color 0.3s;

    &:hover {
      color: #ff7a59;
    }
  }
`;

const GithubLink = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #ff7a59;
  font-weight: bold;
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #fff;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const HeroSection = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
  background: #0a74da;
  position: relative;
`;

const HeroContent = styled.div`
  max-width: 800px;
  animation: fadeInUp 1.5s ease-out;

  h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    font-weight: 700;
    line-height: 1.2;
    color: #fff;
    text-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    line-height: 1.6;
    color: #e0e0e0;
    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

const Button = styled.a`
  padding: 15px 30px;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  border-radius: 30px;
  transition: background-color 0.3s, color 0.3s;
  cursor: pointer;
  background-color: ${({ primary }) => (primary ? '#ff7a59' : 'transparent')};
  color: ${({ primary }) => (primary ? 'white' : '#ff7a59')};
  border: ${({ primary }) => (primary ? 'none' : '2px solid #ff7a59')};

  &:hover {
    background-color: ${({ primary }) => (primary ? '#ff5a39' : '#ff7a59')};
    color: white;
  }
`;

const LoginButton = styled.a`
  padding: 10px 20px;
  background-color: #ff7a59;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s;
  margin-right: 15px;

  &:hover {
    background-color: #ff5a39;
  }
`;

// Header Component
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu for mobile devices
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderWrapper>
      {/* Navigation Bar */}
      <Navbar>
        <Container>
          {/* Logo Section */}
          <Logo>
            <a href="/"><h1>GRecruit</h1></a>
          </Logo>

          {/* Navigation Links */}
          <div>
            <NavLinks menuOpen={menuOpen}>
              <NavItem><a href="#features">Features</a></NavItem>
              <NavItem><a href="#about">About</a></NavItem>
              <NavItem><a href="#how-it-works">How It Works</a></NavItem>
              <NavItem><a href="#contact">Contact</a></NavItem>
              <NavItem>
                <GithubLink href="https://github.com/lokashrinav/grecruit" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> GitHub
                </GithubLink>
              </NavItem>
              <NavItem><LoginButton href="#login">Login</LoginButton></NavItem>
            </NavLinks>
            <MenuIcon onClick={toggleMenu}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </MenuIcon>
          </div>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <h1>GRecruit: Empowering Recruitment, Open-Source Style</h1>
          <p>
            GRecruit is an open-source recruitment platform built to streamline your hiring process.
          </p>
          <HeroButtons>
            <Button href="#get-started" primary>Get Started</Button>
            <Button href="https://github.com/lokashrinav/grecruit" target="_blank" rel="noopener noreferrer" primary>View on GitHub</Button>
          </HeroButtons>
        </HeroContent>
      </HeroSection>
    </HeaderWrapper>
  );
}

export default Header;
