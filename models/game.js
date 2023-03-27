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
            allowNull: false
        },

        //  @ COLIN - If we use a URL input instead of a file upload the dataTypes is a string & it should have a validation
        // image_url: {
        //     
        //     validate: {
        //         isURL: true
        //   }
        // },  

        // genre: {

        // },

        game_description: {
            type: DataTypes.STRING,
            allowNull: true,

        },

        rating: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },

        // play_status: {

        // },
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