'use strict'
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class gig extends Model {

    static associate({ venue, user }) {
      gig.belongsTo(venue, {
        foreignKey: "venue_id",
        as: "venue"
      })

      gig.hasMany(user, {
        foreignKey: "user_id",
        as: "user"
      })
    }
  }

  gig.init({
    gig_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    start_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    venue_id: {
        type: DataTypes.SMALLINT,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Gig',
    tableName: 'gig',
    timestamps: true
  })

  return gig
}