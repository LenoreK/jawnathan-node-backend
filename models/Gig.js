'use strict'
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class gig extends Model {

    static associate({ Venue }) {
      Venue.belongsTo(Venue, {
        foreignKey: "Venue_id",
        as: "Venue"
      })
    }
  }

  gig.init({
    gig_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
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