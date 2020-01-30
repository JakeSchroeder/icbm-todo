const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema title, priority, dueDate, description
const TodoSchema = new Schema({
  todoTitle: {
    type: String,
    required: true
  },
  priority: {
    type: Number
  },
  dueDate: {
    type: String
  },
  description: {
    type: String
  },
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

module.exports = Todo = mongoose.model("todos", TodoSchema);
