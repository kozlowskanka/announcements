const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  published: { type: String, required: true },
  updated: { type: String, required: true },
  status: { type: String, required: true },
  mail: { type: String, required: true },
});

module.exports = mongoose.model('Post', postSchema);
