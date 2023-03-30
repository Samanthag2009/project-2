// Route to view API response for games
const router = require("express").Router();
const express = require("express");
const { Comment, Game, User } = require("../../models");
//require user authentication to see this page

const hasAuth = require("../../utils/auth");

router.get("/games", async (req, res) => {
  res.render("all", { layout: "main" });
});

// Return all games stored
router.get("/games", (req, res) => {
  Game.findAll({
    attributes: ["game_name", "cover_img", "rating"],
    order: [["created_at", "DESC"]],
    include: [
      {
        model: User,
        attributes: ["username"],
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
      res.status(500).json(err);
    });
});

// ADD-GAME.HANDLEBARS
router.post('/add-game', hasAuth, (req, res) => {
  // each game added will have the following:
  Game.create({
    game_name: req.body.title,
    image_url: req.body.image_url,
    genre: req.body.genre,
    game_description: req.body.game_description,
    rating: req.body.rating,
    play_status: req.body.play_status,
    user_id: req.body.user_id
  })
  .then(dbData => res.json(dbData)) // data will be rendered into the handlebars template
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  }); 
  
})
  



// export modules
module.exports = router;
