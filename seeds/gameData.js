const { UUIDV4 } = require('sequelize');
const { uuid } = require('uuidv4');
const { Game } = require('../models')

const gameData = [
    {
        id: UUIDV4.generate,
        game_name: 'Halo',
        image_url: '', //or file path w need to decide how to do that
        genre: 'first-person shooter',
        game_description: 'Halo is a science fiction action game set in the twenty-sixth century, with the player assuming the role of the Master Chief, a cybernetically enhanced supersoldier.',
        rating: '5',
        play_status: 'Finished'
    },
    {
        id: '',
        game_name: 'Monster Hunter Rise',
        image_url: '', //or file path w need to decide how to do that
        genre: 'RPG',
        game_description: 'Monster Hunter Rise is an action RPG that will transport players to the colorful Kamura Village, an all-new serene mountain locale that attracts visitors with its unique culture and innovative hunting technologies.',
        rating: '5',
        play_status: 'Finished'
    },
    {
        id: '',
        game_name: 'Silent Hill Downpour',
        image_url: '', //or file path w need to decide how to do that
        genre: 'Horror',
        game_description: 'Silent Hill: Downpour is a survival horror game played from the over-the-shoulder, third-person perspective, in which the player controls Murphy Pendleton, an escaped convict, as he navigates the titular supernatural town.',
        rating: '1',
        play_status: 'Finished'
    },
    {
        id: '',
        game_name: 'Minecraft',
        image_url: '', //or file path w need to decide how to do that
        genre: 'Open World',
        game_description: 'In Minecraft, players explore a blocky, procedurally generated, three-dimensional world with virtually infinite terrain and may discover and extract raw materials, craft tools and items, and build structures, earthworks, and machines.',
        rating: '',
        play_status: 'Ongoing'
    },
    {
        id: '',
        game_name: 'Barbie Horse Adventures',
        image_url: '', //or file path w need to decide how to do that
        genre: 'RPG',
        game_description: "Barbie solves the mystery of the missing horse of Barbie's friend Teresa. To do so, the player, as Barbie, has to explore the countryside, consisting of varied terrain ranging from forest to desert, while solving logic puzzles.",
        rating: '',
        play_status: 'Wishlist'
    },
    {
        id: '',
        game_name: 'Ship of Fools',
        image_url: '', //or file path w need to decide how to do that
        genre: 'Roguelite',
        game_description: 'Set sail, man the cannons and battle sea monsters through the tempestuous seas of the Archipelago. Are you fool enough to stop the Aquapocalypse?',
        rating: '4',
        play_status: 'Ongoing'
    },
    {
        id: '',
        game_name: 'Kingdom Hearts',
        image_url: '', //or file path w need to decide how to do that
        genre: 'RPG',
        game_description: 'Set in a vast array of Disney and Pixar worlds, KINGDOM HEARTS follows the journey of Sora, a young boy and unknowing heir to a spectacular power.',
        rating: '5',
        play_status: 'Finished'
    },
    {
        id: '',
        game_name: 'Splatoon',
        image_url: '', //or file path w need to decide how to do that
        genre: 'Third-person shooter',
        game_description: 'Ink up the. Splatlands. Enter a sun-scorched desert inhabited by battle-hardened Inklings and Octolings. Ink, dive, swim, and splat your way to the top!',
        rating: '',
        play_status: 'Wishlist'
    },
    {
        id: '',
        game_name: 'Umineko When They Cry',
        image_url: '', //or file path w need to decide how to do that
        genre: 'Visual Novel',
        game_description: '"When the Seagulls Cry" is a Japanese dōjin soft visual novel series produced by 07th Expansion. Its first episode debuted at Comiket 72 for Windows in August 2007. The story focuses on a group of eighteen people on a secluded island for a period of two days, and the mysterious murders that befall them.',
        rating: '4',
        play_status: 'Ongoing'
    },
    {
        id: '',
        game_name: 'Pokemon Y',
        image_url: '', //or file path w need to decide how to do that
        genre: 'RPG',
        game_description: 'This time, the games take place in the Kalos region—based on France—with the objective being to thwart the schemes of the nefarious criminal organization Team Flare, all while attempting to challenge the Pokémon League Champion.',
        rating: '5',
        play_status: 'Finished'
    }
];

const gameSeed = () => Game.bulkCreate(gameData);

module.exports = gameSeed;