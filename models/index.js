const User = require('./user');
const Game = require('./game');
const Comment = require('./comment');


User.hasMany(Game);

Game.belongsTo(User);

Comment.belongsTo(User);

Comment.belongsTo(Game);

User.hasMany(Comment);

Game.hasMany(Comment);

module.exports = { User, Game, Comment };