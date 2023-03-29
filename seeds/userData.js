const { User } = require('../models');

const userdata = [
  {
    id: 1,
    username: 'jamieTart',
    password: 'password123'
  },
  {
    id: 2,
    username: 'pedroPascal',
    password: 'password456'
  },
  {
    id: 3,
    username: 'elMando',
    password: 'password789'
  },
  {
    id: 4,
    username: 'ellieFAFO',
    password: 'password123'
  },
  {
    id: 5,
    username: 'dinDjarin',
    password: 'password456'
  },
  {
    id: 6,
    username: 'hermioneOwl',
    password: 'password789'
  },
  {
    id: 7,
    username: 'thisIsTheWay',
    password: 'password123'
  },
  {
    id: 8,
    username: 'patu50',
    password: 'password456'
  },
  {
    id: 9,
    username: 'tiny_lego_frog',
    password: 'password789'
  },
  {
    id: 10,
    username: 'bo-katan-kryze',
    password: 'password123'
  }
];

const userSeed = () => User.bulkCreate(userdata, { individualHooks: true, returning: true });

module.exports = userSeed;