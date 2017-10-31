var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Define your schema: what fields will one task document have
var taskSchema = new Schema( {
  text: String,
  completed: Boolean
});

// Compile taskSchema into Mongoose model object
var Task = mongoose.model('Task', taskSchema);

// And export the Task so our other code can use it
module.exports = Task;

