const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8080;

// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Fake database (for simplicity)
const users = [
  { username: 'user1@gmail.com', name: 'user1', password: 'password1' },
  { username: 'user2@gmail.com', name: 'user2', password: 'password2' },
  { username: 'user3@gmail.com', name: 'user3', password: 'password3' }
];

// Registration Endpoint
app.post('/register', (req, res) => {
  const { username, name, password } = req.body;

  // Check if user already exists
  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Add user to "database"
  const newUser = { username, name, password }; // In real apps, don't store passwords like this!
  users.push(newUser);

  res.status(201).json({ message: 'User registered successfully', user: newUser });
});

//Login Endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if user exists and password matches
  const user = users.find(user => user.username === username && user.password === password);
  if (user) {
    return res.status(200).json({ message: 'Login successful', user });
  } else {
    return res.status(401).json({ message: 'Invalid username or password' });
  }
});

// Home route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});