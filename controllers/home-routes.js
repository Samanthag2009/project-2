const router = require('express').Router();
const express = require('express');
const { Game, User, Comment } = require('../models')

//render the homepage 
router.get('/', async (req, res) => {
    
    res.render('homepage');
});

// render login / signup page
router.get('/login', (req, res) => {

  res.render('login');
});

// render new user page
router.get('/new-player', (req, res) => {

  res.render('new-user');
});


// Return all games stored
router.get('/games', (req, res) =>{
  //Find what's needed to populate the handlebars
  Game.findAll({
      attributes: [
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
      games
    })
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });

});

// THIS CURRENTLY RESPONDS W '{}'
// Render specific game by game_id
router.get('/:game_id', (req, res) =>{
  //Find specific game data for requested game by id
  Game.findOne({
      where: {
        game_id: req.params.game_id
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
          // {
          //     model: Comment,
          //     attributes: [
          //       'comment_id',
          //       'comment_text',
          //       'user_id',
          //       'game_id',
          //       'created_at'
          //     ],
          //     include: {
          //       model: User,
          //       attributes: ['username']
          //     }
          // }
      ]
  })
  .then(dbData => {
    // Then populate the single-game template with what was found ^
    const game = dbData.get({ plain: true});
    res.render('single-game', {
      game
    })
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });

});


module.exports = router;