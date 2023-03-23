//setting up user routing and exporting it

const router = require('express').Router();

const userRoutes = require('./user-routes');

//       /api/users - from server.js
router.use('/users', userRoutes);

module.exports = router;
