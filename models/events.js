const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
  notice there is no ID. That's because Mongoose will assign
  an ID by default to all schemas
*/

const EventSchema = new Schema({
  name: String,
  date: Date,
  description: String,
  speaker: String//mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model('Events', EventSchema);