
const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  // Add other mentor properties here
});

const Mentor = mongoose.model('Mentor', mentorSchema);

module.exports = Mentor;
