const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const datastore = require('./DataStore/datastore');

dotenv.config();

// Middleware
const bodyParser = require('body-parser');
const app = express();
const PORT = 8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors({
  origin: '*', // Allows all origins
}));


// Fake database (for simplicity)
const users = [
  { username: 'user1@gmail.com', name: 'user1', password: 'password1' },
  { username: 'user2@gmail.com', name: 'user2', password: 'password2' },
  { username: 'user3@gmail.com', name: 'user3', password: 'password3' }
];

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Get all knowledge documents
app.get('/api/knowledge', (req, res) => {
  res.json(datastore.knowledgeDocuments);
});

// Get a single knowledge document by ID
app.get('/api/knowledge/:id', (req, res) => {
  const document = datastore.knowledgeDocuments.find(doc => doc.id === req.params.id);
  if (!document) return res.status(404).json({ message: 'Document not found' });
  res.json(document);
});

// Create a new knowledge document
app.post('/api/knowledge', (req, res) => {
  const newDocument = { ...req.body, lastUpdated: new Date() };
  datastore.knowledgeDocuments.push(newDocument);
  res.status(201).json(newDocument);
});

//Update Knowledge Document
app.post('/api/knowledge/:id', (req, res) => {
  debugger
  console.log("rakib ekta khan");
  const index = datastore.knowledgeDocuments.findIndex(d => d.id === req.params.id);
  if (index !== -1) {
    const updatedDoc = { id: req.params.id, ...req.body };
    datastore.knowledgeDocuments[index] = updatedDoc;
    res.json(updatedDoc);
  } else {
    res.status(404).json({ message: 'Document not found' });
  }
});

app.delete('/api/knowledge/:id', (req, res) => {
  const index = datastore.knowledgeDocuments.findIndex(doc => doc.id === req.params.id);
  if (index !== -1) {
      datastore.knowledgeDocuments.splice(index, 1);
      res.status(204).send(); // No content
  } else {
      res.status(404).json({ message: 'Document not found' });
  }
});

// Get all user profiles
app.get('/api/users', (req, res) => {
  res.json(datastore.userProfiles);
});

// Get a specific user profile by userId
app.get('/users/:userId', (req, res) => {
  const profile = datastore.userProfiles.find(user => user.userId === req.params.userId);
  if (profile) {
      res.json(profile);
  } else {
      res.status(404).json({ message: 'User profile not found' });
  }
});

app.delete('/users/:userId', (req, res) => {
  const index = datastore.userProfiles.findIndex(user => user.userId === req.params.userId);
  if (index !== -1) {
      datastore.userProfiles.splice(index, 1);
      res.status(204).send(); // No content
  } else {
      res.status(404).json({ message: 'User profile not found' });
  }
});

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

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});