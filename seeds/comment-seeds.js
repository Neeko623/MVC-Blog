const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'What is JavaScript?',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'What is the use of isNaN function?',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'What is the difference between ViewState and SessionState?',
    user_id: 3,
    post_id: 3
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
