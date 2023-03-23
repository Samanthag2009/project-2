const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');


class Game extends Model {}

Game.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },

        game_name: {
            type: DataTypes.STRING,
            allowNull: false,



        },

        game_description: {
            type: DataTypes.STRING,
            allowNull: true,

        },

        rating: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
    }
)

module.exports = Game;