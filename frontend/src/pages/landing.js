// src/LandingPage.js
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
`;

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 36px;
  color: #fff;
  text-align: center;
`;

const SearchBar = styled.input`
  width: 80%;
  padding: 12px 15px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
`;

const FAQSection = styled.div`
  margin-top: 40px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 80%;
  max-width: 600px;
`;

const FAQItem = styled.div`
  margin-bottom: 15px;
`;

const FAQQuestion = styled.h4`
  cursor: pointer;
  color: #004d7a;
`;

const FAQAnswer = styled.p`
  margin: 5px 0 10px 0;
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

const ChatBotContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 300px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 10px;
`;

const ChatBotButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #4CAF50;
  color: white;
  cursor: pointer;
`;

const Button = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  color: white;
  background-color: #4CAF50;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

const LandingPage = () => {
  const [faqOpen, setFaqOpen] = useState({});
  const [chatOpen, setChatOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResultFields, setSearchResultFields] = useState(['']);

  const faqs = [
    { question: 'What is MindQuest?', answer: 'MindQuest is a knowledge management tool designed to help you organize and access information easily.' },
    { question: 'How do I create an account?', answer: 'You can create an account by clicking the signup button on the login page.' },
    { question: 'Can I reset my password?', answer: 'Yes, you can reset your password from the login page by clicking on the "Forgot Password?" link.' },
  ];

  const toggleFAQ = (index) => {
    setFaqOpen(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const handleSearch = () => {
    // Perform search action (mocked)
    console.log('Searching for:', searchTerm);
    // You can add more logic here, like making an API call.
  };

  const handleSearchResultFields = (index, value) => {
    const newSearchResultFields = [...searchResultFields];
    newSearchResultFields[index] = value;
    setSearchResultFields(newSearchResultFields);
  };

  const addSearchResultField = () => {
    setSearchResultFields([...searchResultFields, 'test']);
  };

  const removeSearchResultField = (index) => {
    const newSearchResultFields = searchResultFields.filter((_, i) => i !== index);
    setSearchResultFields(newSearchResultFields);
  }

  return (
    <Container>
      <Title>Welcome to MindQuest</Title>
      <SearchBar type="text" placeholder="Search for information..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <Button onClick={handleSearch}>Search</Button>
      {/* {searchResultFields.map(text, index) => (
        <div key={index}>

        </div>
      )} */}
      <FAQSection>
        {faqs.map((faq, index) => (
          <FAQItem key={index}>
            <FAQQuestion onClick={() => toggleFAQ(index)}>
              {faq.question}
            </FAQQuestion>
            <FAQAnswer show={faqOpen[index]}>
              {faq.answer}
            </FAQAnswer>
          </FAQItem>
        ))}
      </FAQSection>

      <ChatBotContainer>
        <ChatBotButton onClick={() => setChatOpen(!chatOpen)}>
          {chatOpen ? 'Close Chat' : 'Open Chat'}
        </ChatBotButton>
        {chatOpen && <div style={{ padding: '10px' }}>Chat bot is here to help you!</div>}
      </ChatBotContainer>
    </Container>
  );
};

export default LandingPage;
