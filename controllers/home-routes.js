const router = require('express').Router();
const express = require('express');


router.get('/', async (req, res) => {
    //render the homepage template as the response
  
    res.render('homepage');
  });

// GET Route for homepage
// router.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/homepage.handlebars'))
// );

module.exports = router;