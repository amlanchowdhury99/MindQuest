const UserProfileSchema = {
    userId: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String, required: true },
    joinedDate: { type: Date, default: Date.now }
  };
  
  module.exports = UserProfileSchema;
  