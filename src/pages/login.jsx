import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa';


// Styled Components
const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
  padding: 20px;
`;

const LoginForm = styled.div`
  background-color: white;
  padding: 40px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  max-width: 400px;
  width: 100%;
  text-align: center;
  font-family: 'Roboto', sans-serif;
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #203c5c;
  font-family: 'Montserrat', sans-serif;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;

  &:focus {
    outline: none;
    border-color: #0a74da;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  background-color: #ff7a59;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff5a39;
  }
`;

const ToggleFormLink = styled.p`
  margin-top: 20px;
  color: #333;
  cursor: pointer;
  font-size: 0.9rem;

  span {
    color: #0a74da;
    font-weight: bold;
    text-decoration: underline;
  }
`;
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

  @media (max-width: 900px) {
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

  @media (max-width: 900px) {
    display: block;
  }
  margin-right: 20px;
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

// Login Component
function Login() {
  const [isLogin, setIsLogin] = useState(true);

  // Toggle between Login and Sign Up forms
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu for mobile devices
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <LoginWrapper>
      <Navbar>
        <Container>
          {/* Logo Section */}
          <Logo>
            <a href="/"><h1>GRecruit</h1></a>
          </Logo>

          {/* Navigation Links */}
          <div>
            <NavLinks menuOpen={menuOpen}>
            <NavItem><a href="#features">How To Start</a></NavItem>
              <NavItem><a href="#features">Features</a></NavItem>
              <NavItem><a href="#involved">Get Involved</a></NavItem>
              <NavItem><Link to="/contact">Contact</Link></NavItem>
              <NavItem><a href="#security">Github</a></NavItem>
              <NavItem><a href="#contact">Documentation</a></NavItem>
              <NavItem><Link to="/login">Login/Sign Up</Link></NavItem>
            </NavLinks>
            <MenuIcon onClick={toggleMenu}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </MenuIcon>
          </div>
        </Container>
      </Navbar>
      <LoginForm>
        <FormTitle>{isLogin ? 'Log In' : 'Sign Up'}</FormTitle>
        <form>
          {!isLogin && (
            <Input type="text" placeholder="Full Name" required />
          )}
          <Input type="email" placeholder="Email Address" required />
          <Input type="password" placeholder="Password" required />
          {!isLogin && (
            <Input type="password" placeholder="Confirm Password" required />
          )}
          <Button type="submit">{isLogin ? 'Log In' : 'Sign Up'}</Button>
        </form>
        <ToggleFormLink onClick={toggleForm}>
          {isLogin ? 'Don\'t have an account? ' : 'Already have an account? '}
          <span>{isLogin ? 'Sign Up' : 'Log In'}</span>
        </ToggleFormLink>
      </LoginForm>
    </LoginWrapper>
  );
}

export default Login;
