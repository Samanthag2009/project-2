const router = require('express').Router();
const express = require('express');
const { Game, User, Comment } = require('../models');

const hasAuth = require('../utils/auth')

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


// ALL.HANDLEBARS
// Return all games stored (must be logged in to access)
router.get('/games', hasAuth, (req, res) =>{
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
                'user_id',
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

// ADD-GAME.HANDLEBARS

// NEW-USER.HANDLEBARS

// USER-PROFILE.HANDLEBARS




module.exports = router;