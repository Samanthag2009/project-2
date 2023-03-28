const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        comment_text: {
            type: DataTypes.TINYTEXT,// string w max length 255 char
            allowNull: false,
        },
        user_id: { // Foreign Key
            type: DataTypes.INTEGER,
            autoincrement: true, 
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        game_id: { //Foreign Key
            type: DataTypes.INTEGER,
            autoincriment: true,
            allowNull: false,
            references: {
                model: 'game',
                key: 'id'
            }
        }
    },
    {
        sequelize, 
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
)

module.exports = Comment;