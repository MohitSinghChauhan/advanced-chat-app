const mongoose = require('mongoose');

const userModel = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    image: {
      type: String,
      required: true,
      default: 'https://eu.ui-avatars.com/api/?name=John+Doe&size=250',
    },
  },
  {
    timestamp: true,
  }
);
  
const User = mongoose.model("User", userModel);

model.exports = User;