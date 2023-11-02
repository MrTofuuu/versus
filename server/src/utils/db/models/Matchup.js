const { Schema, model } = require('mongoose');

const matchupSchema = new Schema({
  characterA:{},
  characterB:{},
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
  endingAt: {
    type:Date,
    default: Date.now +7
  },
  privateMatchup:{
    type:Boolean,
    default: false
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
