import React from 'react';
import styled from 'styled-components';
import utdLogo from '../assets/UTD.png';
import dtuLogo from '../assets/DTU.png';


const EducationSection = styled.section`
  padding: 4rem 2rem;
  background-color: #000000;
  color: #ffffff;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const EducationItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #222;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }
`;

const ImageContainer = styled.div`
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  margin: auto;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
    width: 100px;
    height: 100px;
  }
`;

const InstitutionImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid #ffffff;
`;

const EducationDetails = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Institution = styled.h3`
  font-size: 1.5rem;
  margin: 0;
`;

const Degree = styled.p`
  font-size: 1.1rem;
  color: #aaaaaa;
`;

const Location = styled.p`
  font-size: 1rem;
  color: #777;
`;

const Duration = styled.span`
  font-size: 1rem;
  color: #777;
`;

const Education = () => {
  const educationData = [
    {
        institution: "Delhi Technological University",
        degree: "B.Tech in Information Technology",
        duration: "2018 - 2022",
        location: "New Delhi, India",
        imageUrl: dtuLogo
    },
    {
      institution: "University of Texas at Dallas",
      degree: "M.S. in Information Technology and Management",
      duration: "2023 - 2025",
      location: "Richardson, TX, USA",
      imageUrl: utdLogo
    }
  ];

  return (
    <EducationSection id="education">
      <Title>Education</Title>
      <Timeline>
        {educationData.map((edu, index) => (
          <EducationItem key={index}>
            <ImageContainer>
              <InstitutionImage src={edu.imageUrl} alt={edu.institution} />
            </ImageContainer>
            <EducationDetails>
              <Institution>{edu.institution}</Institution>
              <Degree>{edu.degree}</Degree>
              <Location>{edu.location}</Location>
              <Duration>{edu.duration}</Duration>
            </EducationDetails>
          </EducationItem>
        ))}
      </Timeline>
    </EducationSection>
  );
};

export default Education;
