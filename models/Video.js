'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Video extends Model {

    static associate(models) {

    }
  }
    Video.init({
        video_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        video_url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        video_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
      }, {
        sequelize,
        modelName: 'Video',
        tableName: 'video',
        timestamps: true
      })
    
      return Video
  };