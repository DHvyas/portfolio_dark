import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const FooterContainer = styled.footer`
  background-color: #0a0a0a;
  color: #ffffff;
  padding: 2rem;
  text-align: center;
`;

const ContactDetails = styled.div`
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 1.5;
`;

const ContactItem = styled.p`
  margin: 0.5rem 0;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: #ffffff;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #aaaaaa;
  }
`;

const FooterText = styled.p`
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #777;
`;

const Footer = () => {
  return (
    <FooterContainer id="contact">
      <ContactDetails>
        <ContactItem><a href="mailto:vyasdhruvh@gmail.com">vyasdhruvh@gmail.com</a></ContactItem>
        <ContactItem>Dallas, TX, USA</ContactItem>
      </ContactDetails>
      <SocialLinks>
        <SocialLink href="https://www.linkedin.com/in/thedhruvvyas/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </SocialLink>
        <SocialLink href="https://github.com/DHvyas" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </SocialLink>
      </SocialLinks>
      <FooterText>&copy; {new Date().getFullYear()} Dhruv Vyas. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
