const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

const uuid = require('uuidv4');

class Game extends Model {}

Game.init(
    {
        id: {

            type: DataTypes.INTEGER,
            autoincrement: true,
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

        genre: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        game_description: {
            type: DataTypes.STRING,
            allowNull: true,

        },

        rating: {
            type: DataTypes.INTEGER,
            allowNull: true,
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