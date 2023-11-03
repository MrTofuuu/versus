const { Schema, model } = require('mongoose');

const characterSchema = new Schema({
  name:{},
  characterB:{},
  characterAuthor: {
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
  privateCharacter:{
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

const Character = model('Character', characterSchema);

module.exports = Character;