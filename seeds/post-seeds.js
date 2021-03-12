const { Post } = require('../models');

const postdata = [
  {
    title: ' What is JavaScript?',
    content: 'JavaScript is a client-side as well as server side scripting language that can be inserted into HTML pages and is understood by web browsers. JavaScript is also an Object based Programming language.',
    user_id: 1
  },
  {
    title: 'What is the use of isNaN function?',
    content: 'isNan function returns true if the argument is not a number otherwise it is false.',
    user_id: 2
  },
  {
    title: 'What is the difference between ViewState and SessionState?',
    content: 'ViewState is specific to a page in a session. SessionState is specific to user specific data that can be accessed across all pages in the web application.',
    user_id: 3
  },
  {
    title: 'What is === operator?',
    content: '=== is called as strict equality operator which returns true when the two operands are having the same value without any type conversion.',
    user_id: 2
  },
  {
    title: 'Explain how can you submit a form using JavaScript?',
    content: 'To submit a form using JavaScript use document.form[0].submit()',
    user_id: 1
  },
  {
    title: 'Explain the difference between "==" and "==="?',
    content: '"==" checks only for equality in value whereas "===" is a stricter equality test and returns false if either the value or the type of the two variables are different.',
    user_id: 3
  },
  {
    title: 'What is the data type of variables of in JavaScript?',
    content: 'All variables in the JavaScript are object data types.',
    user_id: 1
  },
  {
    title: 'What is the difference between an alert box and a confirmation box?',
    content: 'An alert box displays only one button which is the OK button. But a Confirmation box displays two buttons namely OK and cancel.',
    user_id: 2
  },
  {
    title: 'Whether JavaScript has concept level scope?',
    content: 'No. JavaScript does not have concept level scope. The variable declared inside the function has scope inside the function.',
    user_id: 1
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
