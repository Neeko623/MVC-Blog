const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'neeko1',
    password: 'password123'
  },
  {
    username: 'neeko2',
    password: 'password123'
  },
  {
    username: 'neeko3',
    password: 'password123'
  },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
