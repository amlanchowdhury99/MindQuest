import React from 'react';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import './App.css';
import Login from './login/login';
import About from './pages/about';
import Home from './pages/landing';

let loggedIn = true;

const App = () => {
  if(loggedIn) {
    return (
      <Router>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    );
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <Login></Login>
        </header>
      </div>
    );
  }
  
};

export default App;
