const { Schema, model } = require('mongoose');

const matchupSchema = new Schema({
  matchupText: {
    type: String,
    required: 'You need to leave a matchup!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  matchupAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Matchup = model('Matchup', matchupSchema);

module.exports = Matchup;
