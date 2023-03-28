const { Comment } = require('../models');

const commentData = [
    {
        id: '',
        comment_text: "This game was awesome to play, I swear I stayed up for three nights in a row when I first started because i didn't want to put the controller down, lol.",
        user_id: '',
        game_id: '',
    },
    {
        id: '',
        comment_text: "I don't get why people say this game was awesome to play, it was super frustrating to play and I didn't feel like any of the achievements or progress I made was rewarding enough to outweigh that.",
        user_id: '',
        game_id: '',
    },
    {
        id: '',
        comment_text: "This game was super fun to play when I was younger, but it's a bit disappointing trying to go back and play it now. I guess the novelty was a big part of why the game was so fun.",
        user_id: '',
        game_id: '',
    },
    {
        id: '',
        comment_text: "I'm surprised by your rating, I feel like most people who've played this would have given it a lot higher of a rating. It's basically a cult classic at this point, but to each their own, I guess..",
        user_id: '',
        game_id: '',
    },
    {
        id: '',
        comment_text: "I wish I could go back and play this game again for the first time. 5/5 for sure!",
        user_id: '',
        game_id: '',
    },
    {
        id: '',
        comment_text: "There was so much hype around this game and I don't understand why. The graphics lagged a lot and the plot was really repetitive.",
        user_id: '',
        game_id: '',
    },
    {
        id: '',
        comment_text: "I swear I cried at least four times playing this. The creators did not pull ANY punches when it came to the characters and the storyline. You could really tell how dedicated they were to making something with a lot of depth.",
        user_id: '',
        game_id: '',
    },
    {
        id: '',
        comment_text: "This game should definitely be the next one you start playing. I don't want to give any spoilers so I'll just say it should be a cult classic by this point, so you should play it before it becomes mainstream.",
        user_id: '',
        game_id: '',
    },
    {
        id: '',
        comment_text: "Wow, a 5/5 rating.. What did you like about this to give a 100% approval? I haven't heard much about this one.",
        user_id: '',
        game_id: '',
    },
    {
        id: '',
        comment_text: "Have you gotten to the part where Ellie and Joel get to Salt Lake City yet?? Man, you're in for a wild ride.",
        user_id: '',
        game_id: '',
    },
    {
        id: '',
        comment_text: "This game has the best soundtrack!",
        user_id: '',
        game_id: '',
    }
]

const commentSeed = () => Comment.bulkCreate(commentData);

module.exports = commentSeed;