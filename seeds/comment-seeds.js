const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'What is JavaScript?',
    user_id: 4,
    post_id: 34
  },
  {
    comment_text: 'What is the use of isNaN function?',
    user_id: 24,
    post_id: 24
  },
  {
    comment_text: 'What is the difference between ViewState and SessionState?',
    user_id: 14,
    post_id: 74
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
