import React from 'react';
import { FaBuilding, FaUserCheck, FaCodeBranch } from 'react-icons/fa';
import styled from 'styled-components';

// Styled Components
const Section = styled.section`
  padding: 60px 20px;
  background-color: #f9f9f9;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
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

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  max-width: 100%;
`;

const FeatureCard = styled.div`
  background: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  padding: 40px;
  border-radius: 10px;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-10px);
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  color: #4a90e2;
  margin-bottom: 20px;
`;

// Features Component
function Features() {
  return (
    <Section>
      <Container>
        <Title>Why Choose GRecruit</Title>
        <FeaturesGrid>
          <FeatureCard>
            <FeatureIcon>
              <FaBuilding />
            </FeatureIcon>
            <h3>Easy Job Management</h3>
            <p>Manage job postings effortlessly with our intuitive dashboard.</p>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>
              <FaUserCheck />
            </FeatureIcon>
            <h3>Absolutely Free</h3>
            <p>Completely free to use, modify, and distribute for all.</p>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>
              <FaCodeBranch />
            </FeatureIcon>
            <h3>Open-Source Freedom</h3>
            <p>Completely customizable and free to use, supported by a community.</p>
          </FeatureCard>
        </FeaturesGrid>
      </Container>
    </Section>
  );
}

export default Features;
