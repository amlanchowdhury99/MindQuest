const KnowledgeDocumentSchema = {
    id: { type: String, required: true, default: 1 },
    title: { type: String, required: true },
    content: { type: String, required: true },
    tags: { type: [String], default: [] },
    type: { type: String, default: 'article' }, // e.g., 'article', 'Q&A', 'tutorial'
    lastUpdated: { type: Date, default: Date.now },
    createdBy: {
      userId: { type: String, required: true },
      name: { type: String, required: true },
      role: { type: String, required: true }
    },
    contributors: [
      {
        userId: { type: String },
        name: { type: String },
        role: { type: String }
      }
    ],
    views: { type: Number, default: 0 },
    upvotes: { type: Number, default: 0 },
    comments: [
      {
        commentId: { type: String },
        userId: { type: String },
        comment: { type: String },
        timestamp: { type: Date, default: Date.now }
      }
    ]
  };
  
  module.exports = KnowledgeDocumentSchema;
  