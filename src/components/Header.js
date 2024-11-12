import React, { useState } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(10, 10, 10, 0.9);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;
const GradientText = styled.h1`
  font-size: 1.5rem;
  background: linear-gradient(90deg, #ff7e5f, #feb47b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
`;


const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #0a0a0a;
    flex-direction: column;
    padding: 1rem 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const NavLink = styled.a`
  color: #aaaaaa;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ffffff;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Bar = styled.div`
  width: 25px;
  height: 3px;
  background-color: #ffffff;
  margin: 4px 0;
  transition: 0.4s;
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <GradientText href="#home">Dhruv Vyas</GradientText>
      <Hamburger onClick={toggleMenu}>
        <Bar />
        <Bar />
        <Bar />
      </Hamburger>
      <Nav isOpen={isOpen}>
        <NavLink href="#home" onClick={toggleMenu}>Home</NavLink>
        <NavLink href="#projects" onClick={toggleMenu}>Projects</NavLink>
        <NavLink href="#skills" onClick={toggleMenu}>Skills</NavLink>
        <NavLink href="#research" onClick={toggleMenu}>Research</NavLink>
        <NavLink href="#education" onClick={toggleMenu}>Education</NavLink>
        <NavLink href="#contact" onClick={toggleMenu}>Contact</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
