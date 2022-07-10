'use strict'
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Venue extends Model {

    static associate({ Gig }) {

      Venue.hasMany(Gig, {
        foreignKey: "venue_id",
        as: "venue"
      })
    }
  }

  Venue.init({
    venue_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    venue_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    venue_url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gig_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Venue',
    tableName: 'venue',
    timestamps: false
  })
  return Venue
}