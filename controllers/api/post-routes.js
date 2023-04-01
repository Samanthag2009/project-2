const router = require('express').Router();
const { User, Comment, Game } = require('../../models')
const hasAuth = require('../../utils/auth');


// router.post("/games", hasAuth, (req, res) => {
//     const body = req.body;
//     console.log(req.session.user_Id);
//     Game.create({ ...body, user_Id: req.session.user_Id })
//         .then(newGame => {
//             res.json(newGame);
//         })
//         .catch(err => {
//             res.status(500).json(err);
//         });
// });


//On all games page, create new comment
router.post("/:id", hasAuth, (req, res) => {
    Comment.create({
        // get the comment text/username/corresponding game id from the body, but the session denotes who is logged in
        comment_text: req.body.comment_text,
        comment_username: req.body.comment_username,
        user_id: req.session.user_id,
        game_id: req.body.game_id
    })// send data as json into template of comments (per route in home-routes)
    .then(commentData => res.json(commentData))
    .catch(err => console.log(err))
})

module.exports = router;