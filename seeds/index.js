const commentSeed = require('./commentData');
const gameSeed = require('./gameData');
const userSeed = require('./userData');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');

  await userSeed();
  console.log('--------------');

  await gameSeed();
  console.log('--------------');
  
  await commentSeed();
  console.log('--------------');


  process.exit(0);
};

seedAll();