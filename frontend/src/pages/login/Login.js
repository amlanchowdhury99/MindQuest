// src/Login.js
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Container = styled.div`
  display: flex; /* Enable flexbox */
  align-items: center; /* Center items vertically */
  justify-content: center; /* Center items horizontally */
  height: 100vh; /* Full viewport height */
  width: 100vw; /* Full viewport width */
  background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
`;


const FormWrapper = styled.div`
  padding: 40px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
`;

const Title = styled.h2`
  margin-bottom: 30px;
  font-size: 24px;
  text-align: center;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  margin: 8px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px 15px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  background-color: #4CAF50;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

const Error = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
`;

const Logo = styled.img`
  height: 40px; /* Adjust the height as needed */
  margin-right: 10px; /* Space between the logo and text */
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      setError('All fields are required.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/login', {
        username: email,
        password: password,
      });

      console.log('Login successful:', response.data);
      setError(''); // Clear any previous errors
      
      // Redirect to home page on success
      navigate('/home'); // Make sure '/home' matches the route in AppRoutes
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message);
      } else {
        setError('An error occurred during login.');
      }
    }
  };
  

  return (
    <Container>
      <FormWrapper>
      <Logo src="../img/mindquest.jpg" alt="Logo" />
        <Title>Login to MindQuest</Title>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Login</Button>
          {error && <Error>{error}</Error>}
        </form>
      </FormWrapper>
    </Container>
  );
};

export default Login;
