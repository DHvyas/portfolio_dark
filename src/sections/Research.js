import React from 'react';
import styled from 'styled-components';

const ResearchSection = styled.section`
  padding: 4rem 2rem;
  background-color: #121212;
  color: #ffffff;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const PaperContainer = styled.div`
  background: #222;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
`;

const PaperTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
`;

const Authors = styled.p`
  font-size: 1rem;
  color: #aaaaaa;
  margin-bottom: 1rem;
`;

const Abstract = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #cccccc;
  margin-bottom: 1.5rem;
`;

const LinkButton = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #000000;
  color: #ffffff;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ffffff;
    color: #000000;
  }
`;

const Research = () => {
  const paperData = {
    title: "Computation and Prediction Of Cobb's Angle Using Machine Learning Models",
    authors: "Dhruv Vyas, Abhishek Ganesan, Priyanka Meel",
    abstract: "Scoliosis is a birth defect that causes spinal curvature, typically assessed through X-rays. Traditional measurements are manual and time-consuming, with high variability among observers. Our study introduces a fully automated model for vertebrae segmentation using a tuned U-Net architecture, enabling reliable, automated scoliosis measurement. The model calculates the Cobb Angle and predicts curvature progression, offering doctors a consistent tool for scoliosis assessment and providing patients with a reliable timeline for spinal fusion surgery.",
    link: "https://ieeexplore.ieee.org/document/9847938",
  };

  return (
    <ResearchSection id="research">
      <Title>Research Work</Title>
      <PaperContainer>
        <PaperTitle>{paperData.title}</PaperTitle>
        <Authors>{paperData.authors}</Authors>
        <Abstract>{paperData.abstract}</Abstract>
        <LinkButton href={paperData.link} target="_blank" rel="noopener noreferrer">
          Read Full Paper
        </LinkButton>
      </PaperContainer>
    </ResearchSection>
  );
};

export default Research;
