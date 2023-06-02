const { Schema, model } = require('mongoose');

const thoughtsSchema = new Schema(
  {
    thoughts: {
      type: String,
      required: true,
      max_length: 280,
      min_length: 1
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  },
);

const Thoughts = model('thoughts', thoughtsSchema);

module.exports = Thoughts;
