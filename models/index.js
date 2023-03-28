const User = require('./user');
const Game = require('./game');
const Comment = require('./comment');


User.hasMany(Game, {
    foreignKey: 'user_id'
})

Game.belongsTo(User, {
    foreignKey: 'user_id'
})

Comment.belongsTo(User, {
    foreignKey: 'user_id'
})

Comment.belongsTo(Game, {
    foreignKey: 'user_id'
})

User.hasMany(Comment, {
    foreignKey: 'user_id'
})

Game.hasMany(Comment, {
    foreignKey: 'game_id'
})

module.exports = { User, Game, Comment };