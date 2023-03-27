const { User } = require('../models');

const userdata = [
  {
    username: 'jamieTart',
    password: 'password123'
  },
  {
    username: 'pedroPascal',
    password: 'password456'
  },
  {
    username: 'elMando',
    password: 'password789'
  },
  {
    username: 'ellieFAFO',
    password: 'password123'
  },
  {
    username: 'dinDjarin',
    password: 'password456'
  },
  {
    username: 'hermioneOwl',
    password: 'password789'
  },
  {
    username: 'thisIsTheWay',
    password: 'password123'
  },
  {
    username: 'patu50',
    password: 'password456'
  },
  {
    username: 'tiny_lego_frog',
    password: 'password789'
  },
  {
    username: 'bo-katan-kryze',
    password: 'password123'
  }
];

const userSeed = () => User.bulkCreate(userdata, { individualHooks: true, returning: true });

module.exports = userSeed;