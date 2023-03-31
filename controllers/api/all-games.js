// Route to view API response for games
const router = require("express").Router();
const express = require("express");
const { Comment, Game, User } = require("../../models");
//require user authentication to see this page
const hasAuth = require('../../utils/auth');



// Return all games stored in db (includes the name, cover img, & rating)
router.get("/games", hasAuth, (req, res) => {
  Game.findAll({ // retrieve desired attributes
    attributes: ["game_name", "cover_img", "rating"],
    order: [["created_at", "DESC"]],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })                  // sends data to front end
    .then((dbData) => res.json(dbData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


// // ADD-GAME to db
// router.post('/add-game', hasAuth, (req, res) => {
//   // each game added will have the following:
//   Game.create({
//     game_name: req.body.title,
//     image_url: req.body.image_url,
//     genre: req.body.genre,
//     game_description: req.body.game_description,
//     rating: req.body.rating,
//     play_status: req.body.play_status,
//     user_id: req.body.user_id
//   })
//   .then(dbData => res.json(dbData)) // data will be rendered into the handlebars template
//   .catch(err => {
//     console.log(err);
//     res.status(err).json(err);
//   }); 
  
// });




// export modules
module.exports = router;
