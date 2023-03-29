const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

const uuid = require('uuidv4');
const { max } = require('./comment');

class Game extends Model {}

Game.init(
    {
        game_id: {

            type: DataTypes.INTEGER,
            autoincrement: true,
            defaultValue: 1000,
            allowNull: false,
            primaryKey: false
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

        genre: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        game_description: {
            type: DataTypes.TEXT('long'),
            allowNull: true,

        },

        rating: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
            max: 5,
            allowNull: true
        },

        // play_status: {

        // },
        user_id: { // Foreign Key
            type: DataTypes.INTEGER, 
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        }

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