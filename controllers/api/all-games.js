// Route to view API response for games
const router = require('express').Router();
const express = require('express');
const { Comment, Game, User } = require('../../models')
//require user authentication to see this page
const reqAuth = require('../../utils/auth');
// Return all games stored
router.get('/games', (req, res) =>{
    res.render('all')
    Game.findAll({
        attributes: [
            'game_name',
            'cover_img',
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
    .then(dbRender => res.json(dbRender))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  

});
// find one specific game
router.get('/:id', (req,res) => {
    Game.findOne({
        where: {
            id: req.params.id
        }
    })
});



// export modules
module.exports = router;