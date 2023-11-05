const { Schema, model } = require('mongoose');

const characterSchema = new Schema({
  name:{
    type:String,
    required: true,
    trim: true,
    unique: true
  },
  bio:{
    type:String,
    required: true, 
    trim: true,
  },
  modifier:{
    type:String,
    required: true, 
    trim: true,
  },
  origin: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  totalMatchups:{},
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