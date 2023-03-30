const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

const uuid = require('uuidv4');
const { max } = require('./comment');

class Game extends Model {}

Game.init(
    {
        id: {

            type: DataTypes.INTEGER,
            autoincrement: true,
            defaultValue: 1000,
            allowNull: false,
            primaryKey: true
        },

        game_name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        image_url: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isURL: true
          } 
        },  
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

        play_status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // user_id: { // Foreign Key
        //     type: DataTypes.INTEGER, 
        //     allowNull: false,
        //     references: {
        //         model: 'user',
        //         key: 'id'
        //     }
        // }

    },
    {
     sequelize, 
     timestamps: true,
     freezeTableName: true,
     underscored: true,
     modelName: 'game',
    }
);

module.exports = Game;