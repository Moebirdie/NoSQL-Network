const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create User model
const thoughtSchema = new Schema(
  {
    thoughtText: { 
      type: String, 
      required: true,
      minlength: 1,
      maxlength: 280 
    },
    createdAt: {
      type: Date,
      default: Date.now 
    },
    username: {
        type: String,
        required: true
      },
    reactions: [reactionSchema],
  },
  {
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `commentCount` that gets the amount of comments per post
userSchema
  .virtual('reactionCount')
  .get(function () {
    return this.reactions.length;
  });

userSchema
  .virtual('formatCreatedAt')
  .get(function () {
    return this.createdAt.toLocalDateString();
  });

// Initialize our User model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
