// express router bring in
const router = require('express').Router();
const express = require('express');
//require user authentication to see this page
const hasAuth = require('../../utils/auth');

// COMMENTED OUT FUNCTIONALITY THAT WILL BE IMPLEMENTED IN FUTURE DEVELOPMENT

//Route to view users stored games page
router.get('/my-games', async (req, res) => {

    res.render('my-games')
});

// sign up form



module.exports = router;