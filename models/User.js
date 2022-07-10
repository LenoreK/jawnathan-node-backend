'use strict'
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class user extends Model {
        
        static associate(models) {
            user.belongsToMany(gig, {
                foreignKey: "user_id",
                as: "user_gig"
            })
        }
      }

  user.init({
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

  return user
}