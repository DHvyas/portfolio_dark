import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare, faReact, faNodeJs, faGitAlt, faPython } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCloud, faDesktop } from '@fortawesome/free-solid-svg-icons';

const SkillsSection = styled.section`
  padding: 4rem 2rem;
  background-color: #000000;
  color: #ffffff;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
`;

const SkillCard = styled.div`
  background: #222;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const SkillIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: ${(props) => props.color}; /* Set color dynamically */
`;

const SkillName = styled.p`
  font-size: 1rem;
  color: #aaaaaa;
  margin: 0;
`;

const Skills = () => {
  const skillsData = [
    { name: "JavaScript", icon: faJsSquare, color: "#F7DF1E" }, // JavaScript Yellow
    { name: "React", icon: faReact, color: "#61DAFB" }, // React Blue
    { name: "Node.js", icon: faNodeJs, color: "#339933" }, // Node.js Green
    { name: ".NET", icon: faDesktop, color: "#512BD4" }, // .NET Purple
    { name: "SQL", icon: faDatabase, color: "#003B57" }, // SQL Server Blue
    { name: "Azure", icon: faCloud, color: "#0078D4" }, // Azure Blue
    { name: "Git", icon: faGitAlt, color: "#F05032" }, // Git Orange
    { name: "Python", icon: faPython, color: "#3776AB" }, // Python Blue
    // Add more skills as needed
  ];

  return (
    <SkillsSection id="skills">
      <Title>Skills</Title>
      <SkillsGrid>
        {skillsData.map((skill, index) => (
          <SkillCard key={index}>
            <SkillIcon color={skill.color}>
              <FontAwesomeIcon icon={skill.icon} />
            </SkillIcon>
            <SkillName>{skill.name}</SkillName>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
};

export default Skills;
