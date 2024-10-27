// src/App.js
import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import './App.css'; 



let loggedIn = true;

// const App = () => {
//   if(loggedIn) {
//     return (
//       <Router>
//         <nav>
//           <Link to="/">Home</Link> | <Link to="/about">About</Link>
//         </nav>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </Router>
//     );
//   } else {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <Login></Login>
//         </header>
//       </div>
//     );
//   }
  
// };


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
