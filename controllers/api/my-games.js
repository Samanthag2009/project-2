// express router bring in
const router = require('express').Router();
const express = require('express');
//Route to view users stored games page
router.get('/my-games', async (req, res) => {

    res.render('mygames')
});
//require user authentication to see this page
const reqAuth = require('../../utils/auth');




module.exports = router;