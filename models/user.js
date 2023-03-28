//require sequelize, bcrypt and connection 
const {Model, DataTypes} = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
// const uuid = require('uuidv4');

//input class of User that extends Model based on Model framework
class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
      }
}

User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoincrement: true,
        allowNull: false,
        primaryKey: true
      },

      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [8],
        },
      },
    },
    {
      hooks: {
        beforeCreate: async (newUserData) => {
          newUserData.password = await bcrypt.hash(newUserData.password, 10);
          return newUserData;
        },
      },
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'user',
    }
  );

module.exports = User;
