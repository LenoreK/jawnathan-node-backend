'use strict'

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        
        static associate({ Gig, User_Gig }) {
            User.belongsToMany(Gig, {
                foreignKey: "user_id",
                as: "user_gig",
                through: User_Gig
            })
        }
      }

  User.init({
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_attending: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    is_admin: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'user',
    timestamps: true
  })

  return User
}