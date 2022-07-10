'use strict'

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gig extends Model {

    static associate({ Venue, User, User_Gig }) {
      Gig.belongsTo(Venue, {
        foreignKey: "venue_id",
        as: "venue"
      })

      Gig.belongsToMany(User, {
        foreignKey: "gig_id",
        as: "user_gig",
        through: User_Gig
      })
    }
  }

  Gig.init({
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

  return Gig
}