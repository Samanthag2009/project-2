// Route to view API response for games
const router = require("express").Router();
const express = require("express");
const { Comment, Game, User } = require("../../models");
//require user authentication to see this page
const hasAuth = require("../../utils/auth");

// Return all games stored in db (includes the name, cover img, & rating)
router.get("/games", hasAuth, (req, res) => {
  Game.findAll({ // retrieve desired attributes
    attributes: ["game_name", "cover_img", "rating", "likes"],
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

// find one specific game
router.get("/:id", (req, res) => {
  console.log("working");
  Game.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "game_name",
      "image_url",
      "genre",
      "game_description",
      "rating",
      "play_status",
      "likes"
    ],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
      {
        model: Comment,
        attributes: [
          "comment_id",
          "comment_text",
          "comment_username",
          "game_id",
          "created_at",
        ],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
    ],
  })
    .then((dbData) => res.json(dbData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


// find one specific game
router.get("/:id", hasAuth, (req, res) => {
  console.log("working");
  Game.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "game_name",
      "image_url",
      "genre",
      "game_description",
      "rating",
      "play_status",
      "likes"
    ],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
      {
        model: Comment,
        attributes: [
          "comment_id",
          "comment_text",
          "user_id",
          "game_id",
          "created_at",
        ],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
    ],
  })
    .then((dbData) => res.json(dbData))
    .catch((err) => {
      console.log(err);
      res.status(err).json(err);
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
