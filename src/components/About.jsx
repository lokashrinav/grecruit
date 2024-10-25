import React from 'react';
import styled from 'styled-components';

// Styled Components
const AboutSection = styled.section`
  padding: 80px 20px;
  background-color: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  flex-wrap: wrap;
`;

const AboutContent = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const AboutText = styled.div`
  flex: 1;
  min-width: 300px;
`;

const AboutImage = styled.div`
  flex: 1;
  min-width: 300px;

  img {
    width: 100%;
    border-radius: 10px;
  }
`;

// About Component using Styled Components
function About() {
  return (
    <AboutSection>
      <Container>
        <AboutContent>
          <AboutText>
            <h2>About GRecruit</h2>
            <p>
              GRecruit simplifies the hiring process by enabling companies to post jobs
              and candidates to apply effortlessly, without the need for complicated workflows.
              Focus on finding the right fit instead of dealing with cluttered interfaces.
            </p>
          </AboutText>
        </AboutContent>
      </Container>
    </AboutSection>
  );
}

export default About;
