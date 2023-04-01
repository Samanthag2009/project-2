const { UUIDV4 } = require('sequelize');
const { uuid } = require('uuidv4');
const { Game } = require('../models')

const gameData = [
    {
        id: 1001,
        game_name: 'Halo',
        image_url: 'https://thumbs2.imgbox.com/50/dc/1kU06KwZ_t.png', 
        genre: 'first-person shooter',
        game_description: 'Halo is a science fiction action game set in the twenty-sixth century, with the player assuming the role of the Master Chief, a cybernetically enhanced supersoldier.',
        rating: 5,
        play_status: 'Finished',
        user_id: 1,
        likes: 3
    },
    {
        id: 1002,
        game_name: 'Monster Hunter Rise',
        image_url: 'https://thumbs2.imgbox.com/f6/60/H5fSXHob_t.png', 
        genre: 'RPG',
        game_description: 'Monster Hunter Rise is an action RPG that will transport players to the colorful Kamura Village, an all-new serene mountain locale that attracts visitors with its unique culture and innovative hunting technologies.',
        rating: 5,
        play_status: 'Finished',
        user_id: 2,
        likes: 0
    },
    {
        id: 1003,
        game_name: 'Silent Hill Downpour',
        image_url: 'https://thumbs2.imgbox.com/8f/df/uL6tdVpG_t.png', 
        genre: 'Horror',
        game_description: 'Silent Hill: Downpour is a survival horror game played from the over-the-shoulder, third-person perspective, in which the player controls Murphy Pendleton, an escaped convict, as he navigates the titular supernatural town.',
        rating: 1,
        play_status: 'Finished',
        user_id: 3,
        likes: 0
    },
    {
        id: 1004,
        game_name: 'Minecraft',
        image_url: 'https://thumbs2.imgbox.com/29/e1/e0wuCnh6_t.png', 
        genre: 'Open World',
        game_description: 'In Minecraft, players explore a blocky, procedurally generated, three-dimensional world with virtually infinite terrain and may discover and extract raw materials, craft tools and items, and build structures, earthworks, and machines.',
        rating: 2,
        play_status: 'Ongoing',
        user_id: 4,
        likes: 0
    },
    {
        id: 1005,
        game_name: 'Barbie Horse Adventures',
        image_url: 'https://thumbs2.imgbox.com/0e/24/Tt5zqjJb_t.png', 
        genre: 'RPG',
        game_description: "Barbie solves the mystery of the missing horse of Barbie's friend Teresa. To do so, the player, as Barbie, has to explore the countryside, consisting of varied terrain ranging from forest to desert, while solving logic puzzles.",
        rating: null,
        play_status: 'Wishlist',
        user_id: 5,
        likes: 0
    },
    {
        id: 1006,
        game_name: 'Ship of Fools',
        image_url: 'https://thumbs2.imgbox.com/99/95/2lildRSh_t.png', 
        genre: 'Roguelite',
        game_description: 'Set sail, man the cannons and battle sea monsters through the tempestuous seas of the Archipelago. Are you fool enough to stop the Aquapocalypse?',
        rating: 4,
        play_status: 'Ongoing',
        user_id: 6,
        likes: 0
    },
    {
        id: 1007,
        game_name: 'Kingdom Hearts',
        image_url: 'https://thumbs2.imgbox.com/8f/a6/R9hYV2gE_t.png', 
        genre: 'RPG',
        game_description: 'Set in a vast array of Disney and Pixar worlds, KINGDOM HEARTS follows the journey of Sora, a young boy and unknowing heir to a spectacular power.',
        rating: 5,
        play_status: 'Finished',
        user_id: 7,
        likes: 0
    },
    {
        id: 1008,
        game_name: 'Splatoon',
        image_url: 'https://thumbs2.imgbox.com/c2/04/omoRXrMx_t.png', 
        genre: 'Third-person shooter',
        game_description: 'Ink up the. Splatlands. Enter a sun-scorched desert inhabited by battle-hardened Inklings and Octolings. Ink, dive, swim, and splat your way to the top!',
        rating: null,
        play_status: 'Wishlist',
        user_id: 8,
        likes: 0
    },
    {
        id: 1009,
        game_name: 'Umineko When They Cry',
        image_url: 'https://thumbs2.imgbox.com/92/8f/GZgu5xTB_t.png', 
        genre: 'Visual Novel',
        game_description: '"When the Seagulls Cry" is a Japanese dōjin soft visual novel series produced by 07th Expansion. Its first episode debuted at Comiket 72 for Windows in August 2007. The story focuses on a group of eighteen people on a secluded island for a period of two days, and the mysterious murders that befall them.',
        rating: 4,
        play_status: 'Ongoing',
        user_id: 9,
        likes: 0
    },
    {
        id: 1010,
        game_name: 'Pokemon Y',
        image_url: 'https://thumbs2.imgbox.com/d4/29/HXzotR1Y_t.png', 
        genre: 'RPG',
        game_description: 'This time, the games take place in the Kalos region—based on France—with the objective being to thwart the schemes of the nefarious criminal organization Team Flare, all while attempting to challenge the Pokémon League Champion.',
        rating: 5,
        play_status: 'Finished',
        user_id: 10,
        likes: 0
    },
    {
        id: 1011,
        game_name: "Dante's Inferno",
        image_url: 'https://thumbs2.imgbox.com/bb/03/7MrsJ82W_t.png',
        genre: 'RPG',
        game_description: 'A Journey of the 9 circles of Hell.',
        rating: 3,
        play_status: 'Finished',
        user_id: 10,
        likes: 0
    },
    {
        id: 1012,
        game_name: 'Super Smash Bros. Ultimate',
        image_url: 'https://thumbs2.imgbox.com/47/9f/T7WkGQlo_t.png', 
        genre: 'Multiplayer',
        game_description: 'Super Smash Bros. Ultimate is a platform fighter for up to eight players in which characters from Nintendo games and other third-party franchises must try to knock each other out of an arena.',
        rating: 5,
        play_status: 'Currently Playing',
        user_id: 1,
        likes: 0
    },
    {
        id: 1013,
        game_name: 'Mass Effect',
        image_url: 'https://thumbs2.imgbox.com/56/5e/hyJiYqx3_t.png', 
        genre: 'RPG',
        game_description: 'Mass Effect is a military science fiction media franchise. The franchise depicts a distant future where humanity and several alien civilizations have colonized the galaxy using technology left behind by advanced precursor civilizations.',
        rating: 5,
        play_status: 'Finished',
        user_id: 9,
        likes: 0
    },
    {
        id: 1014,
        game_name: 'Castlevania',
        image_url: 'https://thumbs2.imgbox.com/ed/64/IIaiyVgY_t.png', 
        genre: 'RPG',
        game_description: "Castlevania, released for the NES in 1986 is a platform game in which the player takes the role of Simon Belmont, a descendant of the Belmont clan, a family of vampire hunters. He travels to Dracula's castle, Castlevania, and fights his way through the castle annihilating Dracula himself and the castle.",
        rating: 3,
        play_status: 'Currently Playing',
        user_id: 7,
        likes: 0
    },
    {
        id: 1015,
        game_name: 'Doki Doki Literature Club!',
        image_url: 'https://thumbs2.imgbox.com/69/6a/fFNGeE75_t.png', 
        genre: 'Horror',
        game_description:'Doki Doki Literature Club! is a visual novel. As such, its gameplay has a low level of interactivity and consists of scenes with static two-dimensional images of characters in a first-person perspective, accompanied by occasional choices the player is forced to make in order to advance the plot.',
        rating: 5,
        play_status: 'Finished',
        user_id: 4,
        likes: 0
    },
    {
        id: 1016,
        game_name: 'Across the Obelisk',
        image_url: 'https://thumbs2.imgbox.com/34/c7/2S4qGEqy_t.png', 
        genre: 'Rogue-lite',
        game_description: 'Across the Obelisk is a dynamic deckbuilding rogue-lite RPG from Dreamsite Games that challenges players to create a party from a diverse set of characters, engage in tactical card-based combat, and find a unique path across a world that changes in reaction to their decisions.',
        rating: null,
        play_status: 'Wishlist',
        user_id: 2,
        likes: 0
    },
    {
        id: 1017,
        game_name: 'Dark  Souls',
        image_url: 'https://thumbs2.imgbox.com/42/3e/LcsIHTQW_t.png', 
        genre: 'RPG',
        game_description: 'A dark fantasy universe, tense dungeon crawling, fearsome enemy encounters and unique online interactions.',
        rating: null,
        play_status: 'Currently Playing',
        user_id: 10,
        likes: 0
    },
    {
        id: 1018,
        game_name: "Legend of Zelda: Majora's Mask",
        image_url: 'https://thumbs2.imgbox.com/81/54/ccVb12MZ_t.png', 
        genre: 'RPG',
        game_description: "Majora's Mask is a powerful and evil mask. Skull Kid steals it from the Happy Mask Salesman, and its power overcomes him. Once used in hexing rituals by an ancient tribe, the mask contains a seemingly sentient being that seeks to bring the Moon down on Termina in the events of the game Majora's Mask.",
        rating: 3,
        play_status: 'Finished',
        user_id: 2,
        likes: 0
    },
    {
        id: 1019,
        game_name: 'Resident Evil: 4',
        image_url: 'https://thumbs2.imgbox.com/d4/29/HXzotR1Y_t.png', 
        genre: 'RPG',
        game_description: "In resident evil 4, special agent Leon S. Kennedy is sent on a mission to rescue the U.S. President's daughter who has been kidnapped. Finding his way to a rural village in Europe, he faces new threats that are a departure from the traditional lumbering zombie enemies of the earlier instalments in the series.",
        rating: 5,
        play_status: 'Currently Playing',
        user_id: 5,
        likes: 0
    },
    {
        id: 1020,
        game_name: 'Batman: Arkham City',
        image_url: 'https://thumbs2.imgbox.com/96/e9/raNdz6PI_t.png', 
        genre: 'Action',
        game_description: 'Batman: Arkham City is an open-world action-adventure game that incorporates tactics from stealth games. It is presented from the third-person perspective, showing the playable character on screen and allowing the camera to be freely rotated around it.',
        rating: 4,
        play_status: 'Finished',
        user_id: 5,
        likes: 0
    },
    {
        id: 1021,
        game_name: 'Barotrauma',
        image_url: 'https://thumbs2.imgbox.com/ef/d3/2Sy3SfQB_t.png', 
        genre: 'Horror',
        game_description: "Barotrauma is a 2D co-op survival horror submarine simulator, inspired by games like FTL: Faster Than Light, Rimworld, Dwarf Fortress and Space Station 13. It's a Sci-Fi game that combines ragdoll physics and alien sea monsters with teamwork and existential fear.",
        rating: null,
        play_status: 'Wishlist',
        user_id: 8,
        likes: 0
    },
    {
        id: 1022,
        game_name: 'Corpse Party',
        image_url: 'https://thumbs2.imgbox.com/4b/9f/U1N5TB08_t.png', 
        genre: 'Horror',
        game_description: "After performing a charm that would supposedly unite them as friends, a group of students are teleported to the mysterious Heavenly Host Elementary School where they are visited by the spirits of the school's murdered students.",
        rating: 5,
        play_status: 'Finished',
        user_id: 1,
        likes: 0
    }
];

const gameSeed = () => Game.bulkCreate(gameData);

module.exports = gameSeed;