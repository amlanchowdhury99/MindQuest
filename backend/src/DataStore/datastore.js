const KnowledgeDocument = require('../models/KnowledgeDocument');
const UserProfile = require('../models/UserProfile');

const datastore = {
  knowledgeDocuments: [
    {
      id: "1",
      title: "Introduction to Node.js",
      content: "Node.js is a runtime environment that executes JavaScript code outside of a browser...",
      tags: ["Node.js", "JavaScript", "Backend"],
      type: "article",
      lastUpdated: new Date(),
      createdBy: {
        userId: "1",
        name: "Alice Johnson",
        role: "Senior Developer"
      },
      contributors: [
        {
          userId: "2",
          name: "Bob Smith",
          role: "Junior Developer"
        }
      ],
      views: 100,
      upvotes: 50,
      comments: [
        {
          commentId: "c1",
          userId: "3",
          comment: "Great article!",
          timestamp: new Date()
        }
      ]
    },
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
