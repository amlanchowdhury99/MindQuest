// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import './App.css'; 

const App = () => {
  return (
    <Router>
      <div className="App">
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App; // Make sure this line is present
