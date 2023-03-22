//require sequelize, bcrypt and connection 

const {Model, DataTypes} = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

//input class of Profile that extends Model based on Model framework
class Profile extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
      }
}

//TODO: define properties of user (placeholders below) 
// Profile.init(
//     {
//       id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//         autoIncrement: true,
//       },
//       name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true,
//         validate: {
//           isEmail: true,
//         },
//       },
//       password: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//           len: [8],
//         },
//       },
//     },
//     {
//       hooks: {
//         beforeCreate: async (newUserData) => {
//           newUserData.password = await bcrypt.hash(newUserData.password, 10);
//           return newUserData;
//         },
//       },
//       sequelize,
//       timestamps: false,
//       freezeTableName: true,
//       underscored: true,
//       modelName: 'user',
//     }
//   );

module.exports = Profile;
