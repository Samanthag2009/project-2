const { Game } = require('../models')

const gameData = [
    {
        id: '',
        game_name: '',
        image_url: '', //or file path w need to decide how to do that
        genre: '',
        game_description: '',
        rating: '',
        play_status: ''
    },
    {
        id: '',
        game_name: '',
        image_url: '', //or file path w need to decide how to do that
        genre: '',
        game_description: '',
        rating: '',
        play_status: ''
    },
    {
        id: '',
        game_name: '',
        image_url: '', //or file path w need to decide how to do that
        genre: '',
        game_description: '',
        rating: '',
        play_status: ''
    },
    {
        id: '',
        game_name: '',
        image_url: '', //or file path w need to decide how to do that
        genre: '',
        game_description: '',
        rating: '',
        play_status: ''
    },
    {
        id: '',
        game_name: '',
        image_url: '', //or file path w need to decide how to do that
        genre: '',
        game_description: '',
        rating: '',
        play_status: ''
    },
    {
        id: '',
        game_name: '',
        image_url: '', //or file path w need to decide how to do that
        genre: '',
        game_description: '',
        rating: '',
        play_status: ''
    },
    {
        id: '',
        game_name: '',
        image_url: '', //or file path w need to decide how to do that
        genre: '',
        game_description: '',
        rating: '',
        play_status: ''
    },
    {
        id: '',
        game_name: '',
        image_url: '', //or file path w need to decide how to do that
        genre: '',
        game_description: '',
        rating: '',
        play_status: ''
    },
    {
        id: '',
        game_name: '',
        image_url: '', //or file path w need to decide how to do that
        genre: '',
        game_description: '',
        rating: '',
        play_status: ''
    },
    {
        id: '',
        game_name: '',
        image_url: '', //or file path w need to decide how to do that
        genre: '',
        game_description: '',
        rating: '',
        play_status: ''
    }
];

const gameSeed = () => Game.bulkCreate(gameData);

module.exports = gameSeed;