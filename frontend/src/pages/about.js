// src/About.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex; /* Enable flexbox */
  align-items: center; /* Center items vertically */
  justify-content: center; /* Center items horizontally */
  height: 100vh; /* Full viewport height */
  width: 100vw; /* Full viewport width */
  background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
`;

const ContentWrapper = styled.div`
  padding: 40px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 28px;
  text-align: center;
  color: #333;
`;

const Text = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  text-align: justify;
`;

const Logo = styled.img`
  height: 40px; /* Adjust the height as needed */
  margin-bottom: 20px; /* Space below the logo */
`;

const About = () => {
  return (
    <Container>
      <ContentWrapper>
        <Logo src="../img/mindquest.jpg" alt="Logo" />
        <Title>About MindQuest</Title>
        <Text>
          Welcome to MindQuest, your ultimate platform for knowledge management! Our mission is to empower users to organize, share, and grow their knowledge seamlessly. 
          With an intuitive interface and innovative features, MindQuest helps you stay motivated and connected to your learning journey.
        </Text>
        <Text>
          Whether you're a student, professional, or lifelong learner, MindQuest provides the tools you need to enhance your understanding and achieve your goals. Join us and explore the world of knowledge!
        </Text>
      </ContentWrapper>
    </Container>
  );
};

export default About;
