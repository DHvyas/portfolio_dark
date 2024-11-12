import React from 'react';
import styled from 'styled-components';
import pokerKing from '../assets/PokerKing.png';
import discover from '../assets/Discover.png';
import cube from '../assets/Cube.png';
import social from '../assets/Social.png';

const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  background-color: #121212;
  color: #ffffff;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Switch to a single column on smaller screens */
  }
`;

const ProjectCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  width: 100%;
  padding-top: 56.25%; /* 16:9 aspect ratio */

  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const ProjectTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  max-width: 80%;
`;

const ProjectStatus = styled.p`
  font-size: 0.9rem;
  font-style: italic;
  color: #ffe6e6;
  margin-bottom: 0.5rem;
`;

const ProjectLink = styled.a`
  font-size: 0.9rem;
  color: #ff6347;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: #ff4500;
  }
`;

const Projects = () => {
  const projectData = [
    {
      title: "PokerKing",
      description: "A Poker app where you can play Poker with your friends online.",
      imageUrl: pokerKing,
      status: "Under Development",
      githubUrl: "https://github.com/DHvyas/PokerApp"
    },
    {
      title: "DISCOVER",
      description: "A collaborative writting app where readers can vote on how the story progresses.",
      imageUrl: discover,
      status: "Under Development",
      githubUrl: null
    },
    {
      title: "Babylon JS Game",
      description: "A 3D rendering game where users can interact with a cube.",
      imageUrl: cube,
      status: "Deployed",
      githubUrl: "https://github.com/DHvyas/babylon-cube"
    },
    {
      title: "Social Media for the Blind",
      description: "Developed for a hackathon. CV models help describe pictures for the blind.",
      imageUrl: social,
      status: "Deployed",
      githubUrl: null
    },
  ];

  return (
    <ProjectsSection id="projects">
      <Title>Projects</Title>
      <ProjectGrid>
        {projectData.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectImage src={project.imageUrl} alt={project.title} />
            <ProjectOverlay>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectStatus>Status: {project.status}</ProjectStatus>
            {project.githubUrl ? (
              <ProjectLink href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                View on GitHub ↗
              </ProjectLink>
            ) : (
              <ProjectLink href="#" onClick={(e) => e.preventDefault()}>
                No GitHub Link Available
              </ProjectLink>
            )}
            </ProjectOverlay>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsSection>
  );
};

export default Projects;
