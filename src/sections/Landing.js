import React from 'react';
import styled from 'styled-components';

const LandingSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  font-size: 1.5rem;
  color: #ffffff;
  padding: 0 2rem;
`;

const GradientText = styled.span`
  font-size: 2.5rem;
  background: linear-gradient(90deg, #ff7e5f, #feb47b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline;
`;

const Intro = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

const RoleText = styled.div`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  font-weight: bold;
  display: flex;
  gap: 0.5rem;
`;

const DeveloperText = styled.span`
  background: linear-gradient(90deg, #6a11cb, #2575fc); /* Blue-purple gradient */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const DesignerText = styled.span`
  background: linear-gradient(90deg, #42e695, #3bb2b8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const BuilderText = styled.span`
  background: linear-gradient(90deg, #f093fb, #f5576c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Links = styled.div`
  font-size: 1rem;
  color: #aaaaaa;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  a {
    color: #aaaaaa;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #ffffff;
    }
  }
`;

const Landing = () => (
  <LandingSection id="home">
    <Intro>
      Hi, I'm <GradientText>Dhruv</GradientText>, a Grad student with a passion to build beautiful things.
    </Intro>
    <RoleText>
      <DeveloperText>Developer.</DeveloperText>
      <DesignerText>Designer.</DesignerText>
      <BuilderText>Product Builder.</BuilderText>
    </RoleText>
    <Links>
      <a href="https://www.traverconnect.com" target="_blank" rel="noopener noreferrer">Software Developer at Traver Companies ↗</a>
      <a href="https://www.policybazaar.com" target="_blank" rel="noopener noreferrer">Previously worked with Policybazaar ↗</a>
      <a href="https://www.utdallas.edu" target="_blank" rel="noopener noreferrer">Studying at UTDallas ↗</a>
    </Links>
  </LandingSection>
);

export default Landing;
