const router = require('express').Router();
const express = require('express');
const { Game, User, Comment } = require('../models');

const hasAuth = require('../utils/auth')

// COMMENTED OUT FUNCTIONALITY THAT WILL BE IMPLEMENTED IN FUTURE DEVELOPMENT

// render login / signup page template
router.get('/login', (req, res) => {

  // If user is logged in redirect them to the games page
  if (req.session.logged_in) {
    res.redirect("/games");
    return;
  }

  //else, render the login page
  res.render('login');
});

// render new user page template
router.get('/new-player', (req, res) => {

  // if user is logged in (ie, already have an account) redirect to games page
  if (req.session.logged_in) {
    res.redirect("/games");
    return;
  }

  res.render('new-user');
});

// router.get('/add-game', (req,res) => {
//   res.render('add-game');
// })

//render the homepage template
router.get('/', async (req, res) => {
    
    res.render('homepage');
});

router.get('')


// ALL.HANDLEBARS
// Return all games stored (must be logged in to access)
router.get('/games', hasAuth, (req, res) => {
  //Find what's needed to populate the handlebars
  Game.findAll({
      attributes: [
          'id',
          'game_name',
          'image_url',
          'rating'
      ],
      order: [['created_at', 'DESC']],
      include: [
          {
              model: User,
              attributes: ['username']
          }
      ]
  })
  .then(dbData => {
    //Render the handlebars template 'all' w what was found ^
    const games = dbData.map(game => game.get({ plain: true}));
    res.render('all', {
      games // must be written as object
    })
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });

});


// Render specific game by game_id
// SINGLE-GAME.HANDLEBAR (Must be logged in to access)
router.get('/:id', hasAuth, (req, res) =>{
  //Find specific game data for requested game by id
  console.log(req.params.id)
  Game.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
          'game_name',
          'image_url',
          'genre',
          'game_description',
          'rating',
          'play_status'
      ],
      include: [
          {
              model: User,
              attributes: ['username']
          },
          {
              model: Comment,
              attributes: [
                'comment_id',
                'comment_text',
                'comment_username',
                'game_id',
                'created_at'
              ],
              include: {
                model: User,
                attributes: ['username']
              }
          }
      ]
  })
  .then(dbData => {

    //if game is not found, respond with error
    if (!dbData) {
      res.status(404).json({ message: 'No post found with this id, go back and try a different one!' });
    }

    // Then populate the single-game template with what was found ^
    const game = dbData.get({ plain: true});
    console.log(game)
    res.render('single-game', game) // an object 'game' is unecessary and it won't render, just pass it in
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });

});






module.exports = router;