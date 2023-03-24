const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
const uuid = require('uuidv4');


class Game extends Model {}

Game.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true

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
    },
    {
     sequelize, 
     timestamps: false,
     freezeTableName: true,
     underscored: true,
     modelName: 'game',
    }
);

module.exports = Game;