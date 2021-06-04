const { Schema, model } = require('mongoose');

const schema = new Schema({
  id: String,
  title: String,
  done: Boolean,
  timestamp: Date,
});

module.exports = model('todo', schema);
