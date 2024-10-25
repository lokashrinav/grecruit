import React from 'react';
import { FaUsers, FaBuilding, FaShieldAlt } from 'react-icons/fa';
import styled from 'styled-components';

// Styled Components
const Section = styled.section`
  padding: 60px 20px;
  background-color: #f9f9f9;
  text-align: center;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 100%;
  height: 100%;
  justify-items: center;

  @media (max-width: 780px) {
    grid-template-columns: 1fr; /* Switch to single-column layout on smaller screens */
    text-align: center;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
`;

const HowGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  max-width: 100%;
`;

const HowCard = styled.div`
  background: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  padding: 40px;
  border-radius: 10px;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-10px);
  }
`;

const HowIcon = styled.div`
  font-size: 3rem;
  color: #4a90e2;
  margin-bottom: 20px;
`;

// How It Works Component
function HowItWorks() {
  return (
    <Section>
      <Container>
        <Title>How It Works</Title>
        <HowGrid>
          <HowCard>
            <HowIcon>
              <FaUsers />
            </HowIcon>
            <h3>Step 1: Register Your Company</h3>
            <p>Sign up to create a company profile and start posting job listings.</p>
          </HowCard>
          <HowCard>
            <HowIcon>
              <FaBuilding />
            </HowIcon>
            <h3>Step 2: Post Your Jobs</h3>
            <p>Use our dashboard to add, edit, or remove job opportunities.</p>
          </HowCard>
          <HowCard>
            <HowIcon>
              <FaShieldAlt />
            </HowIcon>
            <h3>Step 3: Receive Applications</h3>
            <p>Get applications directly from candidates, no accounts needed.</p>
          </HowCard>
        </HowGrid>
      </Container>
    </Section>
  );
}

export default HowItWorks;
