import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import { createClient } from '@supabase/supabase-js';
import bcrypt from 'bcryptjs';

// Styled Components (same as yours, I'll only focus on logic changes)
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
  background: #0a74da;
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

// Other styled components are the same as your current setup

const supabaseUrl = 'https://jhqqhrqksiemdifeixha.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const saltRounds = 10;

async function hashPassword(password) {
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.error('Error hashing password:', error);
    throw error;
  }
}

async function signUpUser(email, password) {
  try {
    const hashedPassword = await hashPassword(password);

    // Save the user with the hashed password in Supabase
    const { data, error } = await supabase.from('users').insert([
      { email: email, password: hashedPassword }
    ]);

    if (error) throw error;

    console.log('User signed up successfully:', data);
  } catch (error) {
    console.error('Error signing up user:', error);
  }
}

async function verifyUser(email, enteredPassword) {
  try {
    // Fetch user data from Supabase based on the email
    const { data, error } = await supabase
      .from('users')
      .select('password')
      .eq('email', email)
      .single();

    if (error || !data) {
      console.error('User not found:', error);
      return false;
    }

    const hashedPassword = data.password;

    // Compare the entered password with the hashed password
    const isPasswordValid = await bcrypt.compare(enteredPassword, hashedPassword);

    if (isPasswordValid) {
      console.log('Password is valid! User logged in.');
      return true;
    } else {
      console.log('Invalid password.');
      return false;
    }
  } catch (error) {
    console.error('Error verifying user:', error);
    return false;
  }
}

// Login Component
function Login() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu for mobile devices
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Toggle between Login and Sign-Up forms
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  // Handle form submission for login/sign-up
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      // Handle Login
      const isValid = await verifyUser(email, password);
      if (isValid) {
        alert('Login Successful!');
        // Perform any post-login actions here, like redirecting
      } else {
        alert('Invalid email or password.');
      }
    } else {
      // Handle Sign-Up
      if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
      }

      await signUpUser(email, password);
      alert('Sign-Up Successful! Please log in.');
      toggleForm(); // Switch to login form after sign-up
    }
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
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {!isLogin && (
            <Input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          )}
          <Button type="submit">{isLogin ? 'Log In' : 'Sign Up'}</Button>
        </form>
        <ToggleFormLink onClick={toggleForm}>
          {isLogin ? "Don't have an account? " : 'Already have an account? '}
          <span>{isLogin ? 'Sign Up' : 'Log In'}</span>
        </ToggleFormLink>
      </LoginForm>
    </LoginWrapper>
  );
}

export default Login;
