const KnowledgeDocument = require('../models/KnowledgeDocument');
const UserProfile = require('../models/UserProfile');

const datastore = {
  knowledgeDocuments: [
    {
      id: "1",
      title: "Overview of Hochschule Fulda",
      content: "Hochschule Fulda, or Fulda University of Applied Sciences, is a prominent German institution focused on applied sciences and known for its practical learning approach and regional partnerships. Founded in 1974, it offers over 60 programs across diverse fields including Business, Engineering, and Health Sciences.",
      tags: ["Hochschule Fulda", "Applied Sciences", "University", "Germany"],
      type: "article",
      lastUpdated: "2024-10-27T12:00:00Z",
      createdBy: {
        userId: "2",
        name: "John Doe",
        role: "Research Analyst"
      },
      contributors: [
        {
          userId: "3",
          name: "Jane Smith",
          role: "Education Specialist"
        }
      ],
      views: 150,
      upvotes: 75,
      comments: [
        {
          commentId: "c2",
          userId: "4",
          comment: "Very informative overview!",
          timestamp: "2024-10-27T12:30:00Z"
        }
      ]
    }
    
    // Add more fake data as needed
  ],
  userProfiles: [
    {
      userId: "1",
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      role: "Senior Developer",
      joinedDate: new Date()
    },
    {
      userId: "2",
      name: "Bob Smith",
      email: "bob.smith@example.com",
      role: "Junior Developer",
      joinedDate: new Date()
    }
    // Add more fake data as needed
  ]
};

module.exports = datastore;
