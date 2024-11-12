import React from 'react';
import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import styled from 'styled-components';

const ParticlesContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  filter: blur(30px); /* Adjust the blur level as needed */
`;

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <ParticlesContainer>
      <Particles
        init={particlesInit}
        options={{
          fullScreen: { enable: true },
          particles: {
            color: {
              value: ["#ff7e5f", "#feb47b", "#6a11cb", "#2575fc", "#42e695", "#3bb2b8", "#f093fb", "#f5576c"],
            },
            links: {
              enable: false,
            },
            move: {
              enable: true,
              speed: 0.8,
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "out" },
              attract: { enable: true, rotateX: 600, rotateY: 1200 },
            },
            number: {
              value: 10,
              density: { enable: true, area: 1000 },
            },
            opacity: {
              value: 0.7,
              random: true,
              anim: { enable: true, speed: 0.2, opacity_min: 0.3, sync: false },
            },
            shape: {
              type: ["circle"],
            },
            size: {
              value: { min: 10, max: 100 },
              random: true,
              anim: { enable: true, speed: 1, size_min: 0.5, sync: false },
            },
          },
        }}
      />
    </ParticlesContainer>
  );
};

export default ParticlesBackground;
