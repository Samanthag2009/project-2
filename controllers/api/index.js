//setting up user routing and exporting it

const router = require('express').Router();
const allGameRoutes = require('./all-games');
const myGameRoutes = require('./my-games');
const userRoutes = require('./user-routes');

//  routes to controllers for my-games and all-games
router.use('/user', userRoutes);
router.use('/games', allGameRoutes);
router.use('/saved-games', myGameRoutes);

module.exports = router;
