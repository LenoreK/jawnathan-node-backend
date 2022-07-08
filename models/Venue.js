'use strict'
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class venue extends Model {

    static associate({ Gig }) {

      Gig.hasMany(Gig, {
        foreignKey: "Gig_id",
        as: "Gig"
      })
    }
  }

  venue.init({
    venue_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
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
  return venue
}